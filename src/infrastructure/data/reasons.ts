import type { Reason } from '../../domain/entities/Reason';

export const reasons: readonly Reason[] = [
  {
    icon: 'check',
    title: 'Legal & Berbadan Hukum',
    description:
      'Yayasan terdaftar resmi dengan akta notaris dan pengawasan lembaga wakaf nasional. Setiap rupiah tercatat dan dapat diaudit.',
  },
  {
    icon: 'sun',
    title: 'Transparan & Terdokumentasi',
    description:
      'Setiap sumur yang selesai dibangun dilaporkan lengkap: foto, koordinat lokasi, jumlah penerima manfaat, dan laporan keuangan.',
  },
  {
    icon: 'drop',
    title: 'Jariyah yang Mengalir Abadi',
    description:
      'Air terus mengalir, pahala terus mengalir. Wakaf sumur adalah investasi akhirat yang manfaatnya tidak habis dimakan waktu.',
  },
];
