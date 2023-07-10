
import styles from './Navba.module.css'
import {Link} from "react-router-dom"
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import { useState } from 'react';

const Navbar=()=>{
  let [iconbar , seticonbar]=useState(false);
    return (
        <div className={ styles.Navbar} >
          <div className={styles.logo}>
            <Link to={"/"} >
           <img src="https://img.freepik.com/premium-vector/fitness-center-logo_25327-170.jpg" alt="" />
           </Link>
          </div>
          <div className={ iconbar ? (styles.link2) : (styles.link)}>
                <nav><Link onClick={()=>{seticonbar(false)}} to={"/"}>Home</Link></nav>
                <vav><Link onClick={()=>{seticonbar(false)}} to={"/About"}>About</Link></vav>
                <nav><Link onClick={()=>{seticonbar(false)}} to={"/Trainer"}>Trainer</Link></nav>
                <nav><Link onClick={()=>{seticonbar(false)}} to={"/Pricing"}>Pricing</Link></nav>
                <div className={styles.login}>
                 <Link onClick={()=>{seticonbar(false)}} to={"/logIn"}><button>Join</button></Link>
                 </div>
          </div>
         
          <div className={iconbar ? (styles.iconbar2): (styles.iconbar)} onClick={()=>{seticonbar(true)}} >
            <AiOutlineAlignLeft />
          </div>
          <div className={iconbar ? (styles.iconbar): (styles.iconbar2)} onClick={()=>{seticonbar(false)}} >
            <BsX />
          </div>
        </div>
    )
}
export default Navbar;