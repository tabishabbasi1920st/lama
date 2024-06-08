import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const ProjectDetails = () => {
  return (
    <MainContainer>
      <Sidebar />
    </MainContainer>
  );
};

export default ProjectDetails;

const MainContainer = styled.div`
  overflow: hidden;
`;
