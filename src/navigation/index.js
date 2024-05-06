import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuIcon from "../components/atoms/MenuIcon";

const Tab = createBottomTabNavigator()

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let value;
                  if (route.name === 'Home') {
                    iconName = "home"
                  } else if (route.name === 'Cart') {
                    iconName = 'cart';
                    value=1;
                  }
                  return <MenuIcon name={iconName} size={size} color={color} value={value}  />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
            
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Cart" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default NavigationStack;