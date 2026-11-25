import type { AboutContent } from '../../domain/entities/About';

/**
 * ISI HALAMAN "TENTANG KAMI" — ubah di sini.
 *
 * `impactPrograms` diisi dari rekap penerima manfaat yayasan (spreadsheet internal).
 * Perbarui angkanya di sini setiap rekap berubah; jangan menaruh link spreadsheet
 * atau data per penerima di situs publik.
 */
export const about: AboutContent = {
  heroTitle: 'Air Bersih untuk Semua,',
  heroTitleAccent: 'Wakaf yang Mengalir Tanpa Henti',
  heroLead:
    'Gerakan Wakaf Sumur adalah program nyata untuk membangun akses air bersih di wilayah yang membutuhkan — melalui amanah wakaf tunai yang terkelola secara transparan dan profesional.',

  storyTitle: 'Lahir dari Keprihatinan, Tumbuh dari Kepercayaan',
  storyParagraphs: [
    'Gerakan Wakaf Sumur bermula dari kepedulian nyata terhadap saudara-saudara kita di pelosok Indonesia yang masih harus berjalan berkilometer hanya untuk mendapat air bersih. Ini bukan masalah yang jauh — ini ada di negeri kita sendiri.',
    'Program ini membangun sumur bor dan instalasi air bersih dengan prinsip wakaf: manfaatnya terus mengalir, pahalanya tak putus, dan laporannya terbuka untuk semua pewakaf.',
    'Setiap sumur yang terbangun adalah amal jariyah yang hidup selama air masih mengalir — untuk warga, ternak, sawah, dan generasi yang belum lahir.',
  ],

  vision:
    'Menjadi gerakan wakaf air terpercaya di Indonesia yang menghubungkan kepedulian pewakaf dengan kebutuhan nyata masyarakat, demi terwujudnya keadilan akses air bersih dari Sabang sampai Merauke.',
  missions: [
    'Membangun sumur dan instalasi air bersih di wilayah krisis air',
    'Mengelola dana wakaf secara amanah, transparan, dan teraudit',
    'Mendampingi komunitas penerima manfaat secara berkelanjutan',
    'Melaporkan setiap sumur terbangun kepada pewakaf secara real-time',
  ],
  values: [
    { name: 'Amanah', description: 'Setiap rupiah wakaf dijaga dan dilaporkan dengan jujur.' },
    { name: 'Transparan', description: 'Laporan pembangunan sumur dikirim langsung ke pewakaf.' },
    { name: 'Profesional', description: 'Tim terlatih, prosedur standar, dokumentasi lengkap.' },
    { name: 'Empatik', description: 'Berpihak pada yang paling membutuhkan, bukan yang paling mudah.' },
  ],

  impactTitle: 'Angka yang Bicara Sendiri',
  impactLead:
    'Sejak diluncurkan, Gerakan Wakaf Sumur terus tumbuh berkat kepercayaan para pewakaf di seluruh Indonesia.',
  impactPrograms: [
    { name: 'Wakaf Sumur', beneficiaries: 1958, details: ['18 sumur'] },
    { name: 'Air Minum', beneficiaries: 1540, details: ['20 pondok pesantren', '1 panti asuhan'] },
    { name: 'Air Bersih Cilacap', beneficiaries: 1726, details: ['13 pondok pesantren'] },
    {
      name: 'Air Bersih Gunungkidul',
      beneficiaries: 2705,
      details: ['11 lembaga', '141.000 liter air bersih'],
    },
  ],

  processTitle: 'Bagaimana Wakaf Anda Bekerja',
  processLead:
    'Proses sederhana, dampak nyata — dari niat wakaf hingga air mengalir di tangan penerima manfaat.',
  steps: [
    {
      title: 'Pewakaf Berwakaf',
      description:
        'Wakaf tunai melalui transfer ke rekening resmi yayasan, lalu konfirmasi via WhatsApp.',
    },
    {
      title: 'Survei Lokasi',
      description:
        'Tim lapangan mensurvei dan memverifikasi lokasi yang paling membutuhkan akses air bersih.',
    },
    {
      title: 'Pembangunan Sumur',
      description:
        'Pembangunan dilaksanakan oleh mitra teknis terverifikasi dengan standar kualitas yang ketat.',
    },
    {
      title: 'Laporan ke Pewakaf',
      description:
        'Foto, video, dan koordinat GPS sumur dikirimkan langsung ke seluruh pewakaf program ini.',
    },
  ],

  closingTitle: 'Jadilah Bagian dari Gerakan Ini',
  closingLead:
    'Satu wakaf Anda bisa memberi air bersih bagi puluhan keluarga — dan pahalanya terus mengalir selama air itu ada.',
};
