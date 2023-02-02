import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { GestureResponderEvent } from "react-native";

type Props = {
  submitHandler: (todo: string) => void;
};

function TodoForm({ submitHandler }: Props): JSX.Element {
  const [text, setText] = useState<string>("");

  const formInputHandler = (text: string) => {
    setText(text);
  };

  return (
    <View>
      <Text>To-Do:</Text>
      <TextInput
        style={styles.input}
        placeholder="adicionar..."
        onChangeText={(text) => formInputHandler(text)}
      />
      <Button
        title="Adicionar"
        color="#509cf2"
        onPress={(e: GestureResponderEvent): void => submitHandler(text)}
      ></Button>
    </View>
  );
}

export default TodoForm;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
