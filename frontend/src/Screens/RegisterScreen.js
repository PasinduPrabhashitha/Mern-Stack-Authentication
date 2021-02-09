import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import ErrorDisplay from "../ErrorDispaly";
import Loading from "../Loading";
import { userRegisterAction } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterValidation } from "../validation";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error, success } = useSelector(
    (state) => state.userRegister
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateErrorMessage, SetValidateErrorMessage] = useState(null);

  useEffect(() => {
    if (success) {
      history.push("/login");
    }
  }, [history, success]);

  const FormSubmitHandler = (e) => {
    e.preventDefault();

    const validate = userRegisterValidation(name, email, password);

    const { error: validateError } = validate;

    if (!validateError) {
      dispatch(
        userRegisterAction({
          name,
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
        <Form onSubmit={FormSubmitHandler}>
          <Form.Field>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </Form.Field>
          <Button type="submit">Register </Button>
        </Form>
        {loading ? (
          <Loading />
        ) : (
          <h5>
            Existing User? <Link to="/login"> Log in! </Link>
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

export default RegisterScreen;
