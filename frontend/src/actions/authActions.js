import axios from "axios";

const userRegisterAction = (userDetails) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/register",
      userDetails,
      config
    );

    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

const userLoginAction = (userDetails) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users/login", userDetails, config);

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

const userLogoutAction = () => async (dispatch) => {
  dispatch({
    type: "USER_LOGOUT",
  });
};

export { userRegisterAction, userLoginAction, userLogoutAction };
