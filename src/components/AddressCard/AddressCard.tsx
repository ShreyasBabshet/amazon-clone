import styles from "./AddressCard.module.scss";
// import { AddressCardProps } from "./AddressCard.types.ts";
import locationIcon from "../../assets/location.png";
const AddressCard: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.image}>
        <img src={locationIcon} alt="location" />
      </div>
      <div className={styles.Location}>
        <p>Delivering to Pune 411003</p>
        <a className={styles.link}>Update Location</a>
      </div>
    </div>
  );
};

export default AddressCard;
