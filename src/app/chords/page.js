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
  Filter,
} from "lucide-react";
import styles from "./chords.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.logo}>GuitarX</h1>
    <nav className={styles.nav}>
      <Link href="/">
        <Home size={18} /> Home
      </Link>
      <Link href="/chords" className={styles.active}>
        <Music size={18} /> Chords
      </Link>
      <Link href="/videos">
        <Video size={18} /> Videos
      </Link>
      <Link href="/practice">
        <PlayCircle size={18} /> Practice
      </Link>
      <Link href="/tips">
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

const ChordCard = ({ chord, isSelected, onClick }) => (
  <div
    className={`${styles.chordCard} ${isSelected ? styles.selected : ""}`}
    onClick={onClick}
  >
    <div className={styles.chordName}>{chord.name}</div>
    <div className={styles.chordDiagram}>
      <div className={styles.fretboard}>
        {chord.positions.map((pos, index) => (
          <div
            key={index}
            className={styles.position}
            style={{
              gridColumn: pos.string,
              gridRow: pos.fret,
            }}
          >
            {pos.finger}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.chordInfo}>
      <span className={styles.difficulty}>{chord.difficulty}</span>
      <span className={styles.category}>{chord.category}</span>
    </div>
  </div>
);

const ChordsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedChord, setSelectedChord] = useState(null);

  const chords = [
    {
      name: "C Major",
      positions: [
        { string: 6, fret: 1, finger: 1 },
        { string: 3, fret: 3, finger: 2 },
        { string: 2, fret: 4, finger: 3 },
      ],
      difficulty: "Beginner",
      category: "Open Chords",
    },
    {
      name: "G Major",
      positions: [
        { string: 1, fret: 3, finger: 3 },
        { string: 5, fret: 2, finger: 2 },
        { string: 6, fret: 3, finger: 4 },
      ],
      difficulty: "Beginner",
      category: "Open Chords",
    },
    {
      name: "D Major",
      positions: [
        { string: 1, fret: 2, finger: 1 },
        { string: 2, fret: 3, finger: 3 },
        { string: 3, fret: 2, finger: 2 },
      ],
      difficulty: "Beginner",
      category: "Open Chords",
    },
    {
      name: "F Major",
      positions: [
        { string: 4, fret: 1, finger: 1 },
        { string: 5, fret: 1, finger: 1 },
        { string: 3, fret: 3, finger: 2 },
        { string: 1, fret: 5, finger: 3 },
      ],
      difficulty: "Intermediate",
      category: "Barre Chords",
    },
    
  ];

  const categories = ["all", "Open Chords", "Barre Chords", "Power Chords"];

  const filteredChords = chords.filter((chord) => {
    const matchesSearch = chord.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || chord.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <Search size={20} />
            <input
              type="text"
              placeholder="Search chords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.filter}>
            <Filter size={20} />
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

        <div className={styles.chordsGrid}>
          {filteredChords.map((chord, index) => (
            <ChordCard
              key={index}
              chord={chord}
              isSelected={selectedChord === chord}
              onClick={() => setSelectedChord(chord)}
            />
          ))}
        </div>

        {selectedChord && (
          <div className={styles.chordDetail}>
            <h3>{selectedChord.name}</h3>
            <div className={styles.detailContent}>
              <div className={styles.detailDiagram}>
                <div className={styles.fretboard}>
                  {selectedChord.positions.map((pos, index) => (
                    <div
                      key={index}
                      className={styles.position}
                      style={{
                        gridColumn: pos.string,
                        gridRow: pos.fret,
                      }}
                    >
                      {pos.finger}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.detailInfo}>
                <p>
                  <strong>Difficulty:</strong> {selectedChord.difficulty}
                </p>
                <p>
                  <strong>Category:</strong> {selectedChord.category}
                </p>
                <p>
                  <strong>Tips:</strong> Practice transitioning to and from this
                  chord slowly.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ChordsPage;
