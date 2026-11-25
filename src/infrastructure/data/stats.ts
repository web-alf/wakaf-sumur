import type { ImpactStat } from '../../domain/entities/ImpactStat';

/**
 * Statistik beranda. Sumber: rekap penerima manfaat yayasan (sama dengan
 * `impactPrograms` di about.ts). Perbarui keduanya bersamaan.
 *
 * "Penerima Manfaat" = jumlah keempat program:
 * 1.958 + 1.540 + 1.726 + 2.705 = 7.929.
 */
export const impactStats: readonly ImpactStat[] = [
  { value: '18', label: 'Sumur Terbangun' },
  { value: '7.929', label: 'Penerima Manfaat' },
  { value: '4', label: 'Program Air Bersih' },
];
