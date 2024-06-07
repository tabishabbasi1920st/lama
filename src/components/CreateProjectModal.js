import styled from "styled-components";

const Modal = ({ closeModal }) => {
  const errorTxt = "Project Name Can't be empty";

  const renderLabelAndInputField = () => {
    return (
      <FieldContainer>
        <CustomLabel>Enter Project Name:</CustomLabel>
        <CustomInput type="text" placeholder="Type here" />
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
      <CustomButton bgColor="#7E22CE" color="#ffffff">
        Create
      </CustomButton>
    );
  };

  return (
    <MainContainer>
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
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Card = styled.div`
  height: 255px;
  width: 700px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  .create-proj-heading {
    font-family: "Roboto";
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
`;

const CustomInput = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #999999;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
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
  padding: 10px 10px 10px 10px;
  border-radius: 7px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto";
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
