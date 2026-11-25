import type { LegalDocument } from '../../domain/entities/LegalDocument';

export const refund: LegalDocument = {
  key: 'refund',
  title: 'Kebijakan Refund (Pengembalian Dana)',
  lastUpdated: 'November 2025',
  sections: [
    {
      heading: 'Prinsip Dasar',
      blocks: [
        {
          type: 'paragraph',
          text: "Wakaf menurut syariat Islam bersifat <strong>ta'bid</strong> (permanen) dan <strong>tidak dapat ditarik kembali</strong> setelah diikrarkan. Oleh karena itu, pada dasarnya dana wakaf yang telah disalurkan ke program tidak dapat dikembalikan.",
        },
      ],
    },
    {
      heading: 'Pengecualian yang Diizinkan',
      blocks: [
        {
          type: 'list',
          items: [
            '<strong>Transfer ganda:</strong> Jika terjadi kesalahan transfer dua kali untuk nomor rekening yang sama, kelebihan dana dapat dikembalikan dalam 7 hari kerja.',
            '<strong>Salah nominal:</strong> Jika nominal yang ditransfer jauh berbeda dari yang diinformasikan (misalnya nol berlebih), dapat diajukan koreksi dalam 1×24 jam setelah transfer.',
            '<strong>Program dibatalkan:</strong> Jika suatu program tidak dapat dijalankan karena alasan force majeure, dana akan dialihkan ke program aktif lain atau dikembalikan atas permintaan wakif.',
          ],
        },
      ],
    },
    {
      heading: 'Prosedur Pengajuan',
      blocks: [
        {
          type: 'list',
          items: [
            'Hubungi tim via WhatsApp resmi dalam 1×24 jam setelah transfer.',
            'Sertakan: nama lengkap, bukti transfer, nomor rekening tujuan pengembalian.',
            'Proses verifikasi berlangsung 3–5 hari kerja.',
            'Pengembalian dilakukan ke rekening asal atau rekening yang ditunjuk donatur.',
          ],
        },
      ],
    },
    {
      heading: 'Dana yang Sudah Disalurkan',
      blocks: [
        {
          type: 'paragraph',
          text: 'Dana yang telah masuk ke rekening program dan sudah dalam proses penyaluran lapangan <strong>tidak dapat dikembalikan</strong>. Yayasan akan memberikan laporan penggunaan dana kepada donatur bersangkutan.',
        },
      ],
    },
    {
      heading: 'Kontak Pengaduan',
      blocks: [
        {
          type: 'paragraph',
          text: 'WhatsApp: <strong>0851-8599-9971</strong><br>Jam layanan: Senin–Jumat, 08.00–17.00 WIB',
        },
      ],
    },
  ],
};
