import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const ListEmptyComponent = ({isLoading}) => {
    const theme=useTheme()
    return <View className={"flex-1 h-[80vh] justify-center items-center"}>
            {isLoading ? <ActivityIndicator color={theme.colors.primary} size={"small"} />: <Text className={"text-slate-400"}>No items found</Text>}
    </View>
}

export default ListEmptyComponent