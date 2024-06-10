import Navbar from "../../components/Navbar/Navbar.tsx";
import styles from "./Checkout.module.scss";
import { CheckoutProps } from "./Checkout.types.ts";
import camera from "../../assets/camera.png";
import * as CurrencyFormat from "react-currency-format";
import { useContext, useEffect } from "react";
import { AppContext, getBasketTotal } from "../../App.state.tsx";
import { useNavigate } from "react-router-dom";
const Checkout = ({ }: CheckoutProps) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  if (!context) return <></>;
  const basket = context.state.basket;
  const dispatch = context.dispatch;
  const removeFromCart = (productId: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      data: { productId },
    });
  };
  
  
  console.log(basket)
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.Main}>
        <div className={styles.ShopingCart}>
          <h2>Shopping Cart</h2>
          {basket.map((product) => {
            return (
              <div className={styles.Product}>
                <div className={styles.Image}>
                  <img src={product.imageUrl} alt="" />
                </div>
                <div className={styles.Description}>
                  <h4>{product.title}</h4>
                  <p>₹ {product.price}</p>
                  <button onClick={()=>{removeFromCart(product.productId)}}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.Subtotal}>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal({basket.length} items) :{" "}
                  <strong>{value}</strong>
                </p>
                <small>
                  <input type="checkbox" />
                  <span>This order contains a gift</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹"}
          />
          <button onClick={()=>{navigate("/address");}}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
