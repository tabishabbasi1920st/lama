import styled from "styled-components";
import PathNavbar from "./PathNavbar";
import { LamaContext } from "../context/lamaContext";
import { useContext, useState } from "react";
import AdvancedConfiguration from "./AdvancedConfiguration";
import DisplayConfiguration from "./DisplayConfiguration";
import GeneralConfiguration from "./GeneralConfiguration";

const tabsList = [
  {
    id: "GENERAL",
    name: "General",
  },
  {
    id: "DISPLAY",
    name: "Display",
  },
  {
    id: "ADVANCED",
    name: "Advanced",
  },
];

const tabsConstants = {
  general: "GENERAL",
  display: "DISPLAY",
  advanced: "ADVANCED",
};

const WidgetConfigurations = () => {
  const { userInfo, setUserInfo } = useContext(LamaContext);
  const [selectedTabId, setSelectedTabId] = useState(tabsList[0].id);

  // current url
  const url = new URL(window.location.href);
  const path = url.pathname;
  const projectId = path.split("/")[2];

  const activeProject = userInfo.projectList.filter(
    (eachProject) => eachProject.id === projectId
  )[0];

  const { projectName } = activeProject;

  const getAppropiateTabView = () => {
    switch (selectedTabId) {
      case tabsConstants.general:
        return (
          <GeneralConfiguration userInfo={userInfo} setUserInfo={setUserInfo} />
        );
      case tabsConstants.display:
        return (
          <DisplayConfiguration userInfo={userInfo} setUserInfo={setUserInfo} />
        );
      case tabsConstants.advanced:
        return <AdvancedConfiguration />;
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <PathNavbar projectName={projectName} route={"Widget Configuration"} />
      <ConfigurationHeading>Configuration</ConfigurationHeading>
      <TabContainer>
        {tabsList.map((eachTab) => (
          <TabItem
            onClick={() => setSelectedTabId(eachTab.id)}
            selected={eachTab.id === selectedTabId}
            key={eachTab.id}
          >
            {eachTab.name}
          </TabItem>
        ))}
      </TabContainer>
      {getAppropiateTabView()}
    </MainContainer>
  );
};

export default WidgetConfigurations;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 10px;
  font-family: "Roboto";

  @media screen and (min-width: 576px) {
    padding: 25px;
  }
`;

const ConfigurationHeading = styled.h1`
  font-size: 3rem;
  color: #7e22c3;
`;

const TabContainer = styled.ul`
  margin: 15px 0px 20px 0px;
  height: 50px;
  display: flex;
  gap: 25px;
`;

const TabItem = styled.li`
  height: 100%;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  border-bottom: ${({ selected }) => (selected ? "5px solid #7E22CE" : "")};
  color: ${({ selected }) => (selected ? "#7E22CE" : "#3c3c3c")};
  font-weight: 500;
  cursor: pointer;
`;
