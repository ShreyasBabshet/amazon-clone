import styles from "./Login.module.scss";
import { LoginProps } from "./Login.types.ts";
import amazonLogo from "../../assets/amazon-black1.png";
const Login = ({}: LoginProps) => {
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.Logo}>
        <img src={amazonLogo} alt="" />
      </div>
      <div className={styles.FormContainer}>
        <h3>Sign-In</h3>
        <div className={styles.InputContainer}>
          <p>Email</p>
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <div className={styles.InputContainer}>
          <p>Password</p>
          <input type="password" placeholder="************" />
        </div>
        <button className={styles.LoginButton}>Login</button>

        <div className={styles.InfoText}>
          By Continuing, you agree to Amazon's
          <span> Conditions of use </span>and
          <span> Privacy Notice</span>
        </div>
          </div>
          
          <button className={styles.SignupButton}>Create Account in Amazon</button>
    </div>
  );
};

export default Login;
