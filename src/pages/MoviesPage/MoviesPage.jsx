import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from '../../services/api';

import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';

import css from './MoviesPage.module.css';
import cssError from '../../css/error.module.css';

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieName = searchParams.get('query') ?? '';

  const updateQuery = query => {
    const params = query !== '' ? { query } : {};
    setSearchParams(params);
  };

  useEffect(() => {
    try {
      const getSearchMovies = async () => {
        try {
          setLoading(true);
          const data = await getSearchedMovies(movieName);
          setSearchMovie(data);
        } catch (error) {
          console.error('Error fetching searched movies:', error);
          setError('Failed to load searched movies. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
      getSearchMovies();
    } catch (error) {
      console.log('error', error);
    }
  }, [movieName]);

  return (
    <main>
      <div className={css.container}>
        <input
          className={css.input}
          type="text"
          value={movieName}
          onChange={e => updateQuery(e.target.value)}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </div>
      {searchMovie && <MovieList movies={searchMovie} />}
      {loading && <Loader />}
      {error && <p className={cssError.error}>{error}</p>}
    </main>
  );
};

export default MoviesPage;
