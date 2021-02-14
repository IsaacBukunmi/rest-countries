import React, { useState } from 'react';
import styles from './index.module.scss';
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = ({searchName, handleChange}) => {  
    
    return(
        <>
            <input 
                placeholder="Search for a country..." 
                className={styles.search_input}
                value={searchName}
                onChange={handleChange}/>
            <div className={styles.search_icon_cont}>
                <AiOutlineSearch className={styles.search_icon}/>
            </div>
        </>
    )
}

export default SearchInput