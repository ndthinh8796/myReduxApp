import React from "react";
import { View, Picker } from "react-native";
import styles from "./styles.js";

const pickerItems = (citiesList, city) => {
  let pickerItems = [];
  if (city === "") {
    pickerItems = [
      <Picker.Item color="#a4afc1" key="" label="Choose Your City" value="" />
    ];
  }
  for (let city of citiesList) {
    pickerItems.push(
      <Picker.Item key={city.id} label={city.name} value={city} />
    );
  }
  return pickerItems;
};

export const CitiesPickerScreen = ({ city, citiesList, onChangeCity }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={city}
        style={styles.picker}
        itemStyle={{ height: 145 }}
        onValueChange={(itemValue, itemIndex) => {
          onChangeCity(itemValue);
        }}
      >
        {pickerItems(citiesList, city)}
      </Picker>
    </View>
  );
};
