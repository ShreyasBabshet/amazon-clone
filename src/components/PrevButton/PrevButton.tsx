import styles from "./PrevButton.module.scss";
import { ChevronLeft } from "@mui/icons-material";
import { PrevButtonProps } from "./PrevButton.types.ts";

const PrevButton = ({ className, style, onClick }: PrevButtonProps) => {
  return (
    <div
      className={
        className + [styles.carouselBtn, styles.carouselPrevBtn].join(" ")
      }
      style={style}
      onClick={onClick}
    >
      <div className={styles.carouselBtnIcon}>
        <ChevronLeft sx={{ color: "black" }} />
      </div>
    </div>
  );
};

export default PrevButton;
