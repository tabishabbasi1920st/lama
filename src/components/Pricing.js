import styled from "styled-components";

const Pricing = () => {
  return (
    <MainContainer>
      <h1 className="pricing-heading">Pricing</h1>
    </MainContainer>
  );
};

export default Pricing;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 25px;

  .pricing-heading {
    color: #3c3c3c;
  }
`;
