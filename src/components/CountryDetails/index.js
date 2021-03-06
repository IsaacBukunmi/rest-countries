import React from 'react';
import styles from './index.module.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams, withRouter } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const allCountriesURL = 'https://restcountries.eu/rest/v2/all';

const CountryDetails = (props) => {
    const { name } = useParams()
    
    const {isLoading:isDetailsLoading, data:allCountries} = useFetch(allCountriesURL)
    const countryDetails = allCountries.find((country) => (country?.name === name))
   

    const getCountryName = (countryCode) => {
        let countryName = ""
        allCountries.forEach((country) => {
            if(country.alpha3Code === countryCode){
                countryName = country.name
            }
        })
        return countryName
    }

    
    
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.back_button}>
                    <button onClick={() => props.history.push('/')}><BsArrowLeft className={styles.back_icon}/>Back</button>
                </div>
                {
                    isDetailsLoading ? <p className={styles.isLoading}>...</p> : (
                        <div className={styles.country_details}>
                            <div className={styles.country_flag}>
                                <img src={countryDetails?.flag} alt=""/>
                            </div>
                            <div className={styles.sub_details}>
                                <div className={styles.details_header}>
                                    <h2>{countryDetails?.name}</h2>
                                </div>
                                <div className={styles.sub_section_details}>
                                    <div className={styles.section_one}>
                                        <p><span>Native Name: </span>{countryDetails?.nativeName}</p>
                                        <p><span>Population: </span>{countryDetails?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                        <p><span>Region: </span>{countryDetails?.region}</p>
                                        <p><span>Sub Region: </span>{countryDetails?.subregion}</p>
                                        <p><span>Capital: </span>{countryDetails?.capital}</p>
                                    </div>
                                    <div className={styles.section_two}>
                                        <p><span>Top Level Domain: </span>{countryDetails?.topLevelDomain}</p>
                                        <p><span>Currencies: </span>{countryDetails?.currencies.map((currency) => currency.name).join(", ")}</p>
                                        <p><span>Languages: </span>{countryDetails?.languages.map((language) => language.name).join(", ")}</p>
                                    </div>
                                </div>
                                <div className={styles.border_countries}>
                                    <p>Border Countries:</p>
                                    <div className={styles.border_counteries_list}>
                                        {
                                            countryDetails?.borders.map((border, index) => (
                                                <div className={styles.border_country_item} key={index} onClick={() => props.history.push(`${getCountryName(border)}`)}>{getCountryName(border)}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default withRouter(CountryDetails)