import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuIcon from "../components/atoms/MenuIcon";
import theme from "../theme/theme.json";

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
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'lightgray',
                headerTitleStyle:{
                    color: theme.textColor
                }
              })}
            
            >
                <Tab.Screen name="Home" options={{headerTitle:""}} component={HomeScreen} />
                <Tab.Screen name="Cart" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default NavigationStack;