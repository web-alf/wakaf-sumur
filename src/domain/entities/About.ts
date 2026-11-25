export interface CoreValue {
  readonly name: string;
  readonly description: string;
}

export interface ProcessStep {
  readonly title: string;
  readonly description: string;
}

/** Capaian satu program, bersumber dari rekap penerima manfaat yayasan. */
export interface ImpactProgram {
  readonly name: string;
  readonly beneficiaries: number;
  /** Rincian lain, mis. "18 sumur" atau "141.000 liter air bersih". */
  readonly details: readonly string[];
}

export interface AboutContent {
  readonly heroTitle: string;
  /** Bagian judul yang diberi penekanan warna. */
  readonly heroTitleAccent: string;
  readonly heroLead: string;
  readonly storyTitle: string;
  /** Paragraf boleh memuat <strong>; sumbernya konten internal yayasan. */
  readonly storyParagraphs: readonly string[];
  readonly vision: string;
  readonly missions: readonly string[];
  readonly values: readonly CoreValue[];
  readonly impactTitle: string;
  readonly impactLead: string;
  readonly impactPrograms: readonly ImpactProgram[];
  readonly processTitle: string;
  readonly processLead: string;
  readonly steps: readonly ProcessStep[];
  readonly closingTitle: string;
  readonly closingLead: string;
}
