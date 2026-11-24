import type { Program } from '../entities/Program';

/** Persentase pencapaian dana (0–100, dibulatkan). */
export function getProgressPercent(program: Pick<Program, 'collectedAmount' | 'targetAmount'>): number {
  if (program.targetAmount <= 0) return 0;
  const pct = Math.round((program.collectedAmount / program.targetAmount) * 100);
  return Math.min(100, Math.max(0, pct));
}
