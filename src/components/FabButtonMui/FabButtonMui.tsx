import { Fab } from '@mui/material';
import { IFabButtonMuiProps } from './fabButonMui.interface';

export const FabButtonMui = (props: IFabButtonMuiProps) => {
  const { 
    icon, 
    size, 
    onClick, 
    disabled, 
  } = props;

  return (
    <Fab color='primary' aria-label='more' size={size} onClick={onClick} disabled={disabled}>
      {icon}
    </Fab>
  );
};
