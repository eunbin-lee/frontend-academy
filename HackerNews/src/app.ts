import Router from './core/router';
import { NewsFeedView, NewsDetailView } from './page';
import { Store } from './types';

const store: Store = {
  currentPage: 1,
  feeds: [],
};

declare global {
  interface Window {
    store: Store;
  }
}

window.store = store; // 전역 객체에 store 속성을 추가

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);

router.route();
