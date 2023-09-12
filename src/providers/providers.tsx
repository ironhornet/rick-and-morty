import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';

export const providers = [
  BrowserRouter,
  (props: any) => <Provider store={store}>{props.children}</Provider>, // eslint-disable-line
];
