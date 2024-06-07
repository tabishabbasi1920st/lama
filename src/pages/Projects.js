import styled from "styled-components";
import Navbar from "../components/Navbar";
import BackToHomeButton from "../components/BackToHomeButton";

const Projects = () => {
  return (
    <MainContainer>
      <Navbar />
      <Main>
        <BackToHomeButton />
      </Main>
    </MainContainer>
  );
};

export default Projects;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Main = styled.main`
  padding: 10px;
`;
