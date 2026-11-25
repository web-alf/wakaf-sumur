import type { Testimonial } from '../../domain/entities/Testimonial';

export const testimonials: readonly Testimonial[] = [
  {
    id: 't1',
    quote:
      'Dulu anak-anak saya sakit terus karena minum air sungai. Sekarang ada sumur bor dari program ini, alhamdulillah semuanya sehat. Ini berkah yang kami tunggu bertahun-tahun.',
    name: 'Sumiati, 42',
    role: 'Penerima manfaat, Desa Fatumuti, NTT',
  },
  {
    id: 't2',
    quote:
      'Saya sudah berwakaf sumur dua kali lewat program ini. Laporan fotonya jelas, lokasinya bisa dilacak, dan panitia responsif. Amanah betul. Semoga jadi jariyah untuk almarhum ayah saya.',
    name: 'Ahmad Fauzi',
    role: 'Donatur, Jakarta Selatan',
  },
  {
    id: 't3',
    quote:
      'Saya sempat ragu, tapi setelah melihat laporan yang dikirimkan, lengkap dengan video sumur saat pertama kali dipompa, hati saya tenang. InsyaAllah ini jariyah yang nyata.',
    name: 'Rizqiyah H.',
    role: 'Donatur, Surabaya',
  },
  {
    id: 't4',
    quote:
      'Kami di sini tidak pernah mimpi punya air bersih. Allah kirimkan orang-orang baik melalui program wakaf ini. Terima kasih, semoga Allah balas dengan yang berlipat ganda.',
    name: 'Pak Daeng, Kepala Desa',
    role: 'Penerima manfaat, Kalimantan Tengah',
  },
];
