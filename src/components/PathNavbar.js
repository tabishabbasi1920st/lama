import styled from "styled-components";

const PathNavbar = ({ projectName, route }) => {
  return (
    <MainContainer>
      <LeftContainer>
        <svg
          width="40"
          height="40"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.0002 13.4116L36.8335 23.1616V40.0833H32.5002V27.0833H19.5002V40.0833H15.1668V23.1616L26.0002 13.4116ZM26.0002 7.58331L4.3335 27.0833H10.8335V44.4166H23.8335V31.4166H28.1668V44.4166H41.1668V27.0833H47.6668L26.0002 7.58331Z"
            fill="#7E22CE"
          />
        </svg>

        <span className="path-span" style={{ color: "#999999" }}>
          / {projectName} &nbsp;/
        </span>
        <span className="path-span"> {route}</span>
      </LeftContainer>

      <RightContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6667 25.3333L32.0001 38.6666L45.3334 25.3333H18.6667Z"
              fill="#1E1E1E"
            />
          </svg>
          <h3>EN</h3>
        </div>
        <Img src="https://s3-alpha-sig.figma.com/img/61ba/d952/102357d8097692f48fbbb1903bb9299a?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKqNs-8UcKQJ2M2eF8iII2ezX7fFuioYy4shcVqy~PqwwpG0FSAQQiDUR9Togk9fJ3ApVQZQ3PmO~C8D5V5DEilFbHE1qTsIjskuM0kpayGobbZnRVGqEpBcx2EB6QOsP5iOUrGtEYO-bzoXb7u0C3tqnc0hB~CoT3gfoxDGn6NP1-HwL1QKgwRgUFJk-vCxX81TG5QWusOl0rcfojxfl~Wb2Ifzcx42zuO8sMmyntskRU5H4p6poZRHSHVol~mrbE~K9W~OCaO7Z78Z4hUIT8gVuB798TP3O96Au~zhzv9RcKXz8YRhcQ1spmP7Zo~yp5uhNGzU0bAvaTaPszXIZQ__" />

        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.0001 58C34.9334 58 37.3334 55.6 37.3334 52.6667H26.6667C26.6667 55.6 29.0667 58 32.0001 58ZM48.0001 42V28.6667C48.0001 20.48 43.6534 13.6267 36.0001 11.8133V10C36.0001 7.78667 34.2134 6 32.0001 6C29.7867 6 28.0001 7.78667 28.0001 10V11.8133C20.3734 13.6267 16.0001 20.4533 16.0001 28.6667V42L10.6667 47.3333V50H53.3334V47.3333L48.0001 42ZM42.6667 44.6667H21.3334V28.6667C21.3334 22.0533 25.3601 16.6667 32.0001 16.6667C38.6401 16.6667 42.6667 22.0533 42.6667 28.6667V44.6667Z"
            fill="black"
          />
        </svg>
      </RightContainer>
    </MainContainer>
  );
};

export default PathNavbar;

const MainContainer = styled.header`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .path-span {
    font-weight: 500;
    font-family: "Roboto";
    font-size: 1.5rem;
    color: #7e22ce;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
`;
