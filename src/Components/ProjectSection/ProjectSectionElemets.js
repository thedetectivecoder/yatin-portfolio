import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 840px;
  background: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const ProjectWrapper = styled.div``;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Heading = styled.h1``;

export const HeadingBar = styled.div`
  width: 85px;
  height: 4px;
  background: black;
  margin: 10px;
`;

export const MyProjectWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Project = styled.div`
  border: 1px solid blue;
  padding: 10px;
  position: relative;

`;

export const Icon = styled.img`
  width: 400px;
  height: 400px;

  ${Project}:hover & {
    opacity: 0.3;
  }
`;

export const TextWrapper = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  ${Project}:hover &{
      opacity: 1;
  }
`;

export const Text = styled.a`
  text-decoration: none;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 16px 32px;
`
