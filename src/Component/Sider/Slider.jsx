import { useEffect } from "react"
import styles from "./Slider.module.css"
import { useState } from "react"
let poster=[
  {id:1,url:"https://images.pexels.com/photos/5327483/pexels-photo-5327483.jpeg?auto=compress&cs=tinysrgb&w=1360&h=750&dpr=1"},
  {id:2,url:"https://images.pexels.com/photos/5327467/pexels-photo-5327467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:3,url:"https://images.pexels.com/photos/5327458/pexels-photo-5327458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  ]

const Slider =()=>{
  let [index_url, setindex_url]=useState(0)
 
 

  return (
    <div className={styles.Slider}>
        <div className={styles.poster}>
         <img src={poster[index_url].url} alt="poster" />
        </div>
        <div className={styles.poster_hading}>
            <h1>" Take care of your body. <br /> it's the only place you have <br /> to live "</h1>
            <button>Click</button>  
        </div>
        <div className={styles.dot}>
          {
           poster.map((elem,ind)=>(
            <h3 key={ind} onClick={()=>{setindex_url(ind)}} className={(ind===index_url) ? "active" : ""} >&bull;</h3>
           )) 
          }
          
        </div>
    </div>
  )
}
export default Slider;