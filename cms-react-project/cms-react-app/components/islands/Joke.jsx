// Import stylesheet
import styles from '../../styles/counter.module.css';

import { useEffect, useState } from 'react';

export function addNumbers(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}

export default function JokeFetcher({ defaultCount }) {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(defaultCount);

    const fetchJoke = async () => {
        try {
            setLoading(true);
            const response = await fetch('/_hcms/api/getJoke');
            const data = await response.json();
            setJoke(data);
            setError(null);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching joke:', err);
            setError('Failed to fetch message');
            setJoke(null);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    const handleClick = () => {
        setCount(count + 1);
        fetchJoke();
    };

    console.log({loading, error, joke})
    
    return (
        <div> 
            <button className={styles.counter} onClick={handleClick}>
                Click me to fetch another joke! Count: {count}
            </button>
            {!!loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && joke && <h1>{joke.setup}</h1>}
            {!loading && !error && joke && <p>{joke.punchline}</p>}

        </div>
    );
}