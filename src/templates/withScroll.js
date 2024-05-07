import React from 'react';
import { ScrollView, View } from 'react-native';
import Spacer from '../components/atoms/Spacer';

const withScroll = (WrappedScreen) => {

    const WithScroll = (props)=>{
        

        return (
            <ScrollView  >
                <WrappedScreen {...props}/>
            </ScrollView>
        )


    }

    return WithScroll;
} 

export default withScroll;