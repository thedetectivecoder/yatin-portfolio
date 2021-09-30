import React from 'react'
import { ContactContainer, Heading, HeadingBar, HeadingWrapper,CaptionWrapper, Caption, FormContainer, FormWrapper, NameInput, EmailInput, MessageInput,ButtonWrapper, Button } from './ContactSectionElements'

export const ContactSection = () => {
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
                <FormWrapper>
                    <NameInput type="text" placeholder='Name'>
                    </NameInput>
                    <EmailInput type="email" placeholder="Email">
                    </EmailInput>
                    <MessageInput type="text" placeholder="Your Message"></MessageInput>
                    <ButtonWrapper>
                    <Button type="button" value="SUBMIT"></Button>
                    </ButtonWrapper>
                </FormWrapper>
                </FormContainer>
            </ContactContainer>
        </>
    )
}
