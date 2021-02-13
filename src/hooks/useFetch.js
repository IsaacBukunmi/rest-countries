import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [error, setError] = useState()

    const getdata = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setData(data)
            setIsLoading(false)
        }catch{
            setError(error);
        }
    } 

    useEffect(() => {
        getdata()
    }, [url])

    return {isLoading, data}
}

