import styled from "styled-components";

const Deployment = () => {
  return (
    <MainContainer>
      <h1 className="deployment-heading">Deployment</h1>
    </MainContainer>
  );
};

export default Deployment;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 25px;

  .deployment-heading {
    color: #3c3c3c;
  }
`;
