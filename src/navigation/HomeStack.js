import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuIcon from "../components/atoms/MenuIcon";
import theme from "../theme/theme.json";
import CartSummary from "../components/molecules/CartSummary";

//Screens
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";

import { useCartSummary } from "../hooks/useCart";


const Tab = createBottomTabNavigator()





const HomeStack = () => {
    const {itemsCount}=useCartSummary()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                   
                    let iconName;
                    let value;
                    if (route.name === 'HomeScreen') {
                        iconName = "home"
                    } else if (route.name === 'CartScreen') {
                        iconName = 'cart';
                        value = itemsCount;
                    }
                    return <MenuIcon name={iconName} size={size} color={color} value={value} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'lightgray',
                headerTitleStyle: {
                    color: theme.textColor
                },
            })}

        >
            <Tab.Screen name="HomeScreen"   options={{ title:"Home",headerTitle: "", headerRight: (props) => <CartSummary {...props} /> }} component={HomeScreen} />
            <Tab.Screen name="CartScreen"options={{title:"Cart"}} component={CartScreen} />
        </Tab.Navigator>
    );
}

export default HomeStack;