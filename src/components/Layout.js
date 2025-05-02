"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Music,
  Video,
  PlayCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import styles from "./Layout.module.css";

const Layout = ({ children, activePage }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>GuitarX</h1>
        <nav className={styles.nav}>
          <Link href="/" className={activePage === "home" ? styles.active : ""}>
            <Home size={18} /> Home
          </Link>
          <Link
            href="/chords"
            className={activePage === "chords" ? styles.active : ""}
          >
            <Music size={18} /> Chords
          </Link>
          <Link
            href="/videos"
            className={activePage === "videos" ? styles.active : ""}
          >
            <Video size={18} /> Videos
          </Link>
          <Link
            href="/practice"
            className={activePage === "practice" ? styles.active : ""}
          >
            <PlayCircle size={18} /> Practice
          </Link>
          <Link
            href="/tips"
            className={activePage === "tips" ? styles.active : ""}
          >
            <Lightbulb size={18} /> Tips
          </Link>
          <Link
            href="/progress"
            className={activePage === "progress" ? styles.active : ""}
          >
            <BarChart3 size={18} /> Progress
          </Link>
        </nav>
      </header>

      <main className={styles.mainContent}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>🎶 Keep strumming, keep growing! 🎶</p>
          <nav className={styles.footerNav}>
            <Link href="/about">About</Link> |
            <Link href="/contact">Contact</Link> |
            <Link href="/privacy">Privacy</Link>
          </nav>
          <p>
            &copy; {new Date().getFullYear()} GuitarTut. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
