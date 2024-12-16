import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.footerColor};
  padding: 40px 0;
`;

const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })}
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  height: 35px;
  width: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;


const Copyright = styled.small`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;

export const S = {
  Copyright,
  Footer,
  SocialLink,
  SocialItem,
  SocialList,
  Name,
};
