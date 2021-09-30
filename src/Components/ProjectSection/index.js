import React from "react";
import { ProjectContainer, ProjectWrapper, HeadingWrapper, Heading, HeadingBar,MyProjectWrapper, Project, Icon, TextWrapper, Text } from "./ProjectSectionElemets";
import HC from "../../assets/images/hackerNews.jpeg";

export const ProjectSection = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectWrapper>
          <HeadingWrapper>
            <Heading>Projects</Heading>
            <HeadingBar></HeadingBar>
          </HeadingWrapper>
          <MyProjectWrapper>
              <Project>
                <Icon src = {HC}></Icon>
                <TextWrapper>
                    <Text href="https://mbhackernews.herokuapp.com/" target='_blank'>Dummy Text</Text>
                </TextWrapper>
              </Project>
              <Project>
              <Icon src = {HC}></Icon>
              </Project>
              <Project>
              <Icon src = {HC}></Icon>
              </Project>
          </MyProjectWrapper>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};
