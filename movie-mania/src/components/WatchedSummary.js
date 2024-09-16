export default function WatchedSummary({watched}) {
    function average(arr) {
        const total = arr.reduce((acc, curr) => acc + curr, 0);
        return total / arr.length;
    }

    let avgRuntime = 0; 
    let avgUserRating = 0; 
    let avgImdbRating = 0; 
    if (watched.length > 0) {
        avgRuntime = average(watched.map(movie => movie.runtime));
        avgUserRating = average(watched.map(movie => movie.userRating));
        avgImdbRating = average(watched.map(movie => movie.imdbRating));
    }

    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    );
}