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
  /** Target dana dalam Rupiah. */
  readonly targetAmount: number;
}
