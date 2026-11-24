import type { LegalDocument } from '../../domain/entities/LegalDocument';

export const terms: LegalDocument = {
  key: 'terms',
  title: 'Syarat & Ketentuan',
  lastUpdated: 'November 2025',
  sections: [
    {
      heading: '1. Penerimaan Syarat',
      blocks: [
        {
          type: 'paragraph',
          text: 'Dengan melakukan donasi atau wakaf melalui wakafsumur.com, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.',
        },
      ],
    },
    {
      heading: '2. Sifat Wakaf',
      blocks: [
        {
          type: 'paragraph',
          text: 'Wakaf bersifat permanen dan tidak dapat ditarik kembali setelah dana disalurkan ke program. Dana wakaf dikelola sesuai prinsip syariah Islam dan perundang-undangan yang berlaku di Indonesia.',
        },
      ],
    },
    {
      heading: '3. Pengelolaan Dana',
      blocks: [
        {
          type: 'list',
          items: [
            '100% dari nominal wakaf disalurkan ke program pembangunan sumur.',
            'Biaya operasional yayasan ditanggung dari sumber terpisah (infaq/shadaqah).',
            'Laporan keuangan dipublikasikan secara berkala dan dapat diakses oleh publik.',
          ],
        },
      ],
    },
    {
      heading: '4. Privasi Data',
      blocks: [
        {
          type: 'paragraph',
          text: 'Data donatur (nama, nomor telepon, email) digunakan hanya untuk keperluan konfirmasi, pelaporan, dan komunikasi program. Data tidak dijual atau dibagikan kepada pihak ketiga tanpa izin.',
        },
      ],
    },
    {
      heading: '5. Perubahan Syarat',
      blocks: [
        {
          type: 'paragraph',
          text: 'Yayasan berhak memperbarui syarat dan ketentuan sewaktu-waktu. Perubahan material akan diinformasikan kepada donatur terdaftar melalui email atau WhatsApp.',
        },
      ],
    },
    {
      heading: '6. Kontak',
      blocks: [
        {
          type: 'paragraph',
          text: 'Pertanyaan terkait syarat dan ketentuan dapat disampaikan via WhatsApp resmi atau email info@wakafsumur.com.',
        },
      ],
    },
  ],
};

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
          text: 'WhatsApp: <strong>0851-8599-9971</strong> | Email: <strong>info@wakafsumur.com</strong><br>Jam layanan: Senin–Jumat, 08.00–17.00 WIB',
        },
      ],
    },
  ],
};
