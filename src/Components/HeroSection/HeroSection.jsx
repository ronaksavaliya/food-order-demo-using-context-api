import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <>
      <div className="hero_container">
        <div className="hero_img">
          <img
            src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
            alt=""
          />
        </div>
        <div className="hero_disc">
          <h3> Delicious Foods Delivered to You</h3>
          <p>
            Smooth: A consistent texture free of grit, lumps, or indentations.
            Succulent: A tender, juicy texture. Tender: A soft texture that is
            easy to break down. Velvety: A smooth and rich texture.
          </p>
        </div>
      </div>
    </>
  );
}
