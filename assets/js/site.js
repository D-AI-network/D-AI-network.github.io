
const publications = [
  {
    title: "ERST: Learning Interaction from Entity Replacement in Spatiotemporal Forecasting",
    venue: "ICLR 2027 Submission",
    year: 2027,
    selected: true,
    authors: "Giseong Hong, Collins Botambu, Jin-Taek Seong",
    description: "Entity-level interaction learning through representation replacement and response measurement.",
    image: "",
    links: [
      {label: "Paper", url: "#"},
      {label: "Code", url: "https://anonymous.4open.science/r/ERST-C2F4/"},
      {label: "Project", url: "#"}
    ]
  },
  {
    title: "BPR-Net: Bin-Resolved Temporal Responses for Frequency-Aware Prototype Routing in Spatiotemporal Forecasting",
    venue: "CIKM 2026",
    year: 2026,
    selected: true,
    authors: "Giseong Hong, Collins Botambu, Jin-Taek Seong",
    description: "Frequency-bin temporal responses with prototype-based routing for spatiotemporal forecasting.",
    image: "",
    links: [
      {label: "Paper", url: "#"},
      {label: "Code", url: "#"},
      {label: "Project", url: "#"}
    ]
  },
  {
    title: "SPEC-Net: Mobile Traffic Forecasting via Spectral Frequency Encoding and Prototype Alignment",
    venue: "IEEE Transactions on Mobile Computing — Revision",
    year: 2026,
    selected: true,
    authors: "Giseong Hong, et al.",
    description: "Spectral frequency encoding and prototype alignment for mobile traffic forecasting.",
    image: "",
    links: [
      {label: "Paper", url: "#"}
    ]
  },
  {
    title: "TARA",
    venue: "IEEE Transactions on Intelligent Transportation Systems — Revision",
    year: 2026,
    selected: false,
    authors: "Giseong Hong, et al.",
    description: "Spatiotemporal forecasting research for traffic state and dynamics modeling.",
    image: "",
    links: [
      {label: "Paper", url: "#"}
    ]
  }
];

const news = [
  {date: "Oct 2026", text: "Preparing Phase 2 materials for AAAI 2027."},
  {date: "Sep 2026", text: "ERST submitted to ICLR 2027."},
  {date: "Aug 2026", text: "BPR-Net accepted at CIKM 2026."},
  {date: "2026", text: "Ongoing journal revisions and multi-domain spatiotemporal forecasting studies."}
];

function renderPublications(filter = "selected") {
  const target = document.getElementById("publication-list");
  const items = publications
    .filter(p => filter === "all" || p.selected)
    .sort((a, b) => b.year - a.year);

  target.innerHTML = items.map(p => `
    <article class="pub-card">
      <div class="pub-thumb">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title} figure">`
          : `<div class="pub-placeholder">Add your paper figure here<br><strong>${p.title.split(":")[0]}</strong></div>`
        }
      </div>
      <div>
        <div class="pub-meta">${p.venue} · ${p.year}</div>
        <h3 class="pub-title">${p.title}</h3>
        <p class="pub-authors">${p.authors}</p>
        <p class="pub-desc">${p.description}</p>
        <div class="pub-links">
          ${p.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderNews() {
  const target = document.getElementById("news-list");
  target.innerHTML = news.map(item => `
    <div class="news-item">
      <div class="news-date">${item.date}</div>
      <div class="news-text">${item.text}</div>
    </div>
  `).join("");
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderPublications(tab.dataset.filter);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
renderPublications();
renderNews();
