import styled from "styled-components";
import PathNavbar from "./PathNavbar";
import { LamaContext } from "../context/lamaContext";
import { useContext, useEffect, useState, useRef } from "react";

const Settings = () => {
  const { userInfo, setUserInfo } = useContext(LamaContext);
  const [formData, setFormData] = useState({ ...userInfo.credentials });

  useEffect(() => {
    return () => {
      console.log("leaving..", formData);
      setUserInfo((prevData) => ({
        ...prevData,
        credentials: { ...prevData.credentials, ...formData },
      }));
    };
  }, [formData]);

  // current url
  const url = new URL(window.location.href);
  const path = url.pathname;
  const projectId = path.split("/")[2];

  const activeProject = userInfo.projectList.filter(
    (eachProject) => eachProject.id === projectId
  )[0];

  const { projectName } = activeProject;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderUsernameField = () => {
    return (
      <LabelAndInputFiledWrapper>
        <Label>User Name</Label>
        <Input
          name="username"
          onChange={handleChange}
          value={formData.username}
          type="text"
        />
      </LabelAndInputFiledWrapper>
    );
  };

  const renderEmailField = () => {
    return (
      <LabelAndInputFiledWrapper>
        <Label>Email</Label>
        <Input
          title="You can't edit your email"
          disabled
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="text"
        />
      </LabelAndInputFiledWrapper>
    );
  };

  const renderBannerStrip = () => {
    return (
      <BannerStrip>
        <p className="banner-txt">
          You are currently on the Ques AI Basic Plan!
        </p>
        <button className="try-it-out-btn">Upgrade</button>
      </BannerStrip>
    );
  };

  return (
    <MainContainer>
      <PathNavbar projectName={projectName} route={"Account Settings"} />
      <MainHeading>Account Settings</MainHeading>
      <Wrapper>
        <img src="https://res.cloudinary.com/dctfbwk0m/image/upload/v1717968934/Ellipse_21_v7hdj1.png" />

        {renderUsernameField()}
        {renderEmailField()}
      </Wrapper>
      <MainHeading style={{ marginTop: "50px" }}>Subscriptions</MainHeading>
      {renderBannerStrip()}
      <p className="cancel-subs">Cancel Subscription</p>
    </MainContainer>
  );
};

export default Settings;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 25px;
  font-family: "Roboto";

  .cancel-subs {
    color: red;
    font-weight: 600;
    text-decoration: underline;
    font-size: 18px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  color: #7e22c3;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LabelAndInputFiledWrapper = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 1.5rem;
  display: block;
  font-weight: 600;
  color: #3c3c3c;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #999999;
  font-size: 1.2rem;
  padding: 10px;
  outline: none;
`;

const BannerStrip = styled.div`
  height: 80px;
  background-image: linear-gradient(to right, #7e22ce, #460282);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;

  .banner-txt {
    font-size: 1.2rem;
    color: #fff;
  }

  .try-it-out-btn {
    font-family: "Roboto";
    height: 30px;
    width: 100px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    color: #460282;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 5px 5px 0.1px rgba(0, 0, 0, 0.3);
    }
  }
`;
