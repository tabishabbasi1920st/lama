import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const WidgetConfigurations = () => {
  return (
    <MainContainer>
      <Sidebar>widget</Sidebar>
    </MainContainer>
  );
};

export default WidgetConfigurations;

const MainContainer = styled.div`
  overflow: hidden;
`;
