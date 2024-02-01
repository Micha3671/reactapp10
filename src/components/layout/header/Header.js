import styles from "./Header.module.css";
import Image from "./image/Image";
function Header() {
  return (
    <div className={styles.headermain}>
      <div>
        <h1 className={styles.headerText}>Dies ist ein neuer Text</h1>
      </div>
      <Image />
    </div>
  );
}

export default Header;
