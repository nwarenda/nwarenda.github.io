import React from "react";
import { getImageUrl } from "../../utils";
import { Box } from "@mui/material";
import PDF from "../Resume/resume.pdf";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* <h2 className={styles.title}>About</h2> */}
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.image}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/user.png")} alt="User" />
            <div className={styles.aboutItemText}>
              <h3>About Me</h3>
              <p>
                Born and raised in Sudbury, Ontario, I am passionate about
                technology and its ability to transform lives.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/hobbies.png")} alt="Hobbies" />
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
                On my days off, you can find me golfing, mountain biking,
                watching sci-fi movies, fishing, playing video games and/or
                learning a new skill.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/interest.png")} alt="Interests" />
            <div className={styles.aboutItemText}>
              <h3>Interests</h3>
              <p>
                Space, history, green energy, autonomous vehicles, and
                artificial intelligence.
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* <h2 className={styles.title}>Resume</h2>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={"2rem"}
      >
        <embed src={PDF} type="application/pdf" height={1000} width={750} />
      </Box> */}
    </section>
  );
};
