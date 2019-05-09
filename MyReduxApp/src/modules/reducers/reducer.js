import top10Movies from "../data/Info.json";
import citiesList from "../data/city.list.json";

const initialState = {
  movies: top10Movies,
  citiesList: citiesList,
  weather: null,
  city: "",
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
  }
  return newState;
};

export default rootReducer;
