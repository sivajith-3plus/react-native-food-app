import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = () => {
    const [result, setResult] = useState(null);

    const route = useRoute();
    const { id } = route.params;

    const getResult = (id) => {
        yelp.get(`/${id}`).then(res => {
            setResult(res.data)
        })
    }

    console.log(result);

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) return null

    return (
        <View style={{alignItems:'center'}}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius:5,
        margin:5
    }
})

export default ResultsShowScreen