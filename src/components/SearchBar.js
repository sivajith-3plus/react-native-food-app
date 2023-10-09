import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ term, onTermChange, handleSubmit }) => {
    return (
        <View style={styles.main}>
            <Feather name='search' size={30} />
            <TextInput
                style={styles.inputStyle}
                caretColor='black'
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={()=>handleSubmit(term)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        marginHorizontal:30,
        marginBottom:10
    },
    inputStyle: {
        marginLeft: 10,
        color: 'black',
    }
});


export default SearchBar