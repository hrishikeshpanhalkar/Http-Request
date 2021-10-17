import React from 'react';
import {View, Text, StyleSheet, StatusBar } from 'react-native';

const PostRequest = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <Text>Get Request</Text>
        </View>
    )
}

 const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
 });

 export default PostRequest;