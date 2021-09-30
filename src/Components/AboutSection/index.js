import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  HeadingWrapper,
  Heading,
  HeadingBar,
  SkillOuterWrapper,
  SkillSectionWrapper,
  SkillWrapper,
  IconWrapper,
  Icon,
  SkillHeading,
  SkillDetail,
  AboutMeOuterWrapper,
  AboutMeWrapper,
  PictureWrapper,
  MyPic,
  AboutParaWrapper,
  AboutPara
} from "./AboutSectionElements";

import Engineer from "../../assets/images/engineer.png";
import ProfilePic from "../../assets/images/profPic.jpeg";
import Device from "../../assets/images/device.png"
import Speed from "../../assets/images/speedometer.png"
import Idea from "../../assets/images/idea.png";
import Trust from "../../assets/images/trusted.png"

export const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <HeadingWrapper>
            <Heading>ABOUT</Heading>
            <HeadingBar></HeadingBar>
          </HeadingWrapper>
          <SkillOuterWrapper>
            <SkillSectionWrapper>
              <SkillWrapper>
                <IconWrapper>
                <Icon src={Device}></Icon>
                </IconWrapper>
                <SkillHeading>Responsive</SkillHeading>
                <SkillDetail>
                  Layouts by me will work on all devices
                </SkillDetail>
              </SkillWrapper>
              <SkillWrapper>
                <IconWrapper>
                  <Icon src={Speed}></Icon>
                </IconWrapper>
                <SkillHeading>Fast</SkillHeading>
                <SkillDetail>
                  My Websites are fast and lag free and dynamic
                </SkillDetail>
              </SkillWrapper>
              <SkillWrapper>
                <IconWrapper>
                  <Icon src={Idea}></Icon>
                </IconWrapper>
                <SkillHeading>Intuitive</SkillHeading>
                <SkillDetail>
                  Layouts by me are intuitive and easy to understand
                </SkillDetail>
              </SkillWrapper>
              <SkillWrapper>
                <IconWrapper>
                  <Icon src={Trust}></Icon>
                </IconWrapper>
                <SkillHeading>Reliable </SkillHeading>
                <SkillDetail>
                  My websites are secure and reliable 
                </SkillDetail>
              </SkillWrapper>
            </SkillSectionWrapper>
          </SkillOuterWrapper>
          <AboutMeOuterWrapper>
              <AboutMeWrapper>
                <PictureWrapper>
                    <MyPic src={ProfilePic}></MyPic>
                </PictureWrapper>
                <AboutParaWrapper>
                    <AboutPara> 
                      I am a full-stack developer and a Post-grad student of Lambton College, Mississauga. I have
                      worked as a developer in a fin-tech start-up in Bangalore, India. I have passion for software 
                      development, datastructures, algorithms and design. 
                    </AboutPara>
                </AboutParaWrapper>
              </AboutMeWrapper>
          </AboutMeOuterWrapper>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};
