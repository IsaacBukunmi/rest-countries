import React from 'react';
import styles from './index.module.scss';
import { HiOutlineMoon } from "react-icons/hi"
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link to="/"><h1>Where in the world?</h1></Link>
                </div>
                <div className={styles.mode}>
                    <HiOutlineMoon className={styles.moon_icon} /><span>Dark Mode</span>
                </div>
            </div>
        </div>
    )
}

export default Nav;