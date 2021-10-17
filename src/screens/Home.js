import React from 'react';
import { View, Text, StyleSheet, StatusBar, Pressable } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Pressable style={styles.button} onPress={()=> navigation.navigate('GetRequest')}>
                <Text style={styles.text}>Get Request</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={()=> navigation.navigate('PostRequest')} >
                <Text style={styles.text}>Post Request</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        margin: 10,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Home;