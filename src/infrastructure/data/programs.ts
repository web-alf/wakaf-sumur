import type { Program } from '../../domain/entities/Program';

/**
 * DAFTAR PROGRAM / CAMPAIGN — ubah di sini.
 *
 * Menambah program : salin satu blok { ... }, lalu ganti isinya (id harus unik).
 * Menghapus program: hapus bloknya.
 *
 * imageUrl    : gambar campaign. Taruh file di folder `public/programs/`, lalu isi
 *               '/programs/nama-file.jpg'. Boleh juga URL penuh (https://...).
 *               Dikosongkan ('') = tampil ilustrasi bawaan.
 *               Saran ukuran: 800×450 px (16:9), JPG/WebP, di bawah 200 KB.
 * imageAlt    : deskripsi singkat isi gambar (untuk pembaca layar).
 * campaignUrl : link HALAMAN campaign (bukan link gambar). Link gambar masuk ke imageUrl. Dikosongkan ('') =
 *               tombol mengarah ke halaman daftar campaign (campaignsUrl di site.ts).
 * category    : 'sumur-bor' | 'pipa-air' | 'sanitasi'
 * status      : 'priority' (Prioritas) | 'ongoing' (Berjalan) | 'new' (Baru)
 * collectedAmount : dana terkumpul dalam Rupiah.
 * targetAmount    : target dalam Rupiah; persentase dihitung otomatis.
 *               Isi null = tanpa batas target (tampil "Target ∞", tanpa persentase).
 *               Cocokkan dengan dashboard Moota/Flip sebelum dipublikasikan.
 */
export const programs: readonly Program[] = [
  {
    id: 'WAKAF SUMUR JADI SOLUSI BAGI SANTRI DI TENGAH KEKERINGAN',
    title: 'WAKAF SUMUR JADI SOLUSI BAGI SANTRI DI TENGAH KEKERINGAN',
    description:
      'Musim kemarau membuat sumber air pesantren mulai terbatas. Wakaf sumur hadirkan air bersih bagi kebutuhan santri setiap hari.',
    category: 'sumur-bor',
    status: 'priority',
    collectedAmount: 578_656,
    targetAmount: null,
    imageUrl: 'https://donasi.wakafsumur.com/wp-content/uploads/2026/11/12.webp',
    imageAlt: '',
    campaignUrl: 'https://donasi.wakafsumur.com/campaign/wakaf-sumur-santri-di-tengah-kekeringan',
  },
  {
    id: 'HADIRKAN SUMBER AIR ABADI DENGAN WAKAF SUMUR BOR',
    title: 'HADIRKAN SUMBER AIR ABADI DENGAN WAKAF SUMUR BOR',
    description:
      'Mari hentikan krisis air bersih yang melanda pesantren dan desa-desa pelosok dengan solusi yang lebih dalam dan tahan lama.',
    category: 'pipa-air',
    status: 'ongoing',
    collectedAmount: 480_000,
    targetAmount: null,
    imageUrl: 'https://donasi.wakafsumur.com/wp-content/uploads/2026/04/4.webp',
    imageAlt: '',
    campaignUrl: 'https://donasi.wakafsumur.com/campaign/hadirkan-sumber-air-abadi-dengan-wakaf-sumur-bor',
  },
  {
    id: 'Hadiahkan Wakaf Sumur Untuk Santri di Pondok Pesantren',
    title: 'Hadiahkan Wakaf Sumur Untuk Santri di Pondok Pesantren',
    description:
      'Bayangkan ribuan santri di pelosok negeri kesulitan untuk mengakses air bersih, bahkan mereka terpaksa berjalan ratusan meter dengan medan yang cukup berbahaya hanya untuk mendapatkan air bersih meskipun sedang berpuasa.',
    category: 'sanitasi',
    status: 'new',
    collectedAmount: 345_551_301,
    targetAmount: null,
    imageUrl: 'https://donasi.wakafsumur.com/wp-content/uploads/2026/11/3.webp',
    imageAlt: '',
    campaignUrl: 'https://donasi.wakafsumur.com/campaign/hadiahkan-wakaf-sumur-untuk-santri',
  },
];
