import styles from "./specific.module.css";
import categories from "../../Database/Categories.json";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import newsdata from "../../Database/News.json";
// importing all images
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img5 from "../../assets/img-5.png";


const Specific = () => {

    const img_cont = [img1, img2, img3, img2, img5];
    const { id } = useParams();

    return (
        <>
            <Navbar />
            {/* News Section */}
            <div className={styles.specific}>
            <div className={styles.specific_inner}>
                    <h1 className={styles.heading}>{newsdata[id].heading}</h1>
                <div className={styles.img_cont}>
                    <img src={img_cont[id]} alt="img" className={styles.img} />
                </div>
                <div className={styles.dis}>
                   {newsdata[id].dis}
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Specific