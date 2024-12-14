import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../skills/Skills_Styles";
import { Container } from "../../../components/Container";


export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align="center">
                    <S.IconWrapper>
                        <Icon iconId="quote" />
                    </S.IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #cbc9f0;
    ${S.IconWrapper} {
        margin: 35px 0 60px;
    }
`


