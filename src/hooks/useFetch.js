import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(url);
            if(response.status === 200){
                const data = await response.json();
                setData(data)
                setIsLoading(false)
            }else{
                setError(`Error ${response.status} ${response.message}`)
                console.error(`Error ${response.status} ${response.message}`);
            }
        }catch{
            setError(error);
            setIsLoading(false);
        }
    } 

    return {isLoading, error, data, fetchData}
}

