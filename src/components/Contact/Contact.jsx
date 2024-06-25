import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../../../portfolio-react/src/utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nilanjanadey.uembca2024@gmail.com">
            nilanjanadey.uembca2024@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nilanjana-dey-23533422b">
            linkedin.com/Nilanjana-dey
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Nilanjana30">
            github.com/Nilanjana30
          </a>
        </li>
      </ul>
    </footer>
  );
};
