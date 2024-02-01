import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.headermain}>
      <div>
        <h1 className={styles.headerText}>Dies ist ein neuer Text</h1>
      </div>
    </div>
  );
}

export default Header;
