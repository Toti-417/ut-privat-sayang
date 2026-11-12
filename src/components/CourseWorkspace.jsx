import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  Shuffle,
  Award,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import TotiBuddy from './TotiBuddy';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function CourseWorkspace({
  course,
  questions,
  progress,
  onSaveAnswer,
  onSaveExamScore,
  onBack,
  initialTab = 'guide',
}) {
  const [tab, setTab] = useState(initialTab);
  const [buddyMood, setBuddyMood] = useState('idle');
  const [buddyMsg, setBuddyMsg] = useState(course.totiTip);

  // Practice State (drafts keyed by question num so navigation preserves cleanly)
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'todo' | 'wrong'
  const [pIdx, setPIdx] = useState(0);
  const [drafts, setDrafts] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [streak, setStreak] = useState(0);

  // Exam State
  const [examStage, setExamStage] = useState('setup'); // 'setup' | 'running' | 'result'
  const [examSize, setExamSize] = useState(35);
  const [shuffleExam, setShuffleExam] = useState(true);
  const [examQs, setExamQs] = useState([]);
  const [examPos, setExamPos] = useState(0);
  const [examAnswers, setExamAnswers] = useState({});
  const [examFlags, setExamFlags] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [examReviewFilter, setExamReviewFilter] = useState('wrong'); // 'wrong' | 'all'

  const filteredQuestions = useMemo(() => {
    const ansMap = progress?.answers || {};
    if (filterMode === 'todo') {
      return questions.filter((q) => !ansMap[q.num]);
    }
    if (filterMode === 'wrong') {
      return questions.filter((q) => ansMap[q.num] && !ansMap[q.num].isCorrect);
    }
    return questions;
  }, [questions, progress, filterMode]);

  const safeIdx = Math.min(pIdx, Math.max(0, filteredQuestions.length - 1));
  const curQ = filteredQuestions[safeIdx];
  const savedPracticeAns = curQ ? progress?.answers?.[curQ.num] : null;
  const multiDraft = savedPracticeAns ? (savedPracticeAns.selected || []) : (curQ ? (drafts[curQ.num] || []) : []);
  const revealed = Boolean(savedPracticeAns);

  const finishExam = useCallback(() => {
    let right = 0;
    examQs.forEach((q) => {
      const ans = examAnswers[q.num] || [];
      if (arraysEqual(ans, q.correct)) right++;
    });
    const score = examQs.length ? Math.round((right / examQs.length) * 100) : 0;
    onSaveExamScore(course.id, score, right, examQs.length);
    setExamStage('result');

    if (score >= 70) {
      confetti({ particleCount: 90, spread: 90, origin: { y: 0.6 } });
      setBuddyMood('proud');
      setBuddyMsg(`YEAAAY SKOR ${score}!! Bangga banget sama kamu sayangku! Peluk erat dari Mas Toti 🫂🎓❤️`);
    } else {
      setBuddyMood('encourage');
      setBuddyMsg(`Skor ${score} — gapapa banget sayang! Yuk cek pembahasan soal yang masih keliru di bawah, habis itu ulang pasti naik drastis! 💪❤️`);
    }
  }, [examQs, examAnswers, onSaveExamScore, course.id]);

  // Exam Countdown Timer
  useEffect(() => {
    if (tab !== 'exam' || examStage !== 'running') return;
    if (timeLeft <= 0) {
      const t = setTimeout(finishExam, 0);
      return () => clearTimeout(t);
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [tab, examStage, timeLeft, finishExam]);

  const handlePracticeSelectSingle = (optIdx) => {
    if (!curQ || revealed) return;
    const isCorrect = curQ.correct.includes(optIdx);
    onSaveAnswer(course.id, curQ.num, [optIdx], isCorrect);
    reactToAnswer(isCorrect);
  };

  const handlePracticeCheckMulti = () => {
    if (!curQ || revealed || multiDraft.length === 0) return;
    const isCorrect = arraysEqual(multiDraft, curQ.correct);
    onSaveAnswer(course.id, curQ.num, multiDraft, isCorrect);
    reactToAnswer(isCorrect);
  };

  const reactToAnswer = (isCorrect) => {
    if (isCorrect) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setBuddyMood('happy');
      if (nextStreak % 3 === 0) {
        confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
        setBuddyMsg(`KEREN BANGET SAYANG! ${nextStreak}x bener berturut-turut!! 🔥❤️`);
      } else {
        const goods = [
          'Mantap betul sayang! Jawaban kamu tepat banget 🎯❤️',
          'Pinter banget sih pacarnya Mas Toti!! 🌟',
          'Yeay bener! Lanjut soal berikutnya yaa 💪🌻',
        ];
        setBuddyMsg(goods[Math.floor(Math.random() * goods.length)]);
      }
    } else {
      setStreak(0);
      setBuddyMood('encourage');
      setBuddyMsg('Gpp salah sayang, kan lagi belajar! Baca kotak "Cara Pengerjaan" di bawah biar langsung nempel ya 🫂❤️');
    }
  };

  const toggleMultiOption = (idx, isExam = false) => {
    if (isExam) {
      const eq = examQs[examPos];
      const cur = examAnswers[eq.num] || [];
      if (eq.isMulti) {
        const next = cur.includes(idx) ? cur.filter((x) => x !== idx) : [...cur, idx];
        setExamAnswers((prev) => ({ ...prev, [eq.num]: next }));
      } else {
        setExamAnswers((prev) => ({ ...prev, [eq.num]: [idx] }));
      }
      return;
    }
    if (revealed || !curQ) return;
    setDrafts((prev) => {
      const cur = prev[curQ.num] || [];
      const next = cur.includes(idx) ? cur.filter((x) => x !== idx) : [...cur, idx];
      return { ...prev, [curQ.num]: next };
    });
  };

  const startExam = () => {
    let pool = [...questions];
    if (shuffleExam) {
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }
    const chosen = examSize >= pool.length ? pool : pool.slice(0, examSize);
    setExamQs(chosen);
    setExamPos(0);
    setExamAnswers({});
    setExamFlags({});
    const mins = examSize <= 15 ? 15 : examSize <= 35 ? 45 : 90;
    setTimeLeft(mins * 60);
    setExamStage('running');
    setBuddyMood('idle');
    setBuddyMsg('Mode Ujian dimulai! Tarik napas dulu, kerjain pelan-pelan, kamu pasti bisa sayangkuu! 🎓🍀');
  };

  const examScoreStats = useMemo(() => {
    if (examStage !== 'result') return { right: 0, total: 0, score: 0, grade: 'A' };
    let right = 0;
    examQs.forEach((q) => {
      if (arraysEqual(examAnswers[q.num] || [], q.correct)) right++;
    });
    const total = examQs.length || 1;
    const score = Math.round((right / total) * 100);
    const grade = score >= 85 ? 'A' : score >= 75 ? 'A-' : score >= 65 ? 'B' : score >= 55 ? 'C' : 'Perlu Review';
    return { right, total, score, grade };
  }, [examStage, examQs, examAnswers]);

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', paddingBottom: '48px' }}>
      {/* Top Back Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', gap: '10px' }}>
        <button onClick={onBack} style={styles.backBtn}>
          <ArrowLeft size={16} /> Semua Matkul
        </button>
        <span style={{ ...styles.codePill, background: course.gradient }}>
          {course.emoji} {course.code}
        </span>
      </div>

      {/* Course Title */}
      <div style={{ marginBottom: '14px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', lineHeight: 1.25 }}>
          {course.title}
        </h2>
        <p style={{ fontSize: '12.5px', color: '#c4b5fd', marginTop: '2px' }}>
          {questions.length} Soal Kisi-Kisi • Pembahasan Cara • Simulasi Ujian
        </p>
      </div>

      {/* Animated Mas Toti Study Buddy */}
      <div style={{ marginBottom: '14px' }}>
        <TotiBuddy mood={buddyMood} message={buddyMsg} compact />
      </div>

      {/* Mode Tabs */}
      <div style={styles.tabBar}>
        {[
          { id: 'guide', label: 'Materi & Rumus', icon: BookOpen },
          { id: 'practice', label: 'Latihan + Cara', icon: Lightbulb },
          { id: 'exam', label: 'Ujian Privat', icon: ClipboardCheck },
        ].map((t) => {
          const Icon = t.icon;
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                ...styles.tabBtn,
                background: active ? course.gradient : 'transparent',
                color: active ? '#fff' : '#c4b5fd',
                fontWeight: active ? 800 : 600,
              }}
            >
              <Icon size={15} />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: MATERI & RUMUS */}
      {tab === 'guide' && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {course.studyGuide.map((sec, i) => (
            <div key={i} className="glass-panel" style={{ padding: '16px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#ffb703', marginBottom: '10px' }}>
                {sec.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {sec.points.map((pt, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.55,
                      color: pt.startsWith('👉') ? '#fde68a' : '#ede9fe',
                      background: pt.startsWith('👉') ? 'rgba(255,183,3,0.1)' : 'rgba(255,255,255,0.03)',
                      padding: '8px 11px',
                      borderRadius: '10px',
                      borderLeft: pt.startsWith('👉') ? '3px solid #ffb703' : '3px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <button
            onClick={() => setTab('practice')}
            style={{ ...styles.primaryAction, background: course.gradient }}
          >
            <Sparkles size={16} /> Gas Mulai Latihan Soal + Cara Pengerjaan!
          </button>
        </motion.div>
      )}

      {/* TAB 2: LATIHAN + CARA PENGERJAAN */}
      {tab === 'practice' && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          {/* Filter + Jump Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: `Semua (${questions.length})` },
                { id: 'todo', label: 'Belum' },
                { id: 'wrong', label: 'Salah ❌' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setFilterMode(f.id);
                    setPIdx(0);
                    setShowHint(false);
                  }}
                  style={{
                    ...styles.filterChip,
                    background: filterMode === f.id ? 'rgba(255,77,141,0.28)' : 'rgba(255,255,255,0.06)',
                    borderColor: filterMode === f.id ? '#ff4d8d' : 'rgba(255,255,255,0.12)',
                    color: filterMode === f.id ? '#fff' : '#d8b4fe',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <button onClick={() => setShowGrid((g) => !g)} style={styles.filterChip}>
              Nomor Soal ({filteredQuestions.length ? safeIdx + 1 : 0}/{filteredQuestions.length}) ▾
            </button>
          </div>

          {/* Collapsible Question Number Grid */}
          {showGrid && (
            <div className="glass-panel" style={{ padding: '12px', marginBottom: '12px', maxHeight: '210px', overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(38px, 1fr))', gap: '6px' }}>
                {filteredQuestions.map((fq, idx) => {
                  const ans = progress?.answers?.[fq.num];
                  let bg = 'rgba(255,255,255,0.07)';
                  if (ans) bg = ans.isCorrect ? 'rgba(16,185,129,0.35)' : 'rgba(239,68,68,0.35)';
                  if (idx === safeIdx) bg = '#ff4d8d';
                  return (
                    <button
                      key={fq.num}
                      onClick={() => {
                        setPIdx(idx);
                        setShowGrid(false);
                        setShowHint(false);
                      }}
                      style={{
                        padding: '6px 0',
                        borderRadius: '8px',
                        border: idx === safeIdx ? '2px solid #fff' : '1px solid rgba(255,255,255,0.1)',
                        background: bg,
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      {fq.num}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {!curQ ? (
            <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
              <p style={{ fontSize: '15px', fontWeight: 700 }}>
                {filterMode === 'wrong'
                  ? 'Yeay! Belum ada jawaban salah di matkul ini 🎉🌻'
                  : 'Semua soal di filter ini sudah kamu kerjain! Keren banget ❤️'}
              </p>
              <button onClick={() => setFilterMode('all')} style={{ ...styles.primaryAction, marginTop: '14px', background: course.gradient }}>
                Tampilkan Semua Soal
              </button>
            </div>
          ) : (
            <div className="glass-panel" style={{ padding: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700, color: '#ffb703' }}>
                  SOAL #{curQ.num} {curQ.isMulti ? '• PILIHAN MAJEMUK (BISA >1)' : ''}
                </span>
                {streak >= 2 && (
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#fb923c' }}>
                    🔥 {streak} Streak
                  </span>
                )}
              </div>

              <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#fff', whiteSpace: 'pre-line', fontWeight: 500 }}>
                {curQ.q}
              </p>

              {/* Hint Button before answering */}
              {!revealed && (
                <div style={{ marginTop: '12px' }}>
                  <button
                    onClick={() => setShowHint((h) => !h)}
                    style={{
                      background: 'rgba(255,183,3,0.14)',
                      border: '1px solid rgba(255,183,3,0.35)',
                      color: '#fde68a',
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '6px 12px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    💡 {showHint ? 'Tutup Petunjuk' : 'Minta Petunjuk Mas Toti'}
                  </button>
                  {showHint && (
                    <div style={{ marginTop: '8px', padding: '10px 12px', borderRadius: '10px', background: 'rgba(255,183,3,0.08)', fontSize: '12.5px', color: '#fef3c7', lineHeight: 1.5 }}>
                      <strong>Petunjuk Konsep:</strong> Perhatikan bagian awal pembahasan ini →{' '}
                      {curQ.cara.split('\n')[0].replace(/Jawaban.*$/i, '').slice(0, 140)}...
                    </div>
                  )}
                </div>
              )}

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '16px' }}>
                {curQ.options.map((opt, idx) => {
                  const selected = multiDraft.includes(idx);
                  const isCorrectOpt = curQ.correct.includes(idx);
                  let border = 'rgba(255,255,255,0.12)';
                  let bg = 'rgba(255,255,255,0.04)';
                  if (revealed) {
                    if (isCorrectOpt) {
                      border = '#10b981';
                      bg = 'rgba(16,185,129,0.18)';
                    } else if (selected && !isCorrectOpt) {
                      border = '#ef4444';
                      bg = 'rgba(239,68,68,0.18)';
                    }
                  } else if (selected) {
                    border = '#ff4d8d';
                    bg = 'rgba(255,77,141,0.18)';
                  }

                  return (
                    <motion.button
                      key={idx}
                      whileTap={revealed ? {} : { scale: 0.985 }}
                      onClick={() => (curQ.isMulti ? toggleMultiOption(idx, false) : handlePracticeSelectSingle(idx))}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        textAlign: 'left',
                        padding: '12px 13px',
                        borderRadius: '12px',
                        border: `1.5px solid ${border}`,
                        background: bg,
                        color: '#f8fafc',
                        fontSize: '13.5px',
                        lineHeight: 1.45,
                        cursor: revealed ? 'default' : 'pointer',
                      }}
                    >
                      <span
                        style={{
                          minWidth: '24px',
                          height: '24px',
                          borderRadius: curQ.isMulti ? '6px' : '999px',
                          background: selected ? '#ff4d8d' : 'rgba(255,255,255,0.1)',
                          color: '#fff',
                          fontWeight: 800,
                          fontSize: '12px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {opt.label}
                      </span>
                      <span style={{ flex: 1 }}>{opt.text}</span>
                      {revealed && isCorrectOpt && <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0 }} />}
                      {revealed && selected && !isCorrectOpt && <XCircle size={18} color="#f87171" style={{ flexShrink: 0 }} />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Multi-Select Confirm Button */}
              {curQ.isMulti && !revealed && (
                <button
                  onClick={handlePracticeCheckMulti}
                  disabled={multiDraft.length === 0}
                  style={{
                    ...styles.primaryAction,
                    marginTop: '14px',
                    background: multiDraft.length ? course.gradient : 'rgba(255,255,255,0.12)',
                    opacity: multiDraft.length ? 1 : 0.6,
                  }}
                >
                  Cek Jawaban ({multiDraft.length} dipilih)
                </button>
              )}

              {/* Cara Pengerjaan / Pembahasan Box */}
              <AnimatePresence>
                {revealed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      marginTop: '16px',
                      padding: '14px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(16,185,129,0.14), rgba(59,130,246,0.12))',
                      border: '1px solid rgba(52, 211, 153, 0.35)',
                    }}
                  >
                    <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#6ee7b7', marginBottom: '6px' }}>
                      🧠 CARA PENGERJAAN &amp; PEMBAHASAN MAS TOTI:
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#ecfdf5', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {curQ.cara}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Prev / Next Navigation */}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '18px' }}>
                <button
                  disabled={safeIdx === 0}
                  onClick={() => {
                    setPIdx(Math.max(0, safeIdx - 1));
                    setShowHint(false);
                  }}
                  style={{ ...styles.navBtn, opacity: safeIdx === 0 ? 0.45 : 1 }}
                >
                  <ChevronLeft size={16} /> Sebelumnya
                </button>
                <button
                  disabled={safeIdx >= filteredQuestions.length - 1}
                  onClick={() => {
                    setPIdx(Math.min(filteredQuestions.length - 1, safeIdx + 1));
                    setShowHint(false);
                  }}
                  style={{
                    ...styles.navBtn,
                    background: safeIdx < filteredQuestions.length - 1 ? course.gradient : 'rgba(255,255,255,0.08)',
                    opacity: safeIdx >= filteredQuestions.length - 1 ? 0.45 : 1,
                  }}
                >
                  Soal Berikutnya <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* TAB 3: UJIAN PRIVAT */}
      {tab === 'exam' && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          {examStage === 'setup' && (
            <div className="glass-panel" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#fff' }}>
                📝 Simulasi Ujian Privat UT — {course.shortTitle}
              </h3>
              <p style={{ fontSize: '13px', color: '#d8b4fe', marginTop: '6px', lineHeight: 1.5 }}>
                Uji kemampuan kamu tanpa bocoran dulu. Setelah dikumpulkan, langsung keluar nilai + pembahasan lengkap soal yang salah!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                {[
                  { size: 15, title: '⚡ Pemanasan Cepat (15 Soal)', desc: 'Timer 15 menit • Cocok buat latihan santai' },
                  { size: 35, title: '🎓 Simulasi UAS UT (35 Soal)', desc: 'Timer 45 menit • Standar paket ujian' },
                  { size: questions.length, title: `🏆 Full Boss Battle (${questions.length} Soal)`, desc: 'Timer 90 menit • Semua soal kisi-kisi!' },
                ].map((opt) => (
                  <button
                    key={opt.size}
                    onClick={() => setExamSize(opt.size)}
                    style={{
                      textAlign: 'left',
                      padding: '13px 15px',
                      borderRadius: '14px',
                      border: examSize === opt.size ? '2px solid #ffb703' : '1px solid rgba(255,255,255,0.12)',
                      background: examSize === opt.size ? 'rgba(255,183,3,0.14)' : 'rgba(255,255,255,0.04)',
                      color: '#fff',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '14px' }}>{opt.title}</div>
                    <div style={{ fontSize: '12px', color: '#c4b5fd', marginTop: '2px' }}>{opt.desc}</div>
                  </button>
                ))}
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '14px', fontSize: '13.5px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={shuffleExam}
                  onChange={(e) => setShuffleExam(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#ff4d8d' }}
                />
                <Shuffle size={15} color="#ffb703" />
                <span>Acak urutan soal biar makin terlatih</span>
              </label>

              <button onClick={startExam} style={{ ...styles.primaryAction, marginTop: '18px', background: course.gradient }}>
                🚀 Mulai Ujian Sekarang!
              </button>
            </div>
          )}

          {examStage === 'running' && examQs[examPos] && (
            <div>
              {/* Exam Sticky Status */}
              <div className="glass-panel" style={{ padding: '12px 14px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 800, color: timeLeft < 120 ? '#f87171' : '#ffb703' }}>
                  <Clock size={16} />
                  <span className="font-mono">{formatTime(timeLeft)}</span>
                </div>
                <div style={{ fontSize: '12.5px', color: '#e9d5ff', fontWeight: 700 }}>
                  Terjawab: {Object.values(examAnswers).filter((a) => a.length > 0).length} / {examQs.length}
                </div>
                <button
                  onClick={finishExam}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '10px',
                    border: 'none',
                    background: '#10b981',
                    color: '#fff',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  Kumpulkan ✅
                </button>
              </div>

              {/* Exam Number Pills */}
              <div className="glass-panel" style={{ padding: '10px', marginBottom: '12px', display: 'flex', gap: '6px', overflowX: 'auto' }}>
                {examQs.map((eq, idx) => {
                  const answered = (examAnswers[eq.num] || []).length > 0;
                  const flagged = examFlags[eq.num];
                  let bg = 'rgba(255,255,255,0.07)';
                  if (answered) bg = 'rgba(16,185,129,0.4)';
                  if (flagged) bg = 'rgba(245,158,11,0.45)';
                  if (idx === examPos) bg = '#ff4d8d';
                  return (
                    <button
                      key={eq.num}
                      onClick={() => setExamPos(idx)}
                      style={{
                        minWidth: '34px',
                        height: '32px',
                        borderRadius: '8px',
                        border: idx === examPos ? '2px solid #fff' : 'none',
                        background: bg,
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Active Exam Question Card */}
              {(() => {
                const eq = examQs[examPos];
                const curAns = examAnswers[eq.num] || [];
                return (
                  <div className="glass-panel" style={{ padding: '18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700, color: '#ffb703' }}>
                        UJIAN {examPos + 1}/{examQs.length} (Kisi #{eq.num}) {eq.isMulti ? '• PILIH >1' : ''}
                      </span>
                      <button
                        onClick={() => setExamFlags((f) => ({ ...f, [eq.num]: !f[eq.num] }))}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          background: examFlags[eq.num] ? 'rgba(245,158,11,0.25)' : 'rgba(255,255,255,0.06)',
                          border: 'none',
                          color: examFlags[eq.num] ? '#fbbf24' : '#c4b5fd',
                          padding: '5px 10px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        <Flag size={13} /> Ragu-ragu
                      </button>
                    </div>

                    <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#fff', whiteSpace: 'pre-line' }}>
                      {eq.q}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '16px' }}>
                      {eq.options.map((opt, idx) => {
                        const selected = curAns.includes(idx);
                        return (
                          <button
                            key={idx}
                            onClick={() => toggleMultiOption(idx, true)}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              textAlign: 'left',
                              padding: '12px 13px',
                              borderRadius: '12px',
                              border: `1.5px solid ${selected ? '#ff4d8d' : 'rgba(255,255,255,0.12)'}`,
                              background: selected ? 'rgba(255,77,141,0.22)' : 'rgba(255,255,255,0.04)',
                              color: '#fff',
                              fontSize: '13.5px',
                              lineHeight: 1.45,
                              cursor: 'pointer',
                            }}
                          >
                            <span
                              style={{
                                minWidth: '24px',
                                height: '24px',
                                borderRadius: eq.isMulti ? '6px' : '999px',
                                background: selected ? '#ff4d8d' : 'rgba(255,255,255,0.12)',
                                color: '#fff',
                                fontWeight: 800,
                                fontSize: '12px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              {opt.label}
                            </span>
                            <span style={{ flex: 1 }}>{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '18px' }}>
                      <button
                        disabled={examPos === 0}
                        onClick={() => setExamPos((p) => Math.max(0, p - 1))}
                        style={{ ...styles.navBtn, opacity: examPos === 0 ? 0.45 : 1 }}
                      >
                        <ChevronLeft size={16} /> Sebelumnya
                      </button>
                      {examPos < examQs.length - 1 ? (
                        <button
                          onClick={() => setExamPos((p) => p + 1)}
                          style={{ ...styles.navBtn, background: course.gradient }}
                        >
                          Lanjut <ChevronRight size={16} />
                        </button>
                      ) : (
                        <button
                          onClick={finishExam}
                          style={{ ...styles.navBtn, background: '#10b981' }}
                        >
                          Selesai &amp; Nilai ✅
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {examStage === 'result' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="glass-panel" style={{ padding: '22px', textAlign: 'center' }}>
                <Award size={44} color="#ffb703" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffb703', letterSpacing: '1px' }}>
                  HASIL UJIAN PRIVAT
                </div>
                <div style={{ fontSize: '46px', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginTop: '4px' }}>
                  {examScoreStats.score}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#6ee7b7', marginTop: '4px' }}>
                  Grade: {examScoreStats.grade} • Benar {examScoreStats.right} dari {examScoreStats.total} soal
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setExamStage('setup')}
                    style={{ ...styles.navBtn, background: course.gradient }}
                  >
                    <RotateCcw size={15} /> Ujian Lagi
                  </button>
                  <button
                    onClick={() => setExamReviewFilter((f) => (f === 'wrong' ? 'all' : 'wrong'))}
                    style={styles.navBtn}
                  >
                    {examReviewFilter === 'wrong' ? 'Lihat Semua Pembahasan' : 'Filter Yang Salah Saja'}
                  </button>
                </div>
              </div>

              {/* Exam Review List */}
              {examQs
                .filter((eq) => examReviewFilter === 'all' || !arraysEqual(examAnswers[eq.num] || [], eq.correct))
                .map((eq) => {
                  const userAns = examAnswers[eq.num] || [];
                  const ok = arraysEqual(userAns, eq.correct);
                  return (
                    <div key={eq.num} className="glass-panel" style={{ padding: '16px', borderLeft: `4px solid ${ok ? '#10b981' : '#ef4444'}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700, color: '#ffb703' }}>
                          Kisi #{eq.num}
                        </span>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: ok ? '#34d399' : '#f87171' }}>
                          {ok ? '✅ Benar' : '❌ Kurang Tepat'}
                        </span>
                      </div>
                      <p style={{ fontSize: '13.5px', color: '#fff', lineHeight: 1.5 }}>{eq.q}</p>
                      <div style={{ fontSize: '12.5px', marginTop: '8px', color: '#cbd5e1' }}>
                        Jawaban kamu:{' '}
                        <strong style={{ color: ok ? '#34d399' : '#fca5a5' }}>
                          {userAns.length ? userAns.map((i) => `${eq.options[i]?.label}. ${eq.options[i]?.text}`).join(' | ') : 'Tidak dijawab'}
                        </strong>
                      </div>
                      {!ok && (
                        <div style={{ fontSize: '12.5px', marginTop: '4px', color: '#6ee7b7' }}>
                          Kunci benar:{' '}
                          <strong>
                            {eq.correct.map((i) => `${eq.options[i]?.label}. ${eq.options[i]?.text}`).join(' | ')}
                          </strong>
                        </div>
                      )}
                      <div style={{ marginTop: '10px', padding: '10px', borderRadius: '10px', background: 'rgba(16,185,129,0.12)', fontSize: '12.5px', color: '#d1fae5', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                        <strong>Cara:</strong> {eq.cara}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

const styles = {
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 13px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.14)',
    background: 'rgba(255,255,255,0.06)',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  codePill: {
    fontSize: '12px',
    fontWeight: 800,
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '999px',
  },
  tabBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '6px',
    background: 'rgba(255,255,255,0.05)',
    padding: '5px',
    borderRadius: '14px',
    marginBottom: '14px',
  },
  tabBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    padding: '9px 6px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  filterChip: {
    padding: '6px 11px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.14)',
    background: 'rgba(255,255,255,0.06)',
    color: '#e9d5ff',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  primaryAction: {
    width: '100%',
    padding: '13px 16px',
    borderRadius: '14px',
    border: 'none',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
  },
  navBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '10px 15px',
    borderRadius: '12px',
    border: 'none',
    background: 'rgba(255,255,255,0.09)',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
  },
};
