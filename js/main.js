const pages = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "Books", href: "pages/books.html", key: "books" },
  { label: "About", href: "pages/about.html", key: "about" },
  { label: "Contact", href: "pages/contact.html", key: "contact" },
  { label: "Privacy Policy", href: "pages/privacy.html", key: "privacy" }
];

const books = [
  {
    title: "माँ, मैं ठीक हूँ" "Coming...",
    description: "‘माँ, मैं ठीक हूँ ?’ सिर्फ कुछ पन्नों की एक किताब नहीं है। यह असल में तुम्हारी ही कहानी है... वो कहानी, जिसका ज़िक्र तुमने आज तक किसी से नहीं किया।",
    image: "images/maa main theek hun book jaggu kashyap.jpg",
    amazon: "https://www.amazon.in",
    flipkart: "https://www.flipkart.com",
    category: "featured"
  },
  {
    title: "Dust, Dreams & Determination",
    description: "Real stories of resilience, family, and ambition from everyday India.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    amazon: "https://www.amazon.in",
    flipkart: "https://www.flipkart.com",
    category: "new"
  },
  {
    title: "Beyond the Last Bell",
    description: "Memories from classrooms, friendships, and the silent lessons of growing up.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    amazon: "https://www.amazon.in",
    flipkart: "https://www.flipkart.com",
    category: "bestseller"
  },
  {
    title: "Monsoon Letters",
    description: "Emotional narratives inspired by rain, nostalgia, and unspoken feelings.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=700&q=80",
    amazon: "https://www.amazon.in",
    flipkart: "https://www.flipkart.com",
    category: "new"
  },
  {
    title: "Streetlight Diaries",
    description: "Powerful slices of life from cities that never stop teaching.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=80",
    amazon: "https://www.amazon.in",
    flipkart: "https://www.flipkart.com",
    category: "bestseller"
  }
];

const socialProfiles = [
  { name: "Instagram", icon: "📸", url: "https://instagram.com", followers: "42K followers" },
  { name: "Facebook", icon: "👍", url: "https://facebook.com", followers: "28K followers" },
  { name: "LinkedIn", icon: "💼", url: "https://linkedin.com", followers: "17K followers" },
  { name: "X (Twitter)", icon: "🐦", url: "https://x.com", followers: "13K followers" },
  { name: "YouTube", icon: "▶️", url: "https://youtube.com", followers: "9.4K subscribers" }
];

function navHref(link) {
  return document.body.dataset.page === "home" ? link.href : `../${link.href}`;
}

function injectLayout() {
  const pageKey = document.body.dataset.page || "home";
  const headerRoot = document.getElementById("header-root");
  const footerRoot = document.getElementById("footer-root");
  if (headerRoot) {
    headerRoot.innerHTML = `
      <header class="site-header">
        <div class="container nav-wrap">
          <a class="logo" href="${pageKey === "home" ? "index.html" : "../index.html"}">ARTICH</a>
          <button class="menu-toggle" type="button" aria-label="Toggle menu">☰</button>
          <ul class="nav-links" id="site-nav">
            ${pages
              .map(
                (p) => `<li><a href="${navHref(p)}" class="${p.key === pageKey ? "active" : ""}">${p.label}</a></li>`
              )
              .join("")}
          </ul>
        </div>
      </header>`;

    const toggle = headerRoot.querySelector(".menu-toggle");
    const nav = headerRoot.querySelector("#site-nav");
    toggle?.addEventListener("click", () => nav?.classList.toggle("open"));
  }

  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-inner">
          <div>
            ${socialProfiles
              .map((p) => `<a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.icon} ${p.name}</a>`)
              .join(" • ")}
          </div>
          <small>© ARTICH – Jaggu Kashyap | artich.in</small>
        </div>
      </footer>`;
  }
}

function bookCardTemplate(book) {
  return `<article class="book-card" data-title="${book.title.toLowerCase()}">
      <div class="book-cover"><img src="${book.image}" alt="Cover of ${book.title}" loading="lazy"></div>
      <h3 class="book-title">${book.title}</h3>
      <p class="book-desc">${book.description}</p>
      <div class="book-actions">
        <button class="btn btn-light like-btn" type="button">❤️ Like</button>
        <button class="btn btn-light share-btn" type="button">🔗 Share</button>
        <a class="btn btn-primary" href="${book.amazon}" target="_blank" rel="noopener noreferrer">Amazon</a>
        <a class="btn btn-gold" href="${book.flipkart}" target="_blank" rel="noopener noreferrer">Flipkart</a>
      </div>
    </article>`;
}

function renderBookSection(targetId, list) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(bookCardTemplate).join("");
}

function bindBookActions(scope = document) {
  scope.querySelectorAll(".like-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const liked = btn.dataset.liked === "true";
      btn.dataset.liked = (!liked).toString();
      btn.textContent = liked ? "❤️ Like" : "💙 Liked";
    });
  });

  scope.querySelectorAll(".share-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const card = btn.closest(".book-card");
      const title = card?.querySelector(".book-title")?.textContent || "ARTICH Book";
      const shareData = { title, text: `${title} by Jaggu Kashyap`, url: location.href };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch {
          // User cancelled share
        }
      } else {
        navigator.clipboard?.writeText(`${title} - ${location.href}`);
        btn.textContent = "✅ Copied";
        setTimeout(() => (btn.textContent = "🔗 Share"), 1200);
      }
    });
  });
}

function renderSocialProfiles(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = socialProfiles
    .map(
      (profile) => `<a class="social-card" href="${profile.url}" target="_blank" rel="noopener noreferrer">
      <strong>${profile.icon} ${profile.name}</strong>
      <span class="muted">${profile.followers || ""}</span>
    </a>`
    )
    .join("");
}

function initBooksPage() {
  const featured = books.filter((b) => b.category === "featured");
  const newest = books.filter((b) => b.category === "new");
  const best = books.filter((b) => b.category === "bestseller");

  renderBookSection("featured-books", featured);
  renderBookSection("new-books", newest);
  renderBookSection("best-books", best);

  const allBooksContainer = document.getElementById("all-books");
  const searchInput = document.getElementById("book-search");
  if (allBooksContainer) {
    allBooksContainer.innerHTML = books.map(bookCardTemplate).join("");
    bindBookActions(allBooksContainer);
  }

  searchInput?.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    const cards = allBooksContainer?.querySelectorAll(".book-card") || [];
    cards.forEach((card) => {
      card.style.display = card.dataset.title.includes(term) ? "block" : "none";
    });
  });

  ["featured-books", "new-books", "best-books"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) bindBookActions(section);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectLayout();
  renderSocialProfiles("social-profiles");
  initBooksPage();
});



