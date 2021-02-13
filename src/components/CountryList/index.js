import React, { useState } from 'react';
import styles from './index.module.scss';
import { useFetch } from '../../hooks/useFetch';
import CountryItem from '../CountryItem';
import SearchInput from '../SearchInput';


const Countries = () => {
    // Fetch all countries
    const {isLoading: isCountriesLoading, data:countries} = useFetch('https://restcountries.eu/rest/v2/all')
    console.log(countries)

    // Handle country search
    const [searchName, setSearchName] = useState("")
    const {isLoading: isSearchLoading, data:searchedCountries} = useFetch(`https://restcountries.eu/rest/v2/name/${searchName}`)

    const handleChange = (e) => {
        setSearchName(e.target.value)
    }

    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.search_filter}>
                    <div className={styles.search}>
                       <SearchInput searchName={searchName} setSearchName={setSearchName} handleChange={handleChange}/>
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
                    { searchName ? 
                        isSearchLoading ? 'Loading...' : (
                            searchedCountries.map((country) => {
                                return(
                                    <CountryItem key={country.name} {...country}/>
                                )
                            })
                        ):
                        isCountriesLoading ? 'Loading...' : (
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