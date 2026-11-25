/**
 * Teks boleh memuat markup inline sederhana (<strong>, <br>).
 * Sumbernya selalu konten internal yayasan, bukan input pengguna.
 */
export type LegalBlock =
  | { readonly type: 'paragraph'; readonly text: string }
  | { readonly type: 'list'; readonly items: readonly string[] };

export interface LegalSection {
  readonly heading?: string;
  readonly blocks: readonly LegalBlock[];
}

export type LegalDocumentKey = 'terms' | 'refund' | 'privacy';

export interface LegalDocument {
  readonly key: LegalDocumentKey;
  readonly title: string;
  /** Kosong = baris "Terakhir diperbarui" tidak ditampilkan. */
  readonly lastUpdated?: string;
  readonly sections: readonly LegalSection[];
}
