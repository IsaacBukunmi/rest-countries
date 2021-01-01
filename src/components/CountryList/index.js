import React from 'react';
import styles from './index.module.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { useFetch } from '../../hooks/useFetch';
import CountryItem from '../CountryItem';

const allCountriesURL = 'https://restcountries.eu/rest/v2/all';

const Countries = () => {
    const {isLoading, data} = useFetch(allCountriesURL)
    const countries = data
    console.log(countries)


    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.search_filter}>
                    <div className={styles.search}>
                        <input placeholder="Search for a country..." className={styles.search_input}/>
                        <div className={styles.search_icon_cont}>
                            <AiOutlineSearch className={styles.search_icon}/>
                        </div>
                    </div>
                    <div className={styles.filter}>
                        <select>
                            <option>Filter by region</option>
                            <option>Africa</option>
                            <option>Asia</option>
                            <option>America</option>
                        </select>
                    </div>
                </div>
                <div className={styles.countries_container}>
                    {
                        isLoading ? 'Loading...' : (
                            countries.map((country) => {
                                return(
                                    <CountryItem key={country.name} {...country}/>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
} 

export default Countries