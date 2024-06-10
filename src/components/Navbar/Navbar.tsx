import styled from "styled-components";
import styles from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types.ts";
import arrowLogo from "../../assets/amazon-logo-main.jpg";
import searchIcon from "../../assets/search1.png";
import cart from "../../assets/cart2.png";
import { AppContext } from "../../App.state.tsx";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Search from "../Search/Search.tsx";
import AddressCard from "../AddressCard/AddressCard.tsx";
// import SelectChangeEvent from "@material-ui/core/Select";
const Navbar = ({}: NavbarProps) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  if (!context) return <></>;
  const { state, dispatch } = context;
  const cartItemCount = state.basket.length;
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.InnerContainer}>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={styles.LogoContainer}
        >
          <img className={styles.Logo} src={arrowLogo} alt="" />
        </div>
        <AddressCard />
        <Search />
        <div className={styles.RightContainer}>
          <div className={styles.NavButtons}>
            <p>Hello,</p>
            <p>Guest</p>
          </div>
          <div className={styles.NavButtons}>
            <p>Return,</p>
            <p>& Orders</p>
          </div>
          <div onClick={() => navigate("/checkout")} className={styles.Cart}>
            <img src={cart} alt="" />
            <p>{cartItemCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
