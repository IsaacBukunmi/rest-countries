import React from 'react';
import styles from './index.module.scss';
;

const Footer = () => {
   
    return(
        <div className={styles._}>
            <div className={styles.container}>
               <p>Frontend Mentors Challenge. Developed by <a href="https://twitter.com/Izaak_Fresh">Isaac Adetona</a> &copy; copyright 2021</p>
            </div>
        </div>
    )
}

export default Footer;