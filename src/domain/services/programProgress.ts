import type { Program } from '../entities/Program';

type Amounts = Pick<Program, 'collectedAmount' | 'targetAmount'>;

/** Program tanpa target (tidak diisi, null, atau 0) dianggap tanpa batas. */
export function hasTarget(program: Amounts): boolean {
  return typeof program.targetAmount === 'number' && program.targetAmount > 0;
}

/** Persentase pencapaian dana (0–100, dibulatkan); null bila program tanpa batas target. */
export function getProgressPercent(program: Amounts): number | null {
  if (!hasTarget(program)) return null;
  const pct = Math.round((program.collectedAmount / (program.targetAmount as number)) * 100);
  return Math.min(100, Math.max(0, pct));
}
