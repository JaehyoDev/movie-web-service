import style from "../css/Banner.module.css";
import image_1 from "./images/avatar_the_way_of_water_1.jpg";
import image_2 from "./images/avatar_the_way_of_water_2.jpg";
import image_3 from "./images/avatar_the_way_of_water_3.jpg";

const Banner = () => {
  const images = [image_1, image_2, image_3];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  console.log(chosenImage);
  return <img className={style.img} src={chosenImage} />;
};

export default Banner;
