import React from 'react';
import styles from './index.module.scss';
import { HiOutlineMoon } from "react-icons/hi"
import { Link } from 'react-router-dom';

const Nav = ({toggleTheme, theme}) => {

    console.log(theme)
   
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link to="/"><h1>Where in the world?</h1></Link>
                </div>
                <div className={styles.mode} onClick={toggleTheme}>
                    <HiOutlineMoon className={styles.moon_icon} /><span>{theme === 'light-theme' ? 'Dark Mode' : 'Light Mode'}</span>
                </div>
            </div>
        </div>
    )
}

export default Nav;