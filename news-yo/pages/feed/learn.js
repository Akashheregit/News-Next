import React, { useState, useEffect } from "react";
import SearchBar from "../search";
import Link from "next/link";

const Feed = () => {
  const [first, setfirst] = useState([]);

  var url = //"https:newsapi.org/v2/top-headlines?country=us&apiKey=ca8d25a6159449da80ed6b2c3e051139"
     "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
     "sortBy=popularity&" +
     "apiKey=ca8d25a6159449da80ed6b2c3e051139";

  const callAPI = async () => {
    let r = await fetch(url);

    let data = await r.json();
    setfirst(data.articles);
  };

  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      <div className="card">
        <SearchBar setdata={setfirst} />
      </div>
      {first.map((i, k) => {
        return (
          <div key={k} className="card">
            <img
              src={i.urlToImage === "" ? "./bgnews.jpg" : i.urlToImage}
              alt="kljnj"
              style={{ backgroundcolor: "transparent",
              fontSize: 14,
              color: "#4a54f1",
              textAlign: "center",
              paddingTop: "50px",
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
