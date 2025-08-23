import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.text}>
        <p>Last updated August 23, 2025</p>
        {/* <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nickwarenda@gmail.com">nickwarenda@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nicholaswarenda/">
            linkedin.com/in/nicholaswarenda/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a href="https://github.com/nwarenda">github.com/nwarenda</a>
        </li>
      </ul> */}
      </div>
    </footer>
  );
};
