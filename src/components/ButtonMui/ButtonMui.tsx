import { Button } from '@mui/material';
import { IButtonMuiProps } from './buttonMui.interface';

export const ButtonMui = (props: IButtonMuiProps) => {
  const { 
    onCLickHandler, 
    text, 
    type = 'button', 
    disabled = false,
  } = props;

  return (
    <Button
      disabled={disabled}
      variant='contained'
      onClick={onCLickHandler}
      type={type}
      sx={{
        backgroundColor: '#F5F5F5',
        color: '#272B33',
        height: 40,
        '&.Mui-disabled': {
          background: '#eaeaea',
          color: '#c0c0c0',
        },
        '&:hover': {
          backgroundColor: '#F5F5F5',
        },
      }}
    >
      {text}
    </Button>
  );
};
