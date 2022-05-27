import styled from "styled-components";

export const ContactContainer = styled.div`
    height: 550px;
    background: #fff;
    padding: 20px;
    /* display: flex;
    justify-content: center; */
    
`

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

`

export const Heading = styled.h1`

`

export const HeadingBar = styled.div`
    width: 85px;
    height: 4px;
    background: black;
    margin: 10px;
`

export const CaptionWrapper = styled.div`
    text-align: center;
    margin: 30px;
`
export const Caption = styled.h3`
    color: #f72585;
    font-weight: 600;
`

export const FormContainer = styled.div`
    max-width: 600px;
    margin:auto;
`

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

export const NameInput = styled.input`
    background: #404040;
    border: 0;
    color: #fff;
    box-sizing: border-box;
    display: block;
    font-size: 12pt;
    margin-bottom: 3px;
    outline: none;
    padding: 10px 15px;
    width: 100%;

`

export const EmailInput = styled.input`
background: #404040;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-size: 12pt;
    margin-bottom: 3px;
    outline: none;
    padding: 10px 15px;
    width: 100%;

`

export const MessageInput = styled.textarea`
    margin-bottom: 5px;
    min-height: 150px;
    background: #404040;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-size: 12pt;
    margin-bottom: 3px;
    outline: none;
    padding: 10px 15px;
    width: 100%;

`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.input`
    background: transparent;
    font-size: 12pt;
    margin: 5px 0 0 0;
    outline: 0;
    padding: 10px 30px;
    border: 2px solid #fff;
    box-sizing: inherit;
    cursor: pointer;
    display: inline-block;
    transition: all 0.5s;
    border: 1px solid black;

    &:hover{
        background: #f72585;
        color: white;
        border: 0;
    }
`