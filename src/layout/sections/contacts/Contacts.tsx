import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../../components/SectionTitle'
import {Button} from '../../../components/Button'
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}></Field>
                    <Field placeholder={"subject"}></Field>
                    <Field placeholder={"type your message..."} as={"textarea"}></Field>
                    <Button type={'submit'}>Send Message</Button>
                </StyledForm>
            </Container>


        </StyledContacts>
    )
}

const StyledContacts = styled.section`

`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
    align-items: center;
    
    textarea {
        resize: none;
        height: 155px;
    }


`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    padding: 7px 15px;

    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
    
    color: ${theme.colors.font};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`


