import styled from "styled-components";
import UploadProject from "./UploadProject";

const Project = () => {
  return (
    <MainContainer>
      <UploadProject />
    </MainContainer>
  );
};

export default Project;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  /* border: 2px solid red; */
  overflow: auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;
