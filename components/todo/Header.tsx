import React from "react";
import { StyleSheet, Text, View } from "react-native";

import GlobalStyles from "../../styles/GlobalStyles";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={{ ...GlobalStyles.titleText, textAlign: "center" }}>
        To-Do
      </Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#509cf2",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "poppins",
  },
});
