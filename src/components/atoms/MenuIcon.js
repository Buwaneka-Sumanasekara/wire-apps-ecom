import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const MenuIcon = (props) => {
    const { name, size, color, value, testID } = props;

    if (value) {
        return (
            <View testID={testID} className={"relative py-2"}>
                <View className={"t-0 absolute -right-2 top-1 z-10 "}>
                    <View className={"bg-red-500 rounded-full w-4 h-4 ju"}>
                        <Text className="text-white text-center">{`${value}`}</Text>
                    </View>
                </View>
                <Ionicons name={name} size={size} color={color} />
            </View>
        );
    }

    return <Ionicons testID={testID} name={name} size={size} color={color} />;
}



export default MenuIcon;