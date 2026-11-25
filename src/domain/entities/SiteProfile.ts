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
  /** Halaman daftar campaign di website utama. Tujuan "Lihat Program" dan "Semua Program". */
  readonly campaignsUrl?: string;
  /** Nomor WhatsApp format internasional tanpa "+", mis. 6285185999971. */
  readonly whatsappNumber: string;
  /** Nomor WhatsApp untuk ditampilkan, mis. 0851-8599-9971. */
  readonly whatsappDisplay: string;
  readonly whatsappGreetings: {
    /** Tombol "Hubungi Kami" di navbar dan blok kontak. */
    readonly contact: string;
    /** Tombol WhatsApp melayang. */
    readonly floating: string;
  };
  readonly navLinks: readonly SiteLink[];
  readonly highlights: readonly string[];
  readonly socials: readonly SiteLink[];
  readonly footerColumns: readonly FooterColumn[];
  readonly legalLinks: readonly SiteLink[];
}
