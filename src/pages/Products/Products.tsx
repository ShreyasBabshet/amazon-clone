
import camera from "../../assets/camera.png";
import Card from "../../components/Card/Card.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import styles from "./Products.module.scss"; 
import { ProductsProps } from "./Products.types.ts" 
const Products = ({ }: ProductsProps) => { 
    return (
      <div className={styles.Container}>
        <Navbar />
        <div className={styles.Main}>
          <Card
          productId={1}
          imageUrl={camera}
          title={"DSLR CAMERA"}
          price={45000}
          rating={3}
        />
        <Card
          productId={2}
          imageUrl={camera}
          title={"DSLR CAMERA"}
          price={45000}
          rating={3}
        />
        <Card
          productId={3}
          imageUrl={camera}
          title={"DSLR CAMERA"}
          price={45000}
          rating={3}
        />
        <Card
          productId={4}
          imageUrl={camera}
          title={"DSLR CAMERA"}
          price={45000}
          rating={3}
        />
        </div>
      </div>
    );
} 
 
export default Products 
