import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import About from "../screens/About";

const AboutStack = createStackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: {
        title: "Sobre",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "red",
      headerStyle: { backgroundColor: "blue" },
    },
  }
);

// export default createAppContainer(AboutStack);
export default AboutStack;
