import styled from "styled-components";
import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  const homeIconUrl =
    "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717777341/home_1_xnwme8.png";
  return (
    <Link to={"/"}>
      <BackToHomeBtn>
        <img className="home-icon" src={homeIconUrl} alt={"home icon"} />
        <span>Back to Home</span>
      </BackToHomeBtn>
    </Link>
  );
};

export default BackToHomeButton;

const BackToHomeBtn = styled.button`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 3px 15px 3px 15px;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
  color: #3c3c3c;
  border: 0.75px solid #999999;
  font-weight: 500;
  font-size: 16px;
  background: #ffffff;
  box-shadow: 1px 5px 5px 0.1px rgba(126, 34, 206, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 1px 5px 5px 0.1px rgba(126, 34, 206, 0.2);
  }

  .home-icon {
    height: 25px;
    width: 25px;
  }
`;
