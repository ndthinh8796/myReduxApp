import React from "react";
import { CitiesSearchScreen } from "./CitiesSearchScreen.js";
import { connect } from "react-redux";
import { mapSearchToCities } from "../../../modules/actions/actions.js";

const CitiesSearch = ({ onChangeText }) => {
  return <CitiesSearchScreen onChangeText={onChangeText} />;
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeText: text => {
      dispatch(mapSearchToCities(text));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CitiesSearch);
