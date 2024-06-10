import Navbar from "../Navbar/Navbar.tsx";
import styles from "./CategoryCard.module.scss"; 
import { CategoryCardProps } from "./CategoryCard.types.ts" 
 
const CategoryCard = ({ title,categoryName,imageUrl}: CategoryCardProps) => { 
    return (
      <div className={styles.Container}>
        <h5>{title}</h5>
        <div className={styles.Image}>
          <img src={imageUrl} alt="" />
            </div>
            <button className={styles.Button}>See More</button>
      </div>
    );
} 
 
export default CategoryCard 
