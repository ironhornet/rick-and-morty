import { ReactNode } from 'react';

export interface IDrawerMuiProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
