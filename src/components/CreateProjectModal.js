import { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { LamaContext } from "../context/lamaContext";

const Modal = ({ closeModal }) => {
  const mainContainerRef = useRef();

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    if (mainContainerRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [errorTxt, setErrorTxt] = useState("");

  const { userInfo, setUserInfo } = useContext(LamaContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const formValidation = () => {
    if (inputValue === "") {
      setErrorTxt("Project Name Can't be empty");
      return false;
    }

    setErrorTxt("");
    return true;
  };

  const addNewProject = () => {
    const newProject = {
      id: uuidv4(),
      projectName: inputValue,
      totalEpisodes: 0,
      lastModified: "Last edited now",
      projectFiles: [],
    };

    return newProject;
  };

  const handleFormSubmit = () => {
    if (formValidation() === true) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        projectList: [...prevUserInfo.projectList, addNewProject()],
      }));

      setInputValue("");
      closeModal();
    }
  };

  const renderLabelAndInputField = () => {
    return (
      <FieldContainer>
        <CustomLabel>Enter Project Name:</CustomLabel>
        <CustomInput
          value={inputValue}
          type="text"
          placeholder="Type here"
          onChange={handleChange}
        />
      </FieldContainer>
    );
  };

  const renderCancelButton = () => {
    return (
      <CustomButton bgColor="transparent" color="red" onClick={closeModal}>
        Cancel
      </CustomButton>
    );
  };

  const renderCreateButton = () => {
    return (
      <CustomButton
        type="submit"
        bgColor="#7E22CE"
        color="#ffffff"
        onClick={handleFormSubmit}
      >
        Create
      </CustomButton>
    );
  };

  return (
    <MainContainer ref={mainContainerRef}>
      <Card>
        <h2 className="create-proj-heading">Create Project</h2>
        {renderLabelAndInputField()}
        <p className="error-txt">{errorTxt}</p>
        <ButtonsContainer>
          {renderCancelButton()}
          {renderCreateButton()}
        </ButtonsContainer>
      </Card>
    </MainContainer>
  );
};

export default Modal;

const MainContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgba(217, 217, 217, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Card = styled.div`
  height: 300px;
  width: 700px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;

  .create-proj-heading {
    font-family: "Roboto";
    font-size: 2rem;
    color: #3c3c3c;
  }

  .error-txt {
    font-size: "Roboto";
    color: red;
    font-weight: 500;
    font-size: 14px;
    margin-top: 3px;
  }
`;

const FieldContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CustomLabel = styled.label`
  display: block;
  font-family: "Roboto";
  font-size: 1.2rem;
`;

const CustomInput = styled.input`
  height: 50px;
  width: 100%;
  border: 1px solid #999999;
  border-radius: 8px;
  padding: 10px;
  font-size: 1.3rem;
  font-family: "Roboto";
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: auto;
  gap: 10px;
  justify-content: flex-end;
`;

const CustomButton = styled.button`
  border: none;
  height: 50px;
  width: 100px;
  padding: 10px 10px 10px 10px;
  border-radius: 7px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Roboto";
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
