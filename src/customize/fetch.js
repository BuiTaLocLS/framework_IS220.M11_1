import React, { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];
                setData(data);
                setLoading(false);
                setIsError(false);
            }
            fetchData();
        } catch (e) {
            setLoading(true);
            setIsError(false);
        }
    }, [url]);
    return {
        data, loading, isError
    }
};

export default useFetch;