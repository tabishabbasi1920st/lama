import { useEffect } from "react";
import styled from "styled-components";

const AddProjectFileModal = ({ closeProjectFileModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  });

  return (
    <MainContainer>
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 className="upload-from-heading">Upload from Youtube</h1>
          <CloseButton onClick={() => closeProjectFileModal()}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0001 20.6165L4.34173 33.2748C3.86812 33.7484 3.26534 33.9852 2.5334 33.9852C1.80145 33.9852 1.19868 33.7484 0.725064 33.2748C0.251453 32.8012 0.0146484 32.1984 0.0146484 31.4665C0.0146484 30.7345 0.251453 30.1318 0.725064 29.6582L13.3834 16.9998L0.725064 4.34149C0.251453 3.86788 0.0146484 3.2651 0.0146484 2.53315C0.0146484 1.80121 0.251453 1.19843 0.725064 0.72482C1.19868 0.251209 1.80145 0.0144043 2.5334 0.0144043C3.26534 0.0144043 3.86812 0.251209 4.34173 0.72482L17.0001 13.3832L29.6584 0.72482C30.132 0.251209 30.7348 0.0144043 31.4667 0.0144043C32.1987 0.0144043 32.8015 0.251209 33.2751 0.72482C33.7487 1.19843 33.9855 1.80121 33.9855 2.53315C33.9855 3.2651 33.7487 3.86788 33.2751 4.34149L20.6167 16.9998L33.2751 29.6582C33.7487 30.1318 33.9855 30.7345 33.9855 31.4665C33.9855 32.1984 33.7487 32.8012 33.2751 33.2748C32.8015 33.7484 32.1987 33.9852 31.4667 33.9852C30.7348 33.9852 30.132 33.7484 29.6584 33.2748L17.0001 20.6165Z"
                fill="#3C3C3C"
              />
            </svg>
          </CloseButton>
        </div>
        <Wrapper>
          <Label>Name</Label>
          <Input />
        </Wrapper>
        <Wrapper>
          <Label>Description</Label>
          <Input />
        </Wrapper>
        <Button>Save</Button>
      </Card>
    </MainContainer>
  );
};

export default AddProjectFileModal;

const MainContainer = styled.div`
  font-family: "Roboto";
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
  height: 350px;
  width: 800px;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .upload-from-heading {
    color: #3c3c3c;
    font-size: 1.7rem;
  }
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  height: 50px;
  width: 125px;
  border: none;
  font-size: 1.2rem;
  margin-top: auto;
  margin-left: auto;
  border-radius: 5px;
  color: #fff;
  background-color: #211935;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: #3c3c3c;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #3c3c3c;
`;
