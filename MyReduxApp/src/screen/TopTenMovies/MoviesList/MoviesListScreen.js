import React from "react";
import { Text, View, FlatList, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles.js";

export const MoviesListScreen = ({ movies, renderItem }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Top Ten Movies On IMDB</Text>
        <View style={styles.album}>
          <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
