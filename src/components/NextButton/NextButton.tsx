import styles from "./NextButton.module.scss";
import { NextButtonProps } from "./NextButton.types.ts";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const NextButton = ({ className, style, onClick }: NextButtonProps) => {
  return (
    <div
      className={
        className + [styles.carouselBtn, styles.carouseNxtBtn].join(" ")
      }
      style={style}
      onClick={onClick}
    >
      <div className={styles.carouselBtnIcon}>
        <ChevronRightIcon sx={{ color: "black" }} />
      </div>
    </div>
  );
};

export default NextButton;
