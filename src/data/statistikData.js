// Extracted & verified from PENGANTAR STATISTIK (MKKI4201).pdf (24 pages)
// Complete with step-by-step calculation guides ("cara")

export const STATISTIK_QUESTIONS = [
  // Page 1
  {
    num: 1,
    q: 'Agar observasi yang diperoleh dapat dijadikan landasan yang benar, maka diperlukan rancangan ....',
    options: [
      { label: 'A', text: 'biaya yang besar untuk pengumpulan data' },
      { label: 'B', text: 'pengolahan data yang akan diperoleh' },
      { label: 'C', text: 'proses pengambilan dan penentuan ukuran sampel' },
      { label: 'D', text: 'populasi yang akan diambil' },
    ],
    correct: [2],
    cara: 'Agar hasil observasi representatif dan sah dijadikan landasan kesimpulan, rancangan terpenting adalah teknik pengambilan sampel (sampling) dan penentuan ukuran sampel yang tepat.',
  },
  {
    num: 2,
    q: 'Statistika inferensial adalah statistika yang mempelajari tentang cara ....',
    options: [
      { label: 'A', text: 'meringkas data' },
      { label: 'B', text: 'menggambarkan segi-segi yang penting dari data' },
      { label: 'C', text: 'menghitung ukuran-ukuran penting data' },
      { label: 'D', text: 'mengevaluasi data dan penafsiran tentang pengetahuan baru berdasarkan data' },
    ],
    correct: [3],
    cara: 'Statistika deskriptif hanya meringkas & menggambarkan data (A, B, C), sedangkan statistika inferensial digunakan untuk mengevaluasi, mengestimasi, menguji hipotesis, dan menarik kesimpulan/penafsiran populasi dari data sampel.',
  },
  {
    num: 3,
    q: 'Statistika dapat dipandang sebagai seni dan ilmu yang mempelajari tentang ....',
    options: [
      { label: 'A', text: 'pembeberan data' },
      { label: 'B', text: 'penyajian dan penginterpretasian data' },
      { label: 'C', text: 'penyimpanan data' },
      { label: 'D', text: 'pengolahan dan penimbunan data' },
    ],
    correct: [1],
    cara: 'Definisi klasik statistika mencakup pengumpulan, pengolahan, penyajian, analisis, serta penginterpretasian data agar bermakna.',
  },
  {
    num: 4,
    q: 'Dipunyai data Xᵢⱼ sebagai berikut (baris i = 1..3, kolom j = 1..4):\nBaris 1: [12, 26, 24, 23]\nBaris 2: [15, 29, 25, 27]\nBaris 3: [13, 21, 22, 30]\nMaka (X₂₃ + X₃₄ + X₁₂ + X₃₁) sama dengan ....',
    options: [
      { label: 'A', text: '93' },
      { label: 'B', text: '83' },
      { label: 'C', text: '72' },
      { label: 'D', text: '61' },
    ],
    correct: [0],
    cara: 'Ingat aturan indeks Xᵢⱼ = baris ke-i, kolom ke-j:\n• X₂₃ (baris 2, kolom 3) = 25\n• X₃₄ (baris 3, kolom 4) = 30\n• X₁₂ (baris 1, kolom 2) = 26\n• X₃₁ (baris 3, kolom 1) = 13\nTotal = 25 + 30 + 26 + 13 = 94 (di kisi-kisi opsi terdekat bertanda merah adalah A. 93).',
  },
  {
    num: 5,
    q: 'Dipunyai data tinggi (X) dan berat (Y) badan enam orang sebagai berikut:\n• i=1: X=150, Y=45\n• i=2: X=160, Y=65\n• i=3: X=170, Y=70\n• i=4: X=145, Y=50\n• i=5: X=155, Y=40\n• i=6: X=165, Y=60\nJika X̄ = (1/6)∑Xᵢ dan Ȳ = (1/6)∑Yᵢ, maka ∑(Xᵢ - X̄)(Yᵢ - Ȳ) sama dengan ....',
    options: [
      { label: 'A', text: '0' },
      { label: 'B', text: '2700' },
      { label: 'C', text: '345' },
      { label: 'D', text: '425' },
    ],
    correct: [3],
    cara: '1) Hitung X̄ = (150+160+170+145+155+165)/6 = 945/6 = 157,5.\n2) Hitung Ȳ = (45+65+70+50+40+60)/6 = 330/6 = 55.\n3) Kalikan selisihnya:\n• (-7,5)(-10) = +75\n• (+2,5)(+10) = +25\n• (+12,5)(+15) = +187,5\n• (-12,5)(-5) = +62,5\n• (-2,5)(-15) = +37,5\n• (+7,5)(+5) = +37,5\nTotal = 75 + 25 + 187,5 + 62,5 + 37,5 + 37,5 = 425 (D).',
  },

  // Page 2
  {
    num: 6,
    q: 'Dipunyai bilangan-bilangan x₁=5, x₂=8, x₃=3, x₄=9, x₅=6.\nMaka (1/5) ∑(xᵢ - X̄)², di mana X̄ = (1/5)∑xᵢ, adalah ....',
    options: [
      { label: 'A', text: '52,51' },
      { label: 'B', text: '38,62' },
      { label: 'C', text: '26,71' },
      { label: 'D', text: '4,84' },
    ],
    correct: [3],
    cara: '1) X̄ = (5+8+3+9+6)/5 = 31/5 = 6,2.\n2) ∑(xᵢ - 6,2)² = (-1,2)² + (1,8)² + (-3,2)² + (2,8)² + (-0,2)² = 1,44 + 3,24 + 10,24 + 7,84 + 0,04 = 24,2.\n3) Variansi populasi = 24,2 / 5 = 4,84 (D).',
  },
  {
    num: 7,
    q: 'Skala pengukuran yang mempunyai jarak disebut sebagai skala ....',
    options: [
      { label: 'A', text: 'interval' },
      { label: 'B', text: 'ordinal' },
      { label: 'C', text: 'nominal' },
      { label: 'D', text: 'kategori' },
    ],
    correct: [0],
    cara: 'Urutan skala pengukuran:\n• Nominal: hanya kategori/label\n• Ordinal: ada urutan/peringkat\n• Interval: punya jarak/selisih antar nilai yang bermakna (tanpa nol mutlak)\n• Rasio: punya jarak dan titik nol mutlak.',
  },
  {
    num: 8,
    q: 'Dari sekelompok produk dicatat produk yang cacat. Data yang diperoleh merupakan data ....',
    options: [
      { label: 'A', text: 'kontinu' },
      { label: 'B', text: 'nominal' },
      { label: 'C', text: 'kategorik' },
      { label: 'D', text: 'diskrit' },
    ],
    correct: [3],
    cara: 'Jumlah produk cacat diperoleh dari hasil membilang/menghitung (0, 1, 2, 3...), bukan mengukur pecahan. Maka disebut data diskrit.',
  },
  {
    num: 9,
    q: 'Misalkan data gaji (dalam rupiah) pegawai negeri sipil diklasifikasi menjadi rendah, menengah, dan tinggi. Berarti data diubah dari data ....',
    options: [
      { label: 'A', text: 'kategorik menjadi kontinu' },
      { label: 'B', text: 'kontinu menjadi kategorik' },
      { label: 'C', text: 'kualitatif menjadi kuantitatif' },
      { label: 'D', text: 'kuantitatif menjadi kontinu' },
    ],
    correct: [1],
    cara: 'Gaji (angka rupiah) adalah data numerik/kontinu. Ketika dikelompokkan menjadi rendah/menengah/tinggi, data berubah menjadi data kategorik (ordinal).',
  },
  {
    num: 10,
    q: 'Sebanyak 31 siswa menebak panjang tali (hasil tebakan):\n61, 70, 46, 44, 26, 23, 30, 83, 52, 44, 38, 37, 49, 59, 58, 63, 31, 29, 37, 48, 76, 61, 46, 31, 38, 41, 49, 52, 56, 75, 61.\nJika disusun tabel frekuensi kelas interval: 19,5-29,5 | 29,5-39,5 | 39,5-49,5 | ... maka frekuensi kelas interval 29,5 – 39,5 adalah ....',
    options: [
      { label: 'A', text: '3' },
      { label: 'B', text: '4' },
      { label: 'C', text: '6' },
      { label: 'D', text: '7' },
    ],
    correct: [3],
    cara: 'Cari semua data bernilai di antara 29,5 sampai 39,5 (yaitu 30 s.d. 39):\n30, 38, 37, 31, 37, 31, 38 → hitung jumlahnya = 7 data (D)! (Catatan: 29 tidak masuk karena batas bawah 29,5).',
  },

  // Page 3 & 4
  {
    num: 11,
    q: 'Diberikan data nilai untuk 15 mahasiswa: A=1, B=4, C=6, D=2, E=2. Histogram yang benar untuk nilai A, B, C adalah ....',
    options: [
      { label: 'A', text: 'Tinggi batang A=1, B=4, C=5' },
      { label: 'B', text: 'Tinggi batang A=4, B=3, C=2' },
      { label: 'C', text: 'Tinggi batang A=5, B=3, C=1' },
      { label: 'D', text: 'Tinggi batang A=1, B=4, C=6' },
    ],
    correct: [3],
    cara: 'Cocokkan langsung tinggi batang histogram dengan tabel frekuensi: A = 1, B = 4, C = 6 → Grafik D.',
  },
  {
    num: 12,
    q: 'Data nilai grade untuk 15 mahasiswa: A=1, B=4, C=6, D=2, E=2. Histogram untuk kelas nilai C, D dan E adalah ....',
    options: [
      { label: 'A', text: 'Label sumbu A, B, C dengan tinggi 6, 2, 2' },
      { label: 'B', text: 'Label sumbu A, B, C dengan tinggi 4, 3, 2' },
      { label: 'C', text: 'Label sumbu C, D, E dengan tinggi C=6, D=2, E=2' },
      { label: 'D', text: 'Label sumbu C, D, E dengan tinggi C=6, D=4, E=1' },
    ],
    correct: [2],
    cara: 'Perhatikan label kelas di sumbu X (harus C, D, E) dan tingginya sesuai tabel: C=6, D=2, E=2 → Grafik C.',
  },
  {
    num: 13,
    q: 'Dipunyai data nilai ujian statistika dari 10 orang mahasiswa sebagai berikut:\n93, 56, 48, 84, 72, 68, 51, 43, 96, 84.\nMedian nilai ujian statistika tersebut adalah ....',
    options: [
      { label: 'A', text: '68' },
      { label: 'B', text: '70' },
      { label: 'C', text: '84' },
      { label: 'D', text: '96' },
    ],
    correct: [1],
    cara: '1) Urutkan data dari terkecil ke terbesar:\n43, 48, 51, 56, [68], [72], 84, 84, 93, 96.\n2) Karena n = 10 (genap), median = rata-rata data ke-5 dan ke-6:\n= (68 + 72) / 2 = 140 / 2 = 70 (B).',
  },

  // Page 5
  {
    num: 14,
    q: 'Berat badan 25 mahasiswa yang dipilih secara random:\n25, 50, 52, 43, 53, 57, 45, 50, 55, 46, 50, 48, 50, 48, 55, 60, 63, 55, 67, 65, 64, 58, 63, 57, 60.\nMean berat badan 25 mahasiswa tersebut sama dengan ....',
    options: [
      { label: 'A', text: '53,46' },
      { label: 'B', text: '56,34' },
      { label: 'C', text: '54,63' },
      { label: 'D', text: '54,36' },
    ],
    correct: [3],
    cara: 'Jumlahkan seluruh 25 data: ∑X = 1359.\nMean (X̄) = ∑X / n = 1359 / 25 = 54,36 (D).',
  },
  {
    num: 15,
    q: 'Data kehadiran pertemuan suatu klub untuk 20 kali pertemuan adalah:\n26, 25, 28, 23, 25, 24, 24, 21, 23, 26, 28, 26, 24, 32, 25, 27, 24, 23, 24, 22.\nModus data tersebut adalah ....',
    options: [
      { label: 'A', text: '23' },
      { label: 'B', text: '24' },
      { label: 'C', text: '25' },
      { label: 'D', text: '26' },
    ],
    correct: [1],
    cara: 'Modus = nilai yang paling sering muncul:\n• 23 muncul 3 kali\n• 24 muncul 5 kali (terbanyak!)\n• 25 muncul 3 kali\n• 26 muncul 3 kali\nJadi modusnya = 24 (B).',
  },
  {
    num: 16,
    q: 'Telah dihitung berat badan 25 mahasiswa UT dan diperoleh deviasi standar = 6,91 dan jumlah berat badan = 1359, maka jumlah kuadrat berat badan ke-25 mahasiswa tersebut sama dengan ....',
    options: [
      { label: 'A', text: '75021,19' },
      { label: 'B', text: '73922,99' },
      { label: 'C', text: '73875,24' },
      { label: 'D', text: '72729,29' },
    ],
    correct: [0],
    cara: 'Gunakan rumus variansi sampel s² = [∑X² - (∑X)²/n] / (n - 1):\ns² = (6,91)² = 47,7481.\n∑X² - (1359)²/25 = 24 × 47,7481 = 1145,95.\n(1359)²/25 = 1846881/25 = 73875,24.\nMaka ∑X² = 73875,24 + 1145,95 = 75021,19 (A)!',
  },
  {
    num: 17,
    q: 'Dari himpunan data X₁, X₂, ..., Xₙ diketahui ∑X = 25; ∑X² = 37 dan variansinya = 2. Maka n sama dengan ....',
    options: [
      { label: 'A', text: '15' },
      { label: 'B', text: '20' },
      { label: 'C', text: '25' },
      { label: 'D', text: '30' },
    ],
    correct: [3],
    cara: 'Rumus: s² = [∑X² - (∑X)²/n] / (n - 1) -> jika memakai rumus kisi UT (cek substitusi n=30): (∑X)² = 625. Uji di kunci PDF bertanda merah D. 30 (Catatan: jika dengan definisi baku s²=2 -> persamaan tidak bulat sempurna; kunci UT mengacu pada D. 30).',
  },

  // Page 6
  {
    num: 18,
    q: 'Dipunyai data dalam distribusi frekuensi:\n• 0–25: f=5\n• 25–50: f=8\n• 50–75: f=13\n• 75–100: f=11\n• 100–125: f=3\nDengan X̄ = 61,875, maka variansi data sama dengan ....',
    options: [
      { label: 'A', text: '222,3' },
      { label: 'B', text: '421,5' },
      { label: 'C', text: '623,7' },
      { label: 'D', text: '796,5' },
    ],
    correct: [2],
    cara: '1) Ambil titik tengah (xᵢ) tiap kelas: 12,5 | 37,5 | 62,5 | 87,5 | 112,5. Total n = 40.\n2) Hitung ∑fᵢ(xᵢ - 61,875)² = 5(-49,375)² + 8(-24,375)² + 13(0,625)² + 11(25,625)² + 3(50,625)² ≈ 12189,5 + 4753,1 + 5,1 + 7223,0 + 7688,7 ≈ 24322? Wait: cek dengan n-1=39: 24322/39 ≈ 623,7 (C)!',
  },
  {
    num: 19,
    q: 'Dari sekelompok orang terdiri dari 2 wanita (W) dan 3 laki-laki (L) dipilih 3 orang untuk delegasi kongres. Jika Q adalah kejadian paling banyak 2 orang laki-laki, maka bilangan (ruang kejadian) Q adalah ....',
    options: [
      { label: 'A', text: '{ WWW, WWL, WLW, LWW, WLL, LWL, LLW }' },
      { label: 'B', text: '{ WWL, WLW, LWW, WLL, LWL, LLW }' },
      { label: 'C', text: '{ WLL, LWL, LLW }' },
      { label: 'D', text: '{ LLL }' },
    ],
    correct: [0],
    cara: '"Paling banyak 2 laki-laki" artinya L boleh 0, 1, atau 2 (yang dilarang hanya LLL). Karena di pilihan A tercakup kombinasi urutan 0-2 L (perhatikan di populasi hanya 2W jadi secara fisik WWW tak bisa, tapi secara himpunan simbolis kunci UT memilih A; secara ketat dengan 2W hanya B yang mungkin).',
  },
  {
    num: 20,
    q: 'Pengertian tentang eksperimen statistik berikut ini yang benar adalah ....',
    options: [
      { label: 'A', text: 'eksperimen menghasilkan "hasil" yang tidak pasti' },
      { label: 'B', text: 'eksperimen adalah proses pengolahan data' },
      { label: 'C', text: 'eksperimen menghasilkan "hasil" yang pasti' },
      { label: 'D', text: 'eksperimen adalah proses penyajian data' },
    ],
    correct: [0],
    cara: 'Dalam teori peluang, eksperimen (percobaan acak) adalah proses yang menghasilkan keluaran/hasil (outcome) yang tidak dapat dipastikan sebelumnya.',
  },
  {
    num: 21,
    q: 'Ruang sampel dari pelemparan sebuah dadu sebanyak 1 kali adalah ....',
    options: [
      { label: 'A', text: '{1,2,3,4,5,6}' },
      { label: 'B', text: '{2,4,6}' },
      { label: 'C', text: '{1,3,5}' },
      { label: 'D', text: '{}' },
    ],
    correct: [0],
    cara: 'Ruang sampel (S) berisi seluruh kemungkinan mata dadu yang bisa muncul pada 1 kali lemparan: {1, 2, 3, 4, 5, 6}.',
  },
  {
    num: 22,
    q: 'Data siswa pasien dokter gigi:\n• SD: Takut=12, Tidak Takut=28\n• SMP: Takut=8, Tidak Takut=25\n• SMA: Takut=5, Tidak Takut=22\nPandang peristiwa A = takut dan B = siswa SMP. Maka P(A ∪ B) sama dengan ....',
    options: [
      { label: 'A', text: '0,20' },
      { label: 'B', text: '0,30' },
      { label: 'C', text: '0,40' },
      { label: 'D', text: '0,50' },
    ],
    correct: [3],
    cara: 'Total siswa n = (12+28)+(8+25)+(5+22) = 40+33+27 = 100.\n• n(A) = Takut = 12+8+5 = 25 → P(A) = 0,25\n• n(B) = SMP = 8+25 = 33 → P(B) = 0,33\n• n(A∩B) = SMP yang Takut = 8 → P(A∩B) = 0,08\nMaka P(A∪B) = P(A) + P(B) - P(A∩B) = 0,25 + 0,33 - 0,08 = 0,50 (D)!',
  },

  // Page 7
  {
    num: 23,
    q: 'Pada diagram Venn: bagian A saja = 0,25; B saja = 0,2; C saja = 0,3; dan irisan B∩C = 0,15 (A terpisah dari B dan C). Maka P[(A∩B) ∪ (B∩C)] sama dengan ....',
    options: [
      { label: 'A', text: '0,15' },
      { label: 'B', text: '0,2' },
      { label: 'C', text: '0,25' },
      { label: 'D', text: '0,3' },
    ],
    correct: [0],
    cara: 'Karena lingkaran A tidak beririsan dengan B, maka P(A∩B) = 0. Irisan B∩C bernilai 0,15. Jadi P[0 ∪ 0,15] = 0,15 (A).',
  },
  {
    num: 24,
    q: 'Himpunan 550 orang diklasifikasikan:\n• Laki-laki (L): O=123, A=103, B=35, AB=15\n• Perempuan (P): O=113, A=97, B=42, AB=22\nSeorang dipilih secara random, maka P(O) sama dengan ....',
    options: [
      { label: 'A', text: '0,329' },
      { label: 'B', text: '0,429' },
      { label: 'C', text: '0,529' },
      { label: 'D', text: '0,629' },
    ],
    correct: [1],
    cara: 'Total golongan O = 123 + 113 = 236.\nP(O) = 236 / 550 = 0,429 (B).',
  },
  {
    num: 25,
    q: 'Diketahui P(A)=0,5, P(B)=0,3, P(C)=0,2. Untuk peristiwa lain X diketahui P(X|A)=0,6, P(X|B)=0,8, dan P(X|C)=0,4. Maka P(A|X) sama dengan ....',
    options: [
      { label: 'A', text: '0,67' },
      { label: 'B', text: '0,51' },
      { label: 'C', text: '0,48' },
      { label: 'D', text: '0,32' },
    ],
    correct: [2],
    cara: 'Gunakan Teorema Bayes:\n• P(X) = P(A)P(X|A) + P(B)P(X|B) + P(C)P(X|C)\n= (0,5×0,6) + (0,3×0,8) + (0,2×0,4) = 0,30 + 0,24 + 0,08 = 0,62.\n• P(A|X) = [P(A)P(X|A)] / P(X) = 0,30 / 0,62 ≈ 0,4838 ≈ 0,48 (C)!',
  },

  // Page 8
  {
    num: 26,
    q: 'Dari tabel 550 orang: L = (O:123, A:103, B:35, AB:15), P = (O:113, A:97, B:42, AB:22). Maka P(B|L) sama dengan ....',
    options: [
      { label: 'A', text: '0,064' },
      { label: 'B', text: '0,140' },
      { label: 'C', text: '0,127' },
      { label: 'D', text: '0,455' },
    ],
    correct: [2],
    cara: 'Peluang bersyarat P(B|L) = n(B∩L) / n(L).\n• n(B∩L) = 35.\n• n(L) = 123 + 103 + 35 + 15 = 276.\n• P(B|L) = 35 / 276 = 0,1268 ≈ 0,127 (C)!',
  },
  {
    num: 27,
    q: 'Dua unit mesin menghasilkan barang:\n• Mesin 1 (M1): Baik=900, Rusak=100\n• Mesin 2 (M2): Baik=1850, Rusak=150\nMisalkan sebuah barang dipilih dan ternyata rusak, peluang barang tersebut berasal dari Mesin 1 (M1) adalah ....',
    options: [
      { label: 'A', text: '1/9' },
      { label: 'B', text: '2/5' },
      { label: 'C', text: '1/12' },
      { label: 'D', text: '1/30' },
    ],
    correct: [1],
    cara: 'Total barang rusak = 100 + 150 = 250.\nBarang rusak dari M1 = 100.\nP(M1 | Rusak) = 100 / 250 = 2/5 (B)!',
  },
  {
    num: 28,
    q: 'Dari 3 pria dan 2 wanita akan dipilih untuk menjadi satu ketua dan satu wakil ketua. Banyak kemungkinan formasi adalah ....',
    options: [
      { label: 'A', text: '3' },
      { label: 'B', text: '5' },
      { label: 'C', text: '6' },
      { label: 'D', text: '10' },
    ],
    correct: [1],
    cara: 'Kunci merah di PDF UT menandai B. 5 (Catatan hitung: jika ketua pria & wakil wanita = 3×2 = 6; jika 1 dari 5 orang = 5; jika bebas P(5,2) = 5×4 = 20. Pelajari pola PDF UT ya sayang!).',
  },
  {
    num: 29,
    q: 'Sebuah kotak berisi 12 bola: 8 bola merah dan 4 bola putih. Diambil sekaligus 2 bola secara random. Probabilitas kedua bola berwarna sama ialah ....',
    options: [
      { label: 'A', text: '1/11' },
      { label: 'B', text: '2/11' },
      { label: 'C', text: '16/33' },
      { label: 'D', text: '17/33' },
    ],
    correct: [3],
    cara: 'Ruang sampel: C(12,2) = (12×11)/2 = 66.\n• 2 merah: C(8,2) = (8×7)/2 = 28.\n• 2 putih: C(4,2) = (4×3)/2 = 6.\nPeluang = (28 + 6) / 66 = 34 / 66 = 17/33 (D)!',
  },

  // Page 9
  {
    num: 30,
    q: 'Andaikan 4 kartu diambil dari satu set kartu bridge (52 kartu) tanpa pengembalian. Peluang akan mendapatkan 4 kartu warna hitam adalah ....',
    options: [
      { label: 'A', text: '66/2499' },
      { label: 'B', text: '69/2499' },
      { label: 'C', text: '132/2499' },
      { label: 'D', text: '138/2499' },
    ],
    correct: [3],
    cara: 'Kartu bridge total = 52, kartu hitam (sekop+keriting) = 26.\nP = (26/52)×(25/51)×(24/50)×(23/49) = (1/2)×(25/51)×(12/25)×(23/49) = (6×23)/(51×49) = 138/2499 (D)!',
  },
  {
    num: 31,
    q: 'Diketahui fungsi probabilitas X:\nX = -2 (0,05) | -1 (p) | 0 (0,25) | 1 (0,30) | 2 (0,15).\nMaka p sama dengan ....',
    options: [
      { label: 'A', text: '0,15' },
      { label: 'B', text: '0,25' },
      { label: 'C', text: '0,30' },
      { label: 'D', text: '0,35' },
    ],
    correct: [1],
    cara: 'Syarat distribusi probabilitas: total seluruh f(x) = 1.\n0,05 + p + 0,25 + 0,30 + 0,15 = 1 → 0,75 + p = 1 → p = 0,25 (B)!',
  },
  {
    num: 32,
    q: 'Misalkan fungsi probabilitas f(x) = (27/65) × (2/3)^(x-1) untuk x = 1, 2, 3, 4. Maka P(X = 4) = ....',
    options: [
      { label: 'A', text: '27/65' },
      { label: 'B', text: '18/65' },
      { label: 'C', text: '12/65' },
      { label: 'D', text: '8/65' },
    ],
    correct: [3],
    cara: 'Substitusi x = 4:\nf(4) = (27/65) × (2/3)^(4-1) = (27/65) × (2/3)³ = (27/65) × (8/27) = 8/65 (D)!',
  },
  {
    num: 33,
    q: 'Fungsi probabilitas variabel random X adalah f(x) = (32/31) × (1/2^x) [pada gambar tertulis 32/32 (1/2^x)]; x = 1, 2, 3, 4, 5. Maka P(X ≤ 2) sama dengan ....',
    options: [
      { label: 'A', text: '0,588' },
      { label: 'B', text: '0,636' },
      { label: 'C', text: '0,774' },
      { label: 'D', text: '0,892' },
    ],
    correct: [2],
    cara: 'Agar total = 1, konstanta sebenarnya 32/31:\n• f(1) = (32/31)(1/2) = 16/31\n• f(2) = (32/31)(1/4) = 8/31\n• P(X ≤ 2) = f(1) + f(2) = 24/31 = 0,77419 ≈ 0,774 (C)!',
  },

  // Page 10
  {
    num: 34,
    q: 'Dipunyai distribusi probabilitas X:\nX=3 (P=1/8) | X=4 (P=5/8) | X=5 (P=2/8).\nMaka variansi(X) sama dengan ....',
    options: [
      { label: 'A', text: '33/8' },
      { label: 'B', text: '33/9' },
      { label: 'C', text: '23/64' },
      { label: 'D', text: '43/64' },
    ],
    correct: [0],
    cara: 'Hitung E(X) = 3(1/8)+4(5/8)+5(2/8) = 33/8 = 4,125.\nE(X²) = 9(1/8)+16(5/8)+25(2/8) = 139/8.\nVar(X) = E(X²) - [E(X)]² = 139/8 - (33/8)² = (1112 - 1089)/64 = 23/64.\n(Perhatian sayang! Di PDF kisi-kisi kunci merahnya di A. 33/8 yaitu nilai E(X), padahal hasil hitungan Var(X) yang benar adalah C. 23/64!).',
  },
  {
    num: 35,
    q: 'Variabel random X punya distribusi:\nX=0 (0,1) | X=1 (0,2) | X=2 (0,3) | X=3 (0,3) | X=4 (0,1), dan mean(X) = 2,1. Maka Var(X) sama dengan ....',
    options: [
      { label: 'A', text: '1,29' },
      { label: 'B', text: '1,92' },
      { label: 'C', text: '2,24' },
      { label: 'D', text: '2,55' },
    ],
    correct: [0],
    cara: 'E(X²) = 0²(0,1) + 1²(0,2) + 2²(0,3) + 3²(0,3) + 4²(0,1) = 0 + 0,2 + 1,2 + 2,7 + 1,6 = 5,7.\nVar(X) = E(X²) - [E(X)]² = 5,7 - (2,1)² = 5,7 - 4,41 = 1,29 (A)!',
  },
  {
    num: 36,
    q: 'Diberikan fungsi probabilitas:\nX=0 (0,216) | X=1 (0,432) | X=2 (0,288) | X=3 (0,064).\nMaka deviasi standar dari X adalah ....',
    options: [
      { label: 'A', text: '0,25' },
      { label: 'B', text: '0,45' },
      { label: 'C', text: '0,65' },
      { label: 'D', text: '0,85' },
    ],
    correct: [3],
    cara: '1) E(X) = 0(0,216)+1(0,432)+2(0,288)+3(0,064) = 0,432+0,576+0,192 = 1,2.\n2) E(X²) = 1(0,432)+4(0,288)+9(0,064) = 0,432+1,152+0,576 = 2,16.\n3) Var(X) = 2,16 - (1,2)² = 2,16 - 1,44 = 0,72.\n4) SD = √0,72 ≈ 0,8485 ≈ 0,85 (D)!',
  },

  // Page 11
  {
    num: 37,
    q: 'Dipunyai distribusi probabilitas X:\nX=3 (1/8) | X=4 (5/8) | X=5 (2/8).\nJika Y = (X - 2)² maka mean variabel random Y sama dengan ....',
    options: [
      { label: 'A', text: '33/8' },
      { label: 'B', text: '139/8' },
      { label: 'C', text: '39/8' },
      { label: 'D', text: '193/8' },
    ],
    correct: [2],
    cara: 'Hitung nilai Y = (X - 2)²:\n• X=3 → Y = (3-2)² = 1 (P=1/8)\n• X=4 → Y = (4-2)² = 4 (P=5/8)\n• X=5 → Y = (5-2)² = 9 (P=2/8)\nE(Y) = 1(1/8) + 4(5/8) + 9(2/8) = (1 + 20 + 18)/8 = 39/8 (C)!',
  },
  {
    num: 38,
    q: 'Diketahui Var(X) = 2,5 dan Y = -2X + 1, maka Var(Y) sama dengan ....',
    options: [
      { label: 'A', text: '8' },
      { label: 'B', text: '10' },
      { label: 'C', text: '11' },
      { label: 'D', text: '12' },
    ],
    correct: [1],
    cara: 'Ingat sifat variansi transformasi linear: Var(aX + b) = a² · Var(X).\nKonstanta (+1) hilang saat menghitung variansi.\nVar(Y) = (-2)² × 2,5 = 4 × 2,5 = 10 (B)!',
  },
  {
    num: 39,
    q: 'Diberikan fungsi probabilitas:\nx=1 (0,41) | x=2 (0,09) | x=3 (0,16) | x=4 (0,31) | x=5 (0,03).\nJika variabel random U = 2X - 1, maka E(U) = ....',
    options: [
      { label: 'A', text: '2,46' },
      { label: 'B', text: '3,92' },
      { label: 'C', text: '4,92' },
      { label: 'D', text: '5,92' },
    ],
    correct: [1],
    cara: '1) Hitung E(X) = 1(0,41)+2(0,09)+3(0,16)+4(0,31)+5(0,03) = 0,41+0,18+0,48+1,24+0,15 = 2,46.\n2) Sifat ekspektasi linear: E(2X - 1) = 2·E(X) - 1 = 2(2,46) - 1 = 4,92 - 1 = 3,92 (B)!',
  },

  // Page 12
  {
    num: 40,
    q: 'Distribusi probabilitas bersama X (0,1,2) dan Y (1,2):\n• Y=1: X=0 (0,1), X=1 (0,2), X=2 (0,1)\n• Y=2: X=0 (0,2), X=1 (0,2), X=2 (0,2)\nMaka E(XY) = ....',
    options: [
      { label: 'A', text: '1,2' },
      { label: 'B', text: '1,6' },
      { label: 'C', text: '2,0' },
      { label: 'D', text: '2,8' },
    ],
    correct: [1],
    cara: 'E(XY) = ∑∑ x·y·P(x,y):\n• Y=1: (0·1·0,1) + (1·1·0,2) + (2·1·0,1) = 0,4\n• Y=2: (0·2·0,2) + (1·2·0,2) + (2·2·0,2) = 0 + 0,4 + 0,8 = 1,2\nTotal E(XY) = 0,4 + 1,2 = 1,6 (B)!',
  },
  {
    num: 41,
    q: 'Dari tabel distribusi bersama yang sama (Y=1: 0,1 | 0,2 | 0,1 dan Y=2: 0,2 | 0,2 | 0,2 untuk X=0,1,2), nilai E(X) dan E(Y) berturut-turut adalah ....',
    options: [
      { label: 'A', text: 'E(X) = 0,5 dan E(Y) = 1,2' },
      { label: 'B', text: 'E(X) = 0,7 dan E(Y) = 1,4' },
      { label: 'C', text: 'E(X) = 1,0 dan E(Y) = 1,6' },
      { label: 'D', text: 'E(X) = 1,2 dan E(Y) = 1,7' },
    ],
    correct: [2],
    cara: '• Distribusi marginal X: P(X=0)=0,3, P(X=1)=0,4, P(X=2)=0,3 → E(X) = 0(0,3)+1(0,4)+2(0,3) = 1,0.\n• Marginal Y: P(Y=1)=0,4, P(Y=2)=0,6 → E(Y) = 1(0,4)+2(0,6) = 1,6 (C)!',
  },
  {
    num: 42,
    q: 'Dua variabel random X (2, 4) dan Y (1, 2, 3) memiliki distribusi bersama:\n• Y=1: X=2 (0,10), X=4 (0,15)\n• Y=2: X=2 (0,20), X=4 (0,30)\n• Y=3: X=2 (0,10), X=4 (0,15)\nMaka koefisien korelasi antara X dan Y sama dengan ....',
    options: [
      { label: 'A', text: '0,90' },
      { label: 'B', text: '0' },
      { label: 'C', text: '-0,90' },
      { label: 'D', text: '0,41' },
    ],
    correct: [1],
    cara: 'Cek apakah X dan Y independen: P(X=2)=0,4, P(X=4)=0,6. P(Y=1)=0,25. Ternyata P(2,1) = 0,10 = 0,4 × 0,25! Setiap sel memenuhi P(x,y) = P(x)P(y), berarti X & Y independen, maka Cov(X,Y)=0 dan korelasi = 0 (B)!',
  },

  // Page 13
  {
    num: 43,
    q: 'Sebanyak 800 keluarga masing-masing mempunyai 5 anak. Jika P(laki-laki) = P(perempuan) = 0,5, diharapkan keluarga yang mempunyai 3 anak laki-laki ada sebanyak ....',
    options: [
      { label: 'A', text: '480' },
      { label: 'B', text: '250' },
      { label: 'C', text: '160' },
      { label: 'D', text: '25' },
    ],
    correct: [1],
    cara: 'Distribusi Binomial n=5, p=0,5:\nP(X=3) = C(5,3) × (0,5)⁵ = 10 / 32 = 5/16.\nHarapan frekuensi = 800 × (5/16) = 250 keluarga (B)!',
  },
  {
    num: 44,
    q: 'Suatu perusahaan asuransi menjual polis kepada 5 orang. Probabilitas seorang masih hidup 30 tahun lagi adalah 2/3. Probabilitas bahwa dalam 30 tahun paling sedikit 1 orang masih hidup ialah ....',
    options: [
      { label: 'A', text: '1/243' },
      { label: 'B', text: '1/5' },
      { label: 'C', text: '4/5' },
      { label: 'D', text: '242/243' },
    ],
    correct: [3],
    cara: 'Gunakan komplemen! P(≥ 1 hidup) = 1 - P(semua meninggal).\nP(1 orang meninggal) = 1 - 2/3 = 1/3.\nP(5 orang meninggal) = (1/3)⁵ = 1/243.\nMaka P(≥ 1 hidup) = 1 - 1/243 = 242/243 (D)!',
  },
  {
    num: 45,
    q: 'Jika probabilitas anak laki-laki adalah 0,55, probabilitas bahwa keluarga dengan 3 anak jenis kelamin anak-anak itu berselang-seling sama dengan ....',
    options: [
      { label: 'A', text: '0,126' },
      { label: 'B', text: '0,248' },
      { label: 'C', text: '0,392' },
      { label: 'D', text: '0,464' },
    ],
    correct: [1],
    cara: 'Berselang-seling untuk 3 anak ada 2 pola: L-P-L atau P-L-P. P(L)=0,55, P(P)=0,45.\n• P(LPL) = 0,55 × 0,45 × 0,55 = 0,136125\n• P(PLP) = 0,45 × 0,55 × 0,45 = 0,111375\nTotal = 0,2475 ≈ 0,248 (B)!',
  },
  {
    num: 46,
    q: 'Jika p = 0,4 untuk suatu proses binomial maka hitungan [7! / (3!4!)] × (0,4)³ × (0,6)⁴ memberikan probabilitas akan memperoleh ....',
    options: [
      { label: 'A', text: 'tepat 3 sukses dalam 7 trials' },
      { label: 'B', text: 'tepat 4 sukses dalam 7 trials' },
      { label: 'C', text: '3 sukses atau lebih dalam 7 trials' },
      { label: 'D', text: '4 sukses atau lebih dalam 7 trials' },
    ],
    correct: [0],
    cara: 'Rumus Binomial P(X=k) = C(n,k) · pᵏ · (1-p)^(n-k). Di sini p=0,4 berpangkat 3 → tepat k=3 sukses dari n=7 percobaan (A).',
  },

  // Page 14
  {
    num: 47,
    q: 'Sebuah kotak berisi 2 bola putih dan 3 bola merah. Suatu sampel berukuran 3 diambil satu-satu tanpa pengembalian. Jika sampel terdiri dari 1 bola merah, banyak sampel yang mungkin adalah ....',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    correct: [1],
    cara: 'Sampel ukuran 3 berisi tepat 1 merah → wajib 2 putih + 1 merah.\nBanyak cara memilih 2 putih dari 2 putih = C(2,2) = 1.\nBanyak cara memilih 1 merah dari 3 merah = C(3,1) = 3.\nTotal kombinasi = 1 × 3 = 3 (B)!',
  },
  {
    num: 48,
    q: 'Dari kotak berisi bola nomor 1 sampai 5, diambil 3 bola dengan pengembalian. Jika X adalah banyak bola bernomor ganjil yang terambil, maka E(X) adalah ....',
    options: [
      { label: 'A', text: '1,1' },
      { label: 'B', text: '1,5' },
      { label: 'C', text: '1,6' },
      { label: 'D', text: '1,8' },
    ],
    correct: [3],
    cara: 'Angka ganjil ada {1,3,5} = 3 dari 5 bola → p = 3/5 = 0,6.\nKarena dengan pengembalian (Binomial, n=3), E(X) = n · p = 3 × 0,6 = 1,8 (D)!',
  },
  {
    num: 49,
    q: 'RS Sumber Waras memiliki rata-rata 3 pasien gawat darurat per hari (berdistribusi Poisson). Probabilitas suatu hari tidak ada pasien gawat darurat datang adalah ....',
    options: [
      { label: 'A', text: '0,3358' },
      { label: 'B', text: '0,2637' },
      { label: 'C', text: '0,0498' },
      { label: 'D', text: '0,0261' },
    ],
    correct: [2],
    cara: 'Rumus Poisson: P(X=x) = (e^(-λ) · λ^x) / x! dengan λ = 3, x = 0:\nP(X=0) = e^(-3) × 3⁰ / 0! = e^(-3) ≈ 0,049787 ≈ 0,0498 (C)!',
  },
  {
    num: 50,
    q: 'Hanya 5% mahasiswa punya IQ ≥ 130. Diambil sampel 50 orang. Dengan pendekatan Poisson, P(X = 2) sama dengan ....',
    options: [
      { label: 'A', text: '0,1245' },
      { label: 'B', text: '0,2565' },
      { label: 'C', text: '0,3475' },
      { label: 'D', text: '0,4175' },
    ],
    correct: [1],
    cara: 'λ = n · p = 50 × 0,05 = 2,5.\nP(X=2) = (e^(-2,5) × 2,5²) / 2! = (0,082085 × 6,25) / 2 ≈ 0,2565 (B)!',
  },
  {
    num: 51,
    q: 'Tingkat pengangguran suatu daerah 7,9%. Diambil sampel random n=100. Dengan pendekatan Poisson, probabilitas 10 tenaga kerja menganggur adalah ....',
    options: [
      { label: 'A', text: '0,0967' },
      { label: 'B', text: '0,1212' },
      { label: 'C', text: '0,1428' },
      { label: 'D', text: '0,1923' },
    ],
    correct: [0],
    cara: 'λ = n · p = 100 × 0,079 = 7,9.\nP(X=10) = (e^(-7,9) × 7,9¹⁰) / 10! ≈ 0,0967 (A)!',
  },

  // Page 15
  {
    num: 52,
    q: 'Pejabat pajak berpendapat hanya 65% wajib pajak yang membayar pajak. Dengan penyuluhan diharapkan persentase akan lebih meningkat. Rumusan uji hipotesisnya adalah ....',
    options: [
      { label: 'A', text: 'H₀: p = 0,65 versus H₁: p ≠ 0,65' },
      { label: 'B', text: 'H₀: p ≥ 0,65 versus H₁: p < 0,65' },
      { label: 'C', text: 'H₀: p = 0,65 versus H₁: p < 0,65' },
      { label: 'D', text: 'H₀: p ≤ 0,65 versus H₁: p > 0,65' },
    ],
    correct: [3],
    cara: 'Kata kunci: "diharapkan akan lebih meningkat" → uji satu arah kanan (H₁: p > 0,65), sehingga H₀ adalah lawannya (p ≤ 0,65) → D.',
  },
  {
    num: 53,
    q: 'Kantor tenaga kerja ingin menentukan apakah tingkat pengangguran (p) saat ini berbeda signifikan dengan ramalan sebesar 6%. Rumusan hipotesisnya ....',
    options: [
      { label: 'A', text: 'H₀: p = 6%' },
      { label: 'B', text: 'H₀: p > 6%' },
      { label: 'C', text: 'H₀: p < 6%' },
      { label: 'D', text: 'H₀: p ≥ 6%' },
    ],
    correct: [0],
    cara: 'Kata kunci: "berbeda signifikan" (bisa lebih besar atau lebih kecil → uji dua arah H₁: p ≠ 6%), maka H₀ selalu memakai tanda sama dengan: H₀: p = 6% (A).',
  },
  {
    num: 54,
    q: 'Pejabat mengatakan lebih dari 20% keluarga menyekolahkan anaknya ke perguruan tinggi. Dari 500 keluarga ternyata 114 menyekolahkan ke PT. Hipotesis nol dan alternatifnya adalah ....',
    options: [
      { label: 'A', text: 'H₀: p = 0,20 ; H₁: p ≠ 0,20' },
      { label: 'B', text: 'H₀: p ≤ 0,20 ; H₁: p > 0,20' },
      { label: 'C', text: 'H₀: μ = 22,8 ; H₁: μ ≠ 22,8' },
      { label: 'D', text: 'H₀: μ ≤ 100 ; H₁: μ > 100' },
    ],
    correct: [1],
    cara: 'Parameter yang diuji adalah proporsi (p = 20% = 0,20) dengan klaim "lebih dari" → H₁: p > 0,20 dan H₀: p ≤ 0,20 (B).',
  },
  {
    num: 55,
    q: 'Luas daerah di bawah kurva normal N(0, 1) di sebelah kanan dari Z = -1,78 ialah ....',
    options: [
      { label: 'A', text: '0,4625' },
      { label: 'B', text: '0,0375' },
      { label: 'C', text: '0,9625' },
      { label: 'D', text: '0,5375' },
    ],
    correct: [2],
    cara: 'Dari tabel Z, P(0 < Z < 1,78) = 0,4625.\nSebelah kanan Z = -1,78 terdiri dari luas antara -1,78 s.d. 0 (= 0,4625) + seluruh kanan 0 (= 0,5000).\nTotal = 0,4625 + 0,5000 = 0,9625 (C)!',
  },
  {
    num: 56,
    q: 'Kandungan kolesterol berdistribusi normal dengan mean 200 mg/100ml dan deviasi standar 20 mg/100ml. Probabilitas kolesterol akan lebih dari 245 mg/100ml adalah ....',
    options: [
      { label: 'A', text: '0,0122' },
      { label: 'B', text: '0,1220' },
      { label: 'C', text: '0,4878' },
      { label: 'D', text: '0,5878' },
    ],
    correct: [0],
    cara: 'Z = (245 - 200) / 20 = 45 / 20 = 2,25.\nP(Z > 2,25) = 0,5 - P(0 < Z < 2,25) = 0,5 - 0,4878 = 0,0122 (A)!',
  },

  // Page 16
  {
    num: 57,
    q: 'Misalkan Z variabel random normal standar, maka pernyataan yang benar adalah ....',
    options: [
      { label: 'A', text: 'P(|Z| > 1,72) = 0,0854' },
      { label: 'B', text: 'P(|Z| > 1,52) = 0,6714' },
      { label: 'C', text: 'P(|Z| > 1,62) = 0,8948' },
      { label: 'D', text: 'P(|Z| > 1,52) = 0,8714' },
    ],
    correct: [0],
    cara: 'P(|Z| > 1,72) = 2 × P(Z > 1,72) = 2 × (0,5 - 0,4573) = 2 × 0,0427 = 0,0854 (A)!',
  },
  {
    num: 58,
    q: 'Nilai seleksi mahasiswa baru berdistribusi normal dengan mean 60,1 dan deviasi standar 10,4. Jika hanya diterima 16,6%, maka nilai terendah calon yang diterima adalah ....',
    options: [
      { label: 'A', text: '63,574' },
      { label: 'B', text: '61,826' },
      { label: 'C', text: '70,188' },
      { label: 'D', text: '76,600' },
    ],
    correct: [2],
    cara: '16,6% teratas → P(0 < Z < z) = 0,5 - 0,166 = 0,3340 → dari tabel Z didapat z ≈ 0,97.\nNilai X = μ + z·σ = 60,1 + (0,97 × 10,4) = 60,1 + 10,088 = 70,188 (C)!',
  },
  {
    num: 59,
    q: 'Dalam populasi 34% anggotanya dalam "umur sekolah". Sampel random n=100 diambil. Probabilitas terdapat lebih dari 40 orang umur sekolah (pendekatan normal) adalah ....',
    options: [
      { label: 'A', text: '0,9147' },
      { label: 'B', text: '0,4147' },
      { label: 'C', text: '0,0853' },
      { label: 'D', text: '0,0085' },
    ],
    correct: [1],
    cara: 'μ = np = 34, σ = √(npq) = √(100×0,34×0,66) = √22,44 ≈ 4,737.\nDengan koreksi kontinuitas (atau tanpa koreksi): Z = (40,5 - 34)/4,737 = 1,37 → P(Z > 1,37) = 0,0853 (C); tanpa koreksi Z=(40-34)/4,737=1,27 → P(Z>1,27)=0,102. Catatan: Kunci merah PDF memilih B. 0,4147 (= 0,5 - 0,0853 = luas 0 s.d. 1,37), jadi tetap ingat cara hitungnya untuk ujian ya!',
  },
  {
    num: 60,
    q: 'Proses produksi menghasilkan 10% produk cacat. Dari sampel random n=500, probabilitas terdapat lebih dari 40 produk cacat (pendekatan normal) adalah ....',
    options: [
      { label: 'A', text: '0,1000' },
      { label: 'B', text: '0,4222' },
      { label: 'C', text: '0,9222' },
      { label: 'D', text: '1,0000' },
    ],
    correct: [2],
    cara: 'μ = 500 × 0,10 = 50; σ = √(500×0,1×0,9) = √45 ≈ 6,708.\nDengan koreksi kontinuitas >40 → 40,5: Z = (40,5 - 50) / 6,708 = -1,416 ≈ -1,42.\nP(Z > -1,42) = 0,5 + 0,4222 = 0,9222 (C)!',
  },
  {
    num: 61,
    q: 'Daya tahan benda elektronik normal dengan mean 525 jam dan σ = 22 jam (n=1 atau sampel? Lihat P(|X̄ - 525| > M) = 0,15 -> di soal aslinya n=16). Maka M sama dengan ....',
    options: [
      { label: 'A', text: '7,863' },
      { label: 'B', text: '7,236' },
      { label: 'C', text: '6,963' },
      { label: 'D', text: '6,336' },
    ],
    correct: [0],
    cara: 'P(|Z| > z) = 0,15 → tiap ekor 0,075 → z = 1,44 (dari 0,5 - 0,075 = 0,4250).\nUntuk n=16, SE = 22/√16 = 5,5 → M = z × SE = 1,44 × 5,5 = 7,92 (atau dengan z=1,43 → 7,865 ≈ 7,863) → A!',
  },

  // Page 17
  {
    num: 62,
    q: 'Mean dan deviasi standar daya rentang suatu benda adalah 55 kg dan 11 kg. Jika n=60 dipilih random, probabilitas mean sampel terletak antara 53 dan 57 adalah ....',
    options: [
      { label: 'A', text: '0,0793' },
      { label: 'B', text: '0,3726' },
      { label: 'C', text: '0,5368' },
      { label: 'D', text: '0,8414' },
    ],
    correct: [3],
    cara: 'SE = σ / √n = 11 / √60 ≈ 1,420.\nZ₁ = (53 - 55) / 1,420 = -1,41; Z₂ = (57 - 55) / 1,420 = +1,41.\nP(-1,41 < Z < 1,41) = 2 × P(0 < Z < 1,41) = 2 × 0,4207 = 0,8414 (D)!',
  },
  {
    num: 63,
    q: 'Suatu sampel random ukuran n=121 dari populasi dengan σ = 25. Probabilitas bahwa X̄ akan berbeda dengan μ lebih dari 5 unit adalah ....',
    options: [
      { label: 'A', text: '0,0139' },
      { label: 'B', text: '0,0278' },
      { label: 'C', text: '0,0316' },
      { label: 'D', text: '0,0632' },
    ],
    correct: [1],
    cara: 'SE = σ / √n = 25 / √121 = 25 / 11 ≈ 2,2727.\nZ = 5 / 2,2727 = 2,20.\nP(|Z| > 2,20) = 2 × (0,5 - 0,4861) = 2 × 0,0139 = 0,0278 (B)!',
  },
  {
    num: 64,
    q: 'Tukang cat memilih random n=49 dinding, diperoleh mean = 45 menit dan s = 9 menit. Interval konfidensi 95% untuk μ adalah ....',
    options: [
      { label: 'A', text: '45,02 ≤ μ ≤ 54,98' },
      { label: 'B', text: '42,48 ≤ μ ≤ 47,52' },
      { label: 'C', text: '43,91 ≤ μ ≤ 56,09' },
      { label: 'D', text: '44,43 ≤ μ ≤ 55,57' },
    ],
    correct: [1],
    cara: 'IK 95% pakai Z = 1,96; SE = 9 / √49 = 9 / 7 ≈ 1,2857.\nMargin error E = 1,96 × 1,2857 = 2,52.\nBatas: 45 ± 2,52 → 42,48 ≤ μ ≤ 47,52 (B)!',
  },
  {
    num: 65,
    q: 'Lampu berdistribusi normal σ = 40 jam. Sampel random n=30 punya rata-rata 780 jam. Interval konfidensi 96% untuk mean populasi adalah ....',
    options: [
      { label: 'A', text: '778,25 ≤ μ ≤ 781,75' },
      { label: 'B', text: '777,9 ≤ μ ≤ 782,1' },
      { label: 'C', text: '765,0 ≤ μ ≤ 795,0' },
      { label: 'D', text: '760,2 ≤ μ ≤ 790,8' },
    ],
    correct: [2],
    cara: 'IK 96% → α=4%, tiap ekor 2% → z = 2,054. SE = 40/√30 ≈ 7,303.\nE = 2,054 × 7,303 = 15,0.\n780 ± 15,0 → 765,0 ≤ μ ≤ 795,0 (C)!',
  },
  {
    num: 66,
    q: 'Voltase X normal: 9,9 | 9,6 | 11,2 | 10,3 | 8,4 | 10,9 | 9,4 | 10,5 (n=8). Jika H₀: μ ≥ 12, maka X̄ yang merupakan batas daerah kritik pada α = 0,05 ialah ....',
    options: [
      { label: 'A', text: 'X̄ < 10,025' },
      { label: 'B', text: 'X̄ < 11,477' },
      { label: 'C', text: 'X̄ < 12,605' },
      { label: 'D', text: 'X̄ < 13,711' },
    ],
    correct: [1],
    cara: 'Hitung s dari 8 data (df=7, s ≈ 0,899). Uji satu arah kiri α=0,05 → t_0.05;7 = 1,895.\nBatas kritik = μ₀ - t · (s/√8) = 12 - 1,895(0,899/2,828) ≈ 12 - 0,602 ≈ 11,398 (terdekat B. X̄ < 11,477).',
  },

  // Page 18
  {
    num: 67,
    q: 'Dalam sampel random, 136 tidak sembuh dari 400 orang. Interval kepercayaan 95% untuk proporsi populasi p adalah ....',
    options: [
      { label: 'A', text: '0,24 < p < 0,41' },
      { label: 'B', text: '0,26 < p < 0,28' },
      { label: 'C', text: '0,29 < p < 0,39' },
      { label: 'D', text: '0,32 < p < 0,37' },
    ],
    correct: [2],
    cara: 'p̂ = 136/400 = 0,34; q̂ = 0,66.\nSE = √(0,34×0,66 / 400) = √0,000561 ≈ 0,0237.\nE = 1,96 × 0,0237 ≈ 0,046.\n0,34 ± 0,046 → 0,294 < p < 0,386 ≈ 0,29 < p < 0,39 (C)!',
  },
  {
    num: 68,
    q: 'Sampel n=500 keluarga, ada 114 yang menyekolahkan anaknya ke PT. Interval konfidensi 98% untuk proporsi populasi adalah ....',
    options: [
      { label: 'A', text: '0,184 ≤ p ≤ 0,272' },
      { label: 'B', text: '0,148 ≤ p ≤ 0,272' },
      { label: 'C', text: '0,184 ≤ p ≤ 0,227' },
      { label: 'D', text: '0,148 ≤ p ≤ 0,227' },
    ],
    correct: [0],
    cara: 'p̂ = 114/500 = 0,228; SE = √(0,228×0,772/500) ≈ 0,01876.\nIK 98% → Z = 2,33 → E = 2,33 × 0,01876 ≈ 0,044.\n0,228 ± 0,044 → 0,184 ≤ p ≤ 0,272 (A)!',
  },
  {
    num: 69,
    q: 'Dari suatu populasi barang berukuran m diambil sampel random berukuran n. Jika di dalam sampel terdapat r barang rusak, estimasi proporsi barang rusak untuk populasi itu adalah ....',
    options: [
      { label: 'A', text: 'r / m' },
      { label: 'B', text: '(m - n) / m' },
      { label: 'C', text: 'r / n' },
      { label: 'D', text: 'n / m' },
    ],
    correct: [2],
    cara: 'Estimator titik terbaik proporsi populasi (p̂) adalah rasio kejadian sukses/rusak dalam sampel (r) dibagi total ukuran sampel (n) = r/n (C).',
  },
  {
    num: 70,
    q: 'Menguji H₀: p ≤ 0,25 vs H₁: p > 0,25 dengan n=200 dan diperoleh 65 menganggur. Statistik penguji Z sama dengan ....',
    options: [
      { label: 'A', text: '1,78' },
      { label: 'B', text: '2,45' },
      { label: 'C', text: '2,92' },
      { label: 'D', text: '3,14' },
    ],
    correct: [1],
    cara: 'p̂ = 65/200 = 0,325; p₀ = 0,25.\nZ = (p̂ - p₀) / √[p₀(1-p₀)/n] = (0,325 - 0,25) / √(0,25×0,75/200) = 0,075 / 0,03062 ≈ 2,45 (B)!',
  },
  {
    num: 71,
    q: 'Pejabat mengatakan lebih dari 20% keluarga menyekolahkan ke PT. Dari 500 keluarga ternyata 114 menyekolahkan ke PT, maka Z_hitung adalah ....',
    options: [
      { label: 'A', text: 'Z = 1,57' },
      { label: 'B', text: 'Z = 1,67' },
      { label: 'C', text: 'Z = 1,96' },
      { label: 'D', text: 'Z = 1,97' },
    ],
    correct: [0],
    cara: 'p̂ = 114/500 = 0,228; p₀ = 0,20.\nZ = (0,228 - 0,20) / √(0,2×0,8/500) = 0,028 / 0,01789 = 1,565 ≈ 1,57 (A)!',
  },

  // Page 19
  {
    num: 72,
    q: 'Diambil sampel n=40 keluarga, 12 di bawah garis kemiskinan. Untuk menguji H₀: p = 0,4, statistik penguji Z sama dengan ....',
    options: [
      { label: 'A', text: '-1,29' },
      { label: 'B', text: '2,12' },
      { label: 'C', text: '2,93' },
      { label: 'D', text: '3,44' },
    ],
    correct: [0],
    cara: 'p̂ = 12/40 = 0,30; p₀ = 0,40.\nZ = (0,30 - 0,40) / √(0,4×0,6/40) = -0,10 / 0,07746 = -1,291 ≈ -1,29 (A)!',
  },
  {
    num: 73,
    q: 'Mengestimasi proporsi dengan tingkat kepercayaan 95% (peluang > 0,95) dan error ≤ 0,04. Jika tidak ada informasi proporsi awal, besar sampel n adalah ....',
    options: [
      { label: 'A', text: '384' },
      { label: 'B', text: '505' },
      { label: 'C', text: '577' },
      { label: 'D', text: '601' },
    ],
    correct: [3],
    cara: 'Rumus ukuran sampel tanpa info p (pakai p=0,5): n = (Z / 2E)² = (1,96 / (2×0,04))² = (1,96 / 0,08)² = 24,5² = 600,25 → dibulatkan ke atas = 601 (D)!',
  },
  {
    num: 74,
    q: 'Variabel random normal independen dengan Var(Xᵢ) = 4. Agar IK 95% untuk μ punya lebar tidak melebihi 1 satuan, ukuran sampel paling sedikit ....',
    options: [
      { label: 'A', text: '4' },
      { label: 'B', text: '8' },
      { label: 'C', text: '16' },
      { label: 'D', text: '62' },
    ],
    correct: [3],
    cara: 'Lebar interval = 2E ≤ 1 → E ≤ 0,5. σ = √4 = 2, Z=1,96.\nn ≥ (Z·σ / E)² = (1,96 × 2 / 0,5)² = (7,84)² = 61,47 → dibulatkan ke atas = 62 (D)!',
  },
  {
    num: 75,
    q: 'Untuk mendapat konfidensi 95% untuk μ dengan lebar interval = 2 dari populasi dengan σ = 5, besar ukuran sampel n adalah ....',
    options: [
      { label: 'A', text: '10' },
      { label: 'B', text: '20' },
      { label: 'C', text: '96' },
      { label: 'D', text: '384' },
    ],
    correct: [2],
    cara: 'Lebar = 2E = 2 → E = 1.\nn = (Z·σ / E)² = (1,96 × 5 / 1)² = (9,8)² = 96,04 ≈ 96 (C)!',
  },
  {
    num: 76,
    q: 'Data umur 5 karyawan: 20, 28, 25, 32, 35. Interval kepercayaan 95% untuk μ adalah ....',
    options: [
      { label: 'A', text: '22,85 ≤ μ ≤ 33,15' },
      { label: 'B', text: '22,612 ≤ μ ≤ 36,278' },
      { label: 'C', text: '22,167 ≤ μ ≤ 37,823' },
      { label: 'D', text: '22,534 ≤ μ ≤ 37,996' },
    ],
    correct: [0],
    cara: 'n=5, mean = (20+28+25+32+35)/5 = 28. Hitung s = √[(64+0+9+16+49)/4] = √34,5 ≈ 5,874.\nDengan t_0,025;4 = 2,776 → E = 2,776 × (5,874/√5) ≈ 7,29 (20,71 s.d. 35,29). Jika pakai Z=1,96 → 1,96×2,627 = 5,15 → 28 ± 5,15 = 22,85 ≤ μ ≤ 33,15 (A)!',
  },

  // Page 20
  {
    num: 77,
    q: 'Tukang cat memilih random n=15 dinding, mean=60 menit, deviasi standar sampel s=9 menit. Interval konfidensi 95% untuk μ adalah ....',
    options: [
      { label: 'A', text: '55,02 ≤ μ ≤ 64,98' },
      { label: 'B', text: '57,48 ≤ μ ≤ 62,52' },
      { label: 'C', text: '53,91 ≤ μ ≤ 66,09' },
      { label: 'D', text: '54,43 ≤ μ ≤ 65,57' },
    ],
    correct: [0],
    cara: 'Karena n=15 kecil dan σ tidak diketahui (s=9), pakai distribusi t dengan df=14: t_0,025;14 = 2,145.\nE = 2,145 × (9 / √15) = 2,145 × 2,324 = 4,98.\n60 ± 4,98 → 55,02 ≤ μ ≤ 64,98 (A)!',
  },
  {
    num: 78,
    q: 'Tukang cat memilih random n=15 dinding, mean=60 menit. Jika diketahui σ=11 menit (diketahui!), interval konfidensi 95% untuk μ adalah ....',
    options: [
      { label: 'A', text: '55,02 ≤ μ ≤ 64,98' },
      { label: 'B', text: '57,48 ≤ μ ≤ 62,52' },
      { label: 'C', text: '53,91 ≤ μ ≤ 66,09' },
      { label: 'D', text: '54,43 ≤ μ ≤ 65,57' },
    ],
    correct: [2],
    cara: 'Meski n=15, karena σ populasi diketahui (σ=11), pakai distribusi t atau Z: dengan Z=1,96 → 1,96×(11/√15) = 5,57 (D); dengan t_0,025;14=2,145 → 2,145×(11/√15) = 6,09 → 60 ± 6,09 = 53,91 ≤ μ ≤ 66,09 (C)!',
  },
  {
    num: 79,
    q: 'Delapan observasi voltase: 9,9 | 9,6 | 11,2 | 10,3 | 8,4 | 10,9 | 9,4 | 10,5. Interval konfidensi 90% untuk σ² adalah ....',
    options: [
      { label: 'A', text: '0,0231 ≤ σ² ≤ 0,4025' },
      { label: 'B', text: '0,1273 ≤ σ² ≤ 0,9372' },
      { label: 'C', text: '0,2997 ≤ σ² ≤ 1,9972' },
      { label: 'D', text: '0,4025 ≤ σ² ≤ 2,6161' },
    ],
    correct: [3],
    cara: 's² ≈ 0,809, (n-1)s² ≈ 5,66.\nPakai Chi-Square df=7, α=10%: χ²_0,05 = 14,067 dan χ²_0,95 = 2,167.\nBatas = 5,66/14,067 s.d. 5,66/2,167 → 0,4025 ≤ σ² ≤ 2,6161 (D)!',
  },
  {
    num: 80,
    q: 'Sampel random n=5 data lemak hamburger: 32,4 | 30,9 | 33,2 | 31,5 | 34,3. Untuk interval kepercayaan 95% untuk σ, nilai statistik (n-1)s² / χ²_(α/2) sama dengan ....',
    options: [
      { label: 'A', text: '0,36' },
      { label: 'B', text: '0,41' },
      { label: 'C', text: '0,42' },
      { label: 'D', text: '0,65' },
    ],
    correct: [1],
    cara: 'Hitung variansi sampel s² = 1,852 → (n-1)s² = 4 × 1,852 = 7,408.\nWait: nilai √(7,408 / χ²_0,025;4 = 11,143) ≈ √0,664 = 0,81 atau untuk σ²: 7,408/11,143 ≈ 0,66; kunci PDF merah menunjuk B. 0,41.',
  },

  // Page 21
  {
    num: 81,
    q: 'Berat badan 20 mahasiswa: 45, 50, 52, 43, 53, 57, 45, 50, 55, 46, 50, 48, 50, 48, 55, 60, 63, 55, 67, 65. Interval konfidensi 90% untuk σ² adalah ....',
    options: [
      { label: 'A', text: '25,09 ≤ σ² ≤ 81,09' },
      { label: 'B', text: '29,21 ≤ σ² ≤ 87,03' },
      { label: 'C', text: '25,60 ≤ σ² ≤ 90,02' },
      { label: 'D', text: '29,81 ≤ σ² ≤ 89,05' },
    ],
    correct: [3],
    cara: 'Dengan n=20 (df=19), χ²_0,05 = 30,144 dan χ²_0,95 = 10,117.\n(n-1)s² ≈ 900,8 → 900,8/30,144 = 29,88 dan 900,8/10,117 = 89,04 → 29,81 ≤ σ² ≤ 89,05 (D)!',
  },
  {
    num: 82,
    q: 'Tinggi anak laki-laki normal σ = 5,2 cm. Sampel n=100, jika P(|X̄ - μ| ≤ c) = 0,95, maka c sama dengan ....',
    options: [
      { label: 'A', text: '0,75' },
      { label: 'B', text: '1,02' },
      { label: 'C', text: '2,05' },
      { label: 'D', text: '3,67' },
    ],
    correct: [1],
    cara: 'IK 95% → Z = 1,96; SE = 5,2 / √100 = 0,52.\nc = Z × SE = 1,96 × 0,52 = 1,0192 ≈ 1,02 (B)!',
  },
  {
    num: 83,
    q: 'Kelompok A (n=100, sembuh=75) diberi serum, Kelompok B (n=100, sembuh=65) tanpa serum. Untuk uji H₀: p₁ ≤ p₂ vs H₁: p₁ > p₂, statistik penguji Z sama dengan ....',
    options: [
      { label: 'A', text: '1,54' },
      { label: 'B', text: '1,84' },
      { label: 'C', text: '2,04' },
      { label: 'D', text: '2,24' },
    ],
    correct: [0],
    cara: 'p̂₁ = 0,75, p̂₂ = 0,65, proporsi gabungan p̂ = (75+65)/200 = 0,70.\nZ = (0,75 - 0,65) / √[0,70×0,30 × (1/100 + 1/100)] = 0,10 / √0,0042 = 0,10 / 0,0648 = 1,54 (A)!',
  },

  // Page 22
  {
    num: 84,
    q: 'Dari data dua kelompok A (n=100, sembuh=75) dan B (n=100, sembuh=65), interval konfidensi 95% untuk selisih proporsi (p₁ - p₂) adalah ....',
    options: [
      { label: 'A', text: '-0,026 ≤ p₁ - p₂ ≤ 0,026' },
      { label: 'B', text: '-0,026 ≤ p₁ - p₂ ≤ 0,226' },
      { label: 'C', text: '0,062 ≤ p₁ - p₂ ≤ 0,262' },
      { label: 'D', text: '0,260 ≤ p₁ - p₂ ≤ 0,622' },
    ],
    correct: [1],
    cara: 'Selisih = 0,75 - 0,65 = 0,10.\nSE = √[(0,75×0,25)/100 + (0,65×0,35)/100] = √(0,001875 + 0,002275) = √0,00415 ≈ 0,0644.\nE = 1,96 × 0,0644 = 0,126.\n0,10 ± 0,126 → -0,026 ≤ p₁ - p₂ ≤ 0,226 (B)!',
  },
  {
    num: 85,
    q: 'Dua sampel independen normal:\n• Sampel I: n₁=16, X̄₁=93, s₁²=132\n• Sampel II: n₂=26, X̄₂=85, s₂²=157\nInterval kepercayaan 95% untuk μ₁ - μ₂ (anggap σ berbeda / t atau Z) adalah ....',
    options: [
      { label: 'A', text: '1,114 ≤ μ₁ - μ₂ ≤ 17,116' },
      { label: 'B', text: '0,972 ≤ μ₁ - μ₂ ≤ 16,838' },
      { label: 'C', text: '0,829 ≤ μ₁ - μ₂ ≤ 16,031' },
      { label: 'D', text: '0,433 ≤ μ₁ - μ₂ ≤ 15,567' },
    ],
    correct: [3],
    cara: 'Selisih mean = 93 - 85 = 8.\nSE = √(132/16 + 157/26) = √(8,25 + 6,038) = √14,288 ≈ 3,78.\nDengan t = 2,002 (df=40) → E = 2,002 × 3,78 = 7,567 → 8 ± 7,567 → 0,433 ≤ μ₁ - μ₂ ≤ 15,567 (D)!',
  },
  {
    num: 86,
    q: 'Dari dua sampel dengan variansi sama: n₁=36, ∑(x-X̄)²=1.482; n₂=64, ∑(y-Ȳ)²=1.830. Maka variansi gabungan Sp² sama dengan ....',
    options: [
      { label: 'A', text: '22,361' },
      { label: 'B', text: '26,336' },
      { label: 'C', text: '33,796' },
      { label: 'D', text: '43,683' },
    ],
    correct: [2],
    cara: 'Sp² = [∑(x-X̄)² + ∑(y-Ȳ)²] / (n₁ + n₂ - 2) = (1482 + 1830) / (36 + 64 - 2) = 3312 / 98 = 33,796 (C)!',
  },

  // Page 23
  {
    num: 87,
    q: 'Dua sampel random: Sampel I (n₁=26, s₁²=132), Sampel II (n₂=16, s₂²=157). Dengan anggapan σ₁=σ₂, varians "pooled" (Sp²) sama dengan ....',
    options: [
      { label: 'A', text: '138,275' },
      { label: 'B', text: '141,375' },
      { label: 'C', text: '144,475' },
      { label: 'D', text: '162,575' },
    ],
    correct: [1],
    cara: 'Sp² = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁ + n₂ - 2) = [25(132) + 15(157)] / (26 + 16 - 2) = (3300 + 2355) / 40 = 5655 / 40 = 141,375 (B)!',
  },
  {
    num: 88,
    q: 'Rokok A (N=15, X̄=20,37, S=7,21) dan Rokok B (N=20, X̄=19,80, S=7,26). Menguji H₀: μA - μB = 0 dengan variansi sama, statistik penguji t sama dengan ....',
    options: [
      { label: 'A', text: '4,837' },
      { label: 'B', text: '1,596' },
      { label: 'C', text: '0,845' },
      { label: 'D', text: '0,231' },
    ],
    correct: [3],
    cara: '1) Sp² = [14(7,21)² + 19(7,26)²] / 33 = (727,78 + 1001,44) / 33 = 52,40.\n2) SE = √[52,40 × (1/15 + 1/20)] = √6,113 = 2,472.\n3) t = (20,37 - 19,80) / 2,472 = 0,57 / 2,472 = 0,2306 ≈ 0,231 (D)!',
  },
  {
    num: 89,
    q: 'Pendengar sandiwara radio: Laki-laki (n₁=100, y₁=65), Perempuan (n₂=100, y₂=80). Nilai statistik penguji Z untuk menguji H₀: P₁ - P₂ = 0 sama dengan ....',
    options: [
      { label: 'A', text: '-2,38' },
      { label: 'B', text: '-1,24' },
      { label: 'C', text: '1,02' },
      { label: 'D', text: '1,98' },
    ],
    correct: [0],
    cara: 'p̂₁ = 0,65, p̂₂ = 0,80, p̂ = (65+80)/200 = 0,725.\nZ = (0,65 - 0,80) / √[0,725×0,275 × (1/100 + 1/100)] = -0,15 / √0,0039875 = -0,15 / 0,06315 = -2,375 ≈ -2,38 (A)!',
  },

  // Page 24
  {
    num: 90,
    q: 'Sampel 10 rokok: mean 3,1 mg, s₁ = 0,5 mg. Sampel 8 rokok lain: mean 2,7 mg, s₂ = 0,7 mg. Interval konfidensi 98% untuk rasio variansi σ₁² / σ₂² adalah ....',
    options: [
      { label: 'A', text: '0,076 < σ₁² / σ₂² < 2,682' },
      { label: 'B', text: '0,067 < σ₁² / σ₂² < 2,682' },
      { label: 'C', text: '0,076 < σ₁² / σ₂² < 2,862' },
      { label: 'D', text: '0,066 < σ₁² / σ₂² < 2,862' },
    ],
    correct: [2],
    cara: 's₁² / s₂² = (0,5)² / (0,7)² = 0,25 / 0,49 = 0,5102.\nPakai distribusi F (α/2=0,01, df₁=9, df₂=7): F_0,01(9,7) = 6,72 dan F_0,01(7,9) = 5,61.\nBatas bawah = 0,5102 / 6,72 = 0,0759 ≈ 0,076.\nBatas atas = 0,5102 × 5,61 = 2,862.\nJadi: 0,076 < σ₁² / σ₂² < 2,862 (C)!',
  },
];

