import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <MainContainer>
      <h2>MernStack Authentication</h2>
      <h4>
        {" "}
        <Link to="/login"> Login </Link>{" "}
      </h4>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default HomePage;
