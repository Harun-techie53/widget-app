import React, {useState, useEffect} from 'react';
import SearchList from './SearchList';
import axios from 'axios';
import './Search.css';

const Search = () => {
    const [term, setTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    origin: "*",
                    srsearch: term
                }
            });
            setSearchResults(response.data.query?.search);
        }
        if(term && !searchResults.length) {
            search()
        } else {
            const timeOutId = setTimeout(() => {
                if(term) {
                    search();
                }
            }, 500);
    
            return (() =>
                clearTimeout(timeOutId)
            )
        }

    }, [term]);

    return (
        <React.Fragment>
            <form 
                className="ui icon input" >
                <i className="search icon" />
                <input 
                    className="search_input"
                    placeholder="Search"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)} />
            </form>
            <SearchList searchItems={searchResults} />
        </React.Fragment>
    )
}

export default Search;