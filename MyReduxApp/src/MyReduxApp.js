import React from "react";
import AppNavigator from "./screen/AppNavigator.js";
// Redux store
import rootReducer from "./modules/reducers/reducer.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const Application = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default Application;
