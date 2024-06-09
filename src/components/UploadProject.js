import styled from "styled-components";
import PathNavbar from "./PathNavbar";
import { useState } from "react";
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
  {
    id: "YOUTUBE1",
    primaryText: "Upload",
    secondaryText: "Youtube Video",
    iconUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717919626/Frame_1_1_crer9p.png",
  },
  {
    id: "SPOTIFY1",
    primaryText: "Upload",
    secondaryText: "Spotify Podcast",
    iconUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717920202/Frame_2_eykils.png",
  },
  {
    id: "RSS_FEED1",
    primaryText: "Upload",
    secondaryText: "RSS Feed",
    iconUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717920231/image_1_oy0lgk.png",
  },
];

const UploadProject = ({ projectName }) => {
  const [projectFileModal, setProjectFileModal] = useState(false);

  const openProjectFileModal = () => {
    setProjectFileModal(true);
  };

  const closeProjectFileModal = () => {
    setProjectFileModal(false);
  };

  return (
    <>
      <PathNavbar projectName={projectName} route="Upload" />
      <UploadHeading>Upload</UploadHeading>
      <Cards>
        {cards.map((eachCard) => (
          <UploadCard
            openProjectFileModal={openProjectFileModal}
            cardDetails={eachCard}
            key={eachCard.id}
          />
        ))}
      </Cards>
      <DraggableContainer>
        <img
          className="upload-img"
          src="https://res.cloudinary.com/dctfbwk0m/image/upload/v1717921465/cloud_upload_u0vvap.png"
        />
        <p className="upload-img-para">
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className="formats">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
      </DraggableContainer>
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

const DraggableContainer = styled.div`
  border: 3px dashed #999999;
  border-radius: 10px;
  flex-grow: 1;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 70px 0px 25px 0px;
  gap: 5px;
  cursor: pointer;
  padding: 10px;

  .upload-img {
    height: 40%;
  }

  .upload-img-para {
    color: #49454f;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
  }

  .formats {
    text-align: center;
    color: #999999;
    font-size: 1.2rem;
  }
`;
