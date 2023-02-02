import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ToDo from "../screens/ToDo";
import SandBox from "../screens/SandBox";
import TodoItem from "../components/todo/TodoItem";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: ToDo,
      navigationOptions: {
        title: "Home",
      },
    },
    SandBox: {
      screen: SandBox,
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "red",
      headerStyle: { backgroundColor: "blue" },
    },
  }
);

// export default createAppContainer(HomeStack);
export default HomeStack;
