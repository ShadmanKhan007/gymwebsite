import styles from'./Cart.module.css'

const Cart = ({ cartobj }) => {
    return (
      <div className={styles.Cart}>
        {cartobj.map((elem) => (
          <div className={styles.par1cart} key={elem.id}>
            <img src={elem.url} alt="" />
            <h4>{elem.name}</h4>
            <p>Gym Trainer</p>
          </div>
        ))}
      </div>
    );
  };
export default Cart;