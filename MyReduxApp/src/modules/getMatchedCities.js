import citiesList from "./data/city.list.json";

export const getMatchedCities = input => {
  console.log(input.toLowerCase());
  return citiesList.filter(item => {
    return (
      item.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[đð]/g, "d")
        .includes(input.toLowerCase())
    );
  });
};
