import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);

    const getdata = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data)
        setIsLoading(false)
    } 

    useEffect(() => {
        getdata()
    }, [url])

    return {isLoading, data}
}

