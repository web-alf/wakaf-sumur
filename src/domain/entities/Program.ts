export type ProgramCategory = 'sumur-bor' | 'pipa-air' | 'sanitasi';
export type ProgramStatus = 'priority' | 'ongoing' | 'new';

export interface Program {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: ProgramCategory;
  readonly status: ProgramStatus;
  /** Dana terkumpul dalam Rupiah. Verifikasi dengan Moota/Flip sebelum dipublikasikan. */
  readonly collectedAmount: number;
  /** Target dana dalam Rupiah. Tidak diisi / null = tanpa batas (∞). */
  readonly targetAmount?: number | null;
  /** Gambar campaign: path di folder public (mis. /programs/ntt.jpg) atau URL penuh. Kosong = pakai ilustrasi bawaan. */
  readonly imageUrl?: string;
  /** Deskripsi gambar untuk pembaca layar. Kosong = pakai judul program. */
  readonly imageAlt?: string;
  /** URL halaman campaign asli program ini. Kosong = pakai halaman daftar campaign. */
  readonly campaignUrl?: string;
}
