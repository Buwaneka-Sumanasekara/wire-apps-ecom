import { View } from "react-native"

const Spacer = (props) => {
    const { size, isHeight } = props;
    return <View className={(isHeight ? `h-${size}` : `p-${size}`)} />
}

export default Spacer;