const pages = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "Books", href: "pages/books.html", key: "books" },
  { label: "About", href: "pages/about.html", key: "about" },
  { label: "Contact", href: "pages/contact.html", key: "contact" },
  { label: "Privacy Policy", href: "pages/privacy.html", key: "privacy" }
];

const books = [
  {
    title: "माँ, मैं ठीक हूँ ( Coming Soon )",
    description: "यह सिर्फ कुछ पन्नों की एक किताब नहीं है, आपको रुलाएगी, महसूस कराएगी। यह असल में तुम्हारी ही कहानी है... जिसका ज़िक्र तुमने आज तक किसी से नहीं किया।",
    image: "/Artich/images/maa-main-theek-hun-book-jaggu-kashyap.jpg",
    amazon: "https://www.amazon.in",
    flipkart: "https://www.flipkart.com",
    category: "featured"
  },
  {
    title: "Pending...",
    description: "ये सिर्फ मेरी कहानी नहीं है दोस्त, ये तुम्हारी उस खामोशी की आवाज़ है जिसे तुम चाहकर भी किसी से कह नहीं पाते। एक बार इसे पढ़ो, शायद खुद से दोबारा मुलाकात हो जाए।",
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
    title: "Pending...",
    description: "जब साथ वाले दोस्तों की कामयाबी देखकर खुशी कम और खुद की नाकामयाबी पर शर्मिंदगी ज्यादा होने लगे,तो यह बुक आपके लिए।",
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

{ name: "Instagram", icon: "📸", url: "https://instagram.com/jaggu__kashyap", followers: "Follow" },
{ name: "X", icon: "🐦", url: "https://twitter.com/JAGGUKASHYAP4", followers: "Follow" },
{ name: "Facebook", icon: "👍", url: "https://www.facebook.com/jaggu.kashyap.50", followers: "Follow" },
{ name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/jaggu-kashyap-026247268", followers: "Connect" }
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
          <div class="footer-links">
<a href="pages/disclaimer.html">Disclaimer</a> •
<a href="pages/copyright.html">Copyright Notice</a>
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
      <button class="follow-btn">Follow</button>
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




















