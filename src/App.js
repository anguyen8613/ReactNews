import { useState, useEffect } from 'react';

function App() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        document.title = `Counted ${count} times`;
    })


    return (
        <div>
            <h2>Next.js</h2>
            <button onClick={increment}>{count}</button>
        </div>
    )
}


export default App;






























