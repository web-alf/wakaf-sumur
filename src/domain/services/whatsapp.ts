/** Tautan chat WhatsApp; `message` menjadi teks pembuka yang sudah terisi. */
export function buildWhatsAppUrl(number: string, message?: string): string {
  const base = `https://wa.me/${number.replace(/\D/g, '')}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
