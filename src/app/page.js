"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Guitar,
  Music,
  Video,
  BookOpen,
  Trophy,
  Star,
  ArrowRight,
  PlayCircle,
  Bookmark,
  Clock,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import styles from "./page.module.css";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const features = [
    {
      icon: <Guitar size={24} />,
      title: "Interactive Chord Library",
      description:
        "Learn and practice hundreds of guitar chords with interactive diagrams and audio examples.",
    },
    {
      icon: <Video size={24} />,
      title: "Video Lessons",
      description:
        "Step-by-step video tutorials for all skill levels, from beginner to advanced techniques.",
    },
    {
      icon: <Music size={24} />,
      title: "Practice Exercises",
      description:
        "Structured practice routines to improve your skills and track your progress.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Learning Resources",
      description:
        "Comprehensive guides, tips, and tricks to help you master the guitar.",
    },
  ];

  const testimonials = [
    {
      text: "GuitarX has completely transformed my learning journey. The interactive lessons and progress tracking keep me motivated!",
      author: "Sarah M.",
      role: "Beginner Guitarist",
    },
    {
      text: "As a music teacher, I recommend GuitarX to all my students. The structured approach and quality content are unmatched.",
      author: "David R.",
      role: "Music Teacher",
    },
    {
      text: "The chord library and practice exercises have helped me improve faster than I ever thought possible.",
      author: "Michael T.",
      role: "Intermediate Player",
    },
  ];

  const latestContent = [
    {
      title: "Beginner Chord Progressions",
      description: "Learn essential chord progressions for beginners",
      type: "chord",
      duration: "15 min",
      icon: <Guitar size={24} />,
    },
    {
      title: "Fingerstyle Basics",
      description: "Master the fundamentals of fingerstyle playing",
      type: "video",
      duration: "20 min",
      icon: <Video size={24} />,
    },
    {
      title: "Practice Routine Guide",
      description: "Create an effective daily practice routine",
      type: "practice",
      duration: "10 min",
      icon: <Music size={24} />,
    },
  ];

  return (
    <Layout>
      <section className={styles.hero}>
        <h1>Master the Guitar with GuitarX</h1>
        <p>
          Your comprehensive platform for learning guitar, from basic chords to
          advanced techniques.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/chords" className={styles.heroButton}>
            <Guitar size={20} />
            Start Learning
            <ChevronRight size={20} />
          </Link>
          <Link href="/practice" className={styles.heroButton}>
            <PlayCircle size={20} />
            Watch Tutorials
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialIcon}>
                <Star size={24} />
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                {testimonial.author}
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Start Your Guitar Journey?</h2>
        <p>
          Join thousands of guitarists who have improved their skills with
          GuitarX.
        </p>
        <Link href="/chords" className={styles.ctaButton}>
          Get Started
          <ChevronRight size={20} />
        </Link>
      </section>

      <section className={styles.latestContent}>
        <h2>Latest Content</h2>
        <div className={styles.contentGrid}>
          {latestContent.map((content, index) => (
            <div key={index} className={styles.contentCard}>
              <div className={styles.contentThumbnail}>{content.icon}</div>
              <div className={styles.contentInfo}>
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <div className={styles.contentMeta}>
                  <span>
                    <Bookmark size={16} />
                    {content.type}
                  </span>
                  <span>
                    <Clock size={16} />
                    {content.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
