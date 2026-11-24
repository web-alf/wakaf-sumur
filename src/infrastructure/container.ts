import { GetLandingPage } from '../application/usecases/GetLandingPage';
import { GetPolicies } from '../application/usecases/GetPolicies';
import { StaticContentRepository } from './repositories/StaticContentRepository';

/** Composition root: satu-satunya tempat implementasi konkret dirangkai ke use case. */
const contentRepository = new StaticContentRepository();

export const getLandingPage = new GetLandingPage(contentRepository);
export const getPolicies = new GetPolicies(contentRepository);
