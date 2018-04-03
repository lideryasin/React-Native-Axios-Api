import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import Button from './Button';

const Detay = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text >{data.title}</Text>
            </View>
            <View style={styles.subContainer}>
                <Image style={styles.images} source={{ uri: data.image }} />
            </View>
            <View style={styles.subContainer}>
            <Button onPress={()=> Linking.openURL(data.url)}>Satın Al</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    subContainer: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#add',
        position: 'relative',
    },
    images: {
        height: 200,
        flex: 1
    }

})

export default Detay;