import { useState, useEffect } from 'react';

function App() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    })

    const fetchNews = () => {
        fetch('http://hn.algolia.com/api/v1/search?query=next.js')
            .then(result => result.json())
            .then(data => setNews(data.hits))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <h2>Next.js News </h2>
            {news.map((n, i) => (
                <p key={i}> {n.title} </p>
            ))}
        </div>
    )
}


export default App;