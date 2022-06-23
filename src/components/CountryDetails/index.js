import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams, withRouter } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/endpoints';

const CountryDetails = (props) => {
    const { name } = useParams()
    const {isLoading: isCountriesLoading, data:allCountries, fetchData:fetchAllCountries} = useFetch(`${BASE_URL}/all`)
    const countryDetails = allCountries.find((country) => (country?.name?.common === name))
    console.log(countryDetails)
    
    const getCountryName = (countryCode) => {
        const filterCountry = allCountries.filter((country) => country['cca3'] === countryCode)
        return filterCountry[0]?.name.common
    }

    const getLanguages = (language) => {
        const languages = Object.keys(language).reduce((arr, curr_key) => {
            arr.push(language[curr_key])
            return arr
        }, [])
        return languages
    }

    const getCurrencies = (currency) => {
        const currencies = countryDetails?.currencies && Object.keys(currency).reduce((arr, curr_key) => {
            arr.push(currency[curr_key].name)
            return arr
        }, [])
        return currencies
    }   

    // console.log(getCurrencies(countryDetails?.currencies))

    useEffect(() => {
        fetchAllCountries()
    }, [])
    
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.back_button}>
                    <button onClick={() => props.history.push('/')}><BsArrowLeft className={styles.back_icon}/>Back</button>
                </div>
                {
                    isCountriesLoading ? <p className={styles.loading}>Loading...</p> : (
                        <>
                            <div className={styles.country_details}>
                                <div className={styles.country_flag}>
                                    <img src={countryDetails?.flags.svg} alt="flag"/>
                                </div>
                                <div className={styles.sub_details}>
                                    <div className={styles.details_header}>
                                        <div className={styles.coat_of_arms}>
                                            <img src={countryDetails?.coatOfArms.svg} alt="coat of arms"/>
                                        </div>
                                        <h2>{countryDetails?.name.common}</h2>
                                    </div>
                                    <div className={styles.sub_section_details}>
                                        <div className={styles.section_one}>
                                            <p><span>Native Name: </span>{countryDetails?.name.nativeName[Object.keys(countryDetails?.languages)[0]]?.common}</p>
                                            <p><span>Population: </span>{countryDetails?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                            <p><span>Region: </span>{countryDetails?.region}</p>
                                            <p><span>Sub Region: </span>{countryDetails?.subregion}</p>
                                            <p><span>Capital: </span>{countryDetails?.capital}</p>
                                        </div>
                                        <div className={styles.section_two}>
                                            <p><span>Top Level Domain: </span>{countryDetails?.tld}</p>
                                            <p><span>Currencies: </span>{getCurrencies(countryDetails?.currencies).join(", ")}</p>
                                            <p><span>Languages: </span>{ countryDetails?.languages ? getLanguages(countryDetails?.languages).join(", ") : "Unavailable"}</p>
                                        </div>
                                    </div>
                                    <div className={styles.border_countries}>
                                        <p>Border Countries:</p>
                                        <div className={styles.border_counteries_list}>
                                            {
                                                countryDetails?.borders ?
                                                countryDetails.borders.map((border, index) => (
                                                    <div className={styles.border_country_item} key={index} onClick={() => props.history.push(`${getCountryName(border)}`)}>{getCountryName(border)}</div>
                                                )) : <p>Unavailable</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.country_map}>
                                {/* <iframe
                                    src={countryDetails?.maps.openStreetMaps}
                                    width="600"
                                    height="450"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe> */}
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default withRouter(CountryDetails)