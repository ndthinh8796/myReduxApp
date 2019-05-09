import { getMatchedCities } from "../getMatchedCities.js";

export const changeCity = city => {
  return {
    type: "CHANGE_CITY",
    city
  };
};

export const changePickerItems = cities => {
  return {
    type: "CHANGE_PICKER_ITEMS",
    cities
  };
};

export const changeWeather = payload => {
  return {
    type: "CHANGE_WEATHER",
    payload
  };
};

export const changeCityAndWeather = city => {
  return dispatch => {
    dispatch(getWeatherInfo(city));
    dispatch(changeCity(city));
  };
};

export const mapSearchToCities = text => {
  return dispatch => {
    /* Change matched cities, current input and chosen city according to input */
    let matchedCities = getMatchedCities(text);
    if (matchedCities.length > 0) {
      dispatch(changeCityAndWeather(matchedCities[0]));
    }
    changePickerItems(matchedCities);
  };
};

export const getWeatherInfo = city => {
  return (dispatch, getState) => {
    if (city.name !== getState().city.name) {
      // Get current weather from calling api
      return fetch(
        "https://api.openweathermap.org/data/2.5/weather?id=" +
          city.id +
          "&appid=94445aaf723b5e25a0c02a9160eac8e2&units=metric"
      )
        .then(response => {
          // Get reponse in json
          return response.json();
        })
        .then(currentWeather => {
          /*
                    @icon: selected city current icon
                    @description: selected city current description
                    @temperature: selected city current temperature
                    @pressure: selected city current pressure
                    @humidity: selected city current humidity
                    */
          return dispatch(changeWeather(currentWeather));
        })
        .catch(error => {
          // error
        });
    }
  };
};
