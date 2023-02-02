import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

const dummyData: { name: string; id: number }[] = [
  { name: "murilo", id: 1 },
  { name: "sanches", id: 2 },
  { name: "lara", id: 3 },
  { name: "fernando", id: 4 },
  { name: "miguel", id: 5 },
  { name: "lamente", id: 6 },
  { name: "alencar", id: 7 },
  { name: "moraes", id: 8 },
  { name: "murilo", id: 9 },
  { name: "sanches", id: 10 },
  { name: "lara", id: 11 },
  { name: "fernando", id: 12 },
  { name: "miguel", id: 13 },
  { name: "lamente", id: 14 },
  { name: "alencar", id: 15 },
  { name: "moraes", id: 16 },
];

function App({ navigation }: NavigationStackScreenProps) {
  const [name, setName] = useState<string>("");
  const [item, setItem] = useState<{ id: string; name: string }>();

  const handleChangeText = (text: string) => {
    setName(text);
  };

  const touchableItemHandler = (id: string, name: string) => {
    if (id === item?.id) {
      setItem(undefined);
      return;
    }
    setItem({ id, name });
  };

  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("text")}</Text>
      <Text style={styles.title}>Olá {name && `, ${name}`}</Text>
      <StatusBar style="auto" />
      <View style={{ marginVertical: 10 }}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="ex: Murilo Sanches"
          onChangeText={(name) => handleChangeText(name)}
        />

        <Text style={{ marginTop: 10 }}>Idade</Text>
        <TextInput
          style={{ ...styles.input, width: 100 }}
          placeholder="ex: 18"
          keyboardType="numeric"
        ></TextInput>

        <Text style={{ marginTop: 10 }}>MultiLine</Text>
        <TextInput
          style={{ ...styles.input, width: 150 }}
          multiline
        ></TextInput>
      </View>
      <View style={styles.containerGreen}>
        <Text style={styles.subTitle}>View é parecida com uma Div</Text>
      </View>
      {/* <ScrollView>
        {dummyData.map((el, index) => (
          <View key={index}>
            <Text style={styles.dummyItem}>{el.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* 
        // + <FlatList /> - Para arrays maiores
        // - Melhor performace porque só renderiza os primeiros e à medida que for descendo 
        // - vai renderizando o resto 
      */}

      {item && (
        <Text>
          {item.name} foi clicado, id: {item.id}
        </Text>
      )}
      <FlatList
        data={dummyData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => touchableItemHandler(String(item.id), item.name)}
          >
            <Text style={styles.dummyItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "400",
  },

  subTitle: {
    fontSize: 16,
    color: "white",
  },

  containerGreen: {
    backgroundColor: "green",
    padding: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    width: 200,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  dummyItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "pink",
    fontSize: 18,
    marginLeft: 5,
  },
});
