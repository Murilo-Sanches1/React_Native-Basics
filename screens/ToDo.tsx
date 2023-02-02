import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { GestureResponderEvent } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

// !
import { MaterialIcons } from "@expo/vector-icons";
// !

import Header from "../components/todo/Header";
import TodoItem from "../components/todo/TodoItem";
import TodoForm from "../components/todo/TodoForm";

function App({ navigation }: NavigationStackScreenProps): JSX.Element {
  const [todos, setTodos] = useState<{ text: string; key: string }[]>([
    { text: "Fazer Café", key: "1" },
    { text: "Jogar", key: "2" },
    { text: "Estudar", key: "3" },
  ]);

  const pressHandler = ({ text, key }: { text: string; key: string }) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));

    ToastAndroid.show(`Tarefa "${text}" apagada`, ToastAndroid.SHORT);
  };

  const submitHandler = (newTodo: string) => {
    if (newTodo.trim().length > 0) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: newTodo, key: String(Math.random() + Date.now()) },
        ];
      });

      return;
    }

    Alert.alert(
      "??",
      "Para adicionar uma nova tarefa preencha corretamente o título da mesma",
      [{ text: "Entendido", onPress: () => {} }]
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={(e: GestureResponderEvent): void => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <View style={{ width: "50%" }}>
          <Button
            title="Sandbox"
            onPress={() => {
              // navigation.navigate("SandBox");
              navigation.push("SandBox");
            }}
          />
        </View>

        <View style={styles.content}>
          <TodoForm submitHandler={submitHandler} />
          <View style={styles.list}>
            {/* // ! ANTIGO DENTRO DA FLATLIST <TodoItem todo={item} pressHandler={pressHandler} /> */}
            <FlatList
              data={todos}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={(e: GestureResponderEvent): void => {
                    pressHandler({ text: item.text, key: item.key });
                    navigation.navigate("SandBox", item);
                  }}
                >
                  <View style={styles.item}>
                    <MaterialIcons name="delete" size={20} color="#e30505" />
                    <Text style={styles.itemText}>{item.text}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { flex: 1, padding: 40 },
  list: { flex: 1, marginTop: 20 },

  // !
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
  // !
});
