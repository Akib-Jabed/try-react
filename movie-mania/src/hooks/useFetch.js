import { useEffect, useState } from 'react';

const KEY = "244341f1";

export default function useFetch(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(function() {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            try {
                setIsLoading(true);
                setError("");
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {signal: signal});
                const data = await res.json();
                
                if (data.Response === "False")  throw new Error("Movie not found!")
                setMovies(data.Search);
            } catch (err) {
                if (err.name !== "AbortError") setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }

        fetchData();

        return function() {
            controller.abort();
        }
    }, [query]);

    return {movies, isLoading, error};
}