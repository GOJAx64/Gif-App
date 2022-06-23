import { useState, useEffect } from 'react';
import { getGifsFetch } from '../helpers/getGifsFetch';

export const useFetchGifs = (category) => {
    
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifs = async() => {
        const newGifs = await getGifsFetch(category);
        setGifs(newGifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getGifs(category);
    }, [])

    return {
        gifs,
        isLoading,
    }
}
