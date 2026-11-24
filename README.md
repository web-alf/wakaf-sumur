# Wakaf Sumur (Astro, Clean Architecture)

Landing page Wakaf Sumur, dimigrasi dari satu file HTML ke Astro dengan pemisahan lapisan.

## Perintah

| Perintah          | Fungsi                         |
| :---------------- | :----------------------------- |
| `npm install`     | Install dependensi             |
| `npm run dev`     | Dev server di `localhost:4321` |
| `npm run build`   | Build statis ke `./dist/`      |
| `npm run preview` | Preview hasil build            |

## Struktur & aturan dependensi

```
src/
├── domain/            # Inti bisnis: entity + aturan murni (tanpa Astro/UI)
│   ├── entities/      #   Program, Testimonial, BankAccount, SiteProfile, ...
│   └── services/      #   programProgress.ts (hitung % pencapaian dana)
├── application/       # Use case + port (interface)
│   ├── ports/         #   ContentRepository
│   └── usecases/      #   GetLandingPage, GetPolicies
├── infrastructure/    # Adapter konkret
│   ├── data/          #   Konten statis (program, FAQ, rekening, dst.)
│   ├── repositories/  #   StaticContentRepository implements ContentRepository
│   └── container.ts   #   Composition root
├── presentation/      # Astro: layout, komponen, style, script, formatter
└── pages/index.astro  # Merangkai use case → komponen
```

Arah dependensi: `presentation → application → domain` dan `infrastructure → application/domain`.
`domain` tidak mengimpor lapisan lain; `application` hanya mengenal interface (port), bukan sumber datanya.

## Mengubah konten

- **Angka program / dana terkumpul**: `src/infrastructure/data/programs.ts`.
  Persentase dihitung otomatis dari `collectedAmount / targetAmount`.
  Sebelum dipublikasikan, cocokkan dengan dashboard Moota/Flip.
- **Rekening, FAQ, S&K, Refund, link footer**: file lain di `src/infrastructure/data/`.
- **Ganti sumber data** (CMS / API website): buat adapter baru yang mengimplementasikan
  `ContentRepository`, lalu ganti satu baris di `src/infrastructure/container.ts`.
