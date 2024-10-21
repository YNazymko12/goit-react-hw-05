import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import noImage from '../../images/no-image.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(movie => {
        const poster = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : noImage;
        return (
          <li key={movie.id}>
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
              <span
                className={css.linkImage}
                style={{ backgroundImage: `url(${poster})` }}
              ></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
