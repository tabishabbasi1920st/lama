import styled from "styled-components";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    id: "PROJECTS",
    name: "Projects",
  },
  {
    id: "WIDGET_CONFIGURATION",
    name: "Widget Configuration",
  },
  {
    id: "DEPLOYMENT",
    name: "Deployment",
  },
  {
    id: "PRICING",
    name: "Pricing",
  },
];

const Sidebar = ({ children }) => {
  const getPath = () => {
    const url = new URL(window.location.href);
    const path = url.pathname;

    return `/${path.split("/")[1]}`;
  };

  getPath();

  return (
    <MainContainer>
      <SidebarContainer>
        <Navbar />
        <LinksContainer>
          {sidebarLinks.map((eachLink, index) => (
            <CustomNavLink
              to={getPath()}
              key={eachLink.id}
              activeClassName={
                eachLink.name.toLowerCase() === getPath().slice(1)
              }
            >
              <div className="serial-no-div">{index + 1}</div>
              <p className="link-name">{eachLink.name}</p>
            </CustomNavLink>
          ))}
        </LinksContainer>
      </SidebarContainer>
      <MainSection>{children}</MainSection>
    </MainContainer>
  );
};

export default Sidebar;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const SidebarContainer = styled.div`
  max-width: 300px;
  min-width: 300px;
  height: 100vh;
  background-color: #f3e8ff;
  padding: 0px 5px 0px 5px;
`;

const MainSection = styled.main`
  max-height: 100vh;
  overflow: auto;
  flex-grow: 1;
`;

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CustomNavLink = styled(NavLink)`
  display: flex;
  height: 50px;
  gap: 10px;
  align-items: center;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  border-radius: 20px;
  padding: 7px;
  background-color: ${({ activeClassName }) => activeClassName && "#7E22CE"};

  .serial-no-div {
    background-color: ${({ activeClassName }) =>
      activeClassName ? "#211935" : "#d8cfe4"};
    height: 100%;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ activeClassName }) => (activeClassName ? "#fff" : "#3C3C3C")};
  }

  .link-name {
    color: ${({ activeClassName }) => (activeClassName ? "#fff" : "#49454F")};
  }
`;
