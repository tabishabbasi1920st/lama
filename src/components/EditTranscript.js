import styled from "styled-components";
import PathNavbar from "./PathNavbar";
import { useState } from "react";

const UploadProject = ({
  projectName,
  projectFiles,
  EditableFileId,
  setFileEdit,
  userInfo,
  setUserInfo,
  projectId,
}) => {
  const editableFileObj = projectFiles.filter(
    (eachFile) => eachFile.id === EditableFileId
  )[0];

  const [edit, setEdit] = useState(true);
  const [inputValue, setInputValue] = useState(editableFileObj.description);

  const handleSaveAndExit = () => {
    setUserInfo((prevState) => {
      const updatedProjectList = prevState.projectList.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            projectFiles: project.projectFiles.map((file) => {
              if (file.id === EditableFileId) {
                return {
                  ...file,
                  description: (file.description = inputValue),
                };
              }
            }),
          };
        }
        return project;
      });

      return {
        ...prevState,
        projectList: updatedProjectList,
      };
    });

    setFileEdit(false);
  };

  const handleDiscard = () => {
    setEdit(true)
  };

  const handleTextAreaChange = (e) => {
    setInputValue(e.target.value);
  };

  const renderSaveButton = () => {
    return (
      <CustomButton onClick={handleSaveAndExit} bgColor={"#211935"}>
        Save & exit
      </CustomButton>
    );
  };

  const renderDiscardButton = () => {
    return (
      <CustomButton onClick={handleDiscard} border={true} color={"#ff274c"}>
        Discard
      </CustomButton>
    );
  };

  return (
    <>
      <PathNavbar projectName={projectName} route="Transcript" />
      <HeadingAndButtonContainer>
        <EditTranscriptHeading>Edit Transcript</EditTranscriptHeading>
        {!edit && (
          <div className="btns-container">
            {renderDiscardButton()}
            {renderSaveButton()}
          </div>
        )}
      </HeadingAndButtonContainer>
      <Wrapper>
        <LensAndEditBtnContainer>
          <EditTextButton onClick={() => setEdit(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0588 9.02L14.9788 9.94L5.91878 19H4.99878V18.08L14.0588 9.02ZM17.6588 3C17.4088 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3ZM14.0588 6.19L2.99878 17.25V21H6.74878L17.8088 9.94L14.0588 6.19Z"
                fill="white"
              />
            </svg>
            Edit mode
          </EditTextButton>
          <LensButton>
            <svg
              width="30"
              height="30"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6631 19.6006H20.5769L20.1919 19.2294C21.5394 17.6619 22.3506 15.6269 22.3506 13.4131C22.3506 8.4769 18.3494 4.47565 13.4131 4.47565C8.4769 4.47565 4.47565 8.4769 4.47565 13.4131C4.47565 18.3494 8.4769 22.3506 13.4131 22.3506C15.6269 22.3506 17.6619 21.5394 19.2294 20.1919L19.6006 20.5769V21.6631L26.4756 28.5244L28.5244 26.4756L21.6631 19.6006ZM13.4131 19.6006C9.9894 19.6006 7.22565 16.8369 7.22565 13.4131C7.22565 9.9894 9.9894 7.22565 13.4131 7.22565C16.8369 7.22565 19.6006 9.9894 19.6006 13.4131C19.6006 16.8369 16.8369 19.6006 13.4131 19.6006Z"
                fill="#7E22CE"
              />
            </svg>
          </LensButton>
        </LensAndEditBtnContainer>

        <p className="speaker-txt">Speaker</p>
        <TextArea
          onChange={handleTextAreaChange}
          disabled={edit}
          value={inputValue}
        />
      </Wrapper>
    </>
  );
};

export default UploadProject;

const EditTranscriptHeading = styled.h1`
  font-size: 3rem;
  color: #7e22c3;
`;

const HeadingAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btns-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 10px;
  /* gap: 10px; */
  border: 2.1px solid #7e22ce;
  border-radius: 10px;

  .speaker-txt {
    font-family: "Roboto";
    font-size: 20px;
    margin-top: 10px;
    color: #7e22ce;
    font-weight: bold;
  }
`;

const LensButton = styled.button`
  border-radius: 50%;
  padding: 3px;
  border: 3px solid #7e22ce;
  cursor: pointer;
`;

const LensAndEditBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditTextButton = styled.button`
  width: 115px;
  padding: 0px 5px 0px 5px;
  height: 35px;
  font-family: "Roboto";
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: #3c3c3c;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  border: none;
  height: 100%;
  outline: none;
  padding: 3px 10px 10px 0px;
  font-size: 1.2rem;
  font-family: "Roboto";
  word-wrap: break-word;
  line-height: 1.5;
`;

const CustomButton = styled.button`
  height: 50px;
  border-radius: 5px;
  color: ${({ color }) => (color ? color : "white")};
  width: 150px;
  border: ${({ border }) => (border ? "2px solid #ff274c" : "none")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  font-size: 20px;
  font-family: "Roboto";
  font-weight: 500;
  cursor: pointer;
`;
