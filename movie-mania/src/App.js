import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Search from './components/Search';
import WatchedMovieList from './components/WatchedMovieList';
import WatchedSummary from './components/WatchedSummary';
import useFetch from './hooks/useFetch';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("")
  const {movies, isLoading, error} = useFetch(query);
  const [watched, setWatched] = useLocalStorage([], "watched");

  function handleSelectMovie(id) {
    setSelectedId(selectedId => id === selectedId ? null : id)
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie])
  }

  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  }

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </Navbar>
      <main className="main">
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} watched={watched} />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>
          )}
        </Box>
      </main>
    </>
  );
}

export default App;


