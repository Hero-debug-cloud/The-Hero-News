import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [date, setdate] = useState("");
  const [day_name, setday_name] = useState("");

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  useEffect(()=> {
    var today = new Date(),
      current_date = monthNames[today.getMonth()] + " " + today.getDate() + "," + today.getFullYear();
    var day_name = days[today.getDay() % 7];
    

    //setting values 
    setday_name(day_name);
    setdate(current_date);
   },[])
  return (
    <div className={styles.navbar}>
      <div className={styles.date}>
        <div className={styles.main_date}>{date} </div>
        <div className={styles.day_name}>{day_name}</div> 
      </div>
      <div className={styles.heading}>
        <Link to="/" style={{ textDecoration: 'none' }}><h1 className={styles.main_heading}>The Hero News</h1></Link>
        <p className={styles.heading_dis}>Way to your success</p>
      </div>
      <div className={styles.right_cont}>
        <Link to="/login"><button className={styles.login}>Login</button></Link>
      </div>
    </div>
  )
}

export default Navbar