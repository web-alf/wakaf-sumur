import type { BankAccount } from '../../domain/entities/BankAccount';
import type { ImpactStat } from '../../domain/entities/ImpactStat';
import type { Program } from '../../domain/entities/Program';
import type { Reason } from '../../domain/entities/Reason';
import type { SiteProfile } from '../../domain/entities/SiteProfile';
import type { Testimonial } from '../../domain/entities/Testimonial';
import { getProgressPercent } from '../../domain/services/programProgress';
import type { ContentRepository } from '../ports/ContentRepository';

export interface ProgramView extends Program {
  /** null = program tanpa batas target. */
  readonly progressPercent: number | null;
  /** Tujuan tombol kartu: campaign asli → daftar campaign → blok donasi di halaman ini. */
  readonly ctaUrl: string;
}

const FALLBACK_CTA = '#donasi';

export interface LandingPageData {
  readonly site: SiteProfile;
  readonly stats: readonly ImpactStat[];
  readonly reasons: readonly Reason[];
  readonly programs: readonly ProgramView[];
  readonly testimonials: readonly Testimonial[];
  readonly bankAccounts: readonly BankAccount[];
}

export class GetLandingPage {
  constructor(private readonly content: ContentRepository) {}

  async execute(): Promise<LandingPageData> {
    const [site, stats, reasons, programs, testimonials, bankAccounts] = await Promise.all([
      this.content.getSiteProfile(),
      this.content.getImpactStats(),
      this.content.getReasons(),
      this.content.getPrograms(),
      this.content.getTestimonials(),
      this.content.getBankAccounts(),
    ]);

    return {
      site,
      stats,
      reasons,
      programs: programs.map((p) => ({
        ...p,
        progressPercent: getProgressPercent(p),
        ctaUrl: p.campaignUrl?.trim() || site.campaignsUrl?.trim() || FALLBACK_CTA,
      })),
      testimonials,
      bankAccounts,
    };
  }
}
