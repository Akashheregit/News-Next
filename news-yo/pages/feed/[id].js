// import styles from '../../styles/Feed.module.css'
// import {useRouter} from 'next/router';

// const Feed = ({articles, pageNumber }) => {
//     const router = useRouter();

//     return(
//         <>
//         <div className={styles.main}>
//             {articles.map((article, index) => (
//                 <div key={index} className={styles.post}>
//                     <h1 onclick={() => (window.location.href = article.url)}>{article.title}</h1>
//                     <p>{article.description}</p>
//                     {!!article.urlToImage && <img src={article.urlToImage} /> }
//                 </div>
//             ))}
//         </div>
//         <div className={styles.paginator}>
//             <div className={pageNumber === 1 ? styles.disabled : styles.active}
//             onclick={() => {
//                 if(pageNumber > 1){
//                     router.push(`/feed?${pageNumber - 1}`)
//                 }
//             }}>
//                 Previous Page</div>
//                 <div>#{pageNumber}</div>
//         </div>
//         <div className={styles.paginator}>
//             <div className={pageNumber === 1 ? styles.disabled : styles.active}
//             onclick={() => {
//                 if(pageNumber < 5){
//                     router.push(`/feed?${pageNumber + 1}`)
//                 }
//             }}>
//                 Next Page</div>
//                 <div>#{pageNumber}</div>
//         </div>
//         </>
//     )
// }

// export const getServerSideProps = async pageContext => {
//     const pageNumber = pageContext.query.id;

//     if(!pageNumber || pageNumber < 1 || pageNumber > 5) {
//         return {
//             props: {
//                 articles:[],
//                 pageNumber:1
//         }
//     }
// }

// const apiresponse = await fetch(`https://newsapi.org?v2?top-headlines?country=india&
// pageSize=5&${pageNumber}`,{
//     headers: {
//         Authorisation: `Bearer ${process.env.NEXT_NEWS_API_KEY}`
//     }
// })

// const json = await apiresponse.json();
// const { articles } = json;
// return {
//     props: {
//         articles,
//         pageNumber: Number.parseInt(pageNumber)
//     }
// }
// }

// export default Feed
import React, { useState, useEffect } from "react";
import SearchBar from "../search";
import styles from '@/styles/Home.module.css'
import Link from "next/link";
// import styles from './styles/card.module.css'

// import  card  from'../styles/card.module.css';
const Feed = () => {
  const [first, setfirst] = useState([]);

  var url = "https:newsapi.org/v2/top-headlines?country=us&apiKey=ca8d25a6159449da80ed6b2c3e051139"
    // "https://newsapi.org/v2/everything?" +
    // "q=samsung&" +
    // "sortBy=popularity&" +
    // "apiKey=eece60038e4243e4b567c809132e1416";

  const callAPI = async () => {
    let r = await fetch(url);

    let data = await r.json();
    setfirst(data.articles);
  };

  useEffect(() => {
    callAPI();
  }, []);

  // return (
  //   <>
  //   <card>
  //         <SearchBar setdata={setfirst}/>
  //         </card>
  //     {

  //       first.map((i,k)=>{
  //         return <div key={k} className="card">
  //             <img src={i.urlToImage===""?"./bgnews.jpg":i.urlToImage} alt="kljnj"
  //             width={300}
  //             height={200}
  //             />
  //             <div className="card-body">
  //           <p>{i.author}</p>
  //           <p> {i.title}</p>
  //           <p>{i.description}</p>
  //           </div>
  //   <style jsx>{
  //     ` .card {
  //         background-color: #fff;
  //         border-radius: 8px;
  //         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  //         padding: 16px;
  //       }

  //       .card-body {
  //         padding: 16px;
  //       }

  //       h3 {
  //         margin-top: 0;
  //       }`
  //   }</style>

  //         </div>

  //       })

  //     }

  //   </>
  return (
    <>
      <div className="card">
        <SearchBar setdata={setfirst} />
      </div>
      {first.map((i, k) => {
        return (
          <div key={k} className={styles.card}>
            <img
              src={i.urlToImage === "" ? "./bgnews.jpg" : i.urlToImage}
              alt="kljnj"
              style={{ backgroundcolor: "transparent",
              fontSize: 14,
              color: "#4a54f1",
              textAlign: "center",
              paddingTop: "50px",
              width: "300px",
              height: "200px"
            }}
            />

           
            <div className="card-body" style={{backgroundcolor: "white",
                border: "1px solid"
                
                }}>
              <p>{i.author}</p>
              <p>{i.title}</p>
              <p>{i.description}</p>
              <a href= {i.url} target="_blank">Read more </a>
              
            </div>
           
          </div>
        );
      })}
    </>
  );
};
export default Feed;
