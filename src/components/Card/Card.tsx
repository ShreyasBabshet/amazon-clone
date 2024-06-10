import styles from "./Card.module.scss"; 
import { CardProps } from "./Card.types.ts" 
import Rating from "@material-ui/lab/Rating";
import { AppContext } from "../../App.state.tsx";
import { useContext } from "react";
const Card = ({ productId,imageUrl,title,price,rating }: CardProps) => { 
  const context = useContext(AppContext);
  if (!context) return <></>;
  const { dispatch } = context;
  const onAddToCart = (productId: number) => {
    dispatch({ type: "ADD_TO_CART", data: { productId ,imageUrl,title,price,rating} });
  }
    return (
      <div className={styles.Container}>
        <div className={styles.Image}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.Description}>
          <h5>{title}</h5>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <div>₹ { price}</div>
                <button onClick={()=>{onAddToCart(productId)}}>Add to cart</button>
        </div>
      </div>
    );
} 
 
export default Card 
