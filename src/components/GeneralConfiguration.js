import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const inputFieldList = [
  {
    id: "CHATBOT_NAME",
    label: "Chatbot Name",
    name: "chatbotName",
    type: "text",
  },
  {
    id: "WELCOME_MESSAGE",
    label: "Welcome Message",
    name: "welcomeMessage",
    type: "text",
  },
  {
    id: "INPUT_PLACEHOLDER",
    label: "Input Placeholder",
    name: "inputPlaceholder",
    type: "text",
  },
];

const GeneralConfiguration = ({ userInfo, setUserInfo }) => {
  const [formData, setFormData] = useState({
    ...userInfo.generalConfiguration,
  });

  // to keep track of previous and latest changes in fields.
  const formDataRef = useRef(formData);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  useEffect(() => {
    return () => {
      const { chatbotName, welcomeMessage, inputPlaceholder } =
        formDataRef.current;

      setUserInfo((prevInfo) => ({
        ...prevInfo,
        generalConfiguration: {
          ...prevInfo.generalConfiguration,
          chatbotName,
          welcomeMessage,
          inputPlaceholder,
        },
      }));
    };
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  console.log(">>>>>>',", formData);

  return (
    <MainContainer>
      {inputFieldList.map((eachField) => (
        <FiledWrapper>
          <Label>{eachField.label}</Label>
          <Input
            value={formData[eachField.name]}
            name={eachField.name}
            type={eachField.type}
            onChange={handleChange}
          />
          <RandomTxt>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</RandomTxt>
        </FiledWrapper>
      ))}
    </MainContainer>
  );
};

export default GeneralConfiguration;

const MainContainer = styled.div`
  /* border: 2px solid red; */
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FiledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: block;
  font-size: 22px;
  color: #3c3c3c;
  font-weight: 600;
`;

const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #999999;
  outline: none;
  padding: 10px;
  font-size: 20px;
`;

const RandomTxt = styled.p`
  font-weight: 500;
  color: #646464;
`;
