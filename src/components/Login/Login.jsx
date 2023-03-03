
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";

import styles from "./login.module.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const form_value = async (e) => {
        e.preventDefault();
        const value = {
            username: username,
            password:password
        }
        console.log(value);
        navigate("/");
        
    }
  return (
      <div className={styles.login}>
          <div className={styles.inner_login}>
              <h1 className={styles.login_heading}>Login</h1>
              <form action="#" className={styles.login_form}>
                  <input type="text" placeholder="Enter Username" className={styles.login_inputing} onChange={(e)=>{setusername(e.target.value)}}/>
                  <input type="password" placeholder="Enter Password" className={styles.login_inputing} onChange={(e)=>{setpassword(e.target.value)}}/>
                  <button className={styles.login_submit_btn} onClick={form_value}>Login</button>
                  
              </form>
          </div>
      </div>
  )
}

export default Login