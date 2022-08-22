import React from "react";
import img1 from "../../assets/services_bg.png";
import img2 from "../../assets/services_bg.png";
import img3 from "../../assets/services_bg.png";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://www.linkpicture.com/q/Frame-3_2.png",
  },
  {
    url: "https://www.linkpicture.com/q/Frame-2_2.png",
  },
  {
    url: "https://www.linkpicture.com/q/Frame-3_2.png",
  },
  {
    url: "https://www.linkpicture.com/q/Frame-2_2.png",
  },
];

export default function ImageSlider() {
  return (
    <div className="silder__container">
      <SimpleImageSlider
        width={500}
        height={250}
        images={images}
        showBullets={false}
        showNavs={true}
      />
    </div>
  );
}
