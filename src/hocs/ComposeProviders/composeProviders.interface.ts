import { JSXElementConstructor, PropsWithChildren, ReactNode } from 'react';

export interface IComposeProviders {
  providers: Array<
    JSXElementConstructor<PropsWithChildren<unknown>>
  >;
  children: ReactNode;
}
