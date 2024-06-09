import React from "react";
import styled from "styled-components";

const UploadCard = ({
  cardDetails,
  openProjectFileModal
}) => {
  const { iconUrl, primaryText, secondaryText } = cardDetails;

  const handleCardClick = () => {
    openProjectFileModal();
  };

  return (
    <MainContainer onClick={handleCardClick}>
      <Dp>
        <DpImg src={iconUrl} />
      </Dp>
      <Details>
        <CustomTxt>{primaryText}</CustomTxt>
        <CustomTxt>{secondaryText}</CustomTxt>
      </Details>
    </MainContainer>
  );
};

export default UploadCard;

const MainContainer = styled.li`
  border: 2px solid blue;
  border-radius: 10px;
  height: 125px;
  width: 30%;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 20px;
  font-family: "Roboto";
  border: 1px solid #999999;
  margin-bottom: 20px;

  box-shadow: 1px 5px 5px 0.1px rgba(126, 34, 206, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 1px 5px 5px 0.1px rgba(126, 34, 206, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 48%;
  }
`;

const Dp = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DpImg = styled.img`
  height: 100%;
  width: 100%;
`;

const Details = styled.div`
  /* border: 2px solid red; */
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const CustomTxt = styled.p`
  color: #3c3c3c;
  font-weight: 600;
  font-size: 1.4em;
`;
