import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Loading = () => (
  <>
    <MainDiv>
      <Loader type="MutatingDots" color="#00BFFF" width={100} />
    </MainDiv>
  </>
);

const MainDiv = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
