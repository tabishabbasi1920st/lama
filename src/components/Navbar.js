import styled from "styled-components";
import { Link } from "react-router-dom";

const logoUrl =
  "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717774516/directright_evbeu5.png";

const navLinks = [
  {
    id: "SETTINGS",
    route: "/settings",
    iconUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717775096/Icon_1_joejtk.png",
  },
  {
    id: "NOTIFICATION",
    route: "/notification",
    iconUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1717775179/notifications_fkjzkr.png",
  },
];

const Navbar = ({ showLinks }) => {
  const getLinkItem = (link) => {
    const { id, route, iconUrl } = link;
    return (
      <Link key={id} to={route}>
        <li>
          <LinkIcon src={iconUrl} alt={id} />
        </li>
      </Link>
    );
  };

  return (
    <MainContainer>
      <LogoImg src={logoUrl} alt="logo" />
      <LogoTxt>LAMA.</LogoTxt>
      {showLinks && (
        <LinksContainer>
          {navLinks.map((eachLink) => getLinkItem(eachLink))}
        </LinksContainer>
      )}
    </MainContainer>
  );
};

export default Navbar;

const MainContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
`;

const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 5px;
`;

const LogoTxt = styled.h1`
  color: #7e22ce;
  font-family: "Plus Jakarta sans";
`;

const LinksContainer = styled.ul`
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LinkIcon = styled.img`
  height: 35px;
  width: 35px;
`;
