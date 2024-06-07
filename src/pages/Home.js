import styled from "styled-components";
import Navbar from "../components/Navbar";
import Modal from "../components/CreateProjectModal";
import { useState } from "react";
import BackToHomeButton from "../components/BackToHomeButton";

const bannerImgUrl =
  "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717779687/Group_16_bwhew7.png";

const Home = () => {
  const [newProjectModal, setNewProjectModal] = useState(false);

  const openModal = () => {
    setNewProjectModal(true);
  };

  const closeModal = () => {
    setNewProjectModal(false);
  };

  const renderCreateNewProjectButton = () => {
    const plusIconUrl =
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717780843/Vector_bw3yo2.png";

    return (
      <Button onClick={openModal}>
        <img className="plus-icon" src={plusIconUrl} alt="plus" />
        <span>Create New Project</span>
      </Button>
    );
  };

  return (
    <MainContainer>
      <Navbar />
      <Main>
        <BackToHomeButton />
        <h1 className="main-heading">Create a New Project</h1>
        <img className="banner-img" src={bannerImgUrl} alt={"banner"} />
        <p className="banner-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        {renderCreateNewProjectButton()}
        {newProjectModal && <Modal closeModal={closeModal} />}
      </Main>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;

  @media screen and (min-width: 1024px) {
    max-height: 100vh;
    overflow: hidden;
  }
`;

const Main = styled.main`
  padding: 10px;

  .main-heading {
    color: #7e22ce;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    text-align: center;
    margin: 10px 0px 10px 0px;
  }

  .banner-img {
    height: 40vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .banner-para {
    padding: 0px 10% 0px 10%;
    text-align: center;
    font-family: "Roboto";
    font-size: 1.5em;
    color: #838383;
  }
`;

const Button = styled.button`
  background-color: #211935;
  color: #f8f8f8;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  height: 45px;
  width: 215px;
  font-family: "Roboto";
  font-weight: 400;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: rgba(33, 25, 53, 0.95);
  }

  .plus-icon {
    height: 25px;
  }
`;
