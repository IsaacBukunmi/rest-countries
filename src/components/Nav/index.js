import React from 'react';
import styles from './index.module.scss';
import { BiMoon } from "react-icons/bi"

const Nav = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Where in the world?</h1>
                </div>
                <div className={styles.mode}>
                    <BiMoon />Dark Mode
                </div>
            </div>
        </div>
    )
}

export default Nav;