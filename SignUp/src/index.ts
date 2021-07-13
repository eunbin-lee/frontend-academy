import { AnyObject } from './types';
import App from './app';

declare global {
  interface Window {
    Handlebars: {
      compile: (template: string) => (data: AnyObject) => string;
    };
  }
}

const app = new App('#root', {
  title: 'Sign up',
});

app.render();
