import {
  LoginManager,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";

export const writeUserInfo = info => {
  return {
    type: "WRITE_USER_INFO",
    info
  };
};

export const userlogOut = () => {
  return {
    type: "USER_LOG_OUT"
  };
};

export const userLogIn = () => {
  return dispatch => {
    return LoginManager.logInWithReadPermissions(["public_profile", "email"])
      .then(result => {
        if (result.isCancelled) {
          // user refuse to log in
        } else {
          //done
          const infoRequest = new GraphRequest(
            "/me",
            {
              parameters: {
                fields: {
                  string: "email,name ,picture"
                }
              }
            },
            (error, result) => {
              if (error) {
                // error
              } else {
                // success
                return dispatch(writeUserInfo(result));
              }
            }
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      })
      .catch(error => {
        // error
      });
  };
};
