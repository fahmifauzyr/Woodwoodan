import siteConfig from './data/siteConfig.json';
import productsData from './data/products.json';
import portfolioData from './data/portfolio.json';
import testimonialsData from './data/testimonials.json';

// State management
let activeCategory = 'all';
let activePortfolioCategory = 'all';
let currentProductModal = null;
let modalKeydownHandler = null;

/* ----------------------------------------------------
   Image Fallback Error State (R-27)
---------------------------------------------------- */
const WOOD_FALLBACK_SVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23F4ECE1'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='600' fill='%23A67344'>woodwoodan • Solid Hardwood</text></svg>";

window.handleImageError = function(img) {
  if (!img || img.dataset.hasError) return;
  img.dataset.hasError = 'true';
  img.src = WOOD_FALLBACK_SVG;
  img.alt = 'Foto karya kayu sedang disiapkan oleh workshop woodwoodan';
};

/* ----------------------------------------------------
   WhatsApp Link Generator (PRD FR-05 & UX Writing)
---------------------------------------------------- */
function getWhatsAppUrl(customMessage) {
  const phone = siteConfig.whatsapp.phone_number;
  const encodedText = encodeURIComponent(customMessage);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

function formatPrice(priceStr) {
  if (!priceStr) return '';
  return priceStr.startsWith('Mulai dari') ? priceStr : `Mulai dari ${priceStr}`;
}

function getProductWhatsAppUrl(product) {
  const pageUrl = `${window.location.origin}${window.location.pathname}#detail-${product.slug}`;
  const message = `Halo tim woodwoodan, saya tertarik untuk konsultasi dan pemesanan produk kustom:\n\n*${product.name}*\nSKU: ${product.sku}\nTautan: ${pageUrl}\n\nMohon informasi estimasi pengerjaan, opsi ukuran/kayu, dan penawaran biayanya. Terima kasih!`;
  return getWhatsAppUrl(message);
}

function getCustomOrderWhatsAppUrl() {
  const message = `Halo tim woodwoodan, saya ingin berkonsultasi mengenai pembuatan furnitur kriya kayu kustom.\n\nBerikut ringkasan kebutuhan saya:\n- Jenis Produk (Meja / Kursi / Rak / Dekorasi):\n- Estimasi Dimensi (P x L x T cm):\n- Pilihan Kayu Solid (Jati / Sungkai):\n- Lokasi Pengiriman:\n\nMohon informasi estimasi pengerjaan dan penawaran biayanya. Terima kasih!`;
  return getWhatsAppUrl(message);
}

/* ----------------------------------------------------
   Render Hero & Site Config Data
---------------------------------------------------- */
function initHeaderAndHero() {
  // Header Consultation CTA
  const headerWaBtn = document.getElementById('header-wa-cta');
  if (headerWaBtn) {
    headerWaBtn.href = getWhatsAppUrl("Halo woodwoodan, saya ingin konsultasi seputar perabot kayu solid.");
  }

  // Hero Secondary CTA (WA Custom)
  const heroWaBtn = document.getElementById('hero-custom-cta');
  if (heroWaBtn) {
    heroWaBtn.href = getCustomOrderWhatsAppUrl();
  }

  // Custom Banner CTA
  const bannerWaBtn = document.getElementById('banner-custom-cta');
  if (bannerWaBtn) {
    bannerWaBtn.href = getCustomOrderWhatsAppUrl();
  }

  // Floating WA button
  const floatingWaBtn = document.getElementById('floating-wa-btn');
  if (floatingWaBtn) {
    floatingWaBtn.href = getWhatsAppUrl(siteConfig.whatsapp.default_greeting);
  }

  // Mobile Drawer toggles
  const menuBtn = document.getElementById('menu-toggle-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('mobile-drawer');

  function openDrawer() {
    drawerBackdrop?.classList.add('active');
    drawer?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawerBackdrop?.classList.remove('active');
    drawer?.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn?.addEventListener('click', openDrawer);
  closeDrawerBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ----------------------------------------------------
   Product Catalog & Filter (PRD FR-03)
---------------------------------------------------- */
function renderProducts() {
  const container = document.getElementById('products-grid');
  const emptyState = document.getElementById('catalog-empty-state');
  if (!container) return;

  const filtered = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState?.classList.add('active');
    return;
  }

  emptyState?.classList.remove('active');

  container.innerHTML = filtered.map(product => {
    const mainImg = product.images[0] ? product.images[0].url : '/images/hero-craftsman.jpg';
    const altText = product.images[0] ? product.images[0].alt : product.name;
    const priceFormatted = formatPrice(product.price_display);

    return `
      <article class="product-card" id="card-${product.id}">
        <div class="product-image-wrap">
          <img 
            src="${mainImg}" 
            alt="${altText}" 
            class="product-image"
            loading="lazy"
            width="400"
            height="300"
            onerror="window.handleImageError(this)"
          />
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="product-sku">${product.sku}</span>
            <span class="product-wood-type">${product.specifications.wood_type.split(' ')[1] || 'Solid Wood'}</span>
          </div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-short-desc">${product.short_description}</p>
          <div class="product-footer">
            <div>
              <span class="product-price-label">Estimasi Harga:</span>
              <div class="product-price-value">${priceFormatted}</div>
            </div>
            <div class="product-actions">
              <button 
                type="button" 
                class="btn btn-outline btn-sm btn-open-detail" 
                data-slug="${product.slug}"
                aria-label="Lihat spesifikasi dan detail lengkap untuk ${product.name}"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach event listeners for detail buttons
  container.querySelectorAll('.btn-open-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const slug = e.currentTarget.getAttribute('data-slug');
      if (slug) openProductModalBySlug(slug);
    });
  });
}

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.catalog-controls .filter-tab');
  const container = document.getElementById('products-grid');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) return;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category') || 'all';
      
      // Smooth micro-transition (R-19 Motion Dial 2)
      if (container) {
        container.classList.add('filtering');
        setTimeout(() => {
          renderProducts();
          container.classList.remove('filtering');
        }, 150);
      } else {
        renderProducts();
      }
    });
  });

  const emptyStateWa = document.getElementById('empty-state-wa-btn');
  if (emptyStateWa) {
    emptyStateWa.href = getCustomOrderWhatsAppUrl();
  }

  // Reset filter from empty state (UX Writing: Provide immediate next action)
  const emptyResetBtn = document.getElementById('empty-state-reset-btn');
  emptyResetBtn?.addEventListener('click', () => {
    const allTab = document.querySelector('.catalog-controls .filter-tab[data-category="all"]');
    if (allTab) allTab.click();
  });
}

/* ----------------------------------------------------
   Product Detail Modal & Deep Linking (PRD FR-04)
---------------------------------------------------- */
function openProductModalBySlug(slug, updateHistory = true) {
  const product = productsData.find(p => p.slug === slug);
  if (!product) return;

  currentProductModal = product;
  const modalBackdrop = document.getElementById('product-modal-backdrop');
  const modalBody = document.getElementById('modal-content-container');
  if (!modalBackdrop || !modalBody) return;

  const waUrl = getProductWhatsAppUrl(product);
  const priceFormatted = formatPrice(product.price_display);

  const imagesHtml = product.images.map((img, idx) => `
    <button 
      type="button" 
      class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" 
      data-img-index="${idx}" 
      data-img-src="${img.url}" 
      aria-label="Tampilkan foto ${idx + 1}"
    >
      <img src="${img.url}" alt="${img.alt}" onerror="window.handleImageError(this)" />
    </button>
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-gallery">
        <div class="modal-main-image-wrap">
          <img 
            id="modal-active-image" 
            src="${product.images[0].url}" 
            alt="${product.images[0].alt}" 
            class="modal-main-image"
            onerror="window.handleImageError(this)"
          />
        </div>
        ${product.images.length > 1 ? `<div class="modal-thumbnails-row">${imagesHtml}</div>` : ''}
      </div>

      <div class="modal-details">
        <div class="modal-header-meta">
          <span class="product-sku">SKU: ${product.sku}</span>
          <span class="badge badge-custom">Karya Kustom</span>
        </div>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-price-tag">${priceFormatted}</div>
        <p class="modal-full-desc">${product.full_description}</p>

        <div class="modal-specs-list">
          <div class="spec-row">
            <span class="spec-label">Material Kayu</span>
            <span class="spec-val">${product.specifications.wood_type}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Dimensi Produk</span>
            <span class="spec-val">${product.specifications.dimensions}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Finishing</span>
            <span class="spec-val">${product.specifications.finishing}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Teknik Sambungan</span>
            <span class="spec-val">${product.specifications.joinery_technique}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Perawatan</span>
            <span class="spec-val">${product.specifications.care_instruction}</span>
          </div>
        </div>

        <div class="modal-actions-row">
          <a 
            href="${waUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-accent" 
            style="width: 100%; justify-content: center;"
            aria-label="Konsultasi dan pesan kustom untuk ${product.name} via WhatsApp"
          >
            Konsultasi & Pesan Kustom via WhatsApp
          </a>
          <button 
            type="button" 
            class="btn btn-outline btn-sm btn-modal-close-trigger" 
            style="width: 100%; justify-content: center;"
            aria-label="Tutup jendela pratinjau produk"
          >
            Tutup Pratinjau
          </button>
          <div class="modal-keyboard-hint" aria-hidden="true">
            Tip: Gunakan tombol panah ◄ ► pada keyboard untuk melihat foto, atau tekan Esc untuk menutup.
          </div>
        </div>
      </div>
    </div>
  `;

  // Active image switcher function supporting click and arrow keys (R-32)
  let activeImageIndex = 0;
  function updateActiveImage(idx) {
    if (idx < 0) idx = product.images.length - 1;
    if (idx >= product.images.length) idx = 0;
    activeImageIndex = idx;
    const targetImg = product.images[activeImageIndex];
    const mainImgEl = document.getElementById('modal-active-image');
    if (mainImgEl && targetImg) {
      mainImgEl.src = targetImg.url;
      mainImgEl.alt = targetImg.alt;
    }
    modalBody.querySelectorAll('.modal-thumb-btn').forEach((b, i) => {
      if (i === activeImageIndex) b.classList.add('active');
      else b.classList.remove('active');
    });
  }

  // Attach thumbnail clicks
  modalBody.querySelectorAll('.modal-thumb-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-img-index') || '0', 10);
      updateActiveImage(idx);
    });
  });

  // Attach ArrowLeft / ArrowRight navigation (R-32)
  if (modalKeydownHandler) {
    window.removeEventListener('keydown', modalKeydownHandler);
  }
  modalKeydownHandler = (e) => {
    if (e.key === 'ArrowRight') {
      updateActiveImage(activeImageIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      updateActiveImage(activeImageIndex - 1);
    }
  };
  window.addEventListener('keydown', modalKeydownHandler);

  modalBody.querySelectorAll('.btn-modal-close-trigger').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modalBackdrop.classList.add('active');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';

  if (updateHistory) {
    window.location.hash = `detail-${slug}`;
  }
}

function closeModal() {
  const modalBackdrop = document.getElementById('product-modal-backdrop');
  if (!modalBackdrop) return;

  if (modalKeydownHandler) {
    window.removeEventListener('keydown', modalKeydownHandler);
    modalKeydownHandler = null;
  }

  modalBackdrop.classList.remove('active');
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
  currentProductModal = null;

  // Clear hash without jump
  if (window.location.hash.startsWith('#detail-')) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

function initModalListeners() {
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('product-modal-backdrop');

  closeBtn?.addEventListener('click', closeModal);

  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeLightbox();
    }
  });

  // URL Hash router on load and popstate/hashchange
  function checkHashRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#detail-')) {
      const slug = hash.replace('#detail-', '');
      openProductModalBySlug(slug, false);
    } else if (currentProductModal) {
      closeModal();
    }
  }

  window.addEventListener('hashchange', checkHashRoute);
  checkHashRoute();
}

/* ----------------------------------------------------
   Portfolio Projects & Lightbox (PRD FR-06)
---------------------------------------------------- */
function renderPortfolio() {
  const container = document.getElementById('portfolio-grid');
  if (!container) return;

  const filtered = activePortfolioCategory === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activePortfolioCategory);

  container.innerHTML = filtered.map(item => `
    <div 
      class="portfolio-card" 
      data-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="Buka proyek ${item.title}"
    >
      <img 
        src="${item.thumbnail}" 
        alt="${item.title}" 
        class="portfolio-card-image"
        loading="lazy"
        width="600"
        height="375"
        onerror="window.handleImageError(this)"
      />
      <div class="portfolio-card-overlay">
        <h3 class="portfolio-card-title">${item.title}</h3>
        <p class="portfolio-card-meta">${item.location} • ${item.wood_type}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.portfolio-card').forEach(card => {
    const clickHandler = () => {
      const id = card.getAttribute('data-id');
      const item = portfolioData.find(p => p.id === id);
      if (item) openLightbox(item);
    };
    card.addEventListener('click', clickHandler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clickHandler();
      }
    });
  });
}

function initPortfolioTabs() {
  const tabs = document.querySelectorAll('.portfolio-controls .filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activePortfolioCategory = tab.getAttribute('data-category') || 'all';
      renderPortfolio();
    });
  });
}

function openLightbox(item) {
  const backdrop = document.getElementById('lightbox-backdrop');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  if (!backdrop || !imgEl) return;

  imgEl.src = item.gallery[0] || item.thumbnail;
  imgEl.alt = item.title;
  if (titleEl) titleEl.textContent = `${item.title} (${item.year})`;
  if (descEl) descEl.textContent = `${item.description} • Lokasi: ${item.location} • Material: ${item.wood_type}`;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const backdrop = document.getElementById('lightbox-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('active');
  if (!currentProductModal) {
    document.body.style.overflow = '';
  }
}

function initLightboxListeners() {
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close-btn');

  closeBtn?.addEventListener('click', closeLightbox);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeLightbox();
    }
  });
}

/* ----------------------------------------------------
   Testimonials (PRD FR-08)
---------------------------------------------------- */
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = testimonialsData.map(item => `
    <div class="testi-card">
      <div>
        <div class="testi-stars" aria-label="Rating 5 dari 5 bintang">
          ★★★★★
        </div>
        <p class="testi-quote">"${item.quote}"</p>
      </div>
      <div class="testi-author">
        <div class="testi-avatar-placeholder">
          ${item.client_name.charAt(0)}
        </div>
        <div class="testi-author-info">
          <div class="testi-name">${item.client_name}</div>
          <div class="testi-role">${item.role_or_project} (${item.client_type})</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------
   App Initialization
---------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndHero();
  initCategoryTabs();
  renderProducts();
  initModalListeners();
  initPortfolioTabs();
  renderPortfolio();
  initLightboxListeners();
  renderTestimonials();
});
