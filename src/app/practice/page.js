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
  Timer,
  Target,
  CheckCircle,
} from "lucide-react";
import styles from "./practice.module.css";

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
      <Link href="/practice" className={styles.active}>
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

const ExerciseCard = ({ exercise, onStart }) => (
  <div className={styles.exerciseCard}>
    <div className={styles.exerciseHeader}>
      <h3>{exercise.title}</h3>
      <span className={styles.level}>{exercise.level}</span>
    </div>
    <p className={styles.description}>{exercise.description}</p>
    <div className={styles.stats}>
      <div className={styles.stat}>
        <Timer size={16} />
        <span>{exercise.duration}</span>
      </div>
      <div className={styles.stat}>
        <Target size={16} />
        <span>{exercise.target}</span>
      </div>
    </div>
    <button className={styles.startButton} onClick={() => onStart(exercise)}>
      Start Exercise
    </button>
  </div>
);

const PracticePage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const exercises = [
    {
      id: 1,
      title: "Chord Transition Practice",
      description:
        "Practice smooth transitions between common chord progressions",
      level: "Beginner",
      duration: "10 min",
      target: "5 sets",
    },
    {
      id: 2,
      title: "Fingerpicking Patterns",
      description: "Master essential fingerpicking patterns and techniques",
      level: "Intermediate",
      duration: "15 min",
      target: "3 patterns",
    },
    {
      id: 3,
      title: "Scale Practice",
      description:
        "Improve your speed and accuracy with major and minor scales",
      level: "Advanced",
      duration: "20 min",
      target: "4 octaves",
    },
    {
      id: 4,
      title: "Rhythm Training",
      description: "Develop your sense of timing and rhythm",
      level: "Beginner",
      duration: "12 min",
      target: "8 patterns",
    },
  ];

  const startExercise = (exercise) => {
    setSelectedExercise(exercise);
    setTimer(0);
    setIsRunning(true);
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.practiceHeader}>
          <h2>Practice Exercises</h2>
          <p>Choose an exercise to improve your guitar skills</p>
        </div>

        <div className={styles.exercisesGrid}>
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onStart={startExercise}
            />
          ))}
        </div>

        {selectedExercise && (
          <div className={styles.activeExercise}>
            <div className={styles.exerciseInfo}>
              <h3>{selectedExercise.title}</h3>
              <div className={styles.timer}>
                <Timer size={24} />
                <span>
                  {Math.floor(timer / 60)}:
                  {(timer % 60).toString().padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className={styles.progress}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${(timer / 600) * 100}%` }}
                />
              </div>
              <div className={styles.target}>
                <Target size={16} />
                <span>{selectedExercise.target}</span>
              </div>
            </div>
            <div className={styles.controls}>
              <button
                className={styles.controlButton}
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? "Pause" : "Resume"}
              </button>
              <button
                className={styles.controlButton}
                onClick={() => {
                  setSelectedExercise(null);
                  setIsRunning(false);
                  setTimer(0);
                }}
              >
                End Exercise
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default PracticePage;
