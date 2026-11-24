import type { ProgramCategory, ProgramStatus } from '../../domain/entities/Program';
import type { ReasonIcon } from '../../domain/entities/Reason';

export const categoryVisual: Record<ProgramCategory, { emoji: string; label: string; tone: string }> = {
  'sumur-bor': { emoji: '💧', label: 'air', tone: 'pv1' },
  'pipa-air': { emoji: '🌊', label: 'gelombang', tone: 'pv2' },
  sanitasi: { emoji: '🕌', label: 'masjid', tone: 'pv3' },
};

export const statusLabel: Record<ProgramStatus, string> = {
  priority: 'Prioritas',
  ongoing: 'Berjalan',
  new: 'Baru',
};

export const reasonIconSvg: Record<ReasonIcon, string> = {
  check: '<polyline points="20 6 9 17 4 12"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M1.05 12H3M21 12h1.95M12 1.05V3M12 21v1.95M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
  drop: '<path d="M12 2C6 8 3 12 3 16a9 9 0 0018 0c0-4-3-8-9-14z"/>',
};

export const avatarTones = ['ta1', 'ta2', 'ta3', 'ta4'] as const;
