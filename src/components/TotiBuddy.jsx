import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHOTOS = ['/foto1.png', '/foto2.png', '/foto3.png'];

const RANDOM_CHEERS = [
  'Semangat belajarnya sayanggg! Kalau bosen tap aku aja biar aku joget 🕺❤️',
  'Jangan lupa minum air putih dulu yaa, jangan kecapean 🥺💧',
  'Pelan-pelan aja bacanya, kan udah ada cara pengerjaannya di bawah soal ✨',
  'Target kita 8 matkul lulus nilai A semuaaa! Nanti aku traktir es krim 🍦🌻',
  'I love youu! Fokus bentar ya, Mas Toti nemenin di pojokan sini terus 🤓❤️',
];

export default function TotiBuddy({ mood = 'idle', message, compact = false }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [customBubble, setCustomBubble] = useState(null);
  const [bounceKey, setBounceKey] = useState(0);

  const handleTapBuddy = () => {
    setBounceKey((k) => k + 1);
    const pick = RANDOM_CHEERS[Math.floor(Math.random() * RANDOM_CHEERS.length)];
    setCustomBubble(pick);
    setTimeout(() => setCustomBubble(null), 4500);
  };

  const cyclePhoto = (e) => {
    e.stopPropagation();
    setPhotoIdx((i) => (i + 1) % PHOTOS.length);
  };

  const displayMsg = customBubble || message;

  // Mood animations
  const bodyAnim =
    mood === 'happy' || mood === 'proud'
      ? { y: [0, -10, 0, -6, 0], rotate: [0, -4, 4, -2, 0] }
      : mood === 'encourage'
      ? { rotate: [0, -3, 3, 0], y: [0, 2, 0] }
      : { y: [0, -4, 0] };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: compact ? '10px' : '14px',
        background: 'rgba(34, 26, 54, 0.85)',
        border: '1px solid rgba(255, 117, 140, 0.28)',
        borderRadius: '18px',
        padding: compact ? '10px 12px' : '12px 16px',
        position: 'relative',
      }}
    >
      {/* Cute Animated Chibi Mas Toti Avatar */}
      <motion.button
        key={bounceKey}
        type="button"
        onClick={handleTapBuddy}
        animate={bodyAnim}
        transition={{
          duration: mood === 'happy' || mood === 'proud' ? 0.9 : 2.8,
          repeat: mood === 'idle' ? Infinity : 1,
          ease: 'easeInOut',
        }}
        whileTap={{ scale: 0.9 }}
        title="Tap Mas Toti buat semangat!"
        style={{
          background: 'linear-gradient(135deg, rgba(255,77,141,0.22), rgba(255,183,3,0.22))',
          border: '2px solid rgba(255, 183, 3, 0.45)',
          borderRadius: '16px',
          width: compact ? '60px' : '72px',
          height: compact ? '64px' : '76px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          padding: 0,
        }}
      >
        {/* Floating Mood Emoji above head */}
        <motion.span
          animate={{ y: [0, -5, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-6px',
            fontSize: '16px',
          }}
        >
          {mood === 'happy' ? '🥳' : mood === 'proud' ? '🎓' : mood === 'encourage' ? '🫂' : '🌻'}
        </motion.span>

        {/* Chibi SVG Mas Toti (glasses + striped shirt!) */}
        <svg viewBox="0 0 80 86" width={compact ? 52 : 62} height={compact ? 56 : 66}>
          {/* Ears */}
          <circle cx="19" cy="40" r="5" fill="#f3c6a5" />
          <circle cx="61" cy="40" r="5" fill="#f3c6a5" />
          {/* Striped Shirt Body */}
          <path d="M18 82 C18 62, 62 62, 62 82 Z" fill="#1e1b29" stroke="#e2d9f3" strokeWidth="1.5" />
          {/* Vertical White Stripes */}
          <line x1="28" y1="67" x2="28" y2="82" stroke="#f8fafc" strokeWidth="1.8" opacity="0.75" />
          <line x1="36" y1="65" x2="36" y2="82" stroke="#f8fafc" strokeWidth="1.8" opacity="0.75" />
          <line x1="44" y1="65" x2="44" y2="82" stroke="#f8fafc" strokeWidth="1.8" opacity="0.75" />
          <line x1="52" y1="67" x2="52" y2="82" stroke="#f8fafc" strokeWidth="1.8" opacity="0.75" />
          {/* Collar */}
          <polygon points="34,64 40,71 46,64" fill="#ff4d8d" />
          {/* Neck */}
          <rect x="35" y="56" width="10" height="10" rx="4" fill="#eab895" />
          {/* Head */}
          <ellipse cx="40" cy="39" rx="20" ry="21" fill="#f5caa9" />
          {/* Hair */}
          <path
            d="M19 36 C18 16, 62 14, 61 36 C56 26, 45 23, 35 25 C27 26, 22 30, 19 36 Z"
            fill="#1f1a24"
          />
          <path d="M26 21 Q40 12 54 22" stroke="#2d2636" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Blush */}
          <ellipse cx="26" cy="45" rx="3.8" ry="2.2" fill="#ff758c" opacity="0.55" />
          <ellipse cx="54" cy="45" rx="3.8" ry="2.2" fill="#ff758c" opacity="0.55" />
          {/* Eyes */}
          {mood === 'happy' || mood === 'proud' ? (
            <>
              <path d="M27 38 Q31 33 35 38" stroke="#1f1a24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M45 38 Q49 33 53 38" stroke="#1f1a24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="31" cy="38" r="2.6" fill="#1f1a24" />
              <circle cx="49" cy="38" r="2.6" fill="#1f1a24" />
              <circle cx="31.8" cy="37.2" r="0.9" fill="#ffffff" />
              <circle cx="49.8" cy="37.2" r="0.9" fill="#ffffff" />
            </>
          )}
          {/* Glasses (iconic black frames!) */}
          <rect x="23" y="33" width="15" height="11" rx="3.5" fill="rgba(255,255,255,0.12)" stroke="#18141e" strokeWidth="2" />
          <rect x="42" y="33" width="15" height="11" rx="3.5" fill="rgba(255,255,255,0.12)" stroke="#18141e" strokeWidth="2" />
          <line x1="38" y1="38" x2="42" y2="38" stroke="#18141e" strokeWidth="2" />
          {/* Mouth */}
          {mood === 'happy' || mood === 'proud' ? (
            <path d="M33 49 Q40 56 47 49" stroke="#b91c1c" strokeWidth="2.4" fill="#ff758c" strokeLinecap="round" />
          ) : mood === 'encourage' ? (
            <path d="M35 50 Q40 53 45 50" stroke="#7c2d12" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          ) : (
            <path d="M34 49 Q40 54 46 49" stroke="#7c2d12" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          )}
          {/* Waving Little Hand */}
          <motion.g
            animate={{ rotate: [0, 16, -8, 16, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originX: '64px', originY: '72px' }}
          >
            <circle cx="67" cy="65" r="5" fill="#f5caa9" />
          </motion.g>
        </svg>
      </motion.button>

      {/* Speech Bubble */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffb703' }}>
            Mas Toti (Tutor Privat)
          </span>
          <span
            style={{
              fontSize: '11px',
              padding: '1px 7px',
              borderRadius: '999px',
              background: 'rgba(255,77,141,0.18)',
              color: '#ff9ebb',
              fontWeight: 600,
            }}
          >
            Tap aku!
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={displayMsg}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: compact ? '12.5px' : '13.5px',
              lineHeight: 1.45,
              color: '#f3e8ff',
            }}
          >
            {displayMsg}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Cute Rotating Couple Photo Sticker */}
      <motion.button
        type="button"
        onClick={cyclePhoto}
        animate={{ rotate: [-3, 3, -3], y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        whileTap={{ scale: 0.9 }}
        title="Tap buat ganti foto kita"
        style={{
          background: '#fffdf7',
          padding: '3px 3px 6px',
          borderRadius: '8px',
          border: 'none',
          width: compact ? '46px' : '54px',
          flexShrink: 0,
          cursor: 'pointer',
          boxShadow: '0 6px 14px rgba(0,0,0,0.4)',
        }}
      >
        <img
          src={PHOTOS[photoIdx]}
          alt="Foto Kita"
          style={{
            width: '100%',
            height: compact ? '44px' : '52px',
            objectFit: 'cover',
            borderRadius: '5px',
            display: 'block',
          }}
        />
      </motion.button>
    </div>
  );
}

