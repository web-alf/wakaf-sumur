import type { LegalDocument } from '../../domain/entities/LegalDocument';

export const terms: LegalDocument = {
  key: 'terms',
  title: 'Syarat & Ketentuan',
  lastUpdated: 'November 2026',
  sections: [
    {
      heading: '1. Definisi',
      blocks: [
        {
          type: 'list',
          items: [
            '"Pengelola" atau "Kami" merujuk pada Gerakan Wakaf Sumur yang dikelola oleh Yayasan Gerakan Wakaf Sumur.',
            '"Pengguna" atau "Anda" merujuk pada setiap individu atau entitas yang mengakses gerakan.wakafsumur.com.',
            '"Pewakaf" merujuk pada Pengguna yang melakukan wakaf atau donasi melalui platform kami.',
            '"Wakaf" merujuk pada setiap pemberian dana sukarela untuk pembangunan sarana air bersih (sumur) melalui platform kami.',
            '"Platform" merujuk pada gerakan.wakafsumur.com dan seluruh halaman terkait yang dikelola oleh Pengelola.',
          ],
        },
      ],
    },
    {
      heading: '2. Layanan yang Disediakan',
      blocks: [
        {
          type: 'paragraph',
          text: 'Gerakan Wakaf Sumur menyediakan platform galang dana daring yang memungkinkan Pengguna untuk:',
        },
        {
          type: 'list',
          items: [
            'Berwakaf untuk program pembangunan sumur bor dan sarana air bersih di daerah yang membutuhkan.',
            'Melihat informasi mengenai program wakaf sumur yang sedang berjalan, termasuk lokasi, progres pembangunan, dan penerima manfaat.',
            'Mendapatkan bukti wakaf, laporan penyaluran, serta sertifikat wakaf digital.',
          ],
        },
      ],
    },
    {
      heading: '3. Ketentuan Wakaf',
      blocks: [
        {
          type: 'paragraph',
          text: 'Dengan melakukan wakaf melalui platform kami, Pewakaf menyatakan dan menjamin bahwa:',
        },
        {
          type: 'list',
          items: [
            'Wakaf dilakukan secara sukarela tanpa paksaan dari pihak manapun.',
            'Dana yang diwakafkan berasal dari sumber yang halal dan sah secara hukum.',
            'Informasi yang diberikan pada saat proses wakaf adalah benar dan akurat.',
            'Pewakaf telah berusia minimal 18 tahun atau telah mendapatkan persetujuan dari orang tua/wali.',
            'Wakaf yang telah dilakukan bersifat final dan tidak dapat ditarik kembali, kecuali dalam kondisi yang diatur dalam Kebijakan Pengembalian Dana (Refund Policy) kami.',
          ],
        },
        {
          type: 'paragraph',
          text: '<strong>Catatan:</strong> Pengelola berhak menolak atau mengembalikan wakaf yang diduga berasal dari sumber yang tidak sah atau melanggar hukum yang berlaku di Indonesia.',
        },
      ],
    },
    {
      heading: '4. Penggunaan Dana',
      blocks: [
        {
          type: 'paragraph',
          text: 'Pengelola berkomitmen untuk menggunakan seluruh dana wakaf sesuai peruntukannya:',
        },
        {
          type: 'list',
          items: [
            '<strong>Dana program</strong>: dialokasikan langsung untuk survei lokasi, pembelian material, pembangunan sumur, dan peresmian.',
            '<strong>Dana operasional</strong>: dialokasikan untuk biaya penghimpunan, logistik lapangan, dokumentasi, dan pengelolaan program.',
            '<strong>Dana amil</strong>: dialokasikan sesuai ketentuan yang berlaku bagi lembaga filantropi.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Laporan keuangan dan laporan penyaluran disusun secara berkala sebagai bentuk akuntabilitas dan transparansi.',
        },
      ],
    },
    {
      heading: '5. Hak dan Kewajiban Pengguna',
      blocks: [
        { type: 'paragraph', text: 'Pengguna berhak untuk:' },
        {
          type: 'list',
          items: [
            'Mengakses informasi mengenai program wakaf sumur yang tersedia.',
            'Mendapatkan bukti wakaf dan sertifikat wakaf digital setelah pembayaran dikonfirmasi.',
            'Memperoleh laporan progres pembangunan dan dokumentasi penyaluran.',
            'Menghubungi tim layanan pewakaf untuk pertanyaan atau pengaduan.',
          ],
        },
        { type: 'paragraph', text: 'Pengguna berkewajiban untuk:' },
        {
          type: 'list',
          items: [
            'Memberikan informasi yang benar dan akurat saat berwakaf.',
            'Tidak menggunakan platform untuk tujuan yang melanggar hukum.',
            'Tidak melakukan tindakan yang mengganggu atau membahayakan operasional platform.',
            'Menghormati hak kekayaan intelektual Pengelola atas seluruh konten di platform.',
          ],
        },
      ],
    },
    {
      heading: '6. Privasi dan Perlindungan Data',
      blocks: [
        {
          type: 'list',
          items: [
            '<strong>Data yang dikumpulkan:</strong> nama, nomor telepon/WhatsApp, alamat email, informasi transaksi, dan data teknis penggunaan website.',
            '<strong>Tujuan:</strong> memproses transaksi wakaf, mengirimkan konfirmasi dan laporan, serta meningkatkan kualitas layanan.',
            '<strong>Perlindungan:</strong> kami menerapkan langkah keamanan yang wajar untuk melindungi data pribadi dari akses tidak sah.',
            '<strong>Pembagian data:</strong> kami tidak menjual atau membagikan data kepada pihak ketiga, kecuali kepada penyedia layanan pembayaran (payment gateway) dan/atau diwajibkan oleh hukum.',
          ],
        },
      ],
    },
    {
      heading: '7. Hak Kekayaan Intelektual',
      blocks: [
        {
          type: 'paragraph',
          text: 'Seluruh konten di gerakan.wakafsumur.com, termasuk teks, gambar, logo, desain, video, dan materi lainnya, merupakan milik Pengelola. Pengguna tidak diperkenankan menyalin, memodifikasi, atau menggunakan konten untuk tujuan komersial tanpa persetujuan tertulis.',
        },
      ],
    },
    {
      heading: '8. Batasan Tanggung Jawab',
      blocks: [
        {
          type: 'list',
          items: [
            'Kami berupaya menyajikan informasi yang akurat dan menjaga ketersediaan platform, namun tidak menjamin platform selalu bebas gangguan.',
            'Kami tidak bertanggung jawab atas kerugian akibat gangguan teknis, kegagalan sistem pihak ketiga, atau force majeure.',
            'Waktu penyelesaian pembangunan sumur dapat bervariasi tergantung kondisi lokasi, cuaca, dan faktor lapangan lainnya.',
          ],
        },
      ],
    },
    {
      heading: '9. Perubahan Syarat dan Ketentuan',
      blocks: [
        {
          type: 'paragraph',
          text: 'Pengelola berhak mengubah ketentuan ini sewaktu-waktu. Perubahan akan dipublikasikan di halaman ini. Penggunaan berkelanjutan setelah perubahan dipublikasikan dianggap sebagai persetujuan Anda.',
        },
      ],
    },
    {
      heading: '10. Hukum yang Berlaku',
      blocks: [
        {
          type: 'paragraph',
          text: 'Syarat dan Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diselesaikan secara musyawarah mufakat. Apabila tidak tercapai, diselesaikan melalui pengadilan yang berwenang di Indonesia.',
        },
      ],
    },
  ],
};
