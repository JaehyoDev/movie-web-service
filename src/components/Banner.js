import styles from "../css/Banner.module.css";
import bannerImage from "./images/avatar_the_way_of_water.jpg";

const Banner = () => {
  return (
    <div className={styles.space}>
      <img className={styles.img} src={bannerImage} alt="Banner" />;
    </div>
  );
};

export default Banner;
