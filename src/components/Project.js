import styled from "styled-components";
import UploadProject from "./UploadProject";
import UploadProjectWithFile from "./UploadProjectWithFile";
import EditTranscript from "./EditTranscript";
import { LamaContext } from "../context/lamaContext";
import { useContext, useState } from "react";

const Project = () => {
  const { userInfo, setUserInfo } = useContext(LamaContext);
  const [fileEdit, setFileEdit] = useState(false);
  const [EditableFileId, setEditableFileId] = useState("");

  // current url
  const url = new URL(window.location.href);
  const path = url.pathname;
  const projectId = path.split("/")[2];

  const activeProject = userInfo.projectList.filter(
    (eachProject) => eachProject.id === projectId
  )[0];

  const { projectName } = activeProject;

  const renderAppropriateView = () => {
    const projectFiles = activeProject.projectFiles;
    if (activeProject.projectFiles.length === 0) {
      return <UploadProject projectName={projectName} />;
    } else if (activeProject.projectFiles.length !== 0 && fileEdit) {
      return (
        <EditTranscript
          projectName={projectName}
          projectFiles={projectFiles}
          EditableFileId={EditableFileId}
          setFileEdit={setFileEdit}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          projectId={projectId}
        />
      );
    } else {
      return (
        <UploadProjectWithFile
          projectName={projectName}
          projectFiles={projectFiles}
          setUserInfo={setUserInfo}
          projectId={projectId}
          setFileEdit={setFileEdit}
          setEditableFileId={setEditableFileId}
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
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    padding: 25px;
  }
`;
