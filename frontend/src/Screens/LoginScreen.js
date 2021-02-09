import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Grid } from "semantic-ui-react";
import Loading from "../Loading";
import ErrorDisplay from "../ErrorDispaly";
import { userLoginAction } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { userLoginValidation } from "../validation";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateErrorMessage, SetValidateErrorMessage] = useState(null);

  const { loading, error, success } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (success) {
      history.push("/welcome");
    }
  }, [success]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const validate = userLoginValidation(email, password);
    const { error: validateError } = validate;

    if (!validateError) {
      dispatch(
        userLoginAction({
          email,
          password,
        })
      );
    } else {
      SetValidateErrorMessage(validate.error.message);
    }
  };

  return (
    <>
      <MainContainer>
        <h5> Mern Stack Authentication </h5>
        {error && <ErrorDisplay> {error} </ErrorDisplay>}
        {validateErrorMessage && (
          <ErrorDisplay> {validateErrorMessage} </ErrorDisplay>
        )}
        <Form onSubmit={formSubmitHandler}>
          <Form.Field>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Field>
          <Button type="submit">Login</Button>
        </Form>

        {loading ? (
          <Loading />
        ) : (
          <h5>
            New User? <Link to="/register"> Sign up! </Link>
          </h5>
        )}
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input[type="text"] {
    width: 150px;
  }

  form {
    min-width: 20rem;
  }
`;

export default LoginScreen;
