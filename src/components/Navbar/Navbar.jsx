import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import PDF from "../Resume/resume.pdf";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Nicholas Warenda
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a
              href=""
              className={styles.resume}
              onClick={(e) => {
                e.preventDefault();
                setResumeOpen(!resumeOpen);
              }}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className={styles.contactBtn}
              href="mailto:nickwarenda@gmail.com"
            >
              Contact Me
            </a>
          </li>
        </ul>
        {resumeOpen && (
          <div className={styles.resumeModal}>
            <div className={styles.resumeContent}>
              <img
                className={styles.closeBtn}
                src={getImageUrl("nav/closeIcon.png")}
                alt="close-button"
                onClick={() => setResumeOpen(!resumeOpen)}
              />
              <iframe
                src={`${PDF}#zoom=80`}
                width="100%"
                height="800px"
                title="Resume"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
