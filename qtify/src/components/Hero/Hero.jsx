import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.HeroTitle}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
      </div>
      <div>
        <img className={styles.HeroImage} src={HeroImage} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;
