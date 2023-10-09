import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ResultsDetails from './ResultsDetails';

const ResultList = ({ title, results }) => {
    if(!results.length) return null
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ResultsDetails result={item}/>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:30,
        marginBottom:5
    },
    container:{
        marginVertical:5
    }
});

export default ResultList;