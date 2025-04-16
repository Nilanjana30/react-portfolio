import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../../../portfolio-react/src/utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, demo },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
      </div>
    </div>
  );
};
