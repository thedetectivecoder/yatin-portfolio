import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 730px;
    background: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 10px;
    width: 100%;

    @media screen and (max-width: 480px){
        height: 2000px ;

    }

`

export const AboutWrapper = styled.div`
`
  
export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;

export const Heading = styled.h1`
    color: #444649;
    font-size: 25pt;
    position: relative;
    position: relative;
`

export const HeadingBar = styled.div`
      background: #444649;
    height: 4px;
    margin: 25px 0 75px 0;
    width: 70px;
`;

export const SkillOuterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

   
`

export const SkillSectionWrapper = styled.div`
    margin-top: -60px;
    display: flex;
    flex-direction: row;
    width: 80%;
    max-height: 400px;
     @media screen and (max-width: 480px){
        flex-direction: column;
    align-items: center;
    }
`

export const SkillWrapper = styled.div`
    width: 300px;
    height: 270px;
    margin: 20px;
    text-align: center;
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;

`

export const Icon  = styled.img`
    width: 100px;
    height: 100px;
    overflow: hidden;
`

export const SkillHeading = styled.h3`
    margin-bottom: 10px;

`

export const SkillDetail = styled.p`
    padding: 0px 20px;
`

export const AboutMeOuterWrapper = styled.div`
`

export const AboutMeWrapper = styled.div`
    display: flex;
    margin: 0px 300px;

    @media screen and (max-width: 480px){

        margin: 600px 0px;
        flex-direction: column;
        
    }

`

export const PictureWrapper = styled.div`
    padding: 0px 30px;

    @media screen and (max-width: 480px){
        text-align: center;
    }
`

export const MyPic = styled.img`
    margin-top: 50px;
    width: 200px;
    border-radius: 50%;

`

export const AboutParaWrapper = styled.div`
`

export const AboutPara = styled.p`
    padding: 30px;
    margin-top: 50px;
    margin-left: -40px;
    text-align: center;

    @media screen and (max-width: 480px){
        padding: 0;
        margin-left: 0;
        text-align: center;
        font-size: 18px;
    }
`