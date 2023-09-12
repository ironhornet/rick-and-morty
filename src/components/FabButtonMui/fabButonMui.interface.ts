import { ReactNode } from 'react';

export interface IFabButtonMuiProps {
  icon: ReactNode;
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  disabled?: boolean;
}
