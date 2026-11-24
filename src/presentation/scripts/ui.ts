// Interaksi sisi-klien: navbar, modal, FAQ accordion, scroll reveal.
// Tanpa handler inline — semua lewat data-attribute.

const nav = document.getElementById('nav');
if (nav) {
  const toggle = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

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

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeAllModals();
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
