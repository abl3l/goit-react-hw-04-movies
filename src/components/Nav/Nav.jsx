import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/Routes';
import styles from './Nav.module.css';

const activeStyle = { color: 'palevioletred' };

const Nav = () => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <NavLink
          className={styles.nav_link}
          to={routes.HOME_PAGE.path}
          exact
          activeStyle={activeStyle}
        >
          Home
        </NavLink>
      </li>
      <li li className={styles.li}>
        <NavLink
          className={styles.nav_link}
          to={routes.MOVIES_PAGE.path}
          activeStyle={activeStyle}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
