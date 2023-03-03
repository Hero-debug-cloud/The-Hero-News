import { Link } from "react-router-dom";
import styles from "./news_cont.module.css";


const News_cont = ({ img,data}) => {
  
  return (
      <div className={styles.news_cont}>
          <div className={styles.left}>
            <img src={img} alt="img" className={styles.img} />
          </div>
          <div className={styles.right}>
              <h2 className={styles.heading}>
              {data.heading}
              </h2>
              <p className={styles.dis}>
                {data.short_dis}
              </p>
              <div className={styles.btn_cont}>
              <Link to={`/specific_news/${data.id}`}><button className={styles.full_btn}>Full News</button></Link>
              </div>
          </div>
     </div>
  )
}

export default News_cont