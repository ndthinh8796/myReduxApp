import top10Movies from "../data/Info.json";
import citiesList from "../data/city.list.json";

const initialState = {
  movies: top10Movies,
  citiesList: citiesList,
  weather: null,
  city: "",
  userInfo: {
    name: "Continue With Facebook",
    picture:
      "https://wwctfm.com/wp-content/uploads/2017/07/facebook-logo-f-sqaure1.png",
    email: "",
    logInStatus: false
  }
};

const rootReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "CHANGE_CITY":
      newState.city = action.city;
      break;
    case "CHANGE_WEATHER":
      newState.weather = action.payload;
      break;
    case "CHANGE_PICKER_ITEMS":
      newState.citiesList = action.cities;
      break;
    case "WRITE_USER_INFO":
      newState.userInfo = {
        name: action.info.name,
        email: action.info.email,
        picture: action.info.picture.data.url,
        logInStatus: true
      };
      break;
    case "USER_LOG_OUT":
      newState.userInfo = initialState.userInfo;
      break;
  }
  return newState;
};

export default rootReducer;
