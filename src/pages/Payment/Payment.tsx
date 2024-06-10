import { useContext } from "react";
import { AppContext, getBasketTotal } from "../../App.state.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import styles from "./Payment.module.scss";
import { PaymentProps } from "./Payment.types.ts";
import * as CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Card from "../../components/Card/Card.tsx";
const Payment = ({}: PaymentProps) => {
  const context = useContext(AppContext);
  if (!context) return <></>;
  const address = context.state.deliveryAddress;
  const basket = context.state.basket;

  const element = useElements();
  const stripe = useStripe();
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.Main}>
        <div className={styles.ReviewContainer}>
          <h2>Review Your Order</h2>
          <div className={styles.AddressContainer}>
            <h5>Shipping Address</h5>
            <div>
              <p>{address?.fullName}</p>
              <p>{address?.flat}</p>
              <p>{address?.area}</p>
              <p>{address?.landmark}</p>
              <p>
                {address?.city} {address?.state}
              </p>
              <p>Phone : {address?.phone}</p>
            </div>
          </div>
          <div className={styles.PaymentContainer}>
            <h5>Payment Method</h5>

            <div>
              <p>Card Details</p>
              <CardElement />
            </div>
          </div>
          <div className={styles.OrderContainer}>
            <h5>Your Order</h5>
            <div>
              {basket.map((product) => {
                return (
                  <div className={styles.Product}>
                    <div className={styles.Image}>
                      <img src={product.imageUrl} alt="" />
                    </div>
                    <div className={styles.Description}>
                      <h4>{product.title}</h4>
                      <p>₹ {product.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.Subtotal}>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal({basket.length} items) : <strong>{value}</strong>
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
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
