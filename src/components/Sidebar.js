import styled from "styled-components";
import Navbar from "./Navbar";
import { useState, useContext } from "react";
import { LamaContext } from "../context/lamaContext";

const sidebarLinks = [
  {
    id: "PROJECT",
    name: "Project",
  },
  {
    id: "WIDGET_CONFIGURATION",
    name: "Widget-Configuration",
  },
  {
    id: "DEPLOYMENT",
    name: "Deployment",
  },
  {
    id: "PRICING",
    name: "Pricing",
  },
  {
    id: "SETTINGS",
    name: "Settings",
  },
];

const Sidebar = ({ children, getActiveLinkId }) => {
  const [activeLink, setActiveLink] = useState(sidebarLinks[0].id);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(LamaContext);

  const renderSettingIcon = () => {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1353_2437)">
          <rect x="4" y="4" width="40" height="40" rx="20" fill="#211935" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.31 33.03C27.21 33.71 26.59 34.25 25.85 34.25H22.15C21.41 34.25 20.79 33.71 20.7 32.98L20.43 31.09C20.16 30.95 19.9 30.8 19.64 30.63L17.84 31.35C17.14 31.61 16.37 31.32 16.03 30.7L14.2 27.53C13.85 26.87 14 26.09 14.56 25.65L16.09 24.46C16.08 24.31 16.07 24.16 16.07 24C16.07 23.85 16.08 23.69 16.09 23.54L14.57 22.35C13.98 21.9 13.83 21.09 14.2 20.47L16.05 17.28C16.39 16.66 17.16 16.38 17.84 16.65L19.65 17.38C19.91 17.21 20.17 17.06 20.43 16.92L20.7 15.01C20.79 14.31 21.41 13.76 22.14 13.76H25.84C26.58 13.76 27.2 14.3 27.29 15.03L27.56 16.92C27.83 17.06 28.09 17.21 28.35 17.38L30.15 16.66C30.86 16.4 31.63 16.69 31.97 17.31L33.81 20.49C34.17 21.15 34.01 21.93 33.45 22.37L31.93 23.56C31.94 23.71 31.95 23.86 31.95 24.02C31.95 24.18 31.94 24.33 31.93 24.48L33.45 25.67C34.01 26.12 34.17 26.9 33.82 27.53L31.96 30.75C31.62 31.37 30.85 31.65 30.16 31.38L28.36 30.66C28.1 30.83 27.84 30.98 27.58 31.12L27.31 33.03ZM22.62 32.25H25.38L25.75 29.7L26.28 29.48C26.72 29.3 27.16 29.04 27.62 28.7L28.07 28.36L30.45 29.32L31.83 26.92L29.8 25.34L29.87 24.78L29.8731 24.7531C29.902 24.5027 29.93 24.2607 29.93 24C29.93 23.73 29.9 23.47 29.87 23.22L29.8 22.66L31.83 21.08L30.44 18.68L28.05 19.64L27.6 19.29C27.18 18.97 26.73 18.71 26.27 18.52L25.75 18.3L25.38 15.75H22.62L22.25 18.3L21.72 18.51C21.28 18.7 20.84 18.95 20.38 19.3L19.93 19.63L17.55 18.68L16.16 21.07L18.19 22.65L18.12 23.21C18.09 23.47 18.06 23.74 18.06 24C18.06 24.26 18.08 24.53 18.12 24.78L18.19 25.34L16.16 26.92L17.54 29.32L19.93 28.36L20.38 28.71C20.81 29.04 21.24 29.29 21.71 29.48L22.24 29.7L22.62 32.25ZM27.5 24C27.5 25.933 25.933 27.5 24 27.5C22.067 27.5 20.5 25.933 20.5 24C20.5 22.067 22.067 20.5 24 20.5C25.933 20.5 27.5 22.067 27.5 24Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1353_2437">
            <rect x="4" y="4" width="40" height="40" rx="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const isDisabled = (linkId) => {
    if (linkId == "DEPLOYMENT" || linkId === "PRICING") {
      return true;
    }

    return false;
  };

  return (
    <MainContainer>
      <SidebarContainer isOpen={isSidebarOpen}>
        <Navbar />
        <LinksContainer>
          {sidebarLinks.map((eachLink, index) => (
            <CustomNavLink
              key={eachLink.id}
              activeClassName={eachLink.id === activeLink}
              disabled={isDisabled(eachLink.id)}
              onClick={() => {
                setActiveLink(eachLink.id);
                getActiveLinkId(eachLink.id);
              }}
            >
              {index + 1 === sidebarLinks.length ? (
                renderSettingIcon()
              ) : (
                <div className="serial-no-div">{index + 1}</div>
              )}
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
  overflow: hidden;
  width: 100%;
  display: flex;
`;

const SidebarContainer = styled.div`
  height: 100vh;
  min-width: 100vw;
  background-color: #f3e8ff;
  padding: 0px 5px 0px 5px;
  display: flex;
  flex-direction: column;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: ${({ isOpen }) => (isOpen ? "absolute" : "static")};

  @media screen and (min-width: 1024px) {
    min-width: 350px;
    position: static;
  }
`;

const MainSection = styled.main`
  max-height: 100vh;
  overflow: hidden;
  flex-grow: 1;
`;

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-grow: 1;
  padding-bottom: 10px;
  height: 90vh;

  & > button:last-child {
    margin-top: auto;
  }
`;

const CustomNavLink = styled.button`
  display: flex;
  border: none;
  height: 50px;
  gap: 15px;
  align-items: center;
  font-family: "Roboto";
  font-weight: 400;
  border-radius: 20px;
  padding: 7px;
  background-color: ${({ activeClassName }) => activeClassName && "#7E22CE"};
  cursor: pointer;
  font-size: 1.3rem;

  &:hover {
    background-color: ${({ activeClassName }) =>
      activeClassName ? "#7E22CE" : "#e2d8ee"};
  }

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
