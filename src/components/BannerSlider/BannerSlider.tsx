import Slider from "react-slick";
import styles from "./BannerSlider.module.scss";
import NextButton from "../NextButton/NextButton.tsx";
import PrevButton from "../PrevButton/PrevButton.tsx";
import { carouselImages } from "./mock.ts";

const BannerSlider: React.FC = () => {
  return (
    <div className={styles.carouselWrapper}>
      <Slider
        autoplay={true}
        speed={500}
        nextArrow={<NextButton />}
        prevArrow={<PrevButton />}
      >
        {carouselImages.map((item, indx) => (
          <div className={styles.carouselItem} key={indx}>
            <img src={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
