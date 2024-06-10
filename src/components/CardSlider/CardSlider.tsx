import DealsCard from "../DealsCard/DealsCard.tsx";
import styles from "./CardSlider.module.scss";
// import { CardSliderProps } from "./CardSlider.types.ts";

const CardSlider: React.FC = () => {
  const cardsData = [
    {
      id: 1,
      title: "Up to 70% off",
      content: "Clark Kent",
      imgUrl: "https://unsplash.it/200/200",
    },
    {
      id: 2,
      title: "Up to 70% off",
      content: "Bruce Wayne",
      imgUrl: "https://unsplash.it/201/200",
    },
    {
      id: 3,
      title: "Up to 70% off",
      content: "Peter Parker",
      imgUrl: "https://unsplash.it/200/201",
    },
    {
      id: 4,
      title: "Up to 70% off",
      content: "Tony Stark",
      imgUrl: "https://unsplash.it/201/201",
    },
    {
      id: 5,
      title: "Up to 70% off",
      content: "Reed Richards",
      imgUrl: "https://unsplash.it/202/200",
    },
    {
      id: 6,
      title: "Up to 70% off",
      content: "Wade Wilson",
      imgUrl: "https://unsplash.it/200/199",
    },
    {
      id: 7,
      title: "Up to 70% off",
      content: "Peter Quill",
      imgUrl: "https://unsplash.it/199/199",
    },
    {
      id: 8,
      title: "Up to 70% off",
      content: "Steven Rogers",
      imgUrl: "https://unsplash.it/199/200",
    },
    {
      id: 9,
      title: "Up to 70% off",
      content: "Bruce Banner",
      imgUrl: "https://unsplash.it/200/198",
    },
    {
      id: 10,
      title: "Up to 70% off",
      content: "Vincent Strange",
      imgUrl: "https://unsplash.it/198/199",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Today's Deals</h2>
        <div className={styles.cardsContainer}>
          {cardsData.map((card) => (
            <DealsCard
              title={card.title}
              content={card.content}
              imgUrl={card.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
