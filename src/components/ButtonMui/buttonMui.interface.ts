export interface IButtonMuiProps {
  onCLickHandler: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
