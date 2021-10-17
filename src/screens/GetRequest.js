import React from 'react'
import { StatusBar, ActivityIndicator, StyleSheet, Alert, ToastAndroid, View, Text, FlatList } from 'react-native';
import axios from 'axios';

const GetRequest = ({ navigation }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [Data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                setData(response['data']);
                if (response['data'].length == 0) {
                    {
                        Platform.OS === 'ios' ?
                            Alert.alert(
                                'Empty!',
                                'Data is not available', // <- this part is optional, you can pass an empty string
                                [
                                    { text: 'OK', onPress: () => null },
                                ],
                                { cancelable: false },
                            )
                            :
                            ToastAndroid.showWithGravity(
                                "Data is not available",
                                ToastAndroid.SHORT,
                                ToastAndroid.BOTTOM
                            )
                    }
                }
            })
            .catch((error) => {
                console.log(error)
                if (error == 'Error: Network Error') {
                    {
                        Platform.OS === 'ios' ?
                            Alert.alert(
                                'Login Failed!',
                                'No Internet Connection', // <- this part is optional, you can pass an empty string
                                [
                                    { text: 'OK', onPress: () => null },
                                ],
                                { cancelable: false },
                            )
                            :
                            ToastAndroid.showWithGravity(
                                "No Internet Connection",
                                ToastAndroid.SHORT,
                                ToastAndroid.BOTTOM
                            )
                    }
                }
            })
            .finally(() => setLoading(false));
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ margin: 20 }}>
            <Text style={{fontSize: 20,fontWeight: "bold", marginBottom:10}}>{item.title}</Text>
            <Text style={{fontSize: 15,}}>{item.body}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size={40} color='black' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} /> :
                <View>
                    <StatusBar hidden />
                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10
    },
    listItem: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default GetRequest;