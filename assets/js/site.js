
/* =========================================================
   NEWS
========================================================= */

const news = [
  {
    date: "Sep 2026",
    text: "Received the Creative Research Award at the K-DS Academic Conference for research on spatiotemporal forecasting."
  },
  {
    date: "Sep 2026",
    text: "Won the Creativity Award at the K-DS Hackathon."
  },
  {
    date: "Aug 2026",
    text: "Our paper, BPR-Net, was accepted at CIKM 2026 for oral presentation."
  },
  {
    date: "Apr 2026",
    text: "Presented research at JCCI 2026 (Oral Presentation)."
  },
  {
    date: "Sep 2025",
    text: "Won the Creativity Award at the K-DS Hackathon."
  },
  {
    date: "Aug 2025",
    text: "Selected for the Research Incentive Grant Program for Master's Students, supported by the National Research Foundation of Korea (NRF)."
  },
  {
    date: "Mar 2025",
    text: "Joined the Data Analytics & Information Lab at Chonnam National University as an M.S. student."
  }
];


/* =========================================================
   PUBLICATIONS
========================================================= */

const publications = [

  /* -------------------------------------------------------
     BPR-Net — CIKM 2026
  ------------------------------------------------------- */
  {
    title: "BPR-Net: Bin-Resolved Temporal Responses for Frequency-Aware Prototype Routing in Spatiotemporal Forecasting",

    venue: "CIKM 2026 — Accepted (Oral Presentation)",

    year: 2026,
    selected: true,

    authors: "Giseong Hong, Botambu Collins, Jin-Taek Seong",

    tldr: "Uses frequency-bin temporal responses to route spatial information through learned prototypes.",

    abstract: "BPR-Net models temporal responses at frequency-bin resolution and connects them to spatial units using prototype-based routing. The design links temporal behavior with spatial relation learning for spatiotemporal forecasting.",

    
   image: "assets/img/bprnet.svg",
   
   links: [
     {
       label: "Paper",
       url: "https://doi.org/10.1145/3799682.3841075"
     },
     {
       label: "PDF",
       url: "26CIKM_BPR-Net.pdf"
     },
     {
       label: "Code",
       url: "https://github.com/D-AI-network/bprnet"
     }
   ]

  },


  /* -------------------------------------------------------
     SPEC-Net — IEEE TMC
  ------------------------------------------------------- */
  {
    title: "SPEC-Net: Mobile Traffic Forecasting via Spectral Frequency Encoding and Prototype Alignment",

    venue: "IEEE Transactions on Mobile Computing — Under Review (Revision 1)",

    year: 2026,
    selected: true,

    authors: "Giseong Hong, et al.",

    tldr: "Combines spectral frequency encoding with prototype alignment for mobile traffic forecasting.",

    abstract: "SPEC-Net investigates spectral representations and prototype alignment to model mobile traffic demand patterns across time and spatial units.",

    image: "assets/img/specnet.svg",

    links: [
      {
        label: "Code",
        url: "https://github.com/D-AI-network/spectranet"
      }
    ]
  },


  /* -------------------------------------------------------
     TARA — IEEE T-ITS
  ------------------------------------------------------- */
  {
    title: "TARA: Traffic Anchor-Based Representation Alignment for Operation-Aware Spatiotemporal Traffic Forecasting",

    venue: "IEEE Transactions on Intelligent Transportation Systems — Under Review (Revision 1)",

    year: 2026,
    selected: true,

    authors: "Giseong Hong, Botambu Collins, Jin-Taek Seong",

    tldr: "Learns traffic representations using latent traffic anchors to capture location-specific traffic dynamics.",

    abstract: "TARA investigates traffic anchor-based representation alignment for spatiotemporal traffic forecasting. It uses latent traffic anchors to represent traffic dynamics and supports forecasting across different traffic operating conditions.",

    image: "assets/img/tara.svg",

    links: []
  },


  /* -------------------------------------------------------
     Frequency-to-Topology Routing — IEEE Access
  ------------------------------------------------------- */
  {
    title: "Frequency-to-Topology Routing for Cellular Traffic Demand Forecasting",

    venue: "IEEE Access — Under Review",

    year: 2026,
    selected: true,

    authors: "Giseong Hong, et al.",

    tldr: "Explores frequency-to-topology routing for cellular traffic demand forecasting.",

    abstract: "This work investigates frequency-aware representations and topology routing for cellular traffic demand forecasting.",

    image: "assets/img/ftr.svg",

    links: []
  }

];


/* =========================================================
   RENDER NEWS
========================================================= */

function renderNews() {
  const target = document.getElementById("news-list");

  if (!target) return;

  target.innerHTML = news.map(item => `
    <div class="news-item">
      <div class="news-date">${item.date}</div>
      <p class="news-copy">${item.text}</p>
    </div>
  `).join("");
}


/* =========================================================
   RENDER PUBLICATIONS
========================================================= */

function renderPublications(filter = "selected") {
  const target = document.getElementById("publication-list");

  if (!target) return;

  const items = publications
    .filter(item => filter === "all" || item.selected)
    .sort((a, b) => b.year - a.year);

  target.innerHTML = items.map((item, index) => `

    <article
      class="publication-card"
      ${item.image ? "" : 'style="grid-template-columns: minmax(0, 1fr);"'}
    >

      ${item.image ? `
        <div class="publication-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
      ` : ""}

      <div class="publication-body">

        <div class="publication-meta">
          ${item.venue}
        </div>

        <h3 class="publication-title">
          ${item.title}
        </h3>

        <p class="publication-authors">
          ${item.authors}
        </p>

        <p class="publication-tldr">
          <span class="tldr-label">TL;DR:</span>
          ${item.tldr}
        </p>

        <div class="publication-links">

          ${item.links.map(link => `
            <a
              href="${link.url}"
              target="_blank"
              rel="noopener"
            >
              ${link.label}
            </a>
          `).join("")}

          <button
            class="abstract-toggle"
            data-abstract="abstract-${index}"
          >
            Show Abstract
          </button>

        </div>

        <div
          id="abstract-${index}"
          class="abstract-box"
        >
          ${item.abstract}
        </div>

      </div>

    </article>

  `).join("");

  /* Abstract toggle */
  document.querySelectorAll(".abstract-toggle").forEach(button => {

    button.addEventListener("click", () => {

      const box = document.getElementById(
        button.dataset.abstract
      );

      const isOpen = box.classList.toggle("open");

      button.textContent = isOpen
        ? "Hide Abstract"
        : "Show Abstract";

    });

  });
}


/* =========================================================
   PUBLICATION FILTER
========================================================= */

document.querySelectorAll(".filter-button").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".filter-button")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    renderPublications(button.dataset.filter);

  });

});


/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   INITIAL RENDER
========================================================= */

renderNews();
renderPublications();
