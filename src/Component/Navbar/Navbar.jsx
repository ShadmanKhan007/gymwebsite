
import styles from './Navba.module.css'
import {Link} from "react-router-dom"

const Navbar=()=>{
    return (
        <div className={styles.Navbar} >
          <div className={styles.logo}>
            <Link to={"/"} >
           <img src="https://img.freepik.com/premium-vector/fitness-center-logo_25327-170.jpg" alt="" />
           </Link>
          </div>
          <div className={styles.link}>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Trainer"}>Trainer</Link></li>
                <li><Link to={"/Pricing"}>Pricing</Link></li>
            </ul>
          </div>
          <div className={styles.login}>
            <Link to={"/logIn"}><button>Join</button></Link>
          </div>
        </div>
    )
}
export default Navbar;