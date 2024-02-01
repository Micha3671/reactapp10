import styles from "./Image.module.css";
import bildchen from "./../../../../bilder/cat2.jfif";
function Image() {
  return (
    <div className={styles.profilBild}>
      <img class="profil-bild-img" src={bildchen} alt="bild"></img>
    </div>
  );
}
export default Image;
