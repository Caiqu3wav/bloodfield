import { useState, useEffect } from "react";

export function useProductData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(url);
                if(!res.ok) {
                    throw new Error('Failed to fetch data strapi');
                }
                const jsonData = await res.json();
                setData(jsonData);
            } catch (err) {
                console.error('Error Fetching data', err);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
}