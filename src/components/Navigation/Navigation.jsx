import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const generateActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={generateActiveClass} to="/" end>
        Home
      </NavLink>
      <NavLink className={generateActiveClass} to="/movies" end>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
