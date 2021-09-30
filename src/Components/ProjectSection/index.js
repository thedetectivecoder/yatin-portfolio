import React from "react";
import { ProjectContainer, ProjectWrapper, HeadingWrapper, Heading, HeadingBar,MyProjectWrapper, Project, Icon, TextWrapper, Text } from "./ProjectSectionElemets";
import HC from "../../assets/images/hackerNews.jpeg";
import ChildrenHappy from "../../assets/images/childrenHappy.jpeg"
import Mathitude from "../../assets/images/mathitude.jpeg"

export const ProjectSection = () => {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectWrapper>
          <HeadingWrapper>
            <Heading>Projects</Heading>
            <HeadingBar></HeadingBar>
          </HeadingWrapper>
          <MyProjectWrapper>
              <Project>
                <Icon src = {HC}></Icon>
                <TextWrapper>
                    <Text href="https://mbhackernews.herokuapp.com/" target='_blank'>Hacker News Clone</Text>
                </TextWrapper>
              </Project>
              <Project>
              <Icon src = {ChildrenHappy}></Icon>
              <TextWrapper>
                    <Text href="https://educate-every-child.netlify.app/" target='_blank'>Educate Every Child</Text>
                </TextWrapper>
              </Project>
              <Project>
              <Icon src = {Mathitude}></Icon>
              <TextWrapper>
                    <Text href="https://pi-mathitude.herokuapp.com/" target='_blank'>Pi-Mathitude</Text>
                </TextWrapper>
              </Project>
          </MyProjectWrapper>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};
