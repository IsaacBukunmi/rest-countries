import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [error, setError] = useState()

    const getdata = async () => {
        try{
            const response = await fetch(url);
            if(response.status === 200){
                const data = await response.json();
                setData(data)
                setIsLoading(false)
            }else{
                console.error(`Error ${response.status} ${response.message}`);
            }
        }catch{
            setError(error);
        }
    } 

    useEffect(() => {
        getdata()
    }, [url])

    return {isLoading, data}
}

