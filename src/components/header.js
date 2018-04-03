import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


 class Header extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle} >
                <Text style={styles.textStyle}>Header Geldi </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 40
    },
    viewStyle:{
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        height:60,
        justifyContent: 'center',
        marginTop: 40,
        shadowOffset: {widht: 0, height:2},
        shadowOpacity: 0.5,
    }
})

export default Header;