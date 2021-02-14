import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import filterOptions  from './filterOptions';
import styles from './index.module.scss';

const FilterComponent = ({filterName, setFilterName}) => {
    const [showOptions, setShowOptions] = useState(false)

    // if(filterName === "All"){
    //     return filterName === "Filter by region"
    // }

    return(
        <div className={styles._}>
            <div className={styles.filter_select} onClick={() => setShowOptions(!showOptions)}>
                <p>{filterName || 'Filter by region'}</p>
                <BiChevronDown className={styles.dropdown_icon}/>
            </div>
            { 
                showOptions &&
                    <div className={styles.filter_options}>
                        {
                           filterOptions.map((option) => (
                                <div className={styles.option_item} key={option.id} onClick={() =>{
                                    setFilterName(option.title)
                                    setShowOptions(false)
                                }}>{option.title}</div>
                           ))
                        }
                    </div>
            }
        </div>
    )
}

export default FilterComponent