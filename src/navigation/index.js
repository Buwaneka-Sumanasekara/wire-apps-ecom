import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import theme from "../theme/theme.json";

//Stacks
import HomeStack from "./HomeStack";

//Screens
import ProductScreen from "../screens/ProductScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator()


const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
  },
};


const NavigationStack = () => {
  return (
    <NavigationContainer theme={appTheme}>
      <RootStack.Navigator screenOptions={{ headerBackTitleVisible: false, headerStyle: { shadowColor: 'transparent', elevation: 0 } }}>
        <RootStack.Screen name="HomeTabs" options={{ headerShown: false }} component={HomeStack} />
        <RootStack.Screen name="ProductScreen" options={{ headerTitle: "" }} component={ProductScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;