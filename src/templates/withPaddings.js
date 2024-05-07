import React from 'react';
import { View } from 'react-native';

const withPaddings = (WrappedScreen) => {

    const WithPaddings = (props)=>{
        

        return (
            <View className={"px-4"}>
                <WrappedScreen {...props}/>
            </View>
        )


    }

    return WithPaddings;
} 

export default withPaddings;