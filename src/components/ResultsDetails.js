import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ResultsDetails = ({result}) => {
    const navigation = useNavigation();

    const navigateToResultsShow = () => {
        console.log('called');
        navigation.navigate('ResultShow',{id:result.id}); 
    };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToResultsShow}>
        <Image source={{uri:result.image_url}} style={styles.image}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:30
    },
    image: {
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    name: {
        fontWeight:'bold',
        fontSize:16
    }
});

export default ResultsDetails