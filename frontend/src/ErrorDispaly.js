import React from "react";
import { Message } from "semantic-ui-react";
import styled from "styled-components";

const ErrorDispaly = ({ children }) => {
  return (
    <>
      <MainContainer>
        <Message size="tiny" warning>
          <p>{children}</p>
        </Message>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  max-width: 20rem;
  margin: 1rem 0;
`;

export default ErrorDispaly;
