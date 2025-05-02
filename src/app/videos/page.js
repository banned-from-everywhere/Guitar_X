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
import styles from "./videos.module.css";

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
      <Link href="/videos" className={styles.active}>
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

const VideoCard = ({ video }) => (
  <div className={styles.videoCard}>
    <div className={styles.videoThumbnail}>
      <img src={video.thumbnail} alt={video.title} />
      <div className={styles.duration}>{video.duration}</div>
    </div>
    <div className={styles.videoInfo}>
      <h3>{video.title}</h3>
      <p className={styles.description}>{video.description}</p>
      <div className={styles.meta}>
        <span className={styles.level}>{video.level}</span>
        <span className={styles.category}>{video.category}</span>
      </div>
      <div className={styles.stats}>
        <span>👁️ {video.views}</span>
        <span>⭐ {video.rating}</span>
      </div>
    </div>
  </div>
);

const VideosPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const videos = [
    {
      id: 1,
      title: "Beginner's Guide to Fingerpicking",
      description: "Learn the basics of fingerpicking patterns and techniques",
      thumbnail: "https://i.ytimg.com/vi/example1/maxresdefault.jpg",
      duration: "12:34",
      level: "Beginner",
      category: "Technique",
      views: "1.2K",
      rating: "4.8",
    },
    {
      id: 2,
      title: "Mastering Barre Chords",
      description: "Complete guide to playing clean barre chords",
      thumbnail: "https://i.ytimg.com/vi/example2/maxresdefault.jpg",
      duration: "15:20",
      level: "Intermediate",
      category: "Chords",
      views: "2.5K",
      rating: "4.9",
    },
    {
      id: 3,
      title: "Advanced Soloing Techniques",
      description: "Take your soloing to the next level with these tips",
      thumbnail: "https://i.ytimg.com/vi/example3/maxresdefault.jpg",
      duration: "18:45",
      level: "Advanced",
      category: "Soloing",
      views: "3.1K",
      rating: "4.7",
    },
    {
      id: 4,
      title: "Blues Guitar Basics",
      description: "Learn essential blues techniques and scales",
      thumbnail: "https://i.ytimg.com/vi/example4/maxresdefault.jpg",
      duration: "14:30",
      level: "Beginner",
      category: "Blues",
      views: "1.8K",
      rating: "4.6",
    },
  ];

  const categories = [
    "all",
    "Technique",
    "Chords",
    "Soloing",
    "Blues",
    "Theory",
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || video.category === selectedCategory;
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
              placeholder="Search videos..."
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

        <div className={styles.videosGrid}>
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VideosPage;
