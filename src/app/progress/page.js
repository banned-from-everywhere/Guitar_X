"use client";

import React from "react";
import { Trophy, Target, Clock, Award } from "lucide-react";
import Layout from "@/components/Layout";
import styles from "./progress.module.css";

const StatCard = ({ icon: Icon, title, value, unit }) => (
  <div className={styles.statCard}>
    <div className={styles.statIcon}>
      <Icon size={24} />
    </div>
    <div className={styles.statInfo}>
      <h3>{title}</h3>
      <p>
        {value} {unit}
      </p>
    </div>
  </div>
);

const AchievementCard = ({ achievement }) => (
  <div
    className={`${styles.achievementCard} ${
      achievement.completed ? styles.completed : ""
    }`}
  >
    <div className={styles.achievementIcon}>
      <Trophy size={24} />
    </div>
    <div className={styles.achievementInfo}>
      <h3>{achievement.title}</h3>
      <p>{achievement.description}</p>
      {achievement.completed ? (
        <span className={styles.completedBadge}>Completed</span>
      ) : (
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${achievement.progress}%` }}
            />
          </div>
          <span>{achievement.progress}%</span>
        </div>
      )}
    </div>
  </div>
);

const ProgressPage = () => {
  const stats = [
    {
      icon: Clock,
      title: "Total Practice Time",
      value: "24",
      unit: "hours",
    },
    {
      icon: Target,
      title: "Chords Mastered",
      value: "15",
      unit: "chords",
    },
    {
      icon: Award,
      title: "Achievements",
      value: "8",
      unit: "completed",
    },
    {
      icon: Target,
      title: "Practice Streak",
      value: "7",
      unit: "days",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete 5 practice sessions",
      progress: 100,
      completed: true,
    },
    {
      id: 2,
      title: "Chord Master",
      description: "Learn 10 basic chords",
      progress: 80,
      completed: false,
    },
    {
      id: 3,
      title: "Practice Makes Perfect",
      description: "Practice for 10 hours total",
      progress: 60,
      completed: false,
    },
    {
      id: 4,
      title: "Fingerstyle Pro",
      description: "Master 3 fingerpicking patterns",
      progress: 40,
      completed: false,
    },
  ];

  return (
    <Layout activePage="progress">
      <div className={styles.progressHeader}>
        <h2>Your Progress</h2>
        <p>Track your learning journey and achievements</p>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className={styles.achievementsSection}>
        <h3>Achievements</h3>
        <div className={styles.achievementsGrid}>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProgressPage;
