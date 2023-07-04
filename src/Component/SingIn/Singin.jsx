import { useState } from "react";
import styles from "./Singin.module.css"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const Singin =()=>{

    let [email, setemail]=useState("")
    let [Password, setPassword]=useState("")
    const navigate = useNavigate();

    function SinginFun(){
      if(email=="" || Password=="" ){
        alert("pls fill the form")
      }else{
       let user_obj={
        email,
        Password
       }
       localStorage.setItem("user", JSON.stringify(user_obj))
       alert("Sing in Sucssesfully")
       navigate("/logIn");
      }
    }
    return (
        <div className={styles.Singin}>
          <h1>Sing in</h1>
          <div className={styles.inp}>
            <label htmlFor="">Name</label>
            <br />
            <input type="text" placeholder="Name" />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="Email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
            <br />
            <label htmlFor="">Mob-No.</label>
            <br />
            <input type="number" placeholder="Mob-No." />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="Password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            <br />
            <label htmlFor="">Age</label>
            <br />
            <input type="number" placeholder="Age" />
            <br />
            <button className={styles.singinbtn} onClick={SinginFun} >Sing In</button>
          </div>
          <div className={styles.newUsers} >
             <p>Allready have acount <Link to={"/logIn"} >Click here</Link> </p>
          </div>
        </div>
    )
}
export default Singin;