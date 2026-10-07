const news = [
  {
    date: "Oct 2026",
    text: "Preparing additional experiments and analysis for ongoing spatiotemporal forecasting research."
  },
  {
    date: "Sep 2026",
    text: "ERST submitted to ICLR 2027."
  },
  {
    date: "Aug 2026",
    text: "BPR-Net accepted at CIKM 2026."
  }
];

const publications = [
  {
    title: "ERST: Learning Interaction from Entity Replacement in Spatiotemporal Forecasting",
    venue: "ICLR 2027 Submission",
    year: 2027,
    selected: true,
    authors: "Giseong Hong, Collins Botambu, Jin-Taek Seong",
    tldr: "Measures how a representation formed from multiple entities changes when one entity representation is replaced, and uses the response as an interaction signal for forecasting.",
    abstract: "ERST studies entity-level interaction by applying the same function before and after replacing one entity representation with a reference while keeping the remaining entities and processing unchanged. The resulting difference is used as a response for forecasting.",
    image: "assets/img/erst.svg",
    links: [
      { label: "Code", url: "https://github.com/D-AI-network/ERST" },
      { label: "Anon Code", url: "https://anonymous.4open.science/r/ERST-C2F4/" }
    ]
  },
  {
    title: "BPR-Net: Bin-Resolved Temporal Responses for Frequency-Aware Prototype Routing in Spatiotemporal Forecasting",
    venue: "CIKM 2026",
    year: 2026,
    selected: true,
    authors: "Giseong Hong, Collins Botambu, Jin-Taek Seong",
    tldr: "Uses frequency-bin temporal responses to route spatial information through learned prototypes.",
    abstract: "BPR-Net models temporal responses at frequency-bin resolution and connects them to spatial units using prototype-based routing. The design links temporal behavior with spatial relation learning for spatiotemporal forecasting.",
    image: "assets/img/bprnet.svg",
    links: [
      { label: "Code", url: "https://github.com/D-AI-network/bprnet" }
    ]
  },
  {
    title: "SPEC-Net: Mobile Traffic Forecasting via Spectral Frequency Encoding and Prototype Alignment",
    venue: "IEEE TMC — Revision",
    year: 2026,
    selected: true,
    authors: "Giseong Hong, et al.",
    tldr: "Combines spectral frequency encoding with prototype alignment for mobile traffic forecasting.",
    abstract: "SPEC-Net investigates spectral representations and prototype alignment to model mobile traffic demand patterns across time and spatial units.",
    image: "assets/img/specnet.svg",
    links: [
      { label: "Code", url: "https://github.com/D-AI-network/spectranet" }
    ]
  },
  {
    title: "Population-Mediated Interaction Learning for Spatiotemporal Forecasting",
    venue: "Research Project",
    year: 2026,
    selected: false,
    authors: "Giseong Hong, et al.",
    tldr: "Studies shared population states as a mechanism for interaction learning in diverse spatiotemporal systems.",
    abstract: "This line of work studies interaction learning through shared population-level representations and evaluates the approach across multiple spatiotemporal domains.",
    image: "assets/img/popfield.svg",
    links: [
      { label: "Code", url: "https://github.com/D-AI-network/acpop" }
    ]
  }
];

function renderNews() {
  const target = document.getElementById("news-list");
  target.innerHTML = news.map(item => `
    <div class="news-item">
      <div class="news-date">${item.date}</div>
      <p class="news-copy">${item.text}</p>
    </div>
  `).join("");
}

function renderPublications(filter = "selected") {
  const target = document.getElementById("publication-list");

  const items = publications
    .filter(item => filter === "all" || item.selected)
    .sort((a, b) => b.year - a.year);

  target.innerHTML = items.map((item, index) => `
    <article class="publication-card">
      <div class="publication-image">
        <img src="${item.image}" alt="${item.title}">
      </div>

      <div class="publication-body">
        <div class="publication-meta">${item.venue}</div>
        <h3 class="publication-title">${item.title}</h3>
        <p class="publication-authors">${item.authors}</p>

        <p class="publication-tldr">
          <span class="tldr-label">TL;DR:</span>
          ${item.tldr}
        </p>

        <div class="publication-links">
          ${item.links.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>
          `).join("")}

          <button class="abstract-toggle" data-abstract="abstract-${index}">
            Show Abstract
          </button>
        </div>

        <div id="abstract-${index}" class="abstract-box">
          ${item.abstract}
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".abstract-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const box = document.getElementById(button.dataset.abstract);
      const isOpen = box.classList.toggle("open");
      button.textContent = isOpen ? "Hide Abstract" : "Show Abstract";
    });
  });
}

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
    renderPublications(button.dataset.filter);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderNews();
renderPublications();
