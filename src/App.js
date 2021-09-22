import { useState, useEffect } from 'react';

function App() {

    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('next.js');
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=next.js');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchNews();
    }, [url])

    const fetchNews = () => {
        setLoading(true);
        fetch(url)
            .then(result => result.json())
            .then(data => (setNews(data.hits), setLoading(false)))
            .catch(error => console.log(error))
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
    }

    const showLoading = () => (
        loading ? <p>loading...</p> : ''
    )

    const showForm = () => (
        <form onSubmit={handleSubmit}>
            <input type='text' value={searchQuery} onChange={handleChange} />
            <button>Search</button>
        </form>
    )

    const showNews = () => (
        news.map((n, i) => (
                <p key={i}> {n.title} </p>
        ))
    )
    
    return (
        <div>
            <h2>Next.js News </h2>
            {showLoading()}
            {showForm()}
            {showNews()}
        </div>
    )
}


export default App;