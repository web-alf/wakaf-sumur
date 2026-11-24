import type { BankAccount } from '../../domain/entities/BankAccount';

const accountHolder = 'YAYASAN GERAKAN WAKAF SUMUR';

export const bankAccounts: readonly BankAccount[] = [
  { bankName: 'Bank Mandiri', accountNumber: '1360020240013', accountHolder },
  { bankName: 'BRI', accountNumber: '008301003594563', accountHolder },
  { bankName: 'BSI', accountNumber: '7263493618', accountHolder },
  { bankName: 'BNI', accountNumber: '1818711204', accountHolder },
  { bankName: 'BCA', accountNumber: '7831221333', accountHolder },
  { bankName: 'BCA Syariah', accountNumber: '0301112322', accountHolder },
  { bankName: 'Bank Muamalat', accountNumber: '5010122916', accountHolder },
];
