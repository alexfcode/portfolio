import React from 'react'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap='wrap' justify='space-around'>
                    <Skill
                        iconId={"code"}
                        title={"html5"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill
                        iconId={"css"}
                        title={"css3"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "} />
                    <Skill
                        iconId={"react"}
                        title={"React"}
                        text={"Lorem ipsum dolor sit amet, consectetur "} />
                    <Skill
                        iconId={"typescript"}
                        title={"typescript"}
                        text={"Lorem ipsum dolor sit amet, consectetur "} />
                    <Skill
                        iconId={"sc"}
                        title={"styled components"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill
                        iconId={"figma"}
                        title={"WEB DESIgN"}
                        text={"Lorem ipsum dolor sit amet, consectetur "} />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`

