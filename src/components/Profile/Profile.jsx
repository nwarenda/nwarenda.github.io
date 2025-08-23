import React from "react";
import { LayoutGroup, motion } from "motion/react";
import { getImageUrl } from "../../utils";
import styles from "./profile.module.css";
import RotatingText from "../Motion/RotatingText";
import { Box } from "@mui/material";

const labels = [
  "a full stack web developer!",
  "a game developer!",
  "a history buff!",
  // "a database administrator!",
  "a golfer!",
  "a mountain biker!",
];

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Nicholas</h1>
        <p className={styles.description}>
          <Box position="relative" minH={400} maxH={400} overflow="hidden">
            <LayoutGroup>
              <motion.p className="rotating-text-ptag" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                  }}
                >
                  and I am...{" "}
                </motion.span>
                <RotatingText
                  texts={labels}
                  mainClassName="rotating-text-main"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="rotating-text-split"
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                  }}
                  rotationInterval={3000}
                />
              </motion.p>
            </LayoutGroup>
          </Box>
        </p>
        <p className={styles.contactText}>Let's Connect:</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:nickwarenda@gmail.com">nickwarenda@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn Icon"
            />
            <a href="https://www.linkedin.com/in/nicholaswarenda/">
              linkedin.com/in/nicholaswarenda/
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub Icon"
            />
            <a href="https://github.com/nwarenda">github.com/nwarenda</a>
          </li>
          {/* <li className={styles.link}>
            <img
              src={getImageUrl("contact/resumeIcon.png")}
              alt="Resume Icon"
            />
            <a href="https://nwarenda.github.io/#resume">resume.pdf</a>
          </li> */}
        </ul>
      </div>

      <img
        className={styles.profileImg}
        src={getImageUrl("profile/profileImage.png")}
        alt="Profile Image"
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
