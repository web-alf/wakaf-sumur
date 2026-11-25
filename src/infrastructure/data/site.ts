import type { SiteProfile } from '../../domain/entities/SiteProfile';

export const siteProfile: SiteProfile = {
  name: 'Gerakan Wakaf Sumur',
  domain: 'gerakan.wakafsumur.com',
  logoUrl: '/logo/logo-wordmark.png',
  legalName: 'Yayasan Gerakan Wakaf Sumur',
  copyrightYear: 2025,
  // Halaman daftar campaign: tujuan "Lihat Program", "Semua Program", dan
  // tombol kartu program yang campaignUrl-nya belum diisi.
  campaignsUrl: 'https://wakafsumur.com/#Target-pilihwakaf',
  whatsappNumber: '6285185999971',
  whatsappDisplay: '0851-8599-9971',
  whatsappGreetings: {
    contact: 'Halo kak, saya ingin wakaf sumur mohon dibantu',
    floating: 'Kak, saya tertarik untuk wakaf sumur mohon dibantu',
  },
  navLinks: [
    { label: 'Tentang Kami', target: { kind: 'anchor', href: '/tentang-kami' } },
    { label: 'Program', target: { kind: 'anchor', href: '/#program' } },
    { label: 'Testimoni', target: { kind: 'anchor', href: '/#testimoni' } },
    { label: 'Kontak', target: { kind: 'anchor', href: '/#kontak' } },
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
    { label: 'Instagram', target: { kind: 'external', href: 'https://www.instagram.com/gerakanwakafsumur' } },
    { label: 'Facebook', target: { kind: 'external', href: 'https://www.facebook.com/gerakanwakafsumur/' } },
    { label: 'YouTube', target: { kind: 'external', href: 'https://www.youtube.com/@Gerakanwakafsumur' } },
  ],
  footerColumns: [
    {
      title: 'Lembaga',
      links: [
        { label: 'Tentang Kami', target: { kind: 'anchor', href: '/tentang-kami' } },
        { label: 'Legalisasi Yayasan', target: { kind: 'none' } },
        { label: 'Hubungi Kami', target: { kind: 'anchor', href: '/#kontak' } },
      ],
    },
    {
      title: 'Kebijakan',
      links: [
        { label: 'FAQ', target: { kind: 'policy', policy: 'faq' } },
        { label: 'Syarat & Ketentuan', target: { kind: 'policy', policy: 'terms' } },
        { label: 'Kebijakan Refund', target: { kind: 'policy', policy: 'refund' } },
        { label: 'Kebijakan Privasi', target: { kind: 'policy', policy: 'privacy' } },
      ],
    },
  ],
  legalLinks: [
    { label: 'Syarat & Ketentuan', target: { kind: 'policy', policy: 'terms' } },
    { label: 'FAQ', target: { kind: 'policy', policy: 'faq' } },
    { label: 'Refund Policy', target: { kind: 'policy', policy: 'refund' } },
    { label: 'Kebijakan Privasi', target: { kind: 'policy', policy: 'privacy' } },
  ],
};
