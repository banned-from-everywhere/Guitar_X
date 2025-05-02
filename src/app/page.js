"use client";

import React from "react";
import Link from "next/link";
import { Home, Music, Video, PlayCircle, Lightbulb, BarChart3 } from "lucide-react";
import "./Home.css"; 
import "../components/header"
import "../components/footer"

const Header = () => (
  <header className="header">
    <h1 className="logo">GuitarX🎸</h1>
    <nav className="nav">
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
  <footer className="footer">
    <div className="footer-content">
      <p>
        🎶 Keep strumming, keep growing! 🎶
      </p>
      <nav className="footer-nav">
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link> | 
        <Link href="/privacy">Privacy</Link>
      </nav>
      <p>
        &copy; {new Date().getFullYear()} GuitarTut. All rights reserved.
      </p>
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div className="container">
      <Header />

      <main className="main-content">
        <h2>Welcome to GuitarX 🎶</h2>
        <p>
          An interactive app for intermediate guitar players to learn new chords,
          master techniques, and track progress. Get mentored virtually and level
          up your skills.
        </p>
        <Link href="/chords" className="btn">
          🎸 Explore Chords Now
        </Link>

        <section className="featured-section">
          <h3>🎥 Featured Video</h3>
          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Featured Guitar Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section className="testimonial-section">
          <h3>⭐ What Players Are Saying</h3>
          <p>
            "GuitarTut helped me finally nail bar chords and improve my fingerstyle
            technique! Highly recommended." — Alex R.
          </p>
        </section>

        <section className="tip-section">
          <h3>💡 Tip of the Day</h3>
          <p>
            Struggling with clean chord changes? Practice slow transitions between
            just two chords for 5 minutes daily.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
