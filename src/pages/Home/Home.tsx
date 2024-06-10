import Navbar from "../../components/Navbar/Navbar.tsx";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types.ts";
import bannerImage from "../../assets/banner-bg.jpg";
import books from "../../assets/books.jpg";
import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";
// import { useContext, useEffect } from "react";
// import { AppContext } from "../../App.state.tsx";
import CardSlider from "../../components/CardSlider/CardSlider.tsx";
const Home = ({}: HomeProps) => {
  // const context = useContext(AppContext);
  // if (!context) return <></>;
  // const { dispatch } = context;
  // useEffect(() => {
  //   dispatch({
  //     type: "GET_CATEGORIES",
  //   });
  // }, []);
  // const cartItemCount = state.cartItemCount;
  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.BannerContainer}>
        <img src={bannerImage} alt="" />
      </div>
      <div className={styles.Main}>
        <div className={styles.Category}>
          <CategoryCard
            title="Flat 40% of on books"
            categoryName="Books"
            imageUrl={books}
          />
          <CategoryCard
            title="Flat 40% of on books"
            categoryName="Books"
            imageUrl={books}
          />
          <CategoryCard
            title="Flat 40% of on books"
            categoryName="Books"
            imageUrl={books}
          />
          <CategoryCard
            title="Flat 40% of on books"
            categoryName="Books"
            imageUrl={books}
          />
        </div>
        <CardSlider />
        <div className={[styles.Category, styles.margin].join(" ")}>
          <CategoryCard
            title="Flat 40% of on books"
            categoryName="Books"
            imageUrl={books}
          />
          <CategoryCard
            title="Flat 40% of on books"
            categoryName="Books"
            imageUrl={books}
          />
          <CategoryCard
            title="Flat 40% of on books"
            categoryName="Books"
            imageUrl={books}
          />
          <CategoryCard
            title="Flat 40% of on books"
            categoryName="Books"
            imageUrl={books}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
