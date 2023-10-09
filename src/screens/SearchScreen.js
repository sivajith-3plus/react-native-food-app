import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [handleSubmit, results, error] = useResult();

    const filterResultByPrice = (price) => {
        return results.filter((obj) => obj.price === price)
    }

    return (
        <View style={styles.main}>
            <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} handleSubmit={handleSubmit} />
            <ScrollView >
                {/* <Text>{error ? error : `We have found ${results.length || 0} results`}</Text> */}
                <ResultList results={filterResultByPrice('$')} title='Cost Effective' />
                <ResultList results={filterResultByPrice('$$')} title='Bit Pricier' />
                <ResultList results={filterResultByPrice('$$$')} title='Big Spender' />
                <ResultList results={filterResultByPrice('$$$')} title='Big Spender' />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        // padding: 30, 
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;
