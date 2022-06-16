import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useFetch } from '../../hooks/useFetch';
import CountryItem from '../CountryItem';
import SearchInput from '../SearchInput';
import FilterComponent from '../FilterComponent';
import { BASE_URL } from '../../utils/endpoints';


const Countries = () => {

    // Fetch all countries
    const {isLoading: isCountriesLoading, data:countries, fetchData:fetchAllCountries} = useFetch(`${BASE_URL}/all`)

    console.log(countries)

    // Handle country search
    const [searchName, setSearchName] = useState("")
    const {isLoading: isSearchLoading, error:searchedError, data:searchedCountries, fetchData:fetchSearchedCountries} = useFetch(`${BASE_URL}/name/${searchName}`)

    const handleChange = (e) => {
        setSearchName(e.target.value)
    }

    // Handle country filter by region
    const [filterName, setFilterName] = useState("")
    const {isLoading: isFilterLoading, data:filteredCountries, fetchData:fetchFilteredCountries} = useFetch(`${BASE_URL}/region/${filterName}`)

    useEffect(() => {
        fetchAllCountries()
    }, [])

    useEffect(() => {
        fetchFilteredCountries()
    }, [filterName])

    useEffect(() => {
        fetchSearchedCountries()
    }, [searchName])

    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.search_filter}>
                    <div className={styles.search}>
                       <SearchInput searchName={searchName} setSearchName={setSearchName} handleChange={handleChange}/>
                    </div>
                    <div className={styles.filter}>
                        <FilterComponent filterName={filterName} setFilterName={setFilterName} />
                    </div>
                </div>
                <div className={styles.countries_container}>
                    { searchName ? 
                        isSearchLoading ? <p className={styles.loading}>Loading...</p> : (
                            searchedCountries.map((country) => {
                                return(
                                    <CountryItem key={country?.name.common} {...country}/>
                                )
                            })
                        ):
                    filterName ?
                        isFilterLoading ? <p className={styles.loading}>Loading...</p> : (
                            filteredCountries.map((country) => {
                                return(
                                    <CountryItem key={country?.name.common} {...country}/>
                                )
                            })
                        ):
                        isCountriesLoading ? <p className={styles.loading}>Loading...</p> : (
                            countries.map((country) => {
                                return(
                                    <CountryItem key={country?.name?.common} {...country} isCountriesLoading={isCountriesLoading}/>
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