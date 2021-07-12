import { NEWS_URL, CONTENT_URL } from '../config';
import { NewsFeed, NewsDetail } from '../types';

export default class Api {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  /*
  [ async ]
  - 비동기 함수로 전환
  - Promise 객체를 리턴하는 함수

  [ async, await ]
  내부적으로는 Promise 베이스로 작동하지만 코드 상으로는 동기 코드처럼 쓸 수 있다
  */
  async request<AjaxResponse>(): Promise<AjaxResponse> {
    const response = await fetch(this.url);
    return (await response.json()) as AjaxResponse;
  }
}

export class NewsFeedApi extends Api {
  constructor() {
    super(NEWS_URL);
  }

  async getData(): Promise<NewsFeed[]> {
    return this.request<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  constructor(id: string) {
    super(CONTENT_URL.replace('@id', id));
  }

  async getData(): Promise<NewsDetail> {
    return this.request<NewsDetail>();
  }
}
