import type { BankAccount } from '../../domain/entities/BankAccount';
import type { FaqItem } from '../../domain/entities/Faq';
import type { ImpactStat } from '../../domain/entities/ImpactStat';
import type { LegalDocument } from '../../domain/entities/LegalDocument';
import type { Program } from '../../domain/entities/Program';
import type { Reason } from '../../domain/entities/Reason';
import type { SiteProfile } from '../../domain/entities/SiteProfile';
import type { Testimonial } from '../../domain/entities/Testimonial';

/**
 * Port: kontrak sumber konten yang dibutuhkan use case.
 * Implementasi (statis, CMS, API website, dsb.) berada di lapisan infrastructure.
 */
export interface ContentRepository {
  getSiteProfile(): Promise<SiteProfile>;
  getImpactStats(): Promise<readonly ImpactStat[]>;
  getReasons(): Promise<readonly Reason[]>;
  getPrograms(): Promise<readonly Program[]>;
  getTestimonials(): Promise<readonly Testimonial[]>;
  getBankAccounts(): Promise<readonly BankAccount[]>;
  getFaq(): Promise<readonly FaqItem[]>;
  getLegalDocuments(): Promise<readonly LegalDocument[]>;
}
