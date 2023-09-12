import {
  LogoWrapper,
  SocialLinks,
  StyledFooter,
  Title,
} from './footer.styles';
import { ReactComponent as IncodeLogoSvg } from '../../assets/svg/incodeLogo.svg';
import { ReactComponent as GitHubSvg } from '../../assets/svg/githubSvg.svg';
import { ReactComponent as XSvg } from '../../assets/svg/xSvg.svg';
import { ReactComponent as HeartSvg } from '../../assets/svg/heartSvg.svg';

export const Footer = () => {
  return (
    <StyledFooter>
      <Title>performed as part of a test case for the company</Title>

      <LogoWrapper>
        <IncodeLogoSvg />
      </LogoWrapper>
      
      <SocialLinks>
        <li>
          <a href='/'>
            <GitHubSvg />
          </a>
        </li>

        <li>
          <a href='/'>
            <XSvg />
          </a>
        </li>

        <li>
          <a href='/'>
            <HeartSvg />
          </a>
        </li>
      </SocialLinks>
    </StyledFooter>
  );
};
