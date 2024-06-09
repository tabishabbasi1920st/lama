import React, { useState } from "react";
import styled from "styled-components";

const ToggleSwitch = ({ formData, setFormData }) => {
  const handleToggle = () => {
    setFormData((prevData) => ({
      ...prevData,
      showSources: !prevData.showSources,
    }));
  };

  return (
    <Switch isToggled={formData.showSources} onClick={handleToggle}>
      <Slider isToggled={formData.showSources} />
    </Switch>
  );
};

export default ToggleSwitch;

const Switch = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${(props) => (props.isToggled ? "#7C4DFF" : "#ccc")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 3px;
  transition: background-color 0.2s;
`;

const Slider = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s;
  transform: ${(props) =>
    props.isToggled ? "translateX(25px)" : "translateX(0)"};
`;
