import React from 'react'
import styled from 'styled-components'
import {Icon} from '../../components/icon/Icon'
import {FlexWrapper} from '../../components/FlexWrapper'
import {theme} from "../../styles/Theme";
import { font } from '../../styles/Common';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column' align='center'>
                <Name>Svetlana</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={"21px"} viewbox={'0 0 50 50'} iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={"21px"} viewbox={'0 0 50 50'} iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={"21px"} viewbox={'0 0 50 50'} iconId={'linkedin'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={"21px"} viewbox={'0 0 50 50'} iconId={'vk'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const Name = styled.span`
${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`


const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.10);
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
`
const StyledFooter = styled.footer`
    background-color: ${theme.colors.footerColor};
    padding: 40px 0;


`

const Copyright = styled.small`
    opacity: 0.5;
    text-align: center;
    font-size: 12px;
    font-weight: 400;

`
