import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 700px;
  background: #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media screen and (max-width: 480px){
    height: 1500px;
  }
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
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 480px){
    flex-direction: column;
  }
`;

export const Project = styled.div`
  padding: 10px;
  position: relative;

`;

export const Icon = styled.img`
  object-fit: cover;
  width: 350px;
  height: 350px;

  ${Project}:hover & {
    opacity: 0.3;
  }

  @media screen and (max-width: 480px){
    width:250px;
    height: 250px;
  }
`;

export const TextWrapper = styled.div`
  font-size: 10px;
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
  font-size: 13px;
  padding: 16px 32px;
`
