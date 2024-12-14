import { S } from './Skills_Styles';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

const SkillData = [{
    iconId: "code",
    title: "html5",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
},
{
    iconId: "css",
    title: "css3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
},
{
    iconId: "react",
    title: "React",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
},
{
    iconId: "typescript",
    title: "typescript",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
},
{
    iconId: "sc",
    title: "styled components",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
},
{
    iconId: "figma",
    title: "WEB DESIgN",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
}]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap='wrap' justify='space-between'>
                    {SkillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                            title={s.title}
                            text={s.description} />
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

