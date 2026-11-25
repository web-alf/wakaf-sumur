import type { LegalDocument } from '../../domain/entities/LegalDocument';

export const privacy: LegalDocument = {
  key: 'privacy',
  title: 'Kebijakan Privasi',
  sections: [
    {
      blocks: [
        {
          type: 'paragraph',
          text: 'Kebijakan ini menjelaskan cara Yayasan Gerakan Wakaf Sumur mengelola data pribadi Anda saat mengunjungi wakafsumur.com, membuat akun, berwakaf atau berdonasi, dan menghubungi tim kami.',
        },
      ],
    },
    {
      heading: 'Daftar Isi',
      blocks: [
        {
          type: 'list',
          items: [
            'Data yang kami proses',
            'Tujuan dan dasar pemrosesan',
            'Penerima data',
            'Cookie dan data teknis',
            'Penyimpanan dan keamanan',
            'Hak Anda',
            'Kontak privasi',
          ],
        },
      ],
    },
    {
      heading: 'Data yang Kami Proses',
      blocks: [
        {
          type: 'list',
          items: [
            '<strong>Formulir wakaf atau donasi.</strong> Nama, nomor WhatsApp, pilihan program atau paket, nominal, serta nama untuk pencantuman wakaf atau pesan doa jika Anda mengisinya.',
            '<strong>Akun dan komunikasi.</strong> Nama, alamat email, data autentikasi saat Anda membuat akun, pilihan berlangganan newsletter, serta isi pesan saat Anda menghubungi kami.',
            '<strong>Transaksi.</strong> Informasi yang diperlukan untuk mencocokkan pembayaran, seperti nominal, waktu atau referensi transaksi, serta bukti pembayaran jika Anda mengirimkannya.',
            '<strong>Penggunaan situs.</strong> Data teknis yang berkaitan dengan akses dan penggunaan situs sebagaimana dijelaskan pada bagian cookie.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Mohon isi informasi yang diperlukan saja. Hindari mengirim kata sandi, PIN, kode OTP, atau data pribadi pihak lain yang tidak diperlukan dalam pesan maupun kolom doa. Jika Anda mengajukan wakaf atas nama orang lain, pastikan Anda berwenang memberikan datanya. Pemrosesan data anak memerlukan persetujuan orang tua atau wali sesuai ketentuan yang berlaku.',
        },
      ],
    },
    {
      heading: 'Tujuan dan Dasar Pemrosesan',
      blocks: [
        {
          type: 'list',
          items: [
            '<strong>Memberikan layanan yang Anda minta.</strong> Kami memproses pengajuan wakaf atau donasi, mencocokkan pembayaran, mengirim konfirmasi dan laporan terkait program, mengelola akun, serta menanggapi pertanyaan atau pengaduan.',
            '<strong>Memenuhi kewajiban hukum.</strong> Kami dapat menyimpan atau menyerahkan data apabila diwajibkan untuk pembukuan, pelaporan, atau permintaan sah dari otoritas berwenang.',
            '<strong>Menjaga layanan.</strong> Kami dapat memproses data untuk keamanan situs, pencegahan penyalahgunaan, dan perbaikan layanan berdasarkan kepentingan yang sah dengan mempertimbangkan hak Anda.',
            '<strong>Mengirim newsletter.</strong> Kami menggunakan alamat email untuk newsletter ketika Anda memilih berlangganan. Anda dapat menarik persetujuan dengan menghubungi kami.',
          ],
        },
      ],
    },
    {
      heading: 'Penerima Data',
      blocks: [
        {
          type: 'paragraph',
          text: 'Informasi transaksi yang diperlukan dapat diproses oleh bank atau penyedia pembayaran sesuai metode yang Anda pilih. Kami dapat mengungkapkan data kepada instansi berwenang jika diwajibkan oleh hukum. Kami tidak menjual data pribadi Anda.',
        },
        {
          type: 'paragraph',
          text: 'Jika Anda menggunakan layanan pihak ketiga seperti WhatsApp atau kanal pembayaran, penyedia tersebut dapat memproses informasi sesuai kebijakan privasinya. Jika pemrosesan melibatkan transfer data pribadi ke luar Indonesia, transfer tersebut tunduk pada ketentuan pelindungan data pribadi yang berlaku.',
        },
      ],
    },
    {
      heading: 'Cookie dan Data Teknis',
      blocks: [
        {
          type: 'paragraph',
          text: 'Situs dapat menggunakan cookie yang diperlukan agar fungsi seperti sesi akun berjalan. Saat Anda mengakses situs, informasi teknis seperti alamat IP, jenis peramban, dan waktu akses dapat tercatat untuk membantu pengoperasian dan keamanan situs.',
        },
        {
          type: 'paragraph',
          text: 'Anda dapat mengelola cookie melalui pengaturan peramban. Memblokir cookie yang diperlukan dapat memengaruhi fungsi situs. Cookie analitik atau pemasaran, apabila digunakan dan memerlukan persetujuan, diaktifkan sesuai pilihan yang Anda berikan.',
        },
      ],
    },
    {
      heading: 'Penyimpanan dan Keamanan',
      blocks: [
        {
          type: 'paragraph',
          text: 'Kami menyimpan data selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini. Catatan transaksi dapat disimpan lebih lama jika diperlukan untuk pembukuan, pelaporan, penyelesaian sengketa, atau kewajiban hukum. Setelah tujuan dan kewajiban terkait terpenuhi, data dihapus, dimusnahkan, atau dijadikan anonim sesuai ketentuan yang berlaku.',
        },
        {
          type: 'paragraph',
          text: 'Kami menjaga kerahasiaan data dan membatasi akses sesuai kebutuhan pekerjaan. Jika terjadi kegagalan pelindungan data pribadi, kami akan menyampaikan pemberitahuan sesuai ketentuan yang berlaku.',
        },
      ],
    },
    {
      heading: 'Hak Anda',
      blocks: [
        {
          type: 'paragraph',
          text: 'Sesuai ketentuan yang berlaku, Anda dapat meminta informasi tentang pemrosesan data Anda, mengakses atau memperoleh salinannya, memperbarui atau memperbaiki data, menarik persetujuan, serta meminta penghentian, pembatasan, penundaan, penghapusan, atau pemusnahan data. Anda juga dapat menggunakan hak keberatan atas keputusan otomatis dan hak memindahkan data jika syaratnya terpenuhi.',
        },
        {
          type: 'paragraph',
          text: 'Untuk mengajukan permintaan atau pengaduan, hubungi kontak di bawah. Sertakan nama, kontak yang terkait dengan layanan, dan jenis permintaan Anda. Kami dapat meminta informasi seperlunya untuk memverifikasi identitas Anda. Kami menangani permintaan sesuai batas waktu dan ketentuan yang berlaku.',
        },
      ],
    },
    {
      heading: 'Kontak Privasi',
      blocks: [
        {
          type: 'paragraph',
          text: '<strong>Yayasan Gerakan Wakaf Sumur</strong><br>Karang Duwet I, Karangrejek, Kapanewon Wonosari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta',
        },
        {
          type: 'paragraph',
          text: 'Email managementcsgws@gmail.com<br>WhatsApp +62 851-8599-9971',
        },
        {
          type: 'paragraph',
          text: 'Jika kebijakan ini berubah, versi terbaru akan ditampilkan di halaman ini. Kami akan memberi tahu Anda jika perubahan memerlukan pemberitahuan atau persetujuan baru sesuai ketentuan yang berlaku.',
        },
      ],
    },
  ],
};
