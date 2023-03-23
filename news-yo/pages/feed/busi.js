// import React, { useState, useEffect } from "react";
// import SearchBar from "../search";
// import Link from "next/link";

// const Feed = () => {
//   const [first, setfirst] = useState([]);

//   var url = //"https:newsapi.org/v2/top-headlines?country=us&apiKey=ca8d25a6159449da80ed6b2c3e051139"
//      "https://newsapi.org/v2/everything?" +
//     "q=business&" +
//      "sortBy=popularity&" +
//      "apiKey=eece60038e4243e4b567c809132e1416";

//   const callAPI = async () => {
//     let r = await fetch(url);

//     let data = await r.json();
//     setfirst(data.articles);
//   };

//   useEffect(() => {
//     callAPI();
//   }, []);
//   return (
//     <>
//       <div className="card">
//         <SearchBar setdata={setfirst} />
//       </div>
//       {first.map((i, k) => {
//         return (
//           <div key={k} className="card">
//             <img
//               src={i.urlToImage === "" ? "./bgnews.jpg" : i.urlToImage}
//               alt="kljnj"
//               style={{ backgroundcolor: "transparent",
//               fontSize: 14,
//               color: "#4a54f1",
//               textAlign: "center",
//               paddingTop: "50px",
//             }}
//             />

           
//             <div className="card-body" style={{backgroundcolor: "white",
//                 border: "1px solid"
                
//                 }}>
//               <p>{i.author}</p>
//               <p>{i.title}</p>
//               <p>{i.description}</p>
//               <a href= {i.url} target="_blank">Read more </a>
//             </div>
           
//           </div>
//         );
//       })}
//     </>
//   );
// };
// export default Feed;

import React, { useState, useEffect } from "react";
import SearchBar from "../search";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Feed = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const url =
    "https://newsapi.org/v2/everything?" +
    "q=business&" +
    "sortBy=popularity&" +
    "apiKey=eece60038e4243e4b567c809132e1416";

  const callAPI = async () => {
    let r = await fetch(url);
    let data = await r.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    callAPI();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="card">
        <SearchBar setdata={setArticles} />
      </div>
      {currentItems.map((i, k) => {
        return (
          <div key={k} className="card">
            <img
              src={i.urlToImage === "" ? "./bgnews.jpg" : i.urlToImage}
              alt="kljnj"
              style={{
                backgroundcolor: "transparent",
                fontSize: 14,
                color: "#4a54f1",
                textAlign: "center",
                paddingTop: "50px",
              }}
            />

            <div
              className="card-body"
              style={{ backgroundcolor: "white", border: "1px solid" }}
            >
              <p>{i.author}</p>
              <p>{i.title}</p>
              <p>{i.description}</p>
              <a href={i.url} target="_blank">
                Read more{" "}
              </a>
            </div>
          </div>
        );
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={(event) =>
                  handleClick(event, currentPage === 1 ? 1 : currentPage - 1)
                }
              >
                Previous
              </a>
            </li>
            {pageNumbers.map((number) => {
              return (
                <li
                  key={number}
                  className={
                    "page-item" + (number === currentPage ? " active" : "")
                  }
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={(event) => handleClick(event, number)}
                  >
                    {number}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={(event) =>
                  handleClick(
                    event,
                    currentPage === totalPages ? totalPages : currentPage + 1
                  )
                }
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </>
    ) 
    
              }
              export default Feed;

