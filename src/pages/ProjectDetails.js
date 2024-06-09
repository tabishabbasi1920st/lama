import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Deployment from "../components/Deployment";
import Pricing from "../components/Pricing";
import WidgetConfigurations from "../components/WidgetConfigurations";
import Settings from "../components/Settings";
import Project from "../components/Project";
import { useState } from "react";

const sidebarLinksConstants = {
  project: "PROJECT",
  widgetConfiguration: "WIDGET_CONFIGURATION",
  deployment: "DEPLOYMENT",
  pricing: "PRICING",
};

const ProjectDetails = () => {
  const [activeLink, setActiveLink] = useState(sidebarLinksConstants.project);

  const getActiveLinkId = (id) => {
    setActiveLink(id);
  };

  const getAppropriateComponent = () => {
    switch (activeLink) {
      case sidebarLinksConstants.widgetConfiguration:
        return <WidgetConfigurations />;
      case sidebarLinksConstants.deployment:
        return <Deployment />;
      case sidebarLinksConstants.pricing:
        return <Pricing />;
      case sidebarLinksConstants:
        return <Settings />;
      default:
        return <Project />;
    }
  };

  return (
    <MainContainer>
      <Sidebar getActiveLinkId={getActiveLinkId}>
        {getAppropriateComponent()}
      </Sidebar>
    </MainContainer>
  );
};

export default ProjectDetails;

const MainContainer = styled.div`
  border: 2px solid hidden;
  &::-webkit-scrollbar{
    display: none;
  }
`;
