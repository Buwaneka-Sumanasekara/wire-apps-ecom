import { View } from "react-native"


const Spacer = (props) => {
    const { size } = props;
    return <View className={`p-${size}`}/>
}

export default Spacer;