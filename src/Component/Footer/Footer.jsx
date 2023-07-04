import styles from'./Footer.module.css'
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer =()=>{
    return (
        <div className={styles.Footer}>
            <div className={styles.div1}>
               <img src="" alt="" />
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <div className={styles.icondiv}>
                  <a href="https://www.facebook.com/"><BsFacebook  /></a>
                  <a href="https://www.instagram.com/?hl=en"><BsInstagram  /></a>
                  <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F"><AiFillTwitterCircle /></a>
               </div>

            </div>
            <div className={styles.div2}>
               <p>dbj dfhoa</p>
               <p>sdfids uhfsdo</p>
               <p>sdhfiuds sdofhdso</p>
               <p>djnks ishfi</p>
               <p>djnks ishfi</p>
            </div>
            <div className={styles.div3}>
               <p>dbj dfhoa</p>
               <p>sdfids uhfsdo</p>
               <p>sdhfiuds sdofhdso</p>
               <p>djnks ishfi</p>
               <p>djnks ishfi</p>
            </div>
            <div className={styles.div4}>
               <p>dbj dfhoa</p>
               <p>sdfids uhfsdo</p>
               <p>sdhfiuds sdofhdso</p>
               <p>djnks ishfi</p>
               <p>djnks ishfi</p>
            </div>
        </div>
    )
}

export default Footer;
