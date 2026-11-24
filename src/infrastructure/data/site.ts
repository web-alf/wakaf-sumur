import type { SiteProfile } from '../../domain/entities/SiteProfile';

export const siteProfile: SiteProfile = {
  name: 'Wakaf Sumur',
  domain: 'wakafsumur.com',
  legalName: 'Yayasan Wakaf Sumur Indonesia',
  copyrightYear: 2025,
  donationUrl: 'https://wakafsumur.com/donasi',
  whatsappUrl: 'https://wa.me/6281234567890',
  navLinks: [
    { label: 'Tentang', target: { kind: 'anchor', href: '#tentang' } },
    { label: 'Program', target: { kind: 'anchor', href: '#program' } },
    { label: 'Testimoni', target: { kind: 'anchor', href: '#testimoni' } },
    { label: 'Kontak', target: { kind: 'anchor', href: '#donasi' } },
  ],
  highlights: [
    'Amanah',
    'Jariyah Abadi',
    'Transparan',
    'Sesuai Syariat',
    'Air Bersih untuk Semua',
    'Berbadan Hukum',
    'Tepat Sasaran',
    'Wakaf Produktif',
  ],
  socials: [
    { label: 'Instagram', target: { kind: 'external', href: 'https://instagram.com/wakafsumur' } },
    { label: 'Facebook', target: { kind: 'external', href: 'https://facebook.com/wakafsumur' } },
    { label: 'YouTube', target: { kind: 'external', href: 'https://youtube.com/@wakafsumur' } },
  ],
  footerColumns: [
    {
      title: 'Program',
      links: [
        { label: 'Wakaf Sumur Bor', target: { kind: 'none' } },
        { label: 'Wakaf Pipa Air', target: { kind: 'none' } },
        { label: 'Wakaf Sanitasi', target: { kind: 'none' } },
        { label: 'Laporan Program', target: { kind: 'none' } },
      ],
    },
    {
      title: 'Lembaga',
      links: [
        { label: 'Tentang Kami', target: { kind: 'none' } },
        { label: 'Legalisasi Yayasan', target: { kind: 'none' } },
        { label: 'Laporan Keuangan', target: { kind: 'none' } },
        { label: 'Hubungi Kami', target: { kind: 'none' } },
      ],
    },
    {
      title: 'Kebijakan',
      links: [
        { label: 'FAQ', target: { kind: 'policy', policy: 'faq' } },
        { label: 'Syarat & Ketentuan', target: { kind: 'policy', policy: 'terms' } },
        { label: 'Kebijakan Refund', target: { kind: 'policy', policy: 'refund' } },
        { label: 'Kebijakan Privasi', target: { kind: 'none' } },
      ],
    },
  ],
  legalLinks: [
    { label: 'Syarat & Ketentuan', target: { kind: 'policy', policy: 'terms' } },
    { label: 'FAQ', target: { kind: 'policy', policy: 'faq' } },
    { label: 'Refund Policy', target: { kind: 'policy', policy: 'refund' } },
  ],
};
