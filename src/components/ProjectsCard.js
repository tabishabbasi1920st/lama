import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProjectsCard = ({ cardData }) => {
  const { id, projectName, totalEpisodes, lastModified } = cardData;

  const navigate = useNavigate();

  const getDpChars = () => {
    const projectNameTerms = projectName.split(" ");
    let dpChars = "";
    for (let x of projectNameTerms) {
      dpChars += x[0];
    }
    return dpChars.toUpperCase().slice(0, 2);
  };

  const getRandomColor = () => {
    const randomColorsList = ["#7E22CE", "#F8A01D", "#6366F1"];
    const randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2, length of the random color list.

    return randomColorsList[randomNumber];
  };

  const handleCardClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <MainContainer
      bgAndProjNameColor={getRandomColor()}
      onClick={handleCardClick}
    >
      <div className="dp-container">
        <h1 className="dp-chars" style={{ color: "#fff" }}>
          {getDpChars()}
        </h1>
      </div>
      <div className="details-container">
        <p className="project-name">{projectName}</p>
        <p className="episode-count">{totalEpisodes} Episodes</p>
        <p className="last-modified">{lastModified}</p>
      </div>
    </MainContainer>
  );
};

export default ProjectsCard;

const MainContainer = styled.li`
  display: flex;
  height: 95px;
  width: 30%;
  border: 2px solid green;
  border-radius: 10px;
  margin-bottom: 40px;
  border: 1px solid #999999;
  box-shadow: 1px 5px 5px 0.1px rgba(126, 34, 206, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 1px 5px 5px 0.1px rgba(126, 34, 206, 0.2);
  }
  padding: 5px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  @media screen and (min-width: 577px) and (max-width: 992px) {
    width: 48%;
  }

  .dp-container {
    height: 100%;
    width: 90px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgAndProjNameColor }) => bgAndProjNameColor};
  }

  .dp-chars {
    color: "#fff" !important;
    font-size: 50px;
    font-family: "Roboto";
  }

  .details-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 2px solid red; */
    flex-grow: 1;
    font-family: "Roboto";
    padding: 10px 0px 0px 10px;
  }

  .project-name {
    color: ${({ bgAndProjNameColor }) => bgAndProjNameColor};
    font-weight: 500;
    font-size: 18px;
  }

  .episode-count {
    font-size: 12px;
    color: #3c3c3c;
    margin-top: 2px;
  }

  .last-modified {
    font-size: 10px;
    margin-top: auto;
    color: #969696;
  }
`;
