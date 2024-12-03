import React from 'react'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkils>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap='wrap' justify='space-around'>
                <Skill 
                iconId={"code"} 
                title={"html5"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill 
                iconId={"css"} 
                title={"css3"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "}/>
                <Skill 
                iconId={"react"} 
                title={"React"} 
                text={"Lorem ipsum dolor sit amet, consectetur "}/>
                <Skill 
                iconId={"typescript"} 
                title={"typescript"} 
                text={"Lorem ipsum dolor sit amet, consectetur "}/>
                <Skill 
                iconId={"sc"} 
                title={"styled components"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill 
                iconId={"figma"} 
                title={"WEB DESIgN"} 
                text={"Lorem ipsum dolor sit amet, consectetur "}/>
            </FlexWrapper>
        </StyledSkils>
    );
};

const StyledSkils = styled.section`
    background-color: #bbf0eb;
    min-height: 100vh;
`

