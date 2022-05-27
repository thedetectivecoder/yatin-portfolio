import React, { useRef }from 'react'
import { ContactContainer, Heading, HeadingBar, HeadingWrapper,CaptionWrapper, Caption, FormContainer, FormWrapper, NameInput, EmailInput, MessageInput,ButtonWrapper, Button } from './ContactSectionElements'
import emailjs from '@emailjs/browser';
require('dotenv').config()

export const ContactSection = () => {

    const form = useRef(); 
    const sendEmail = (e) => {
        // debugger;
//         YOUR_SERVICE_ID=service_kxjqz7j
// YOUR_TEMPLATE_ID=template_1fiaf0h
// YOUR_PUBLIC_KEY=zhspGukYm2gPsUA50

        e.preventDefault();
        console.log(form.currentY)
        emailjs.sendForm('service_kxjqz7j','template_1fiaf0h', form.current,'zhspGukYm2gPsUA50')
          .then((result) => {
              window.alert("Message Sent Successfully")
              console.log(result.text);
          }, (error) => {
            window.alert("Error! Please try again")
              console.log(error.text);
          });
      };

    return (
        <>
            <ContactContainer id="contact">
                <HeadingWrapper>
                    <Heading>Contact Me</Heading>
                    <HeadingBar></HeadingBar>
                </HeadingWrapper>
                <CaptionWrapper>
                    <Caption>
                        Have a question or want to work together?
                    </Caption>
                </CaptionWrapper>
                <FormContainer>
                <FormWrapper ref={form} onSubmit={sendEmail}>
                    <NameInput type="text" placeholder='Name' name='user_name'>
                    </NameInput>
                    <EmailInput type="email" placeholder="Email" name='user_email'>
                    </EmailInput>
                    <MessageInput type="text" placeholder="Your Message" name = 'user_msg'></MessageInput>
                    <ButtonWrapper>
                    <Button type="submit" value="SUBMIT"></Button>
                    </ButtonWrapper>
                </FormWrapper>
                </FormContainer>
            </ContactContainer>
        </>
    )
}
