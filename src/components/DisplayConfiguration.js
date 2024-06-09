import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";

const x = {
  primaryColor: "",
  fontColor: "",
  fontSize: "",
  chatHeight: "",
  showSources: true,
  chatIconSize: "",
  positionOnScreen: "",
  distanceFromBottom: "",
  horizontalDistance: "",
};

const DisplayConfiguration = ({ userInfo, setUserInfo }) => {
  const [formData, setFormData] = useState({
    ...userInfo.displayConfiguration,
  });

  const formDataRef = useRef(formData);
  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  useEffect(() => {
    return () => {
      const {
        primaryColor,
        fontColor,
        fontSize,
        chatHeight,
        showSources,
        chatIconSize,
        positionOnScreen,
        distanceFromBottom,
        horizontalDistance,
      } = formDataRef.current;
      setUserInfo((prevData) => ({
        ...prevData,
        displayConfiguration: {
          ...prevData.displayConfiguration,
          primaryColor,
          fontColor,
          fontSize,
          chatHeight,
          showSources,
          chatIconSize,
          positionOnScreen,
          distanceFromBottom,
          horizontalDistance,
        },
      }));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderFirstSection = () => {
    return (
      <FirstSection>
        <FieldWrapper>
          <Label>Primary Color</Label>
          <div className="inside-wrapper">
            <Input
              name="primaryColor"
              onChange={handleChange}
              width={"80%"}
              type="text"
              value={formData.primaryColor}
            />
            <SampleColorPallete bgColor={formData.primaryColor} />
          </div>
          <RandomTxt>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</RandomTxt>
        </FieldWrapper>
        <FieldWrapper>
          <Label>Font Color</Label>
          <div className="inside-wrapper">
            <Input
              name="fontColor"
              onChange={handleChange}
              width={"80%"}
              type="text"
              value={formData.fontColor}
            />
            <SampleColorPallete bgColor={formData.fontColor} />
          </div>
          <RandomTxt>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</RandomTxt>
        </FieldWrapper>

        <FieldWrapper>
          <Label>Font Size (in px)</Label>
          <div className="inside-wrapper">
            <Input
              name="fontSize"
              onChange={handleChange}
              type="text"
              value={formData.fontSize}
            />
          </div>
          <RandomTxt>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</RandomTxt>
        </FieldWrapper>

        <FieldWrapper>
          <Label>Chat Height (in % of total screen)</Label>
          <div className="inside-wrapper">
            <Input
              name="chatHeight"
              onChange={handleChange}
              type="text"
              value={formData.chatHeight}
            />
          </div>
          <RandomTxt>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</RandomTxt>
        </FieldWrapper>

        <ToggleContainer>
          <div className="inside-wrapper">
            <Label>Show Sources</Label>
            <RandomTxt>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</RandomTxt>
          </div>
          <ToggleSwitch setFormData={setFormData} formData={formData} />
        </ToggleContainer>
      </FirstSection>
    );
  };

  const renderchatIconSizeSelector = () => {
    return (
      <ChatIconSizeSelector>
        <Label htmlFor="chatIcon">Chat Icon Size</Label>
        <select
          className="chat-icon-size-select"
          name="chatIconSize"
          id="chatIcon"
          value={formData.chatIconSize}
          onChange={handleChange}
        >
          <option value="">Small (48x48 px)</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </ChatIconSizeSelector>
    );
  };

  const renderPositionOnScreenSelector = () => {
    return (
      <ChatIconSizeSelector>
        <Label htmlFor="positionOnScreen">Position on Screen</Label>
        <select
          className="chat-icon-size-select"
          id="positionOnScreen"
          name="positionOnScreen"
          value={formData.positionOnScreen}
          onChange={handleChange}
        >
          <option value="">Bottom Right</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </ChatIconSizeSelector>
    );
  };

  const renderSecondSection = () => {
    return (
      <SecondSection>
        {renderchatIconSizeSelector()}
        {renderPositionOnScreenSelector()}
        <FieldWrapper>
          <Label>Distance from Bottom (in px)</Label>
          <div className="inside-wrapper">
            <Input
              name="distanceFromBottom"
              onChange={handleChange}
              type="text"
              value={formData.distanceFromBottom}
            />
          </div>
        </FieldWrapper>
        <FieldWrapper>
          <Label>Horizontal Distance (in px)</Label>
          <div className="inside-wrapper">
            <Input
              name="horizontalDistance"
              onChange={handleChange}
              type="text"
              value={formData.horizontalDistance}
            />
          </div>
        </FieldWrapper>
      </SecondSection>
    );
  };

  const renderBotIconContainer = () => {
    return (
      <BotContainer>
        <BotDp></BotDp>
        <div>
          <UploadImageButton>Upload Image</UploadImageButton>
          <p className="recommended-txt">Recommended Size: 48x48px</p>
        </div>
      </BotContainer>
    );
  };

  return (
    <MainContainer>
      {renderFirstSection()}
      <h1 className="chat-icon-heading">Chat Icon</h1>
      {renderSecondSection()}
      <h1 className="bot-icon-heading">Bot Icon</h1>
      {renderBotIconContainer()}
    </MainContainer>
  );
};

export default DisplayConfiguration;

const SecondSection = styled.div`
  min-height: 50%;
  /* border: 2px solid green; */
  display: flex;
  flex-wrap: wrap;
`;

const MainContainer = styled.div`
  /* border: 2px solid red; */
  font-family: "Roboto";

  .chat-icon-heading {
    font-size: 1.3rem;
    font-family: "Roboto";
    color: #7e22ce;
    margin: 25px 0px;
  }

  .bot-icon-heading {
    font-size: 1.3rem;
    font-weight: 600;
    color: #3c3c3c;
  }
`;

const FirstSection = styled.div`
  min-height: 50%;
  border-bottom: 2px solid #dadada;
  padding-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
`;

const SampleColorPallete = styled.div`
  height: 100%;
  width: 50px;
  background-color: ${({ bgColor }) => bgColor};
  margin-left: 20px;
  border-radius: 5px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  width: 50%;
  /* border: 2px solid red; */

  @media screen and (max-width: 1124px) {
    min-width: 100%;
  }

  .inside-wrapper {
    display: flex;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 22px;
  color: #3c3c3c;
  font-weight: 600;
`;

const Input = styled.input`
  width: ${({ width }) => (width ? width : "92%")};
  height: 40px;
  border-radius: 5px;
  border: 1px solid #999999;
  outline: none;
  padding: 10px;
  font-size: 20px;
  color: #3c3c3c;

  @media screen and (max-width: 1125px) {
    width: 100%;
  }
`;

const RandomTxt = styled.p`
  font-weight: 400;
  color: #646464;
`;

const ToggleContainer = styled.div`
  width: 100%;
  padding: 10px 0px 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatIconSizeSelector = styled.div`
  height: 80px;
  /* border: 2px solid red; */
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
  cursor: pointer;

  .chat-icon-size-select {
    cursor: pointer;
    width: 92%;
    height: 40px;
    border-radius: 5px;
    font-family: "Roboto";
    font-size: 16px;
    border: 1px solid #999999;
    @media screen and (max-width: 1125px) {
      width: 98%;
    }
  }
`;

const BotContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;

  .recommended-txt {
    font-size: 14px;
    margin-top: 5px;
    color: #3c3c3c;
  }
`;

const BotDp = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const UploadImageButton = styled.button`
  height: 50px;
  width: 150px;
  font-size: 1.1rem;
  font-family: "Roboto";
  background-color: #7e22ce;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
`;
