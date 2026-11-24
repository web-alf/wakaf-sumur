import type { FaqItem } from '../../domain/entities/Faq';

export const faq: readonly FaqItem[] = [
  {
    question: 'Bagaimana cara berwakaf sumur?',
    answer:
      'Transfer ke rekening resmi Yayasan Wakaf Sumur Indonesia (BSI atau BCA Syariah), lalu konfirmasi via WhatsApp dengan menyertakan bukti transfer, nama, dan niat wakaf. Tim kami akan merespons dalam 1×24 jam kerja.',
  },
  {
    question: 'Berapa nominal minimum wakaf?',
    answer:
      'Tidak ada batas minimum. Setiap nominal diterima dan disalurkan. Namun untuk membantu satu sumur bor penuh, dibutuhkan sekitar Rp 25–50 juta tergantung lokasi dan kedalaman.',
  },
  {
    question: 'Apakah ada laporan setelah sumur dibangun?',
    answer:
      'Ya. Setiap wakif (pemberi wakaf) akan menerima laporan berupa foto, video, dan data penerima manfaat setelah sumur selesai dibangun. Laporan dikirimkan via WhatsApp dan email.',
  },
  {
    question: 'Apakah yayasan ini legal dan terdaftar?',
    answer:
      'Ya. Yayasan Wakaf Sumur Indonesia terdaftar secara resmi di Kementerian Hukum dan HAM RI. Seluruh kegiatan operasional diawasi oleh Dewan Syariah internal dan auditor independen.',
  },
  {
    question: 'Berapa lama proses pembangunan sumur?',
    answer:
      'Rata-rata 30–60 hari kerja setelah target dana terpenuhi, tergantung kondisi lapangan, cuaca, dan lokasi. Tim survei kami akan menginformasikan progres secara berkala.',
  },
];
