import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contact_Styles";
import emailjs from "@emailjs/browser";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_r2m8fas", "template_q75gzv1", form.current, {
        publicKey: "H18oFrh86VNcGeril",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset();
  };
  return (
    <S.Contacts id="contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={"name"} name={"username"}></S.Field>
          <S.Field required placeholder={"email"} name={"email"}></S.Field>
          <S.Field required placeholder={"subject"} name={"subject"}></S.Field>
          <S.Field
            placeholder={"type your message..."}
            as={"textarea"}
            name={"message"}
          ></S.Field>
          <Button type={"submit"}>Send Message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
