import type { Program } from '../../domain/entities/Program';

export const programs: readonly Program[] = [
  {
    id: 'sumur-bor-ntt',
    title: 'Sumur Bor Desa Terpencil — NTT',
    description:
      '3 desa di Kabupaten Kupang tanpa akses air bersih. Target: 1 sumur bor untuk ±400 jiwa penerima manfaat.',
    category: 'sumur-bor',
    status: 'priority',
    collectedAmount: 36_500_000,
    targetAmount: 50_000_000,
  },
  {
    id: 'pipa-air-kalimantan',
    title: 'Instalasi Pipa Air Bersih — Kalimantan',
    description:
      'Menyambungkan air dari sumber alam ke pemukiman warga Desa Muara Rumbai yang terisolir banjir musiman.',
    category: 'pipa-air',
    status: 'ongoing',
    collectedAmount: 22_500_000,
    targetAmount: 50_000_000,
  },
  {
    id: 'sanitasi-pesantren-jateng',
    title: 'Sumur + Sanitasi Pesantren — Jawa Tengah',
    description:
      'Santri belajar dalam kondisi bersih dan sehat. Wakaf sumur + instalasi MCK untuk 200 santri yatim dan dhuafa.',
    category: 'sanitasi',
    status: 'new',
    collectedAmount: 9_000_000,
    targetAmount: 50_000_000,
  },
];
