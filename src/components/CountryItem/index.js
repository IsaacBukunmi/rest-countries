import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';


const CountryItem = ({name, population, capital, region, flag, isCountriesLoading}) => {
    return(
        <Link to={`/country/${name}`} className={styles.country_link}>
            <div className={styles.country_item}>
                <div className={styles.flag_image}>
                    {
                        isCountriesLoading ?  <div className={styles.skeleton_loader}></div> : <img src={flag} alt={name}/>
                    }
                </div>
                <div className={styles.country_tag}>
                    <h4 className={styles.country_name}>{name}</h4>
                    <div className={styles.other_details}>
                        <p><span>Population: </span>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p><span>Region: </span>{region}</p>
                        <p><span>Capital: </span>{capital}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CountryItem