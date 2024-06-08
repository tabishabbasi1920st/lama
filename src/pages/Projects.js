import styled from "styled-components";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import BackToHomeButton from "../components/BackToHomeButton";
import CreateProjectModal from "../components/CreateProjectModal";
import CreateNewProjectButton from "../components/CreateNewProjectButton";
import { v4 as uuidv4 } from "uuid";
import ProjectsCard from "../components/ProjectsCard";

const projects = [
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
  {
    id: uuidv4(),
    projectName: "Sample Project",
    totalEpisodes: 4,
    lastModified: "Last edited a week ago",
  },
];

const Projects = () => {
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
      <Navbar />
      <Main>
        <BackToHomeButton />
        <TopContainer>
          <h1 className="projects-heading">Projects</h1>
          <CreateNewProjectButton openModal={openModal} />
          {newProjectModal && (
            <CreateProjectModal
              parentContRef={mainContainerRef}
              closeModal={closeModal}
            />
          )}
        </TopContainer>
        <ProjectsContainer>
          {projects.map((eachObj) => (
            <ProjectsCard cardData={eachObj} key={eachObj.id} />
          ))}
        </ProjectsContainer>
      </Main>
    </MainContainer>
  );
};

export default Projects;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  padding: 10px 10% 10px 10%;

  .projects-heading {
    color: #7e22ce;
    font-family: "Roboto";
    margin-top: 20px;
    font-size: 40px;
  }
`;

const TopContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const ProjectsContainer = styled.ul`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
