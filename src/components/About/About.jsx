import React from "react";
import styles from "./About.module.css";
import img1 from "../../assets/about/aboutImage.png";
import img2 from "../../assets/about/cursorIcon.png";
import img3 from "../../assets/about/serverIcon.png";
import img4 from "../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={img1}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={img2} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={img3} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Automation Tester </h3>
              <p>
                An automation tester designs, creates, and executes automated
                tests to ensure software quality and functionality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={img4} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
