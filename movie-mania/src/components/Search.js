import { useEffect, useRef } from 'react';

export default function Search({query, setQuery}) {
    const inputRef = useRef(null);

    useEffect(function() {
        function callback(e) {
            if (document.activeElement === inputRef.current)    return;
            if (e.code === "Enter") {
                inputRef.current.focus();
                setQuery("");
            } 
        }

        document.addEventListener('keydown', callback);
    }, [setQuery]);

    return (
        <input className="search" 
            type="text"
            ref={inputRef} 
            placeholder="Search movies..." 
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
    )
}