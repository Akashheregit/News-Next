import React from 'react';
import { useState, useEffect } from 'react';
import {debounce} from 'lodash';
import axios from 'axios';

// const SearchBar = ({setdata}) => {
//   const [query, setQuery] = useState('');
//   const [articles, setArticles] = useState([]);
//   const [typingTimeout, setTypingTimeout] = useState(null);

//   var url =  'https://newsapi.org/v2/everything?' +
//   `q=${query}&` +
//   'sortBy=popularity&' +
//   'apiKey=eece60038e4243e4b567c809132e1416';



// const callAPI = async (event) => {
//   event.preventDefault();
// let r=await  fetch(url)

// let data=await r.json()
// console.log(data)
// setdata(data.articles)
// }

// const handleInputChange =(event) => {
//   const query = even.target.value;
//   setQuery(query);

//   if (typingTimeout){
//     clearTimeout(typingTimeout);
//   }
//   if (query.trim().length > 0) {
//     setTypingTimeout(
//       setTimeout(() => {
//         callAPI(event);
//       }, 500)
//     );
//   } else {
//     setdata([]);
//     }
// };

  
//   return (
//     <div>
//       <form onSubmit={callAPI}>
//         <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
//         <button type="submit" >Search</button>
//       </form>
//       {/* <ul>
//         {articles.map((article) => (
//           <li key={article.url}>
//             <a href={article.url}>{article.title}</a>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default SearchBar;

// const SearchBar = ({ setdata }) => {
//   const [query, setQuery] = useState('');
//   const [articles, setArticles] = useState([]);

//   const handleInputChange = async (event) => {
//     const query = event.target.value;
//     setQuery(query);

//     const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=eece60038e4243e4b567c809132e1416`;

//     if (query.trim().length > 0) {
//       const response = await fetch(url);
//       const data = await response.json();
//       setArticles(data.articles);
//     } else {
//       setArticles([]);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=eece60038e4243e4b567c809132e1416`;

//     fetch(url)
//       .then(response => response.json())
//       .then(data => setdata(data.articles));
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={query} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {articles.map((article, index) => (
//           <li key={index}>{article.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;


const SearchBar = ({ setdata }) => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${debouncedQuery}&sortBy=popularity&apiKey=eece60038e4243e4b567c809132e1416`;

    if (debouncedQuery.trim().length > 0) {
      fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles));
    } else {
      setArticles([]);
    }
  }, [debouncedQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=eece60038e4243e4b567c809132e1416`;

    fetch(url)
      .then(response => response.json())
      .then(data => setdata(data.articles));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;





