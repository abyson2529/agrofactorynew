import React, { useEffect, useState } from "react";

import Fru from "../assets/fru.jpg";
import News1 from "../assets/news1.jpg";
import "./news.css";

import Header from "../components/header"
import LoginHeader from "../components/login-head";


const tokenVal = window.localStorage.getItem("token")

const axios = require("axios")

const News = () => {
  const token = ""
  const [news,setNews] = useState(false)
  async function getNews(){
    let response = await axios.get(
      "http://localhost:4000/superadmin/showNews",
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
      setNews(response.data.response);
    }
  }
  useEffect(()=>{
    getNews()
  },[])
  return (
    <div>
      {tokenVal? <Header/>:<LoginHeader/>}
      <div className="news_main">
      {news &&
                news.length > 0 &&
                news.map((p) => {
                  var url ="http://localhost:4000/Controllers/Images/"+p.imagename;
                  return (
                    <figure className="news_hor">
                    <img async src={url}  alt="" />
                    <figcaption>
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                      <footer>
                        <div className="hor_date">{p.date}</div>
                      </footer>
                    </figcaption>
                    <a href="https://google.com" />
                  </figure>              
                  );
                })}
      
        </div>
      </div>
  );
};

export default News;
