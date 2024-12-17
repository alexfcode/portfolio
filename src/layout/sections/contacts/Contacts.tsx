import React from 'react'
import {SectionTitle} from '../../../components/SectionTitle'
import {Button} from '../../../components/Button'
import {Container} from "../../../components/Container";
import { S } from './Contact_Styles';

export const Contacts : React.FC = () => {
    return (
        <S.Contacts id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}></S.Field>
                    <S.Field placeholder={"subject"}></S.Field>
                    <S.Field placeholder={"type your message..."} as={"textarea"}></S.Field>
                    <Button type={'submit'}>Send Message</Button>
                </S.Form>
            </Container>


        </S.Contacts>
    )
}




