import styled from "styled-components";
import PathNavbar from "./PathNavbar";
import { LamaContext } from "../context/lamaContext.js";
import { useContext, useState } from "react";
import UploadCard from "./UploadCard.js";
import AddProjectFileModal from "./AddProjectFileModal.js";

const cards = [
  {
    id: "YOUTUBE",
    primaryText: "Upload",
    secondaryText: "Youtube Video",
    iconUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717919626/Frame_1_1_crer9p.png",
  },
  {
    id: "SPOTIFY",
    primaryText: "Upload",
    secondaryText: "Spotify Podcast",
    iconUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717920202/Frame_2_eykils.png",
  },
  {
    id: "RSS_FEED",
    primaryText: "Upload",
    secondaryText: "RSS Feed",
    iconUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717920231/image_1_oy0lgk.png",
  },
];

const UploadProject = ({
  projectName,
  projectFiles,
  setUserInfo,
  projectId,
  setFileEdit,
  setEditableFileId,
}) => {
  const [projectFileModal, setProjectFileModal] = useState(false);

  const openProjectFileModal = () => {
    setProjectFileModal(true);
  };

  const closeProjectFileModal = () => {
    setProjectFileModal(false);
  };

  const handleEdit = (id) => {
    setFileEdit(true);
    setEditableFileId(id);
  };

  const handleDelete = (id) => {
    setUserInfo((prevState) => {
      const updatedProjectList = prevState.projectList.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            projectFiles: project.projectFiles.filter((file) => file.id !== id),
          };
        }
        return project;
      });

      return {
        ...prevState,
        projectList: updatedProjectList,
      };
    });
  };

  const renderBannerStrip = () => {
    return (
      <BannerStrip>
        <p className="banner-strip-para">
          All files are processed! Your widget is ready to go!
        </p>
        <button className="try-it-out-btn">Try it out!</button>
      </BannerStrip>
    );
  };

  const renderProjectFileContainer = () => {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectFiles.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.dateTime}</td>
              <td>{row.status}</td>
              <td>
                <EditButton onClick={() => handleEdit(row.id)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(row.id)}>
                  Delete
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <PathNavbar projectName={projectName} route="Upload" />
      <UploadHeading>{projectName}</UploadHeading>
      <Cards>
        {cards.map((eachCard) => (
          <UploadCard
            small={true}
            openProjectFileModal={openProjectFileModal}
            cardDetails={eachCard}
            key={eachCard.id}
          />
        ))}
      </Cards>
      {renderBannerStrip()}
      {renderProjectFileContainer()}
      {projectFileModal && (
        <AddProjectFileModal closeProjectFileModal={closeProjectFileModal} />
      )}
    </>
  );
};

export default UploadProject;

const UploadHeading = styled.h1`
  font-size: 3rem;
  color: #7e22c3;
`;

const Cards = styled.ul`
  /* border: 2px solid red; */
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const BannerStrip = styled.div`
  width: 100%;
  background-color: #7e22ce;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 15px 30px;

  .banner-strip-para {
    font-size: 1rem;
    color: #fff;
    font-family: "Roboto";
  }

  .try-it-out-btn {
    font-family: "Roboto";
    padding: 5px;
    width: 100px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 5px 5px 0.1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Table = styled.table`
  margin-top: 30px;
  border: 1px solid #999999;
  border-radius: 10px;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1em;
  max-width: 100%;
  font-family: "Roboto";
  overflow-x: scroll;
  @media screen and (min-width: 576px) {
    font-size: 1.3rem;
  }

  thead tr {
    text-align: center;
    font-weight: bold;
    color: #3c3c3c;
  }

  th,
  td {
    padding: 12px 15px;
    text-align: center;
    color: #3c3c3c;
  }
`;

const EditButton = styled.button`
  height: 30px;
  width: 50px;
  font-size: 18px;
  margin-right: 5px;
  font-weight: bold;
  font-family: "Roboto";
  border: none;
  cursor: pointer;
  background-color: "red";
`;

const DeleteButton = styled.button`
  height: 30px;
  width: 50px;
  font-size: 18px;
  color: red;
  font-family: "Roboto";
  border: none;
  cursor: pointer;
  background-color: "#fff";
`;
