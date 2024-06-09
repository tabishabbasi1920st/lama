import styled from "styled-components";

const plusIconUrl =
  "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717780843/Vector_bw3yo2.png";

const CreateNewProjectButton = ({ openModal }) => {
  return (
    <Button onClick={openModal}>
      <img className="plus-icon" src={plusIconUrl} alt="plus" />
      <span>Create New Project</span>
    </Button>
  );
};

export default CreateNewProjectButton;

const Button = styled.button`
  background-color: #211935;
  color: #f8f8f8;
  display: block;
  margin-top: 20px;
  height: 50px;
  width: 250px;
  font-family: "Roboto";
  font-weight: 400;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(33, 25, 53, 0.95);
  }

  .plus-icon {
    height: 25px;
  }
`;
