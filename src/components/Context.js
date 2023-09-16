import React, { useEffect, useState, useCallback } from 'react';
import { createContext } from 'react';

export const AppContext = createContext({});


export function ContextProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const getMovie = async () => {
        setIsLoading(true);
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9ca3c614db35b955a2ca1033fe02b80b&query=${searchTerm}`)
        .then((res) => res.json())
        .then( async (json) => {
            await setSearchResults(json.results);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        });
    }

    const handleSearchSubmit = () => {
        getMovie();
    }

    const memo = useCallback(
       getMovie, [searchTerm]
    )
    useEffect(() => {
        getMovie();
    }, [memo]);

    return (
        <AppContext.Provider value={{setSearchTerm, searchResults, setSearchResults,isLoading, setIsLoading, handleSearchSubmit, searchTerm, }}>
            {children}
        </AppContext.Provider>
      )
}

