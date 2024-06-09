import styled from "styled-components";
import UploadProject from "./UploadProject";
import UploadProjectWithFile from "./UploadProjectWithFile";
import { LamaContext } from "../context/lamaContext";
import { useContext, useState } from "react";

const Project = () => {
  const { userInfo } = useContext(LamaContext);

  // current url
  const url = new URL(window.location.href);
  const path = url.pathname;
  const projectId = path.split("/")[2];

  console.log("......projectid", projectId);
  console.log("......user info", userInfo);

  const activeProject = userInfo.projectList.filter(
    (eachProject) => eachProject.id === projectId
  )[0];

  const { projectName } = activeProject;

  const renderAppropriateView = () => {
    if (activeProject.projectFiles.length === 0) {
      return <UploadProject projectName={projectName} />;
    } else {
      const projectFiles = activeProject.projectFiles;
      return (
        <UploadProjectWithFile
          projectName={projectName}
          projectFiles={projectFiles}
        />
      );
    }
  };

  return <MainContainer>{renderAppropriateView()}</MainContainer>;
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
