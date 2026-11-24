import type { FaqItem } from '../../domain/entities/Faq';
import type { LegalDocument } from '../../domain/entities/LegalDocument';
import type { ContentRepository } from '../ports/ContentRepository';

export interface PoliciesData {
  readonly faq: readonly FaqItem[];
  readonly documents: readonly LegalDocument[];
}

export class GetPolicies {
  constructor(private readonly content: ContentRepository) {}

  async execute(): Promise<PoliciesData> {
    const [faq, documents] = await Promise.all([
      this.content.getFaq(),
      this.content.getLegalDocuments(),
    ]);
    return { faq, documents };
  }
}
