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
                  <Icon src={Engineer}></Icon>
                </IconWrapper>
                <SkillHeading>Skill</SkillHeading>
                <SkillDetail>
                  this is some line related to this skill by me one two three
                  four five six seven eight nine ten
                </SkillDetail>
              </SkillWrapper>
              <SkillWrapper>
                <IconWrapper>
                  <Icon src={Engineer}></Icon>
                </IconWrapper>
                <SkillHeading>Skill</SkillHeading>
                <SkillDetail>
                  this is some line related to this skill by me one two three
                  four five six seven eight nine ten
                </SkillDetail>
              </SkillWrapper>
              <SkillWrapper>
                <IconWrapper>
                  <Icon src={Engineer}></Icon>
                </IconWrapper>
                <SkillHeading>Skill</SkillHeading>
                <SkillDetail>
                  this is some line related to this skill by me one two three
                  four five six seven eight nine ten
                </SkillDetail>
              </SkillWrapper>
              <SkillWrapper>
                <IconWrapper>
                  <Icon src={Engineer}></Icon>
                </IconWrapper>
                <SkillHeading>Skill</SkillHeading>
                <SkillDetail>
                  this is some line related to this skill by me one two three
                  four five six seven eight nine ten
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
                    <AboutPara> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </AboutPara>
                </AboutParaWrapper>
              </AboutMeWrapper>
          </AboutMeOuterWrapper>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};
