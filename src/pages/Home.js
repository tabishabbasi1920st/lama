import styled from "styled-components";
import Navbar from "../components/Navbar";
import Modal from "../components/CreateProjectModal";
import { useRef, useState } from "react";
import BackToHomeButton from "../components/BackToHomeButton";
import CreateNewProjectButton from "../components/CreateNewProjectButton";

const bannerImgUrl =
  "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717779687/Group_16_bwhew7.png";

const Home = () => {
  const [newProjectModal, setNewProjectModal] = useState(false);
  const mainContainerRef = useRef();

  const openModal = () => {
    setNewProjectModal(true);
  };

  const closeModal = () => {
    setNewProjectModal(false);
  };

  return (
    <MainContainer ref={mainContainerRef}>
      <Navbar showLinks={true} />
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
        <div className="new-project-btn-container">
          <CreateNewProjectButton openModal={openModal} />
          {newProjectModal && (
            <Modal closeModal={closeModal} parentContRef={mainContainerRef} />
          )}
        </div>
      </Main>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
`;

const Main = styled.main`
  padding: 10px 10% 10px 10%;

  .main-heading {
    color: #7e22ce;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    text-align: center;
    margin: 10px 0px 10px 0px;
  }

  .banner-img {
    width: 80vw;
    max-width: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .banner-para {
    padding: 0px 10% 0px 10%;
    text-align: center;
    font-family: "Roboto";
    font-size: 1.3em;
    color: #838383;
  }

  .new-project-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
