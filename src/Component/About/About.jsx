import styles from "./About.module.css"
const About =()=>{
    return (
        <div className={styles.About}>

          <div className={styles.div1}>

           <div className={styles.videoSection1}>
           <iframe  
           src="https://www.youtube.com/embed/Yko3GMseY40" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>   
            </iframe> 
           </div>

           <div className={styles.aboutSection1}>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste veritatis! Facere alias velit harum ducimus. Omnis velit temporibus cupiditate voluptate perspiciatis veritatis qui aperiam corrupti, necessitatibus molestias beatae. Perspiciatis.</p>
            <button onClick={()=>{alert("click from About page")}} >Lerrn More</button>
           </div>
          </div>

          <div className={styles.div2}>
          <div className={styles.aboutSection2}>
            <h1>Why Chose Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste veritatis! Facere alias velit harum ducimus. Omnis velit temporibus cupiditate voluptate perspiciatis veritatis qui aperiam corrupti, necessitatibus molestias beatae. Perspiciatis.</p>
          </div>
            <div className={styles.videoSection2}>
            <iframe width="480" height="315" 
                src="https://www.youtube.com/embed/4-zjQvTDnbw" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>   
            </iframe>
            </div>
          </div>
        </div>
    )
}

export default About;