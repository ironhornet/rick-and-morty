import { Drawer } from '@mui/material';
import { ButtonMui } from '../ButtonMui/ButtonMui';
import { IDrawerMuiProps } from './drawerMui.interface';

export const DrawerMui = (props: IDrawerMuiProps) => {
  const { isOpen, onClose, children } = props;

  return (
    <Drawer
      anchor='right'
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        style: {
          width: '400px', 
          height: '600px',
          padding: '20px',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      {children}
      <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
        <ButtonMui text='Close' onCLickHandler={onClose} />
      </div>
    </Drawer>
  );
};
