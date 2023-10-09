import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default function() {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = (searchTerm) => {
        yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        }).then((res) => {
            setResults(res.data.businesses);
            setError('')
        }).catch((err) => {
            console.log(err);
            setError('something went wrong')
        });
    };

    useEffect(() => {
        handleSubmit('pasta');
    }, []);

    return [handleSubmit,results,error]
}