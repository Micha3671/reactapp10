// import AppData from "../../../../utils/AppData";
import StandardBtn from "../../../common/buttons/standard-btn/StandardBtn";
import styles from "./NavbarRight.module.css";

function NavbarRight() {
  return (
    <div className={styles.mainContainer}>
      <StandardBtn text={"Login"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Sign Up"} />
    </div>
  );
}

export default NavbarRight;
