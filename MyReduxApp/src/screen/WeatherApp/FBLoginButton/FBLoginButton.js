import React from "react";
import { FBLoginButtonScreen } from "./FBLoginButtonScreen.js";
import { connect } from "react-redux";
import { userLogIn, userlogOut } from "../../../modules/actions/actions.js";

const FBLoginButton = ({ name, picture, logIn, logOut, logInStatus }) => {
  return (
    <FBLoginButtonScreen
      name={name}
      picture={picture}
      logIn={logIn}
      logOut={logOut}
      logInStatus={logInStatus}
    />
  );
};

const mapStateToProps = state => {
  return {
    name: state.userInfo.name,
    picture: state.userInfo.picture,
    logInStatus: state.userInfo.logInStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(userLogIn()),
    logOut: () => dispatch(userlogOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FBLoginButton);
