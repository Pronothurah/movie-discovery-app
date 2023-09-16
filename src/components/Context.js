import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext({});


export function ContextProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();


    const getMovie = () => {
        setIsLoading(true);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=9ca3c614db35b955a2ca1033fe02b80b&query=${searchTerm}`)
        .then((res) => res.json())
        .then((json) => {
            setSearchResults(json.results);
            setIsLoading(false);
            // if (json.results.length > 0) {
            // navigate(`/movie/${json.results[0].id}`);
            // }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        });
    }

    const handleSearchSubmit = () => {
        getMovie();
    }

    useEffect(() => {
        getMovie();
    }, [searchTerm])

    return (
        <AppContext.Provider value={{setSearchTerm, searchResults, setSearchResults,isLoading, setIsLoading, handleSearchSubmit, searchTerm, }}>
            {children}
        </AppContext.Provider>
      )
}

