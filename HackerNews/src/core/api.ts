import { NewsFeed, NewsDetail } from '../types';

export default class Api {
  ajax: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.ajax = new XMLHttpRequest();
    this.url = url;
  }

  /* 
  [ api 연동 비동기 처리하기: ajax.addEventListener('load', () => {}) ]
  UI쪽에서 getData를 호출했을 때 getData의 반환값으로 넘겨줄 
  JSON.parse 객체가 없기 때문에 getRequest가 콜백함수(cb)를 인자로 받아서 전달한다
  */
  getRequest<AjaxResponse>(cb: (data: AjaxResponse) => void): void {
    this.ajax.open('GET', this.url);
    this.ajax.addEventListener('load', () => {
      cb(JSON.parse(this.ajax.response) as AjaxResponse);
    });

    this.ajax.send();
  }
}

export class NewsFeedApi extends Api {
  constructor(url: string) {
    super(url);
  }

  // view에서 콜백을 인자로 받아서 getRequest로 넘겨준다
  getData(cb: (data: NewsFeed[]) => void): void {
    return this.getRequest<NewsFeed[]>(cb);
  }
}

export class NewsDetailApi extends Api {
  constructor(url: string) {
    super(url);
  }

  getData(cb: (data: NewsDetail) => void): void {
    return this.getRequest<NewsDetail>(cb);
  }
}
