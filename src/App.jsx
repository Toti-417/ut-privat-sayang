import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Disc3,
  Play,
  Pause,
  BookOpen,
  Lightbulb,
  ClipboardCheck,
  Trophy,
  Star,
  CalendarDays,
  Sparkles,
} from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { COURSES } from './data/coursesMeta';
import { STATISTIK_QUESTIONS } from './data/statistikData';
import TotiBuddy from './components/TotiBuddy';
import CourseWorkspace from './components/CourseWorkspace';

const STORAGE_KEY = 'ut_privat_sayang_v1';

// Target 1 month from Nov 12, 2026 -> Dec 12, 2026
const EXPIRE_DATE = new Date('2026-12-12T23:59:59+07:00');
const DAYS_REMAINING = Math.max(0, Math.ceil((EXPIRE_DATE.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

async function loadCourseQuestions(code) {
  switch (code) {
    case 'EMBS4209':
      return (await import('./data/questions/EMBS4209.json')).default;
    case 'EMBS4206':
      return (await import('./data/questions/EMBS4206.json')).default;
    case 'ECON4101':
      return (await import('./data/questions/ECON4101.json')).default;
    case 'MKDI4203':
      return (await import('./data/questions/MKDI4203.json')).default;
    case 'EMBS4204':
      return (await import('./data/questions/EMBS4204.json')).default;
    case 'EMBS4207':
      return (await import('./data/questions/EMBS4207.json')).default;
    case 'FSIK4108':
      return (await import('./data/questions/FSIK4108.json')).default;
    case 'MKKI4201':
      return STATISTIK_QUESTIONS;
    default:
      return [];
  }
}

function readProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function App() {
  const [progress, setProgress] = useState(readProgress);
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [initialTab, setInitialTab] = useState('guide');
  const [loadingCourse, setLoadingCourse] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [dashMood, setDashMood] = useState('idle');
  const [dashMsg, setDashMsg] = useState(
    'Halooo Sayangku 🌼🌻! Aku udah rangkumin semua 8 matkul (1.001 soal kisi-kisi lengkap dengan cara & simulasi ujiannya). Pilih matkul mana yang mau kita taklukin hari ini? ❤️'
  );

  const audioRef = useRef(null);

  const daysRemaining = DAYS_REMAINING;

  const stats = useMemo(() => {
    let totalAnswered = 0;
    let totalCorrect = 0;
    let examsTaken = 0;
    COURSES.forEach((c) => {
      const cp = progress[c.id];
      if (!cp) return;
      const ans = Object.values(cp.answers || {});
      totalAnswered += ans.length;
      totalCorrect += ans.filter((a) => a.isCorrect).length;
      if (cp.bestScore !== undefined) examsTaken++;
    });
    const xp = totalCorrect * 10 + examsTaken * 50;
    return { totalAnswered, totalCorrect, examsTaken, xp };
  }, [progress]);

  const updateProgress = (next) => {
    setProgress(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore storage quota errors
    }
  };

  const handleSaveAnswer = (courseId, qNum, selected, isCorrect) => {
    const cur = progress[courseId] || { answers: {} };
    const next = {
      ...progress,
      [courseId]: {
        ...cur,
        answers: {
          ...(cur.answers || {}),
          [qNum]: { selected, isCorrect },
        },
      },
    };
    updateProgress(next);
  };

  const handleSaveExamScore = (courseId, score, right, total) => {
    const cur = progress[courseId] || { answers: {} };
    const prevBest = cur.bestScore || 0;
    const next = {
      ...progress,
      [courseId]: {
        ...cur,
        bestScore: Math.max(prevBest, score),
        lastExam: { score, right, total, date: new Date().toLocaleDateString('id-ID') },
      },
    };
    updateProgress(next);
  };

  const openCourse = async (course, tab = 'guide') => {
    setLoadingCourse(true);
    try {
      const qs = await loadCourseQuestions(course.id);
      setActiveQuestions(qs);
      setInitialTab(tab);
      setActiveCourse(course);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setLoadingCourse(false);
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.35;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const sendHugBoost = () => {
    confetti({ particleCount: 55, spread: 75, origin: { y: 0.55 } });
    setDashMood('happy');
    setDashMsg(
      'Peluk erat + cium semangat dikirim! 🫂❤️ Jangan stres belajarnya ya sayang, Mas Toti bangga banget liat usaha kamu!'
    );
    setTimeout(() => setDashMood('idle'), 3200);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '16px 14px 48px' }}>
      <audio ref={audioRef} src="/tulus-teman-hidup.mp3" loop preload="auto" />

      {/* Top Sticky Utility Bar */}
      <div
        style={{
          maxWidth: '920px',
          margin: '0 auto 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '999px',
            background: 'rgba(255, 183, 3, 0.14)',
            border: '1px solid rgba(255, 183, 3, 0.3)',
            fontSize: '12px',
            fontWeight: 700,
            color: '#fde68a',
          }}
        >
          <CalendarDays size={14} color="#ffb703" />
          <span>Aktif {daysRemaining} hari lagi (Kelas Privat 1 Bulan)</span>
        </div>

        <button
          onClick={toggleMusic}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '6px 12px',
            borderRadius: '999px',
            background: 'rgba(25, 20, 39, 0.85)',
            border: '1px solid rgba(255, 117, 140, 0.35)',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          <motion.span
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isPlaying ? { duration: 4, repeat: Infinity, ease: 'linear' } : {}}
            style={{ display: 'inline-flex' }}
          >
            <Disc3 size={15} color="#ffb703" />
          </motion.span>
          <span>{isPlaying ? 'Pause Tulus' : 'Putar Musik Santai'}</span>
          {isPlaying ? <Pause size={13} color="#ff758c" /> : <Play size={13} color="#34d399" />}
        </button>
      </div>

      {activeCourse ? (
        <CourseWorkspace
          course={activeCourse}
          questions={activeQuestions}
          progress={progress[activeCourse.id]}
          onSaveAnswer={handleSaveAnswer}
          onSaveExamScore={handleSaveExamScore}
          onBack={() => setActiveCourse(null)}
          initialTab={initialTab}
        />
      ) : (
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel"
            style={{ padding: '20px', marginBottom: '16px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#ff758c', letterSpacing: '0.8px' }}>
                  🎓 PORTAL BELAJAR PRIVAT • 8 MATA KULIAH UT
                </span>
                <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginTop: '4px', lineHeight: 1.25 }}>
                  Ruang Belajar SayangKu 🌼🌻
                </h1>
                <p style={{ fontSize: '13.5px', color: '#d8b4fe', marginTop: '4px' }}>
                  Lengkap 1.001 soal kisi-kisi, rangkuman rumus, cara pengerjaan step-by-step, &amp; ujian simulasi!
                </p>
              </div>

              <button
                onClick={sendHugBoost}
                style={{
                  padding: '9px 14px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #ff4d8d 0%, #ffb703 100%)',
                  color: '#fff',
                  fontSize: '12.5px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 6px 18px rgba(255,77,141,0.35)',
                }}
              >
                <Sparkles size={15} /> Minta Peluk Semangat 🫂
              </button>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                marginTop: '16px',
              }}
            >
              <div style={styles.statBox}>
                <Star size={16} color="#ffb703" />
                <div>
                  <div style={styles.statVal}>{stats.xp} XP</div>
                  <div style={styles.statLbl}>Bintang Sayang</div>
                </div>
              </div>
              <div style={styles.statBox}>
                <Lightbulb size={16} color="#34d399" />
                <div>
                  <div style={styles.statVal}>{stats.totalCorrect} / 1.001</div>
                  <div style={styles.statLbl}>Soal Dikuasai</div>
                </div>
              </div>
              <div style={styles.statBox}>
                <Trophy size={16} color="#ff758c" />
                <div>
                  <div style={styles.statVal}>{stats.examsTaken} / 8</div>
                  <div style={styles.statLbl}>Ujian Selesai</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '14px' }}>
              <TotiBuddy mood={dashMood} message={dashMsg} />
            </div>
          </motion.div>

          {/* 8 Courses Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '14px',
            }}
          >
            {COURSES.map((course, idx) => {
              const cp = progress[course.id] || {};
              const ansList = Object.values(cp.answers || {});
              const mastered = ansList.filter((a) => a.isCorrect).length;
              const pct = Math.min(100, Math.round((mastered / course.totalPdfQuestions) * 100));

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="glass-panel"
                  style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderTop: `3px solid ${course.color}`,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#fff',
                          background: course.gradient,
                          padding: '3px 10px',
                          borderRadius: '999px',
                        }}
                      >
                        {course.emoji} {course.code}
                      </span>

                      {cp.bestScore !== undefined ? (
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#6ee7b7' }}>
                          🏆 Best: {cp.bestScore}
                        </span>
                      ) : (
                        <span style={{ fontSize: '12px', color: '#a78bfa', fontWeight: 600 }}>
                          {course.totalPdfQuestions} Soal
                        </span>
                      )}
                    </div>

                    <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
                      {course.title}
                    </h2>
                    <p style={{ fontSize: '12.5px', color: '#c4b5fd', marginTop: '4px', lineHeight: 1.45 }}>
                      {course.tagline}
                    </p>

                    {/* Progress Bar */}
                    <div style={{ marginTop: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#e9d5ff', marginBottom: '4px' }}>
                        <span>Dikuasai: {mastered}/{course.totalPdfQuestions}</span>
                        <span>{pct}%</span>
                      </div>
                      <div style={{ width: '100%', height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', background: course.gradient, borderRadius: '999px', transition: 'width 0.4s ease' }} />
                      </div>
                    </div>
                  </div>

                  {/* 3 Action Buttons per Course */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginTop: '14px' }}>
                    <button
                      disabled={loadingCourse}
                      onClick={() => openCourse(course, 'guide')}
                      style={styles.cardBtn}
                    >
                      <BookOpen size={14} color="#fde68a" />
                      <span>Materi</span>
                    </button>
                    <button
                      disabled={loadingCourse}
                      onClick={() => openCourse(course, 'practice')}
                      style={styles.cardBtn}
                    >
                      <Lightbulb size={14} color="#6ee7b7" />
                      <span>Latihan</span>
                    </button>
                    <button
                      disabled={loadingCourse}
                      onClick={() => openCourse(course, 'exam')}
                      style={{ ...styles.cardBtn, background: 'rgba(255,77,141,0.18)', borderColor: 'rgba(255,77,141,0.35)' }}
                    >
                      <ClipboardCheck size={14} color="#ff9ebb" />
                      <span>Ujian</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
      <SpeedInsights />
    </div>
  );
}

const styles = {
  statBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    padding: '10px 12px',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  statVal: {
    fontSize: '14px',
    fontWeight: 800,
    color: '#fff',
  },
  statLbl: {
    fontSize: '11.5px',
    color: '#c4b5fd',
  },
  cardBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    padding: '9px 6px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.06)',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
  },
};
