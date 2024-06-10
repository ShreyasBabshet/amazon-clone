import styles from "./DealsCard.module.scss";
import { IDealsCard } from "./DealsCard.types.ts";

const DealsCard = ({ title, content, imgUrl }: IDealsCard) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="Image" />
      <div className={styles.cardContent}>
        <span className={styles.Title}>{title}</span>
        <span className={styles.Tagline}>Deal of the Day</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DealsCard;
