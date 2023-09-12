import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #202329;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const Title = styled.h3`
  color: #9e9e9e;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  width: 210px;
  text-align: center;
  margin-bottom: 35px;
`;

export const LogoWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  box-shadow: 0px 0px 40px 30px rgba(255, 255, 255, 0.10);
  margin-bottom: 35px;
`;

export const SocialLinks = styled.ul`
display: flex;
& li + li {
  margin-left: 25px;
}
`;
