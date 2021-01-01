import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const allCountriesURL = 'https://restcountries.eu/rest/v2/all';

const CountryDetails = () => {
    const { name } = useParams()
    
    const {isLoading, data} = useFetch(allCountriesURL)
    const countries = data
    const countryDetails = countries.find((country) => (country.name === name))
    console.log(countryDetails.name)
    
    // const [flag, setFlag] = useState()
    // const [countryName, setCountryName] = useState()
    // const [nativeName, setNativeName] = useState()
    // const [population, setPopulation] = useState()
    // const [region, setRegion] = useState()
    // const [subRegion, setSubRegion] = useState()
    // const [capital, setCapital] = useState()
    // const [topLevelDomain, setTopLevelDomain] = useState()
    // const [currencies, setCurrencies] = useState()
    // const [languages, setLanguages] = useState()
    

    // useEffect(() => {
    //     console.log(countries)
    //     const newCountry = countries.find((country) => (country.name === name))
    //     console.log(newCountry)
    //     setFlag(newCountry.flag)

    // })
    
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.back_button}>
                    <button><BsArrowLeft className={styles.back_icon}/>Back</button>
                </div>
                <div className={styles.country_details}>
                    <div className={styles.country_flag}>
                        <img src={countryDetails.flag} alt=""/>
                    </div>
                    <div className={styles.sub_details}>
                        <div className={styles.details_header}>
                            <h2>{countryDetails.name}</h2>
                        </div>
                        <div className={styles.sub_section_details}>
                            <div className={styles.section_one}>
                                <p><span>Native Name: </span>{countryDetails.nativeName}</p>
                                <p><span>Population: </span>{countryDetails.population}</p>
                                <p><span>Region: </span>{countryDetails.region}</p>
                                <p><span>Sub Region: </span>{countryDetails.subRegion}</p>
                                <p><span>Capital: </span>{countryDetails.capital}</p>
                            </div>
                            <div className={styles.section_two}>
                                <p><span>Top Level Domain: </span>{countryDetails.topLevelDomain}</p>
                                <p><span>Currencies: </span>{countryDetails.currencies}</p>
                                <p><span>Languages: </span>spib</p>
                            </div>
                        </div>
                        <div className={styles.border_countries}>
                            <p>Border Countries:</p>
                            <div className={styles.border_counteries_list}>
                                <div className={styles.border_country_item}>France</div>
                                <div className={styles.border_country_item}>Germany</div>
                                <div className={styles.border_country_item}>Netherlands</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails