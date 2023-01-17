import styled from "styled-components";
import { ReactComponent as LogoSVG } from "./logo.svg";

export const Header = styled.header`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-image: url("https://fieldnotesbrand.imgix.net/images/kraft-bg.jpg?auto=format&ixlib=php-3.3.1&q=55&s=6622508aa114ed6a928a8ea61fa60784"); */
  border-bottom: 1px solid #000;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px 40px;
  height: max-content;

  @media (max-content: 580px) {
    padding: 20px;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 100px;

  @media (max-width: 580px) {
    width: 80px;
  }
`;
