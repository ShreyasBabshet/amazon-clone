import { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.tsx";
import styles from "./Address.module.scss";
import { AddressProps } from "./Address.types.ts";
import { AppContext } from "../../App.state.tsx";
import { useNavigate } from "react-router-dom";

const Address = ({ }: AddressProps) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  if (!context) return <></>;

  const dispatch = context.dispatch;
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
  const deliver = () => {
    dispatch({
      type: "SET_ADDRESS",
      data: {
        address: {
          fullName,
          phone,
          flat,
          area,
          landmark,
          city,
        },
      },
    });
    navigate("/payment");
  };

  return (
    <div className={styles.Container}>
      <Navbar />
      <div className={styles.Main}>
        <div className={styles.FormContainer}>
          <h3>Need Some Details!</h3>
          <div className={styles.Input}>
            <p>Full Name</p>
            <input
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="John Smith"
              value={fullName}
            />
          </div>
          <div className={styles.Input}>
            <p>Phone Number</p>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className={styles.Input}>
            <p>Flat, House no. Building, Company</p>
            <input
              type="text"
              onChange={(e) => setFlat(e.target.value)}
              value={flat}
            />
          </div>
          <div className={styles.Input}>
            <p>Area, Colony, Street</p>
            <input
              type="text"
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />
          </div>
          <div className={styles.Input}>
            <p>Landmark</p>
            <input
              type="text"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </div>
          <div className={styles.Input}>
            <p>Town/City</p>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div className={styles.Input}>
            <p>State/Province</p>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>

          <button onClick={deliver}>Deliver to this Address</button>
        </div>
      </div>
    </div>
  );
};

export default Address;
