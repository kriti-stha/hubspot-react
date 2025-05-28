// Import stylesheet
import styles from '../../styles/counter.module.css';

// Import useState hook to update the count number
import { useState } from 'react';

// Create a function to add numbers together
export function addNumbers(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}

export default function CounterButton({ defaultCount }) {
   
    let [count, setCount] = useState(defaultCount);
  
    return (

        <div> 
            <button className={styles.counter} onClick={() => setCount(count + 1)}>Click me to update the count: {count}</button>
            
        </div>
    ) 
}