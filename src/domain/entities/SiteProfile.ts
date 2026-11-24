import type { LegalDocumentKey } from './LegalDocument';

export type PolicyKey = LegalDocumentKey | 'faq';

export type LinkTarget =
  | { readonly kind: 'anchor'; readonly href: string }
  | { readonly kind: 'external'; readonly href: string }
  | { readonly kind: 'policy'; readonly policy: PolicyKey }
  | { readonly kind: 'none' };

export interface SiteLink {
  readonly label: string;
  readonly target: LinkTarget;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly SiteLink[];
}

export interface SiteProfile {
  readonly name: string;
  readonly domain: string;
  readonly logoUrl: string;
  readonly legalName: string;
  readonly copyrightYear: number;
  readonly donationUrl: string;
  readonly whatsappUrl: string;
  readonly navLinks: readonly SiteLink[];
  readonly highlights: readonly string[];
  readonly socials: readonly SiteLink[];
  readonly footerColumns: readonly FooterColumn[];
  readonly legalLinks: readonly SiteLink[];
}
