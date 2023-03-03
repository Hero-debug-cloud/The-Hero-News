import styles from "./home.module.css";
import Navbar from "../Navbar/Navbar";
import News_cont from "../News_cont/News_cont";
import categories from "../../Database/Categories.json";
import newsdata from "../../Database/News.json";

import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img5 from "../../assets/img-5.png";


import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import Specific from "../Specific_news/Specific";


const Home = () => {
    
    const img_cont = [img1, img2, img3, img2, img5];

  return (
      <div className={styles.home}>
          
          {/* Navbar Section  */}
          <Navbar /> 


          {/* Category Section */}
          <div className={styles.category_cont}>
              <div className={styles.category_inner}>
                  {
                      categories.map((value) => {
                          return (<div className={styles.cate_element}
                              id={value.id}
                              key={value.id} >
                              {value.name}</div>)
                      })
                  }                 
              </div>
          </div> 
        

          {/* Main Container for the news  */}
          <div className={styles.main_cont}>
              <div className={styles.main_inner}>
                  {newsdata.map((value) => {
                      return (<News_cont img={img_cont[value.id]} data={value} key={value.id} />)
                  })}
              </div>
          </div>
          

         



      </div>
  )
}

export default Home