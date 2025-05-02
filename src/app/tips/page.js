"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  Music,
  Video,
  PlayCircle,
  Lightbulb,
  BarChart3,
  Search,
  Bookmark,
  Share2,
} from "lucide-react";
import styles from "./tips.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.logo}>GuitarX🎸</h1>
    <nav className={styles.nav}>
      <Link href="/">
        <Home size={18} /> Home
      </Link>
      <Link href="/chords">
        <Music size={18} /> Chords
      </Link>
      <Link href="/videos">
        <Video size={18} /> Videos
      </Link>
      <Link href="/practice">
        <PlayCircle size={18} /> Practice
      </Link>
      <Link href="/tips" className={styles.active}>
        <Lightbulb size={18} /> Tips
      </Link>
      <Link href="/progress">
        <BarChart3 size={18} /> Progress
      </Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <p>🎶 Keep strumming, keep growing! 🎶</p>
      <nav className={styles.footerNav}>
        <Link href="/about">About</Link> |<Link href="/contact">Contact</Link> |
        <Link href="/privacy">Privacy</Link>
      </nav>
      <p>&copy; {new Date().getFullYear()} GuitarTut. All rights reserved.</p>
    </div>
  </footer>
);

const TipCard = ({ tip }) => (
  <div className={styles.tipCard}>
    <div className={styles.tipHeader}>
      <h3>{tip.title}</h3>
      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <Bookmark size={16} />
        </button>
        <button className={styles.actionButton}>
          <Share2 size={16} />
        </button>
      </div>
    </div>
    <p className={styles.description}>{tip.description}</p>
    <div className={styles.tipContent}>{tip.content}</div>
    <div className={styles.meta}>
      <span className={styles.category}>{tip.category}</span>
      <span className={styles.difficulty}>{tip.difficulty}</span>
    </div>
  </div>
);

const TipsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const tips = [
    {
      id: 1,
      title: "Proper Hand Positioning",
      description:
        "Learn the correct way to position your hands for optimal playing",
      content:
        "Keep your thumb behind the neck, not over it. This allows for better reach and control. Your fingers should be curved and pressing down on the strings with the tips, not the pads.",
      category: "Technique",
      difficulty: "Beginner",
    },
    {
      id: 2,
      title: "Effective Practice Routine",
      description: "Maximize your practice time with these proven techniques",
      content:
        "Start with warm-up exercises, then focus on specific skills. Use a metronome to improve timing. Break down difficult parts into smaller sections and practice them slowly.",
      category: "Practice",
      difficulty: "All Levels",
    },
    {
      id: 3,
      title: "Barre Chord Mastery",
      description: "Overcome the challenges of playing barre chords",
      content:
        "Start by practicing partial barres. Use the side of your index finger for better pressure. Keep your thumb centered behind the neck for support. Practice transitioning between open chords and barre chords.",
      category: "Chords",
      difficulty: "Intermediate",
    },
    {
      id: 4,
      title: "Improving Fingerpicking",
      description: "Develop clean and precise fingerpicking technique",
      content:
        "Start with simple patterns using thumb and one finger. Keep your fingers close to the strings. Practice alternating bass notes with your thumb while maintaining a steady rhythm.",
      category: "Technique",
      difficulty: "Intermediate",
    },
  ];

  const categories = [
    "all",
    "Technique",
    "Practice",
    "Chords",
    "Theory",
    "Equipment",
  ];

  const filteredTips = tips.filter((tip) => {
    const matchesSearch =
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.tipsHeader}>
          <h2>Guitar Tips & Techniques</h2>
          <p>Learn from expert advice and improve your playing</p>
        </div>

        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <Search size={20} />
            <input
              type="text"
              placeholder="Search tips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.filter}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.tipsGrid}>
          {filteredTips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TipsPage;
