import React from "react";
import styles from "./Hero.module.css";
//import { getImageUrl } from "../../../../portfolio-react/src/utils";
import myImg from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nilanjana! </h1>
        <p className={styles.description}>
          i'm a Frontend Developer proficient in React, Next.js, and Tailwind
          CSS. I'm also a self-taught programmer who loves to learn new things.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
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
