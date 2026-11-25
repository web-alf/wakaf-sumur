import type { ContentRepository } from '../../application/ports/ContentRepository';
import { about } from '../data/about';
import { bankAccounts } from '../data/bankAccounts';
import { faq } from '../data/faq';
import { refund } from '../data/legal';
import { privacy } from '../data/privacy';
import { programs } from '../data/programs';
import { reasons } from '../data/reasons';
import { siteProfile } from '../data/site';
import { impactStats } from '../data/stats';
import { terms } from '../data/terms';
import { testimonials } from '../data/testimonials';

/** Adapter: konten statis di dalam repo. Ganti dengan adapter API/CMS tanpa menyentuh use case. */
export class StaticContentRepository implements ContentRepository {
  getSiteProfile = async () => siteProfile;
  getImpactStats = async () => impactStats;
  getReasons = async () => reasons;
  getPrograms = async () => programs;
  getTestimonials = async () => testimonials;
  getBankAccounts = async () => bankAccounts;
  getFaq = async () => faq;
  getLegalDocuments = async () => [terms, refund, privacy];
  getAbout = async () => about;
}
