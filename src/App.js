import { useState, useEffect } from 'react';

function App() {

    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('next.js');
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=next.js');

    useEffect(() => {
        fetchNews();
    }, [url])

    const fetchNews = () => {
        fetch(url)
            .then(result => result.json())
            .then(data => setNews(data.hits))
            .catch(error => console.log(error))
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
    }
    return (
        <div>
            <h2>Next.js News </h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={searchQuery} onChange={handleChange} />
                <button>Search</button>
            </form>
            {news.map((n, i) => (
                <p key={i}> {n.title} </p>
            ))}
        </div>
    )
}


export default App;