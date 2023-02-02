import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GestureResponderEvent } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationStackScreenProps } from "react-navigation-stack";

type Props = {
  todo: {
    text: string;
    key: string;
  };
  pressHandler: (todo: { text: string; key: string }) => void;
  navigation?: NavigationStackScreenProps;
};

// function TodoItem({ text, key }: { text: string; key: string }): JSX.Element {
function TodoItem({ todo, pressHandler, navigation }: Props): JSX.Element {
  return (
    <TouchableOpacity
      onPress={(e: GestureResponderEvent): void =>
        pressHandler({ text: todo.text, key: todo.key })
      }
    >
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="#e30505" />
        <Text style={styles.itemText}>{todo.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius1: 10,
    flexDirection: "row",
  },
  itemText: { marginLeft: 10 },
});
