import { HeaderTag, HeaderTitle } from './header.styles';
import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg';

export const Header = () => {
  return (
    <HeaderTag className='container'>
      <a href='/'>
        <LogoSvg />
      </a>
      <HeaderTitle>The Rick and Morty API</HeaderTitle>
    </HeaderTag>
  );
};
