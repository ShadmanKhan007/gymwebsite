import Cart from "../Cart/Cart"
import React, { useRef } from 'react';
import styles from "./Trainer.module.css"
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

let cartobj=[
    {id:1,name:"Jones",url:"https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:2,name:"Martinez",url:"https://images.pexels.com/photos/3917334/pexels-photo-3917334.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:3,name:"Gonzalez",url:"https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:4,name:"Patel",url:"https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:5,name:"Rodriguez",url:"https://images.pexels.com/photos/3917659/pexels-photo-3917659.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:6,name:"Gomez",url:"https://images.pexels.com/photos/3837754/pexels-photo-3837754.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:7,name:"Evans",url:"https://images.pexels.com/photos/1092872/pexels-photo-1092872.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:8,name:"Bailey",url:"https://images.pexels.com/photos/3076510/pexels-photo-3076510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id:9,name:"Rivera",url:"https://images.pexels.com/photos/700392/pexels-photo-700392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},


]
const Trainer=()=>{

    const cartRef = useRef(null);
    function leftbtnfun(){
        if (cartRef.current) {
            cartRef.current.scrollLeft -= 200
          }
    }
    function rightbtnfun(){
        if (cartRef.current) {
            cartRef.current.scrollLeft +=200
          }
    }
    return (
        <div className={styles.Trainer}>
            <div className={styles.hader}>
             <h3>Meet Our Team</h3>
             <h3>---</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint hic quo qui debitis ut nihil quaerat maiores ipsam itaque rerum, officia architecto, sapiente voluptatem.</p>
            </div>
            <div className={styles.cartdiv}>
            <button onClick={leftbtnfun} className={styles.leftbtn}><AiOutlineDoubleLeft /></button>
            
            <div className={styles.carts} ref={cartRef}>
              <Cart cartobj={cartobj} />
            </div>
            <button onClick={rightbtnfun} className={styles.rightbtn}><AiOutlineDoubleRight /></button>
            </div>
            
        </div>
    )
}
export default Trainer