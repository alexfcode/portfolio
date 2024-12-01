import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

export const Contacts = () => {
  return (
    <StyledContacts>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
            <Field placeholder={"name"}></Field>
            <Field placeholder={"subject"}></Field>
            <Field placeholder={"type your message..."} as={"textarea"}></Field>
            <Button type={'submit'}>Send Message</Button> 
        </StyledForm>

    </StyledContacts>
  )
}

const StyledContacts = styled.div`
background-color: #7beb71;
min-height: 50vh;
`

const StyledForm = styled.form`
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
margin: 0 auto;


`

const Field = styled.input`

`
