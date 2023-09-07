import { 
  ComponentType, 
  ReactNode,
} from 'react';

export interface IWithChildren {
  children?: ReactNode;
}

export interface IComposeProviders<P> {
  children: ReactNode;
  providers: [ComponentType<P>, P][];
}
