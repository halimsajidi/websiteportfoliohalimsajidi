# Halim Sajidi - Professional Portfolio Website

Website portofolio profesional modern, minimalis, dan berkinerja tinggi untuk **Halim Sajidi** (*Operations Manager & Program Strategist*). Dibangun menggunakan arsitektur *mobile-first*, **HTML5 Semantik**, **Vanilla CSS murni** (CSS Variables, Flexbox, & Grid), serta **Vanilla JavaScript** tanpa dependensi pihak ketiga.

---

## 🚀 Fitur Utama

- **Desain Modern ala Korporat Teknologi**: Palet warna bersih putih/slate dengan aksen biru teknologi (*sky blue*) dan tipografi sans-serif modern (**Inter** dari Google Fonts).
- **Responsif & Mobile-First**: Tata letak optimal di semua perangkat (ponsel cerdas, tablet, laptop, dan monitor desktop lebar).
- **Navigasi Sticky & Interaktif**:
  - Menu navigasi *sticky* di atas dengan transisi kaca (*glassmorphism backdrop blur*) saat di-scroll.
  - *Mobile Hamburger Menu* dengan animasi silang (X) dan *slide-out drawer*.
  - *Scrollspy*: Otomatis menandai tautan menu yang aktif sesuai bagian halaman yang sedang dibaca.
  - *Smooth Scrolling* dengan koreksi offset tinggi header.
- **8 Bagian Lengkap**:
  1. **Header & Navbar**: Logo teks dan 6 menu navigasi utama (*About, Experience, Projects, Achievements, Certifications, Contact*).
  2. **Hero Section**: Sapaan ramah, heading, sub-heading, *metric highlights*, tombol CTA ganda, dan kartu foto profil berestetika teknologi dengan status *Open for Opportunities*.
  3. **About Me**: Latar belakang analitis ilmiah (Fisika IPB University), keahlian *data analytics* (Power BI), dan integrasi alur kerja AI (Claude).
  4. **Experience Timeline**: Rekam jejak kepemimpinan operasional di HaloTech Academy dan koordinasi program di Dicoding Indonesia dalam format *timeline* vertikal semantik.
  5. **Projects Grid**: 8 proyek terapan mencakup riset skripsi *Variational Quantum Classifier* (VQC Higgs Boson), model *Machine Learning* prediktif, sistem rekomendasi, NLP, hingga aplikasi *Computer Vision* (Turtlify).
  6. **Achievements**: Kartu penghargaan dengan ikon medali/piala (*Juara 3 TFUG Surabaya NLP Olympiad* & *Finalis Top 50 Bangkit Capstone*).
  7. **Certifications & Bootcamps**: Sertifikasi profesional (*JayJay, MySkill, RevoU, Bangkit Academy*) dengan skor kelulusan teruji yang disorot dengan warna aksen.
  8. **Contact & Call to Action**: Teks ajakan kolaborasi, tombol *Kirim Email* (`mailto:`), tautan LinkedIn, tombol *Salin Email* cepat dengan notifikasi *toast*, tombol melayang *Back to Top*, serta *footer* minimalis.

---

## 📁 Struktur Direktori

```text
Website/
├── index.html       # Struktur HTML5 semantik & metadata SEO/OpenGraph
├── style.css        # Desain CSS modular, CSS Variables, dan responsivitas
├── script.js        # Logika interaktif: navigasi mobile, scrollspy, copy email
└── README.md        # Dokumentasi proyek
```

---

## 💻 Menjalankan Secara Lokal

Anda dapat menjalankan server statis lokal menggunakan Python atau Node.js:

### Menggunakan Python (yang sudah aktif di port 3000):
```bash
python -m http.server 3000
```
Buka browser favorit Anda di: **[http://localhost:3000](http://localhost:3000)**

### Atau Menggunakan Node.js / npx:
```bash
npx serve
```

---

## 🛠️ Panduan Kustomisasi Cepat

1. **Foto Profil**:
   - Foto profil resmi [`halimsajidi.jpg`](halimsajidi.jpg) telah terpasang rapi di Hero Section dengan kelas `.profile-photo-img` (rasio 1:1, sudut membulat, dan `object-fit: cover`).
   - Metadata OpenGraph dan Twitter Card juga otomatis menampilkan foto ini saat tautan dibagikan ke media sosial / chat.

2. **Menyesuaikan Alamat Email & Akun LinkedIn/GitHub**:
   - Di [`index.html`](index.html) bagian `#contact`:
     - Email: `halimsajidi14@gmail.com`
     - LinkedIn: `https://www.linkedin.com/in/halim-sajidi/`
     - GitHub: `https://github.com/halimsajidi`

---

## 🌐 Panduan Publikasi Online Gratis (Deployment)

### Opsi A: Vercel (Paling Direkomendasikan - 1 Menit)
1. Buka [Vercel](https://vercel.com) dan masuk dengan akun GitHub.
2. Unggah repositori ini, pilih *Framework Preset: Other*, dan klik **Deploy**.
3. Website Anda langsung live dengan URL seperti `https://halim-sajidi.vercel.app` dan sertifikat SSL gratis.

### Opsi B: GitHub Pages
1. Buat repositori baru di GitHub (misal `halimsajidi.github.io` atau `portfolio`).
2. Unggah file `index.html`, `style.css`, dan `script.js`.
3. Buka **Settings** > **Pages** > pilih branch `main` dan folder `/ (root)` > klik **Save**.
4. Website akan tayang dalam hitungan detik.

---

© 2026 **Halim Sajidi**. Dibuat dengan antusiasme.
