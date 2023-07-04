import styles from "./Pricing.module.css"
import { HiArrowNarrowRight } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";

const Pricing =()=>{
    return (
        <div className={styles.Pricing}>
         <div className={styles.secation1}>
          <div className={styles.div1}>
            <div className={styles.part1}>
             <h3>Day Pass</h3>
              <h4>$ <span>20</span> </h4>
               <i>/ pass</i>
            </div>
            <div className={styles.part2}>
                <p><FiCheckCircle /> 1 day pass</p>
                <p><FiCheckCircle /> free gym Access</p>
                <p><FiCheckCircle /> 24 Hour Access</p>
                <button className={styles.get}>Get Started</button>
            </div>
         </div>
         <div className={styles.div2}>
         <div className={styles.part1}>
             <h3>Month To Month</h3>
              <h4>$ <span>90</span> </h4>
               <i>/ pass</i>
            </div>
            <div className={styles.part2}>
                <p><FiCheckCircle /> 1 day pass</p>
                <p><FiCheckCircle /> free gym Access</p>
                <p><FiCheckCircle /> 24 Hour Access</p>
                <p><FiCheckCircle /> free gym Access</p>
                <p><FiCheckCircle /> 24 Hour Access</p>
                <button className={styles.get2}>Get Started</button>
            </div>
         </div>
        </div>
        <div className={styles.secation2} >
           <p>Mambership</p>
           <h3>From punnch pass to Monthly or Annual</h3>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta, eligendi nobis sunt voluptates provident minima fugit odio blanditiis eum harum cupiditate ex repudiandae aliquid quibusdam distinctio rem in aperiam?</p>
           <h3>Each plan included</h3>
           <p><HiArrowNarrowRight /> jsjbckj diwhcoid sdj</p>
           <p><HiArrowNarrowRight /> diciwd wdchi w </p>
           <p><HiArrowNarrowRight /> diciwd wdchi w</p>
           <p><HiArrowNarrowRight /> diciwd wdchi w</p>
           <p><HiArrowNarrowRight /> diciwd wdchi w</p>
        </div>
        </div>
    )
}
export default Pricing ;