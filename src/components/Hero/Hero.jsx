import React from "react";
import styles from "./Hero.module.css";
//import { getImageUrl } from "../../../../portfolio-react/src/utils";
import myImg from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nilanjana!</h1>
        <p className={styles.description}>
          Creative UI/UX designer and React.js frontend developer crafting
          intuitive, responsive interfaces with user-centered design and
          seamless functionality.
        </p>
        <a
          href="nilanjanadey.uembca2024@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        //src={getImageUrl("hero/heroImage.png")}
        src={myImg}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
