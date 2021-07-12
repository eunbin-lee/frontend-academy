import View from '../core/view';
import { NewsFeedApi } from '../core/api';
import { NewsFeed, NewsStore } from '../types';
import { NEWS_URL } from '../config';

const template = `
      <div class="bg-gray-600 min-h-screen">
        <div class="bg-white text-xl">
          <div class="mx-auto px-4">
            <div class="flex justify-between items-center py-6">
              <div class="flex justify-start">
                <h1 class="font-extrabold">Hacker News</h1>
              </div>
              <div class="items-center justify-end">
                <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                  Previous
                </a>
                <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                  Next
                </a>
              </div>
            </div> 
          </div>
        </div>
        <div class="p-4 text-2xl text-gray-700">
          {{__news_feed__}}        
        </div>
      </div>
    `;

export default class NewsFeedView extends View {
  private api: NewsFeedApi;
  private store: NewsStore;

  constructor(containerId: string, store: NewsStore) {
    super(containerId, template);

    this.store = store;
    this.api = new NewsFeedApi(NEWS_URL);
  }

  /*
  router가 render 함수를 호출할 때 생성자에서 호출했던
  데이터의 응답이 처리됐다는 보장이 없기 때문에 (호출 순서: 생성자 → api)
  생성자에서 호출하던 api를 render로 옮겨줘야 한다
  */
  render = (page: string = '1'): void => {
    this.store.currentPage = Number(page);

    if (!this.store.hasFeeds) {
      this.api.getDataWithPromise((feeds: NewsFeed[]) => {
        this.store.setFeeds(feeds);
        this.renderView();
      });
    }

    this.renderView();
  };

  /*
  [ UI 업데이트 코드(for문)를 함수로 분리시켜야 하는 이유 ]
  1. 위의 getData에 전달한 함수도 콜백 함수이므로 처리 여부와 상관없이 for문이 실행되고
     html을 만들어내는 코드에 필요한 데이터가 없기 때문에 작동하지 못한다
  2. 페이징을 할 때는 api 호출을 하지 않기 때문에 for문을 콜백 함수 안에 넣어도 작동하지 못한다
  */

  renderView = () => {
    for (
      let i = (this.store.currentPage - 1) * 10;
      i < this.store.currentPage * 10;
      i++
    ) {
      const { id, title, comments_count, user, points, time_ago, read } =
        this.store.getFeed(i);
      this.addHtml(`
          <div class="p-6 ${
            read ? 'bg-red-500' : 'bg-white'
          } mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
            <div class="flex">
              <div class="flex-auto">
                <a href="#/show/${id}">${title}</a>  
              </div>
              <div class="text-center text-sm">
                <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${comments_count}</div>
              </div>
            </div>
            <div class="flex mt-3">
              <div class="grid grid-cols-3 text-sm text-gray-500">
                <div><i class="fas fa-user mr-1"></i>${user}</div>
                <div><i class="fas fa-heart mr-1"></i>${points}</div>
                <div><i class="far fa-clock mr-1"></i>${time_ago}</div>
              </div>  
            </div>
          </div>
      `);
    }

    this.setTemplateData('news_feed', this.getHtml());
    this.setTemplateData('prev_page', String(this.store.prevPage));
    this.setTemplateData('next_page', String(this.store.nextPage));

    this.updateView();
  };
}
