/** Contoh: 36_500_000 → "Rp 36,5 jt"; 9_000_000 → "Rp 9 jt". */
export function formatRupiahShort(amount: number): string {
  if (amount >= 1_000_000) {
    const million = amount / 1_000_000;
    const text = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(million);
    return `Rp ${text} jt`;
  }
  return `Rp ${new Intl.NumberFormat('id-ID').format(amount)}`;
}
