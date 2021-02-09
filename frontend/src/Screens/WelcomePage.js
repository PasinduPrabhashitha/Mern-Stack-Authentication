import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userLogoutAction } from "../actions/authActions";

const WelcomePage = () => {
  const { userInformation } = useSelector((state) => state.userLogin);
  const { name, email } = userInformation;
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userLogoutAction());
    history.push("/");
  };

  useEffect(() => {
    if (!userInformation) {
      console.log(userInformation);
      history.push("/login");
    }
  }, [userInformation, history]);

  return (
    <MainContainer>
      <h3> Welcome! </h3>
      <h4> {name} </h4>
      <h5> {email} </h5>
      <p onClick={clickHandler}>Logout</p>
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

  p {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default WelcomePage;
