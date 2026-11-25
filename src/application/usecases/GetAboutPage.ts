import type { AboutContent } from '../../domain/entities/About';
import type { SiteProfile } from '../../domain/entities/SiteProfile';
import type { ContentRepository } from '../ports/ContentRepository';

export interface AboutPageData {
  readonly site: SiteProfile;
  readonly about: AboutContent;
}

export class GetAboutPage {
  constructor(private readonly content: ContentRepository) {}

  async execute(): Promise<AboutPageData> {
    const [site, about] = await Promise.all([this.content.getSiteProfile(), this.content.getAbout()]);
    return { site, about };
  }
}
