import { useState } from 'react';

function App() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Next.js</h2>
            <button onClick={increment}> {count} </button>
        </div>
    )
}

export default App;































