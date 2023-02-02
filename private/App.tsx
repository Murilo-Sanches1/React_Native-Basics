import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import ToDo from "../screens/ToDo";

const getFonts = () =>
  Font.loadAsync({
    poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    merriSerif: require("./assets/fonts/Merriweather/Merriweather-Regular.ttf"),
    merriSans: require("./assets/fonts/Merriweather_Sans/static/MerriweatherSans-Regular.ttf"),
  });

function App(): JSX.Element {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ToDo />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
