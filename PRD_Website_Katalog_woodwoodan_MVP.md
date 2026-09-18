# Product Requirement Document (PRD) — Website woodwoodan (MVP Phase)

- **Product Name:** woodwoodan Web Catalog & Craft Showcase
- **Version:** 1.1 (MVP Finalized)
- **Document Status:** Ready for Implementation
- **Target Release:** Q4 2026 / Sprint 1-2
- **Document Author:** Product Lead & Technical Architect

---

## 1. Executive Summary & Objective

### 1.1 Background
**woodwoodan** adalah bisnis kriya dan furnitur berbasis kayu yang mengedepankan kualitas pengerjaan (*craftsmanship*), keindahan serat alami kayu solid, dan fleksibilitas kustomisasi (*custom order*). 

Saat ini, interaksi dan transaksi dengan pelanggan sebagian besar masih terpusat di kanal media sosial dan aplikasi pesan instan. Untuk meningkatkan kredibilitas, menyajikan katalog yang terstruktur, serta memperlihatkan portofolio hasil karya (*past projects*), diperlukan sebuah platform web resmi yang cepat, estetik, dan berfokus pada konversi *leads*.

### 1.2 Objective & Scope (MVP)
Pada fase MVP (Minimum Viable Product), website ini **tidak memiliki keranjang belanja atau transaksi/checkout langsung**. Tujuannya murni sebagai *digital catalog*, *brand identity builder*, dan *lead generator* yang mengalirkan calon pembeli menuju konsultasi langsung melalui WhatsApp secara kontekstual.

**Key Goals:**
1. Menyajikan katalog produk terstruktur beserta spesifikasi teknis (material, dimensi, finishing, variasi harga).
2. Membangun kepercayaan (*trust*) melalui portofolio pengerjaan kriya, detail *wood joinery*, dan ulasan klien (*social proof*).
3. Menyederhanakan konversi *leads* dari web ke WhatsApp dengan pesan pre-filled kontekstual yang memuat link dan nama produk.
4. Mendukung *deep linking* agar produk dapat dibagikan langsung ke calon pembeli lewat media sosial atau chat.
5. Menyediakan fondasi sistem data statis/CMS ringan yang mudah di-*update* oleh pemilik bisnis tanpa ketergantungan *hardcode*.

---

## 2. User Persona & User Journey

### 2.1 User Personas

#### Persona A: The Aesthetic Homeowner (B2C)
* **Demografi:** Usia 26–42 tahun, profesional / keluarga muda, tinggal di kawasan urban.
* **Perilaku & Kebutuhan:** Sedang mengisi interior rumah/apartemen; mencari perabot kayu solid yang hangat, minimalis, dan tahan lama; lelah dengan furnitur *knock-down* berbahan partikel board yang mudah rapuh.
* **Pain Points:** Sulit melihat detail spesifikasi material kayu di feed media sosial; ragu dengan kualitas sambungan kayu jika hanya melihat foto katalog standar e-commerce; malas mengisi checkout panjang jika ingin request ukuran khusus.
* **Tujuan di Website:** Melihat inspirasi tampilan produk di dalam ruangan, memeriksa opsi ukuran/material, dan langsung mengontak pengrajin untuk menanyakan ketersediaan atau kustomisasi via WhatsApp.

#### Persona B: The Commercial Space Designer / Cafe Owner (B2B)
* **Demografi:** Arsitek interior, kontraktor retail, atau pemilik cafe/restoran.
* **Perilaku & Kebutuhan:** Membutuhkan pesanan kustom dalam jumlah unit menengah-besar (misal: meja bar, kursi makan, papan menu kayu, tableware).
* **Pain Points:** Memerlukan bukti kapabilitas pengerjaan (portofolio nyata), rekam jejak *finishing* tahan air/gores, dan jalur komunikasi langsung tanpa birokrasi *cart*.
* **Tujuan di Website:** Menilai kredibilitas hasil kerja woodwoodan melalui galeri portofolio nyata, membaca ulasan klien sejenis, dan langsung berdiskusi mengenai penawaran proyek (B2B quotation).

### 2.2 User Journey (MVP)

```
[Discovery]
Pengunjung datang via Instagram / TikTok / Tautan Portofolio / Word-of-mouth
      │
      ▼
[Hero & Brand Impression]
Melihat headline, nilai craftsmanship, material solid wood, & jam operasional workshop
      │
      ▼
[Exploration: Catalog, Detail Modal, & Deep Link]
Memfilter kategori produk, membuka modal detail (URL browser tersinkronisasi),
memeriksa foto sambungan kayu & spesifikasi harga/dimensi
      │
      ▼
[Validation: Portfolio & Testimonials]
Melihat proyek yang telah selesai dikerjakan & ulasan dari pemilik rumah/kafe
      │
      ▼
[Understanding How to Order]
Membaca panduan alur pemesanan 4 langkah yang transparan
      │
      ▼
[Conversion: Contextual WhatsApp Chat]
Klik "Tanya Produk Ini" -> Membuka WhatsApp dengan pesan otomatis terisi (nama produk + SKU + link halaman)
```

---

## 3. Scope of Work (In-Scope vs Out-of-Scope)

| In-Scope (Fase MVP) | Out-of-Scope (Fase Lanjutan / Non-MVP) |
|---|---|
| Halaman Katalog Interaktif (Filter kategori instan & modal detail produk) | Keranjang belanja (*Shopping Cart*) & Sistem Akun Pengguna |
| Modal URL Deep Linking (URL tersinkron dengan modal produk & dukung tombol *Back*) | Payment Gateway otomatis (Midtrans, Xendit, dll.) |
| Galeri Portofolio Proyek Terkategori & Lightbox Viewer gambar resolusi tinggi | Pelacakan status pesanan real-time (*Order Tracking*) |
| Section Testimoni & Social Proof (Ulasan B2C & B2B) | Kalkulator ongkir otomatis (Integrasi RajaOngkir / Kurir API) |
| Panduan Alur Pemesanan 4 Langkah (*How to Order*) | Multi-bahasa otomatis (Fase MVP khusus Bahasa Indonesia) |
| Engine Generator Tautan WhatsApp (Pre-filled URL dinamis + link produk) | Fitur Search Bar teks bebas & Sorting otomatis (ditunda pasca 15 produk) |
| Floating WhatsApp Button pintar (Auto-hide saat modal terbuka di layar mobile) | Sinkronisasi inventaris multi-gudang (*Inventory Sync*) |
| Tracking Event Analitik (Google Analytics 4 / Google Tag Manager untuk event CTA) | Form request quotation multi-step dengan upload file blueprint CAD/PDF |
| Responsive Layout Mobile-First & Aksesibilitas WCAG AA | Transaksi Down Payment (DP) mandiri di website |

---

## 4. Information Architecture & Page Structure

Struktur halaman mengusung pendekatan **Single-Page Application (SPA) / Long Landing Page** dengan **Modal Deep Linking Routing** (menggunakan *URL Hash* atau *Query Parameter* seperti `/#detail-[slug]`). Ini memungkinkan pengguna berbagi tautan langsung ke produk tertentu serta mendukung navigasi tombol *Back* pada browser/smartphone.

```
woodwoodan Homepage (Single-Page Structure dengan Deep Link Modal)
├── 1. Navigation Bar (Sticky with Blur Effect)
│   ├── Logo woodwoodan
│   ├── Anchor Links: Tentang, Katalog, Portofolio, Cara Pesan, Testimoni, Kontak
│   └── CTA Konsultasi WhatsApp Header
├── 2. Hero Section
│   ├── Brand Value Proposition & Artisanal Tagline
│   ├── Visual Showcase Utama (Carousel / Hero Image kayu solid)
│   ├── Jam Operasional / Respon Chat WhatsApp Badge
│   └── Dual CTA ("Jelajahi Katalog" [#katalog] & "Konsultasi Custom" [WA])
├── 3. About Us & Brand Pillars
│   ├── Narasi Brand (Craftsmanship, Filosofi Serat Kayu, Keberlanjutan)
│   └── 4 Pilar Nilai: Solid Hardwood, Food-Safe Finishing, Precision Wood Joinery, Custom Tailored
├── 4. Product Catalog Section
│   ├── Kategori Tab Filter:
│   │   ├── Semua Produk
│   │   ├── Meja & Kursi (Furniture)
│   │   ├── Dekorasi Ruang (Home Decor)
│   │   └── Peralatan Meja (Tableware)
│   ├── Product Cards Grid (Foto, Badge Status/Bahan, Nama, Format Harga, CTA)
│   ├── Empty State Tampilan jika kategori kosong
│   └── Banner Mini Konsultasi Custom (Arahkan ke alur custom jika tidak menemukan ukuran yang cocok)
├── 5. Product Detail Modal (Overlay Component - Deep Linked)
│   ├── Sinkronisasi URL (contoh: domain.com/#produk-meja-kopi-jati)
│   ├── Galeri Multi-Foto dengan Zoom Detail Sambungan Kayu
│   ├── Badge Ketersediaan: Ready Stock / Pre-order (X hari) / Custom Only
│   ├── Spesifikasi Lengkap: Material, Dimensi, Pilihan Finishing, Perawatan
│   ├── Informasi Harga: Fixed / Mulai Dari / Penawaran Khusus
│   └── CTA Primer WhatsApp dengan Pesan Kontekstual + Link Produk
├── 6. Past Projects & Workshop Showcase
│   ├── Kategori Filter Portofolio: Semua, Residensial, Komersial/Kafe
│   ├── Masonry Grid Foto Hasil Pekerjaan Nyata
│   └── Lightbox Viewer Interaktif dengan Keterangan Material & Lokasi
├── 7. How to Order (4-Step Guide)
│   └── 1. Eksplorasi & Pilih -> 2. Chat & Konsultasi -> 3. Produksi & Update Berkala -> 4. QC & Pengiriman Aman
├── 8. Testimonials & Social Proof
│   ├── Grid / Slider Ulasan Klien (Foto terpasang, nama klien, tipe proyek B2B/B2C, bintang rating)
│   └── Statistik Singkat (misal: 100+ Proyek Terselesaikan, 100% Solid Wood)
├── 9. Footer & Workshop Contact
│   ├── Alamat Workshop Fisik, Peta Lokasi / Google Maps Pin
│   ├── Jam Operasional Responsif
│   ├── Tautan Media Sosial (Instagram, TikTok, YouTube/Katalog PDF)
│   └── Copyright & Kebijakan Garansi Pengerjaan Kayu
└── Global Floating WhatsApp Button
    ├── Posisi di sudut kanan bawah dengan tooltip
    └── Logika Auto-Hide saat Product Detail Modal aktif (khusus mobile)
```

---

## 5. Functional Requirements (FR)

### FR-01: Header & Navigasi
- **FR-01.1 (Sticky & Glassmorphism):** Header wajib melayang (*sticky*) saat scroll dengan efek blur latar belakang (*backdrop-filter*) agar kontras tetap terjaga di atas foto.
- **FR-01.2 (Smooth Scroll):** Klik pada tautan navigasi menjalankan *smooth scroll* dengan offset kompensasi tinggi header (agar judul section tidak tertutup header).
- **FR-01.3 (Mobile Drawer):** Pada layar mobile (< 768px), navigasi disajikan dalam bentuk *slide-in drawer / bottom-sheet* dengan tombol tutup jelas dan area sentuh (*tap target*) minimal 44x44 px.

### FR-02: Hero Section
- **FR-02.1:** Menampilkan headline utama bernada hangat, mewah, dan terpercaya.
- **FR-02.2 (Indikator Jam Kerja):** Menampilkan badge status operasional (misal: *"Workshop Buka: Senin–Sabtu 09.00–17.00 WIB • Konsultasi Online Aktif"*).
- **FR-02.3 (Dual Action CTA):** 
  - Tombol Primer: Scroll ke `#katalog`.
  - Tombol Sekunder: Membuka WhatsApp dengan pesan konsultasi umum kustom.

### FR-03: Katalog Produk & Kategori
- **FR-03.1 (Kategori Filter):** Filter instan di sisi klien (*client-side*) tanpa reload halaman:
  - *Semua Produk*
  - *Meja & Kursi (Furniture)*
  - *Dekorasi Ruang (Home Decor)*
  - *Peralatan Meja (Tableware)*
- **FR-03.2 (Empty State):** Jika tab kategori tidak memiliki produk, tampilkan ilustrasi hangat bertuliskan: *"Belum ada produk di kategori ini. Ingin request desain kustom?"* disertai tombol WhatsApp.
- **FR-03.3 (Product Card):** Setiap kartu wajib memuat:
  - Foto utama dengan aspek rasio konsisten (1:1 atau 4:3) dengan transisi hover halus.
  - Badge Status: `Ready Stock` (Hijau lembut) / `Pre-order (X hari)` (Kuning hangat) / `Custom Order`.
  - Badge Material (misal: `Solid Teak`, `Jati Belanda`, `Sungkai Wood`).
  - Nama Produk.
  - Tampilan Harga fleksibel:
    - *Harga Pasti:* `Rp 1.450.000`
    - *Harga Mulai Dari:* `Mulai dari Rp 850.000`
    - *Kustom:* `Hubungi untuk Penawaran`
  - Tombol Aksi: *"Detail"* dan *"Tanya via WA"*.
- **FR-03.4 (Banner Kustom di Bawah Katalog):** Banner permanen di akhir katalog: *"Punya ukuran atau desain kayu impian sendiri? woodwoodan melayani pengerjaan kustom sesuai sketsa Anda."* dengan tombol CTA *"Konsultasi Desain Kustom"*.

### FR-04: Product Detail Modal & Deep Linking
- **FR-04.1 (Deep Linking Sync):**
  - Membuka modal produk memperbarui URL browser (misal: `https://woodwoodan.com/#produk-meja-kopi-jati`).
  - Mengakses URL tersebut secara langsung wajib otomatis membuka modal produk terkait.
  - Menekan tombol **Back** pada browser atau smartphone wajib menutup modal tanpa keluar dari website.
- **FR-04.2 (Isi Modal):**
  - Galeri multi-foto dengan navigasi thumbnail (foto depan, sudut detail sambungan kriya, dan contoh di dalam ruangan).
  - Spesifikasi Teknis: Jenis Kayu Solid, Dimensi (P x L x T cm), Tipe Finishing (Natural Oil / Polyurethane Matte / Food-Grade Beeswax), Estimasi Waktu Pengerjaan (*lead time*).
  - Deskripsi keunggulan serat dan konstruksi sambungan (*joinery*).
  - Tombol Aksi Utama: *"Pesan / Tanya Produk Ini via WhatsApp"*.
  - Tombol Tutup (`ESC` key, klik luar modal / backdrop, atau tombol 'X' di pojok kanan atas).

### FR-05: WhatsApp Integration Engine
- **FR-05.1 (Universal Link):** Membuka WhatsApp menggunakan tautan standar `https://wa.me/<nomor_wa>?text=<encoded_text>`.
- **FR-05.2 (Format Pesan Kontekstual Dinamis):**
  - *Dari Product Card & Detail Modal:*
    > "Halo woodwoodan, saya tertarik dengan produk *[Nama Produk]* (SKU: [SKU]).%0A%0ATautan Produk: [URL Halaman]%0A%0ABoleh info ketersediaan atau estimasi pemesanannya? Terima kasih!"
  - *Dari Hero / Konsultasi Desain Kustom:*
    > "Halo tim woodwoodan, saya ingin konsultasi mengenai pembuatan furnitur/kriya kayu kustom. Berikut referensi/kebutuhan saya: ..."
  - *Dari Banner B2B / Proyek Komersial:*
    > "Halo woodwoodan, saya ingin mendiskusikan kebutuhan pengadaan perabot kayu untuk proyek komersial/kafe..."
- **FR-05.3 (Konfigurasi Terpusat):** Nomor WhatsApp, jam layanan, dan template pesan tersimpan dalam 1 file konfigurasi (`siteConfig.ts` / `site.json`) agar mudah diubah admin tanpa menyentuh komponen UI.

### FR-06: Portofolio Proyek & Workshop Gallery
- **FR-06.1 (Tampilan Masonry Grid):** Dokumentasi foto asli proyek yang selesai dikerjakan artisan woodwoodan (kafe, villa, apartemen, perabot custom).
- **FR-06.2 (Filter Segmen Portofolio):** Filter sederhana: *Semua*, *Residensial (Rumah/Apartemen)*, *Komersial (Kafe/Resto/Kantor)*.
- **FR-06.3 (Lightbox Zoom):** Klik foto membuka tampilan perbesaran penuh (*lightbox*) lengkap dengan judul proyek, jenis kayu, dan lokasi/tahun pengerjaan.

### FR-07: Alur Pemesanan (How to Order)
- **FR-07.1:** Komponen visual 4 langkah alur transparan:
  1. *Pilih atau Sketsa:* Temukan produk di katalog atau kirim gambar sketsa/ukuran yang diinginkan.
  2. *Konsultasi & Penawaran:* Diskusikan pilihan kayu, finishing, dan dapatkan kalkulasi harga resmi via WA.
  3. *Produksi & Dokumentasi:* Artisan memproduksi dengan kontrol presisi; klien menerima foto progres berkala.
  4. *Quality Check & Kirim:* Pengecekan akhir, packing kayu berlapis aman, dan pengiriman ekspedisi terpercaya ke alamat Anda.

### FR-08: Testimonials & Social Proof
- **FR-08.1:** Menampilkan ulasan autentik dari pelanggan individu (B2C) maupun mitra pemilik kafe/arsitek (B2B).
- **FR-08.2 (Elemen Ulasan):** Setiap kartu testimoni memuat:
  - Foto hasil instalasi produk di ruangan pelanggan.
  - Nama Klien & Kota / Nama Tempat Usaha (misal: *"Kopi Sinar Pagi, Bandung"*).
  - Tag Kategori (*Proyek Kafe* / *Hunian Pribadi*).
  - Kutipan Ulasan (fokus pada kerapian sambungan kayu, daya tahan finishing, atau keramahan konsultasi).
  - Rating bintang (5/5).

### FR-09: Floating WhatsApp Button
- **FR-09.1 (Sticky Positioning):** Tombol mengambang di kanan bawah layar (Z-Index: 50) dengan animasi denyut (*pulse*) halus.
- **FR-09.2 (Collision Prevention di Layar Mobile):**
  - Tombol floating WA harus **otomatis disembunyikan (*hidden*)** ketika *Product Detail Modal* sedang terbuka di mobile, agar tidak menutupi tombol CTA di dalam modal.
- **FR-09.3:** Dilengkapi micro-copy tooltip: *"Konsultasi Cepat via WhatsApp"*.

### FR-10: Analitik & Event Tracking (Lead Conversion)
- **FR-10.1 (Google Analytics 4 / Tag Manager):** Integrasi tracking script untuk mengukur performa MVP sesuai KPI.
- **FR-10.2 (Custom Events yang Wajib Dikirimkan):**
  - `click_whatsapp_product`: Terpicu saat tombol WA produk diklik (mengirim parameter `product_name`, `product_sku`, `price`).
  - `click_whatsapp_floating`: Terpicu saat floating CTA diklik.
  - `click_whatsapp_custom`: Terpicu saat CTA konsultasi custom diklik.
  - `view_product_detail`: Terpicu saat modal detail produk dibuka.
  - `filter_category`: Terpicu saat pengguna mengganti tab kategori katalog.

---

## 6. Non-Functional Requirements (NFR)

### 6.1 Performa & Pengoptimalan Media
- **Core Web Vitals:**
  - Largest Contentful Paint (LCP) < 2.2 detik pada jaringan 4G.
  - Cumulative Layout Shift (CLS) < 0.05 (menghindari layout loncat saat font/gambar dimuat).
  - Interaction to Next Paint (INP) < 150 ms.
- **Strategi Optimasi Gambar Kayu Solid:**
  - Foto utama dikonversi ke format modern `.webp` atau `.avif`.
  - Menggunakan teknik gambar bertingkat: *Thumbnail terkompresi* untuk tampilan katalog grid (100–150 KB), dan *High-Res teroptimasi* yang baru dimuat ketika Lightbox/Modal dibuka.
  - Menerapkan atribut `loading="lazy"` dan dimensi eksplisit (`width` & `height`) untuk seluruh gambar di bawah *above-the-fold*.

### 6.2 Desain, Tipografi & Estetika (Artisanal Luxury)
- **Mood & Atmosfer:** Hangat (*earthy*), organik, presisi, minimalis Skandinavia-Jepang (*Japandi*), dan berkelas.
- **Palet Warna Terkurasi:**
  - *Timber Deep Charcoal:* `#231F1D` (Warna teks utama & header tegas)
  - *Warm Teak Ochre:* `#A67344` (Aksen utama, hover button, badge kriya)
  - *Soft Amber Glow:* `#CFA36B` (Aksen sekunder / bintang rating)
  - *Organic Parchment:* `#F9F7F2` (Latar belakang utama website yang hangat, bukan putih silau)
  - *Card Surface:* `#FFFFFF` dengan bayangan halus (*soft ambient elevation*)
  - *Muted Woodsmoke:* `#786F68` (Teks sekunder & spesifikasi teknis)
- **Tipografi Berkarakter:**
  - *Headings:* Serif kontemporer berwibawa (contoh: *Playfair Display* atau *Cinzel*).
  - *Body & Numbers:* Sans-serif geometrik yang sangat terbaca di layar HP (contoh: *Plus Jakarta Sans* atau *Inter*).

### 6.3 Aksesibilitas (a11y) & SEO
- **Aksesibilitas:** Seluruh rasio kontras teks terhadap warna dasar memenuhi standar WCAG 2.1 Level AA (minimal 4.5:1 untuk teks normal). Semua tombol memiliki atribut `aria-label` yang deskriptif.
- **Search Engine Optimization (SEO):**
  - Meta tags dinamis: Title, Deskripsi teroptimasi kata kunci lokal (*"Pengrajin Kayu Jati Solid & Custom Furniture woodwoodan"*).
  - Pratinjau media sosial (*Open Graph & Twitter Cards*) lengkap dengan foto representatif untuk sharing di WhatsApp/Instagram.
  - JSON-LD Structured Data: Tipe `LocalBusiness` / `Store` lengkap dengan koordinat wilayah serta skema `ItemList` untuk katalog produk.

### 6.4 Arsitektur Teknis & Tech Stack Terpilih
Untuk mencapai skor Core Web Vitals sempurna, zero-overhead JavaScript, dan kemudahan pemeliharaan konten:
- **Framework Rekomendasi:** **Astro** (atau **Next.js dengan Static Export / SSG**).
- **Styling:** **Tailwind CSS** atau **Modern Vanilla CSS** berbasis Design Tokens kustom.
- **Pengelolaan Data Produk:** Berbasis file lokal JSON / Markdown Frontmatter dalam folder `src/content/products/` dan `src/content/portfolio/`. Pendekatan ini memungkinkan pemilik usaha menambah produk baru hanya dengan menyalin 1 file teks template tanpa perlu database berbayar.
- **Hosting / Deployment:** Vercel / Netlify / Cloudflare Pages (Gratis untuk static hosting, SSL otomatis, build instan saat repositori diperbarui).

---

## 7. Data Models (JSON Schemas)

Seluruh data konten website dikelola secara terstruktur agar mudah dimigrasikan ke Headless CMS di masa mendatang.

### 7.1 Schema Katalog Produk (`src/data/products.json`)
```json
[
  {
    "id": "prod-001",
    "sku": "WWD-TBL-01",
    "name": "Meja Kopi Jati Lekuk Natural",
    "slug": "meja-kopi-jati-lekuk-natural",
    "category": "furniture",
    "is_featured": true,
    "stock_status": "ready",
    "lead_time_days": 0,
    "price_type": "fixed",
    "price_display": "Rp 1.450.000",
    "price_raw": 1450000,
    "short_description": "Meja kopi bundar dengan tepi serat alami (live edge) dan sambungan kaki taji tersembunyi.",
    "full_description": "Dibuat dari kayu jati solid pilihan berusia tua yang telah melalui proses oven kiln-dry. Menampilkan keunikan alur serat alami tanpa banyak sambungan, dilapisi pelindung matte tahan tumpahan kopi dan air.",
    "specifications": {
      "wood_type": "Kayu Jati Solid (Perhutani Teak)",
      "dimensions": "Diameter 60 cm x Tinggi 45 cm",
      "finishing": "Natural Polyurethane Matte (Water-based, Rendah Emisi)",
      "joinery_technique": "Mortise and Tenon (Taji Sambung)",
      "care_instruction": "Bersihkan dengan lap mikrofiber setengah lembab. Hindari cairan kimia pembersih lantai."
    },
    "images": [
      {
        "url": "/images/products/meja-kopi-01-front.webp",
        "alt": "Tampak depan Meja Kopi Jati Lekuk Natural woodwoodan"
      },
      {
        "url": "/images/products/meja-kopi-01-grain.webp",
        "alt": "Detail sambungan kriya dan serat kayu jati solid"
      },
      {
        "url": "/images/products/meja-kopi-01-room.webp",
        "alt": "Inspirasi penempatan meja kopi di ruang tamu minimalis"
      }
    ]
  },
  {
    "id": "prod-002",
    "sku": "WWD-TBL-02",
    "name": "Meja Makan Solid Sungkai Minimalis",
    "slug": "meja-makan-solid-sungkai",
    "category": "furniture",
    "is_featured": true,
    "stock_status": "preorder",
    "lead_time_days": 14,
    "price_type": "starting_at",
    "price_display": "Mulai dari Rp 4.200.000",
    "price_raw": 4200000,
    "short_description": "Meja makan 6 dudukan dengan warna kayu cerah alami ala Japandi.",
    "full_description": "Meja makan kayu sungkai solid dengan karakteristik serat lurus elegan. Konstruksi kokoh dengan sambungan dowel kayu tersembunyi.",
    "specifications": {
      "wood_type": "Kayu Sungkai Solid Pilihan",
      "dimensions": "P 160 cm x L 80 cm x T 75 cm",
      "finishing": "Natural Clear Matte Polyurethane",
      "joinery_technique": "Dowel Joint & Reinforcement Corner Bracket",
      "care_instruction": "Gunakan tatakan piring panas. Bersihkan cairan sesegera mungkin."
    },
    "images": [
      {
        "url": "/images/products/meja-makan-sungkai-01.webp",
        "alt": "Meja makan sungkai minimalis 6 dudukan"
      }
    ]
  }
]
```

### 7.2 Schema Portofolio Proyek (`src/data/portfolio.json`)
```json
[
  {
    "id": "port-001",
    "title": "Fit-Out Meja Bar & Partisi Kafe Sinar Pagi",
    "category": "commercial",
    "location": "Dago, Bandung",
    "year": 2026,
    "wood_type": "Kayu Jati Solid & Rangka Besi Industrial",
    "description": "Pengerjaan 1 unit meja kasir/bar sepanjang 4 meter dengan live edge treatment serta 8 set bangku bar bulat tahan gores untuk area semi-outdoor.",
    "thumbnail": "/images/portfolio/sinar-pagi-bar-thumb.webp",
    "gallery": [
      "/images/portfolio/sinar-pagi-bar-01.webp",
      "/images/portfolio/sinar-pagi-bar-02.webp"
    ]
  },
  {
    "id": "port-002",
    "title": "Set Meja Kerja & Credenza Minimalis Residensial",
    "category": "residential",
    "location": "BSD City, Tangerang",
    "year": 2026,
    "wood_type": "Kayu Sungkai Solid Natural",
    "description": "Pesanan kustom meja kerja dengan slot cable management tersembunyi dan kabinet arsip dengan pegangan pintu kayu utuh tanpa logam.",
    "thumbnail": "/images/portfolio/home-office-bsd-thumb.webp",
    "gallery": [
      "/images/portfolio/home-office-bsd-01.webp"
    ]
  }
]
```

### 7.3 Schema Testimoni & Social Proof (`src/data/testimonials.json`)
```json
[
  {
    "id": "testi-001",
    "client_name": "Arif Dananjaya",
    "role_or_project": "Pemilik Kafe Sinar Pagi, Bandung",
    "client_type": "B2B",
    "project_ordered": "Custom Bar Table & Counter Top",
    "quote": "Kualitas sambungan kayu dan finishing meja barnya luar biasa rapi. Sudah 6 bulan kena tumpahan es kopi dan dilap bolak-balik setiap hari, lapisannya tetap mulus tidak menggelembung.",
    "rating": 5,
    "client_avatar": "/images/testimonials/arif-sinar-pagi.webp"
  },
  {
    "id": "testi-002",
    "client_name": "Dian Sastrowardoyo",
    "role_or_project": "Homeowner, Jakarta Selatan",
    "client_type": "B2C",
    "project_ordered": "Meja Kopi Jati Lekuk Natural",
    "quote": "Suka sekali dengan tekstur alami kayunya yang dipertahankan. Konsultasi via WhatsApp sangat responsif dan ramah membantu memilihkan kayu yang uratnya sesuai selera saya.",
    "rating": 5,
    "client_avatar": "/images/testimonials/dian-jaksel.webp"
  }
]
```

### 7.4 Schema Konfigurasi Global (`src/data/siteConfig.json`)
```json
{
  "brand_name": "woodwoodan",
  "tagline": "Kriya Kayu Solid & Furnitur Kustom Bernilai Seni",
  "whatsapp": {
    "phone_number": "6281234567890",
    "display_number": "+62 812-3456-7890",
    "operating_hours": "Senin – Sabtu, 09.00 – 17.00 WIB",
    "default_greeting": "Halo woodwoodan, saya tertarik untuk konsultasi produk kayu kustom."
  },
  "workshop": {
    "address_line": "Jl. Pengrajin Kayu No. 88, Sentra Kriya",
    "city": "Jepara / Yogyakarta",
    "gmaps_url": "https://maps.google.com/?q=woodwoodan"
  },
  "social_media": {
    "instagram": "https://instagram.com/woodwoodan",
    "tiktok": "https://tiktok.com/@woodwoodan"
  },
  "analytics": {
    "ga4_measurement_id": "G-XXXXXXXXXX"
  }
}
```

---

## 8. Release Phases, Milestones & Timeline

| Fase | Durasi | Deliverables Utama |
|---|---|---|
| **Fase 1: Konten & Wireframing** | Minggu 1 | Kurasi 10–15 foto produk resolusi tinggi, penulisan copy deskripsi kriya, wireframing interaksi modal & mobile drawer. |
| **Fase 2: UI Design & Design Tokens** | Minggu 2 | High-fidelity UI mockup (Figma), penentuan palet warna kayu solid & tipografi, validasi alur URL modal & WhatsApp link. |
| **Fase 3: Frontend Development** | Minggu 3 | Setup project (Astro / Next.js SSG + Tailwind/CSS), implementasi komponen katalog, tab filter client-side, modal deep-link routing, dan integrasi schema JSON. |
| **Fase 4: Tracking & QA Performance** | Minggu 4 (Awal) | Pemasangan GA4 event tracking, kompresi aset WebP, audit Lighthouse (skor target > 90), dan cross-device testing (iOS Safari, Android Chrome, Desktop). |
| **Fase 5: Deployment & Launch** | Minggu 4 (Akhir) | Domain setup (`woodwoodan.com` / `.id`), deployment Vercel/Netlify, live test tombol WhatsApp dengan perangkat nyata. |

---

## 9. Success Metrics (KPIs untuk Fase MVP)

1. **Traffic & Engagement:**
   - Skor Google Lighthouse: Performance > 90, Accessibility > 95, SEO > 95.
   - Rata-rata durasi sesi (*Average Session Duration*) > 1 menit 30 detik.
   - Rasio interaksi katalog (*Interaction Rate* pada filter atau buka modal produk) > 40% dari total sesi.
2. **Lead Conversion Performance:**
   - Rasio klik tombol WhatsApp (*WhatsApp Click-through Rate / CTR*) terhadap total pengunjung unik > 3.5%.
   - Tercatatnya custom event GA4: `click_whatsapp_product` dan `click_whatsapp_custom`.
3. **Kualitas Konversi Pesan WhatsApp:**
   - Minimal 70% pesan masuk WhatsApp menggunakan template pre-filled resmi (membuktikan calon pembeli terbantu dengan konteks nama & link produk).

---

## 10. Future Roadmap (Pasca-MVP)

- **Fase 2 (Interactive Customizer):** Form kalkulator estimasi biaya kustom sederhana berdasarkan dimensi (P x L x T) dan jenis kayu sebelum diarahkan ke WhatsApp.
- **Fase 3 (Educational SEO Content):** Halaman artikel panduan merawat kayu solid (*Wood Care Guide*, perbandingan jenis kayu jati vs sungkai) untuk menarik pencarian organik Google.
- **Fase 4 (Commerce Enhancement):** Pembayaran *Down Payment (DP)* online terverifikasi via Payment Gateway jika volume pesanan sudah melebihi kapasitas penanganan manual di chat WhatsApp.