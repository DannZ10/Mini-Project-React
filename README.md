<p align="center">
  <img src="https://lh3.googleusercontent.com/aida/AP1WRLvxPfEHLHHECFlTQ0IzFZirqRnpVxgSt2WbQuuHzi2Oc1hm_TxPhJQUwaow6RSwzSSi_Caasye2lR6DmTBAQZnHNJS9FYXObnM3OtGxWig64gc6f4wxuJKOa5_M8tFV_rOYZBxYL6CclKFcAGlYI0T4G8WU3Q_dWeAHocOim9wXmIcrrJo8EbwgJw8e0walYF0vxC3ClcajIm_WZ5qRQZOJCAZh2ZoQeoDZ3e0q-T3_hqODNozWMIU0i0g" alt="dibiEdu Logo" width="60" />
</p>

<h1 align="center">dibiEdu LMS</h1>

<p align="center">
  <strong>A modern, full-featured Learning Management System built with React & Vite</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

---

## 📖 Deskripsi

**dibiEdu LMS** adalah platform Learning Management System (LMS) modern yang dirancang untuk memberikan pengalaman belajar online yang premium dan intuitif. Dibangun dengan arsitektur React yang modular menggunakan pola **Atomic Design** (atoms → molecules → organisms → templates → pages), aplikasi ini menyajikan antarmuka pengguna yang responsif dan interaktif dengan design system berbasis **Material Design 3** dan estetika **Glassmorphism**.

Aplikasi ini terintegrasi penuh dengan backend **Laravel REST API** untuk autentikasi, manajemen kursus, dan operasi CRUD melalui Axios HTTP client.

---

## ✨ Fitur Utama

### 🎨 Landing Page & Halaman Publik
- **Home** — Hero section dinamis, top picks kursus berdasarkan rating tertinggi, testimoni, dan CTA
- **Courses Catalog** — Katalog kursus dengan hero banner, pencarian real-time, filter kategori, dan pagination (Load More)
- **Course Detail** — Halaman detail kursus lengkap dengan deskripsi, silabus, informasi instruktur, dan tombol enroll
- **About** — Halaman profil perusahaan dengan visi, misi, dan tim
- **Pricing** — Halaman harga dengan toggle bulanan/tahunan, perbandingan paket, dan FAQ accordion
- **Contact** — Formulir kontak dengan peta dan informasi lokasi

### 🔐 Autentikasi
- **Login & Register** — Halaman autentikasi split-layout dengan desain premium, toggle password visibility, social login UI (Google & LinkedIn), dan remember-me checkbox
- **Protected Routes** — Rute dashboard terlindungi dengan guard autentikasi berbasis token (Laravel Sanctum)
- **Session Management** — Manajemen token via `localStorage` dengan Axios interceptor otomatis

### 📊 Dashboard (Role-Based)
- **Student Dashboard** — Ringkasan kursus yang diikuti, progress belajar, dan sertifikat
- **Instructor Dashboard** — Manajemen kursus, statistik siswa, dan analytics
- **Admin Dashboard** — Panel administrasi lengkap dengan manajemen pengguna, kursus, dan laporan

### 📱 Responsivitas & UX
- **Mobile-First Design** — Fully responsive di semua ukuran layar
- **Collapsible Sidebar** — Navigasi drawer dari kanan (landing page) dan sidebar collapsible dari kiri (dashboard)
- **Skeleton UI** — Shimmer loading placeholders saat data dimuat untuk pengalaman pengguna yang mulus
- **Micro-Animations** — Hover effects, transisi halus, dan animasi interaktif di seluruh aplikasi

---

## 🏗️ Arsitektur Proyek

```
dibiedu_lms/
├── public/
│   └── img/                    # Aset gambar statis (banner, ilustrasi, favicon)
├── src/
│   ├── components/
│   │   ├── atoms/              # Komponen dasar (Skeleton, dll.)
│   │   ├── molecules/          # Komponen gabungan (CourseCard, dll.)
│   │   ├── organisms/          # Komponen kompleks (Navbar, CourseGrid)
│   │   └── templates/          # Layout wrapper (MainLayout, DashboardLayout)
│   ├── modules/
│   │   ├── auth/               # Modul autentikasi (AuthContext, useAuth, auth.api)
│   │   └── courses/            # Modul kursus (courses.api)
│   ├── pages/
│   │   ├── dashboard/          # Halaman dashboard (Admin, Instructor, Student)
│   │   ├── Home.jsx            # Landing page
│   │   ├── Courses.jsx         # Katalog kursus
│   │   ├── CourseDetail.jsx    # Detail kursus
│   │   ├── LoginRegister.jsx   # Halaman login/register
│   │   ├── About.jsx           # Halaman tentang kami
│   │   ├── Pricing.jsx         # Halaman harga
│   │   └── Contact.jsx         # Halaman kontak
│   ├── routes/                 # Route guards (ProtectedRoute)
│   ├── utils/                  # Utility functions (Axios instance, helpers)
│   ├── App.jsx                 # Root application dengan routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & Tailwind imports
├── vite.config.js              # Konfigurasi Vite + path alias
├── package.json
└── README.md
```

---

## 📋 Prasyarat (Prerequisites)

Pastikan perangkat Anda telah terinstal:

| Software | Versi Minimum | Keterangan |
|----------|---------------|------------|
| **Node.js** | `v18.0+` | Runtime JavaScript |
| **npm** | `v9.0+` | Package manager (bawaan Node.js) |
| **Git** | `v2.30+` | Version control |

### Backend (Opsional — untuk integrasi penuh)

| Software | Versi Minimum | Keterangan |
|----------|---------------|------------|
| **PHP** | `v8.1+` | Runtime Laravel |
| **Composer** | `v2.0+` | PHP package manager |
| **MySQL / SQLite** | Terbaru | Database |
| **Laravel** | `v10+` | Backend REST API (`lms-platform`) |

---

## 🚀 Cara Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/dibiedu-lms.git
cd dibiedu-lms/dibiedu_lms
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment

Pastikan file konfigurasi API base URL mengarah ke backend Laravel Anda. Secara default, aplikasi ini menggunakan `http://127.0.0.1:8000/api` sebagai endpoint.

Jika perlu mengubahnya, sesuaikan konfigurasi Axios instance di `src/utils/`.

### 4. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` secara default.

### 5. Setup Backend (Opsional)

Jika Anda ingin menjalankan backend Laravel secara lokal:

```bash
# Masuk ke direktori backend
cd ../previous_assigment/lms-platform

# Install PHP dependencies
composer install

# Salin environment dan generate key
cp .env.example .env
php artisan key:generate

# Jalankan migrasi dan seed database
php artisan migrate --seed

# Jalankan server Laravel
php artisan serve
```

---

## 💻 Cara Penggunaan (Usage)

### Perintah yang Tersedia

| Perintah | Deskripsi |
|----------|-----------|
| `npm run dev` | Menjalankan development server dengan HMR |
| `npm run build` | Build produksi ke folder `dist/` |
| `npm run preview` | Preview hasil build produksi |
| `npm run lint` | Jalankan linter (Oxlint) |

### Development Mode

```bash
# Jalankan dev server (hot reload aktif)
npm run dev

# Output:
#   VITE v8.1.4  ready in 200ms
#   ➜  Local:   http://localhost:5173/
#   ➜  Network: http://192.168.x.x:5173/
```

### Production Build

```bash
# Build untuk produksi
npm run build

# Preview hasil build
npm run preview
```

### Akun Demo (Seeder)

Jika backend telah di-seed, gunakan akun berikut untuk login:

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `admin@dibiedu.com` | `password` |
| **Student** | `student@dibiedu.com` | `password` |
| **Instructor** | `elena@dibiedu.com` | `password` |

### Navigasi Halaman

| Route | Halaman | Akses |
|-------|---------|-------|
| `/` | Landing Page (Home) | Publik |
| `/courses` | Katalog Kursus | Publik |
| `/courses/:id` | Detail Kursus | Publik |
| `/about` | Tentang Kami | Publik |
| `/pricing` | Harga & Paket | Publik |
| `/contact` | Kontak | Publik |
| `/login` | Login / Register | Publik |
| `/dashboard` | Dashboard (role-based) | 🔒 Protected |

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router DOM 7 |
| **HTTP Client** | Axios |
| **Icons** | Material Symbols (Google Fonts) + Lucide React |
| **Linter** | Oxlint |
| **Design System** | Custom (Lexend font, Material Design 3 color tokens) |
| **Backend** | Laravel 10+ (REST API terpisah) |

---

## 🎨 Design System

Aplikasi ini menggunakan design system kustom yang terinspirasi dari **Material Design 3** dengan sentuhan **Glassmorphism**:

- **Font**: [Lexend](https://fonts.google.com/specimen/Lexend) — dioptimalkan untuk kecepatan baca
- **Primary Color**: Electric Blue (`#2563EB`) — kepercayaan & kecerdasan digital
- **Secondary Color**: Vivid Purple (`#7C3AED`) — kreativitas & futuristik
- **Tertiary Color**: Emerald Green (`#10B981`) — status sukses & progress
- **Spacing**: Linear 8px scale (8, 16, 24, 32, 48, 64)
- **Radius**: Rounded corners (8px default, 16px containers, pill badges)
- **Elevation**: Tonal layers dengan ambient shadows & glassmorphism accents

---

<p align="center">
  Dibuat untuk memenuhi penugasan Bootcamp FWD 11 Dibimbing, <strong>Mini Project: React</strong>
</p>
