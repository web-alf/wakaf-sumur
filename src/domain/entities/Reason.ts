export type ReasonIcon = 'check' | 'sun' | 'drop';

export interface Reason {
  readonly icon: ReasonIcon;
  readonly title: string;
  readonly description: string;
}
