export const COURSES = [
  {
    id: 'EMBS4209',
    code: 'EMBS4209',
    title: 'Manajemen Sumber Daya Manusia',
    shortTitle: 'MSDM',
    emoji: '👥',
    color: '#ff4d8d',
    gradient: 'linear-gradient(135deg, #ff4d8d 0%, #ff758c 100%)',
    tagline: 'Rekrutmen, Analisis Jabatan, Kompensasi & K3',
    totalPdfQuestions: 163,
    totiTip: 'Di matkul ini kuncinya hafalin bedanya Analisis vs Deskripsi vs Spesifikasi Jabatan, jenis kompensasi, sama metode pelatihan ya sayang!',
    studyGuide: [
      {
        title: '1. Analisis, Deskripsi & Spesifikasi Jabatan',
        points: [
          'Analisis Jabatan: proses mengumpulkan informasi pekerjaan (manfaatnya: desain ulang pekerjaan, jalur promosi, evaluasi).',
          'Deskripsi Jabatan: daftar tugas, fungsi, tanggung jawab, dan ringkasan pekerjaan.',
          'Spesifikasi Jabatan: syarat orangnya — Pengetahuan, Keterampilan, Sikap (KSA), pendidikan & pengalaman.',
          'Desain jabatan Taylor (mekanistik): pekerjaan dikaji secara ilmiah.',
        ],
      },
      {
        title: '2. Perencanaan SDM & Rekrutmen',
        points: [
          'Tahap menilai lingkungan: menganalisis kondisi eksternal (peluang/ancaman) & internal (kekuatan/kelemahan).',
          'Peramalan basis nol: analisis keseluruhan SDM dari nol; Model simulasi: uji skenario sebelum keputusan nyata.',
          'Tes seleksi: Bakat/kecakapan pekerjaan (kompetensi kerja), Minat (kesukaan kerja), Kepribadian.',
          'PHK: UU 13/2003 (pesangon masa kerja 4-<5 tahun = 5 bulan upah; >5 tahun = 9 bulan upah dalam kisi-kisi UT).',
        ],
      },
      {
        title: '3. Kompensasi & Penilaian Kinerja',
        points: [
          'Kompensasi finansial langsung: gaji (berdasarkan waktu), upah, bonus, komisi (proporsi penjualan).',
          'Pelayanan karyawan: fasilitas seperti bus antar-jemput, program konseling masalah pribadi.',
          'Penilaian Kinerja 360°: gabungan ≥2 penilai (atasan, rekan, bawahan). Komparatif: membandingkan antar individu.',
          'Penghargaan Intrinsik (dari pekerjaan itu sendiri) vs Ekstrinsik (formal, tunjangan, bonus).',
        ],
      },
      {
        title: '4. Pelatihan, Pengembangan & K3',
        points: [
          'In-basket technique: simulasi menjawab surat/memo/panggilan manajer; CAI: teks di komputer; Reengineering: rancang ulang radikal.',
          'Evaluasi pelatihan: Kognitif (prinsip/fakta), Afektif (reaksi peserta), Time series/rangkaian waktu (kestabilan hasil), Post-test kelompok pembanding (ukur perubahan).',
          'K3 & Stres: Inti K3 = pencegahan kecelakaan kerja; Ukuran seringnya kecelakaan = tingkat kekerapan; Gaya kepemimpinan Laissez Faire = keputusan diserahkan ke anggota.',
        ],
      },
    ],
  },
  {
    id: 'EMBS4206',
    code: 'EMBS4206',
    title: 'Akuntansi Biaya',
    shortTitle: 'Akuntansi Biaya',
    emoji: '🧮',
    color: '#ffb703',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    tagline: 'Kos Produksi, Job Order, Process Costing, ABC & Jurnal',
    totalPdfQuestions: 120,
    totiTip: 'Akuntansi Biaya banyak itung-itungan tapi polanya gampang banget! Cek rumus High-Low, Unit Ekuivalen, sama ABC di rangkuman ya!',
    studyGuide: [
      {
        title: '1. Konsep Kos & Perilaku Biaya (High-Low)',
        points: [
          'Kos Prima = Bahan Baku Langsung + Tenaga Kerja Langsung. Kos Produk = BBL + TKL + Overhead Pabrik (BOP).',
          'Metode Titik Tertinggi–Terendah (High-Low):',
          '👉 Tarif Variabel (b) = (Biaya Tertinggi - Biaya Terendah) ÷ (Unit Tertinggi - Unit Terendah).',
          '👉 Biaya Tetap (a) = Biaya Total - (b × Unit).',
        ],
      },
      {
        title: '2. Aliran Kos Produksi & Laporan Kos',
        points: [
          'Bahan Baku Dipakai = Sediaan Awal + Pembelian Bersih (+ Freight-in - Retur) - Sediaan Akhir.',
          'Total Kos Produksi = Bahan Baku Dipakai + TKL + BOP (aktual atau dibebankan/standar).',
          'Job Order Costing: cocok untuk pesanan khusus (alokasi per pesanan). Jurnal BOP dibebankan: Debit BDP (Barang Dalam Proses), Kredit BOP.',
        ],
      },
      {
        title: '3. Process Costing (Unit Ekuivalen)',
        points: [
          'Metode Rata-rata Tertimbang: Unit Ekuivalen = Unit Selesai + (Unit Akhir Dalam Proses × % Penyelesaian).',
          'Contoh: 8.000 selesai + 2.000 akhir (40%) → BB (100%) = 10.000 unit; Konversi = 8.000 + 800 = 8.800 unit.',
          'Produk sampingan (by-product): nilai jual rendah. Kos bergabung (joint cost) tak bisa ditelusuri s.d. titik pisah (split-off).',
        ],
      },
      {
        title: '4. Bahan Baku, EOQ, Backflush & ABC Costing',
        points: [
          'JIT (Just In Time): bahan datang tepat saat dibutuhkan → hemat biaya simpan; Backflush mencatat biaya setelah produk jadi.',
          'Activity-Based Costing (ABC): Tarif Aktivitas = Total Biaya Aktivitas ÷ Total Cost Driver.',
          '👉 Biaya ke Produk = ∑(Tarif Aktivitas × Pemakaian Driver oleh Produk).',
        ],
      },
    ],
  },
  {
    id: 'ECON4101',
    code: 'ECON4101',
    title: 'Pengantar Ekonomi Makro',
    shortTitle: 'Ekonomi Makro',
    emoji: '📈',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    tagline: 'PDB, Angka Pengganda, Uang, Fiskal, Moneter & Inflasi',
    totalPdfQuestions: 135,
    totiTip: 'Kunci Ekonomi Makro ada 3 rumus sakti: Multiplier (1/MPS atau 1/(1-MPC)), Penciptaan Uang (1/rasio cadangan), sama bedain Fiskal vs Moneter!',
    studyGuide: [
      {
        title: '1. Konsep Dasar, PDB & Nilai Tambah',
        points: [
          'Pernyataan Positif = berbasis fakta (telah/sedang/akan terjadi); Normatif = nilai benar/salah.',
          'Net Ekspor (NX) = Ekspor - Impor. Nilai Tambah = Nilai Jual - Biaya Bahan Mentah (menghindari double counting).',
          'BEP Konsumsi: Pendapatan (Y) = Pengeluaran (C). Jika C > Y → Dissaving (ditutup utang/tabungan lama).',
        ],
      },
      {
        title: '2. Fungsi Konsumsi & Angka Pengganda (Multiplier)',
        points: [
          'MPC + MPS = 1. Tambahan Konsumsi ΔC = MPC × ΔY.',
          '👉 Angka Pengganda (k) = 1 / MPS = 1 / (1 - MPC).',
          '👉 Perubahan Output (ΔY) = k × ΔG (atau k × ΔI). Contoh MPC=2/3 → k = 1/(1/3) = 3 → ΔG=100jt bikin ΔY=300jt!',
        ],
      },
      {
        title: '3. Uang, Bank & Penciptaan Uang',
        points: [
          'Nilai uang: Intrinsik (bahan) & Nominal (angka tertera). Uang fiat/kertas tidak punya nilai intrinsik.',
          '👉 Angka Pengganda Uang Bank = 1 / Rasio Cadangan. Jika cadangan 10% (0,1) → uang tercipta = 1/0,1 = 10 kali!',
          'Motif memegang uang Keynes: Transaksi (dipengaruhi pendapatan), Berjaga-jaga (ketidakpastian masa depan), Spekulasi.',
        ],
      },
      {
        title: '4. Kebijakan Fiskal, Moneter, Inflasi & Perdagangan',
        points: [
          'Moneter (Bank Sentral): Suku bunga (BI Rate), GWM/rasio cadangan, operasi pasar terbuka. Atasi inflasi: naikkan bunga.',
          'Fiskal (Pemerintah): Pajak (T) & Belanja Pemerintah (G). Depresi → naikkan G, turunkan pajak. Inflasi → naikkan pajak.',
          'Inflasi Moderat (4–10%), Tinggi (10–100%), Hiperinflasi (>100%, hilangnya kepercayaan mata uang).',
        ],
      },
    ],
  },
  {
    id: 'MKDI4203',
    code: 'MKDI4203',
    title: 'Kewirausahaan di Era Digital',
    shortTitle: 'Kewirausahaan',
    emoji: '🚀',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)',
    tagline: 'Flow, Effectuation, Design Thinking, BMC & Lean Canvas',
    totalPdfQuestions: 135,
    totiTip: 'Ini matkul paling seru buat era digital! Hafalin 5 tahap Design Thinking, 5 prinsip Effectuation (Crazy Quilt, Bird in Hand...), sama beda BMC & Lean Canvas!',
    studyGuide: [
      {
        title: '1. Flow & Effectuation (Sarasvathy)',
        points: [
          'Teori Flow: konsentrasi penuh saat berkarya; langkahnya: Pilih kegiatan → Tetapkan tujuan jelas → Benamkan diri → Hilangkan gangguan.',
          'Prinsip Effectuation:',
          '• Bird in Hand: mulai dari apa yang dimiliki (diri, skill, kenalan).',
          '• Crazy Quilt: bangun jejaring/kolaborasi dengan pihak lain.',
          '• Affordable Loss: siap menanggung batas kerugian & bangkit lagi.',
          '• Pilot in the Plane: kontrol arah jalan sendiri; Lemonade: ubah hal tak enak jadi peluang.',
        ],
      },
      {
        title: '2. Design Thinking (5 Tahap)',
        points: [
          'Urutan wajib hafal: 1) Empathise (pahami pengguna mendalam) → 2) Define (rumuskan masalah) → 3) Ideate (gagas solusi) → 4) Prototype (buat purwarupa dari hasil Ideate) → 5) Test (uji ke pengguna).',
        ],
      },
      {
        title: '3. Segmentasi, VPC, BMC & Lean Canvas',
        points: [
          'Segmentasi: Geografis (urban/nonurban), Demografis, Psikografis, Perilaku.',
          'Model Bisnis: Freemium (dasar gratis, fitur lengkap bayar — cth Vidio), Afiliasi / % transaksi (Traveloka).',
          'BMC (Business Model Canvas): Customer Segment (target varian produk), Value Proposition, Channels (awareness & distribusi), Key Activities (wujudkan value).',
          'Lean Canvas: Solution (fitur utama produk), Key Metrics (ukur pengunjung/SEO), Revenue Streams (penjualan/langganan).',
        ],
      },
      {
        title: '4. Blue Ocean, MVP, PMF & Branding',
        points: [
          'Blue Ocean Strategy: tinggalkan persaingan ketat & ciptakan ruang pasar baru (4 aksi: Hapuskan, Kurangi [cegah over-delivery], Tingkatkan, Ciptakan).',
          'MVP (Minimum Viable Product): cukup fitur inti untuk belajar validasi pasar (bukan langsung canggih mahal).',
          'Piramida Product-Market Fit: Map the Problem (dasar) → Identify the Value → Reach the Market (puncak).',
          'Peluncuran harga tinggi + promosi gencar = Rapid Skimming; promosi sedikit = Slow Skimming.',
        ],
      },
    ],
  },
  {
    id: 'EMBS4204',
    code: 'EMBS4204',
    title: 'Hubungan Industrial',
    shortTitle: 'Hubungan Industrial',
    emoji: '🤝',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    tagline: 'Tripartit, Serikat Pekerja, PKB, Outsourcing & PHI',
    totalPdfQuestions: 90,
    totiTip: 'Fokus bedain jenis perselisihan (Hak vs Kepentingan vs PHK), jalur penyelesaian (Bipartit 30 hari → Mediasi/Konsiliasi/Arbitrase → PHI), sama PKWT vs PKWTT!',
    studyGuide: [
      {
        title: '1. Subjek, Bipartit, Tripartit & Serikat Pekerja',
        points: [
          '3 Subjek Hubungan Industrial: Pekerja/Serikat Pekerja, Pengusaha, dan Pemerintah.',
          'LKS Bipartit: forum komunikasi pekerja & pengusaha di tingkat perusahaan. Tripartit: melibatkan pemerintah.',
          'Serikat Pekerja (UU 21/2000 & Konvensi ILO No. 87/98): bebas, mandiri, wajib punya AD/ART.',
          'Right-to-Work Laws: pekerja bebas memilih ikut/tidak ikut serikat. Closed Shop: wajib anggota serikat sebelum kerja.',
        ],
      },
      {
        title: '2. Penyelesaian Perselisihan (UU No. 2 Tahun 2004)',
        points: [
          '4 Jenis Perselisihan: 1) Hak (pelanggaran kontrak/UU/PKB yang sudah ada), 2) Kepentingan (tuntutan syarat kerja baru belum disepakati), 3) PHK, 4) Antar serikat pekerja.',
          'Langkah 1 WAJIB: Perundingan Bipartit (maksimal 30 hari kerja). Jika gagal → catatkan ke Disnaker → Mediasi/Konsiliasi/Arbitrase → Pengadilan Hubungan Industrial (PHI, berkedudukan di PN).',
          'Arbitrase Hak (tafsir kontrak lama) vs Arbitrase Kepentingan (ketentuan perjanjian baru).',
        ],
      },
      {
        title: '3. PKB, PKWT & Outsourcing',
        points: [
          'PKB (Perjanjian Kerja Bersama): perjanjian tertulis pengusaha & serikat pekerja (UU 13/2003 Pasal 108).',
          'Outsourcing: pengalihan sebagian pekerjaan ke pihak ketiga; kontrak pakai PKWT (Waktu Tertentu), sedangkan pegawai tetap pakai PKWTT.',
        ],
      },
      {
        title: '4. Kompensasi, Evaluasi Jabatan & Konflik',
        points: [
          'Tunjangan wajib (UU): jaminan sosial/BPJS, THR, cuti melahirkan vs Sukarela: opsi saham, layanan karyawan, asuransi tambahan.',
          'Mutasi/Transfer: perpindahan horizontal (gaji & jenjang relatif sama) vs Promosi: naik jenjang/tanggung jawab.',
        ],
      },
    ],
  },
  {
    id: 'EMBS4207',
    code: 'EMBS4207',
    title: 'Perilaku Organisasi',
    shortTitle: 'Perilaku Org.',
    emoji: '🧠',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    tagline: 'Kepribadian, Persepsi, Motivasi, Tim & Budaya Organisasi',
    totalPdfQuestions: 133,
    totiTip: 'Banyak nama tokoh penting di sini (Freud, Maslow, McClelland, Tuckman, Kotter, Fiedler, Hofstede)! Baca tabel tokoh singkat di bawah sebelum latihan ya 💖',
    studyGuide: [
      {
        title: '1. Kepribadian, Sikap & Persepsi',
        points: [
          'Sigmund Freud: Id (insting/dorongan dasar), Ego (logika/memecahkan persoalan/realitas), Superego (moral/aturan masyarakat).',
          '3 Komponen Sikap: Cognitive (pengetahuan/info), Affective (perasaan suka/tidak suka), Behavioral (tindakan).',
          'Bias Persepsi: Stereotype (generalisasi kelompok, misal gender), Perceptual defence (menolak stimuli memalukan/mengancam), Halo/Contrast effect.',
        ],
      },
      {
        title: '2. Teori Motivasi & Penilaian Kinerja',
        points: [
          'Maslow: Fisiologis → Rasa Aman (bebas takut/kepastian hukum) → Sosial (dicintai lingkungan) → Penghargaan → Aktualisasi.',
          'McClelland (3 Kebutuhan): Need for Achievement (berprestasi), Affiliation (berafiliasi), Power (berkuasa).',
          'Equity Theory: karyawan membandingkan keadilan input vs output-nya. Stock Option: hak beli saham perusahaan lebih murah.',
          'Progressive Discipline: Verbal warning → Written reprimand → Suspension (berhenti sementara) → Discharge.',
        ],
      },
      {
        title: '3. Kelompok, Tim (Tuckman) & Komunikasi',
        points: [
          '5 Tahap Tuckman: Forming → Storming (konflik awal) → Norming (kesepahaman/norma) → Performing → Adjourning.',
          'Peran Maintenance Kelompok: Harmonizer (rekonsiliasi/redam ketegangan), Gatekeeper (buka saluran komunikasi).',
          'Komunikasi: Encode (susun ide jadi simbol) → Media → Decode (terjemahkan simbol penerima).',
        ],
      },
      {
        title: '4. Kepemimpinan, Struktur & Budaya (Hofstede)',
        points: [
          'Kotter: Manajemen mengatasi kerumitan (complexity); Kepemimpinan mengatasi perubahan (change).',
          'Fiedler (Kontinjensi): kecocokan gaya pemimpin dengan situasi. Path-Goal: pemimpin bantu bawahan lihat jalan capai tujuan.',
          'Sumber Kekuasaan: Legitimate (posisi formal), Reward (beri hadiah), Expert (keahlian/pakar), Coercive (hukuman).',
          'Dimensi Hofstede: Power Distance (Small=setara, Large=ketergantungan tinggi), Uncertainty Avoidance (Strong=hindari ketidakpastian), Individualism vs Collectivism.',
        ],
      },
    ],
  },
  {
    id: 'FSIK4108',
    code: 'FSIK4108',
    title: 'Komunikasi Bisnis',
    shortTitle: 'Komunikasi Bisnis',
    emoji: '💬',
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
    tagline: 'Fungsi Komunikasi, Media, Stakeholders, Lobi & Negosiasi',
    totalPdfQuestions: 135,
    totiTip: 'Catatan khusus: di matkul ini banyak soal tipe pernyataan (1, 2, 3) yang jawabannya bisa lebih dari satu! Web ini udah dukung checklist 1-2-3 persis kayak soal asli UT!',
    studyGuide: [
      {
        title: '1. Konsep, Level & Fungsi Komunikasi Bisnis',
        points: [
          'DeVito (3 definisi antarpribadi): Componential, Relational Dyadic (dua orang dengan hubungan mantap), Developmental.',
          '4 Fungsi Komunikasi Bisnis: Informatif (ubah kognitif/pengetahuan), Persuasif (ubah sikap/tindakan), Kontrol (umpan balik korektif/informasional/peneguhan), Koordinasi & Emotif (ekspresi/perasaan).',
          'Isyarat Nonverbal (ekspresi wajah, postur, sign) lebih dipercaya saat bertentangan dengan verbal karena sulit dipalsukan.',
        ],
      },
      {
        title: '2. Media, Visual & Komunikasi Massa',
        points: [
          'Rumus berita Radio (Newsom): "Keep it simple, keep it short, keep it conversational".',
          'Komunikasi massa bersifat satu arah, khalayak banyak & terpisah (karakteristik: universalitas, publisitas, periodesitas, aktualitas).',
          'Komunikasi visual: contoh visual information = Logo. Bahasa punya ciri rapidly fading, arbitrary, culturally transmitted.',
        ],
      },
      {
        title: '3. Stakeholders & Analisis Khalayak',
        points: [
          'Clarkson: Stakeholder Primer (pemegang saham, investor, pekerja, pelanggan, pemasok — vital bagi hidup perusahaan) vs Sekunder (media, LSM, masyarakat).',
          'Stakeholder Internal (pemilik, manajemen, karyawan) vs Eksternal (pelanggan, pemasok, regulator/pemerintah, media).',
          'Analisis Khalayak: Demografis (usia, gender, pendidikan, pendapatan, ras, agama) vs Psikografis (persepsi, motivasi, gaya hidup).',
        ],
      },
      {
        title: '4. Lobi, Negosiasi, Korespondensi & Laporan',
        points: [
          'Lobi Tradisional: memanfaatkan figur publik / mantan pejabat (misal jadi komisaris) untuk melobi pengambil keputusan.',
          'Negosiasi Integratif → Win-Win; Distributif → Win-Lose; Teknik Piggyback (saling dukung); Interest-based (minimalkan risiko).',
          'Pesan Goodwill: ucapan selamat/penghargaan. Bad news disampaikan dengan pendekatan langsung atau tidak langsung. Justification Report berisi analisis + rekomendasi.',
        ],
      },
    ],
  },
  {
    id: 'MKKI4201',
    code: 'MKKI4201',
    title: 'Pengantar Statistik',
    shortTitle: 'Statistik',
    emoji: '📊',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    tagline: 'Deskriptif, Peluang, Binomial/Poisson, Normal, IK & Uji Hipotesis',
    totalPdfQuestions: 90,
    totiTip: 'Statistik butuh ketelitian hitung — makanya di setiap 90 soal matkul ini sudah Mas Toti tulisin langkah rumus & hitungnya satu-satu biar kamu langsung paham polanya! 💪❤️',
    studyGuide: [
      {
        title: '1. Statistika Deskriptif (Mean, Median, Modus, Variansi)',
        points: [
          'Skala Data: Nominal (label) → Ordinal (urutan) → Interval (punya jarak) → Rasio (punya nol mutlak). Diskrit = cacahan (produk cacat).',
          'Mean X̄ = ∑X / n | Median = nilai tengah setelah data DIURUTKAN | Modus = paling sering muncul.',
          'Variansi Sampel s² = [∑X² - (∑X)²/n] / (n - 1). Simpangan baku s = √s².',
          'Transformasi Linear: E(aX + b) = a·E(X) + b, sedangkan Var(aX + b) = a²·Var(X) (konstanta b hilang!).',
        ],
      },
      {
        title: '2. Peluang, Kombinasi & Teorema Bayes',
        points: [
          'P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Peluang bersyarat: P(B|A) = n(A∩B) / n(A).',
          'Komplemen: P(≥ 1 sukses) = 1 - P(semua gagal).',
          'Teorema Bayes: P(A|X) = [P(A)·P(X|A)] / ∑[P(i)·P(X|i)].',
        ],
      },
      {
        title: '3. Distribusi Binomial, Poisson & Normal',
        points: [
          'Binomial: P(X=k) = C(n,k)·pᵏ·(1-p)^(n-k) | Rata-rata E(X) = n·p.',
          'Poisson (jarang/laju λ): P(X=x) = (e^(-λ)·λˣ) / x!, untuk pendekatan Binomial pakai λ = n·p.',
          'Skor Z Normal: Z = (X - μ)/σ (untuk tunggal) atau Z = (X̄ - μ)/(σ/√n) (untuk rata-rata sampel).',
        ],
      },
      {
        title: '4. Interval Konfidensi (IK) & Uji Hipotesis',
        points: [
          'IK Mean (σ atau n≥30): X̄ ± Z_(α/2) · (σ/√n). (Z_95% = 1,96; Z_98% = 2,33). Jika n<30 & σ tak diketahui → pakai t.',
          'IK Proporsi: p̂ ± Z · √[p̂(1-p̂)/n]. Estimasi ukuran sampel n = (Z·σ / E)² atau untuk proporsi n = (Z / 2E)².',
          'Uji Z Proporsi: Z = (p̂ - p₀) / √[p₀(1-p₀)/n]. Pooled Variance: Sp² = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁+n₂-2).',
        ],
      },
    ],
  },
];

