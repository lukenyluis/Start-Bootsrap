// ─── DADOS DOS CARDS ───────────────────────────────────────────────────────────
const portfolioData = [
    { title: "Threads",   subtitle: "Lorem ipsum dolor sit amet consectetur.", img: "imgs/portfolio/1.jpg", desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", client: "Threads",   category: "Illustration"   },
    { title: "Explore",   subtitle: "Lorem ipsum dolor sit amet consectetur.", img: "imgs/portfolio/2.jpg", desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", client: "Explore",   category: "Graphic Design" },
    { title: "Finish",    subtitle: "Lorem ipsum dolor sit amet consectetur.", img: "imgs/portfolio/3.jpg", desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", client: "Finish",    category: "Identity"       },
    { title: "Lines",     subtitle: "Lorem ipsum dolor sit amet consectetur.", img: "imgs/portfolio/4.jpg", desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", client: "Lines",     category: "Branding"       },
    { title: "Southwest", subtitle: "Lorem ipsum dolor sit amet consectetur.", img: "imgs/portfolio/5.jpg", desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", client: "Southwest", category: "Website Design" },
    { title: "Window",    subtitle: "Lorem ipsum dolor sit amet consectetur.", img: "imgs/portfolio/6.jpg", desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", client: "Window",    category: "Photography"    },
];

// ─── SELECTORES DO MODAL ───────────────────────────────────────────────────────
const modalContainer = document.getElementById("portfolioModal");
const modalBox       = document.getElementById("modalBox");
const modalClose     = document.getElementById("modalClose");
const modalCloseBtn  = document.getElementById("modalCloseBtn");
const modalImage     = document.getElementById("modalImage");
const modalTitle     = document.getElementById("modalTitle");
const modalSubtitle  = document.getElementById("modalSubtitle");
const modalDesc      = document.getElementById("paragraph");
const modalClient    = document.getElementById("modalClient");
const modalCategory  = document.getElementById("modalCategory");

// ─── FUNÇÕES ───────────────────────────────────────────────────────────────────
function openModal(index) {
    const data = portfolioData[index];
    modalImage.src            = data.img;
    modalImage.alt            = data.title;
    modalTitle.textContent    = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalDesc.textContent     = data.desc;
    modalClient.textContent   = data.client;
    modalCategory.textContent = data.category;

    modalContainer.classList.add("activeModal");
    modalBox.classList.add("modal");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modalContainer.classList.remove("activeModal");
    modalBox.classList.remove("modal");
    document.body.style.overflow = "";
}

// ─── EVENTOS ───────────────────────────────────────────────────────────────────
document.querySelectorAll(".card").forEach(card => {
    card.querySelector(".image-container").addEventListener("click", function () {
        openModal(parseInt(card.dataset.index));
    });
});

modalClose.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);
modalContainer.addEventListener("click", function (e) {
    if (e.target === modalContainer) closeModal();
});