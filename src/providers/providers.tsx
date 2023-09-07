import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';
import { ComponentType } from 'react';

type ProviderType = [ComponentType<any>, any]; 

export const providers: ProviderType[] = [
  [BrowserRouter, {}],
  [Provider, { store }]
];