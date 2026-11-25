// Interaksi sisi-klien: navbar, modal, FAQ accordion, scroll reveal.
// Tanpa handler inline — semua lewat data-attribute.

const nav = document.getElementById('nav');
if (nav) {
  const toggle = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

// ── Menu navigasi mobile ──
function setMenu(open: boolean) {
  if (!nav) return;
  nav.classList.toggle('menu-open', open);
  const toggle = nav.querySelector<HTMLElement>('[data-nav-toggle]');
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
}
document.addEventListener('click', (event) => {
  if (!nav) return;
  const target = event.target as HTMLElement | null;
  if (!target) return;
  if (target.closest('[data-nav-toggle]')) {
    setMenu(!nav.classList.contains('menu-open'));
  } else if (target.closest('.nav-links a') || !target.closest('nav')) {
    setMenu(false);
  }
});
window.matchMedia('(min-width: 681px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

function openModal(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay.open').forEach((m) => m.classList.remove('open'));
  document.body.style.overflow = '';
}

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null;
  if (!target) return;

  const opener = target.closest<HTMLElement>('[data-modal-open]');
  if (opener) {
    event.preventDefault();
    openModal(opener.dataset.modalOpen!);
    return;
  }

  if (target.closest('[data-modal-close]') || target.classList.contains('modal-overlay')) {
    closeAllModals();
    return;
  }

  const faqQuestion = target.closest<HTMLElement>('[data-faq-toggle]');
  if (faqQuestion) {
    faqQuestion.parentElement?.classList.toggle('open');
  }
});

// ── Salin nomor rekening ──
async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* lanjut ke fallback */
  }
  // Fallback untuk browser lama / konteks non-HTTPS.
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
  document.body.appendChild(area);
  area.select();
  area.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

const copyTimers = new WeakMap<HTMLElement, number>();

async function handleCopy(button: HTMLElement) {
  const number = button.dataset.copy ?? '';
  const bank = button.dataset.copyBank ?? 'rekening';
  const status = document.querySelector<HTMLElement>('[data-copy-status]');
  const ok = await copyText(number);

  button.classList.toggle('is-copied', ok);
  button.classList.toggle('is-failed', !ok);
  button.title = ok ? 'Tersalin' : 'Gagal menyalin, salin manual';
  if (status) {
    status.textContent = ok
      ? `Nomor rekening ${bank} tersalin`
      : `Gagal menyalin nomor rekening ${bank}. Silakan salin manual.`;
  }

  window.clearTimeout(copyTimers.get(button));
  copyTimers.set(
    button,
    window.setTimeout(() => {
      button.classList.remove('is-copied', 'is-failed');
      button.title = 'Salin nomor rekening';
      if (status) status.textContent = '';
    }, 2200),
  );
}

document.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-copy]');
  if (button) void handleCopy(button);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAllModals();
    setMenu(false);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -36px 0px' },
);
document.querySelectorAll('.r').forEach((el) => revealObserver.observe(el));
