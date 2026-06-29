// ============================================================
//  DADOS DOS PROJECTOS DO PORTFOLIO
//  Edita aqui para actualizar o conteúdo de cada modal
// ============================================================
const portfolioData = [
    {
        title:       "Threads",
        subtitle:    "Illustration",
        img:         "imgs/portfolio/1.jpg",
        description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        client:      "Threads Co.",
        category:    "Illustration"
    },
    {
        title:       "Explore",
        subtitle:    "Graphic Design",
        img:         "imgs/portfolio/2.jpg",
        description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        client:      "Explore Agency",
        category:    "Graphic Design"
    },
    {
        title:       "Finish",
        subtitle:    "Identity",
        img:         "imgs/portfolio/3.jpg",
        description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        client:      "Finish Brand",
        category:    "Identity"
    },
    {
        title:       "Lines",
        subtitle:    "Branding",
        img:         "imgs/portfolio/4.jpg",
        description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        client:      "Lines Studio",
        category:    "Branding"
    },
    {
        title:       "Southwest",
        subtitle:    "Website Design",
        img:         "imgs/portfolio/5.jpg",
        description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        client:      "Southwest Inc.",
        category:    "Website Design"
    },
    {
        title:       "Window",
        subtitle:    "Photography",
        img:         "imgs/portfolio/6.jpg",
        description: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        client:      "Window Studio",
        category:    "Photography"
    }
];

// ============================================================
//  REFERÊNCIAS AO MODAL ÚNICO
// ============================================================
const modalOverlay    = document.getElementById("modalOverlay");
const modalBox        = document.getElementById("modalBox");
const modalTitle      = document.getElementById("modalTitle");
const modalSubtitle   = document.getElementById("modalSubtitle");
const modalImg        = document.getElementById("modalImg");
const modalDescription= document.getElementById("modalDescription");
const modalClient     = document.getElementById("modalClient");
const modalCategory   = document.getElementById("modalCategory");

// ============================================================
//  ABRIR MODAL — preenche dinamicamente com os dados do item
// ============================================================
function openModal(index) {
    const data = portfolioData[index];

    modalTitle.textContent       = data.title;
    modalSubtitle.textContent    = data.subtitle;
    modalImg.src                 = data.img;
    modalImg.alt                 = data.title;
    modalDescription.textContent = data.description;
    modalClient.textContent      = data.client;
    modalCategory.textContent    = data.category;

    modalOverlay.classList.add("activeModal");
    document.body.style.overflow = "hidden";
}

// ============================================================
//  FECHAR MODAL
// ============================================================
function closeModal() {
    modalOverlay.classList.remove("activeModal");
    document.body.style.overflow = "";
}

// ============================================================
//  FECHAR AO CLICAR NO OVERLAY (fora do box)
//  stopPropagation no modalBox garante que clicar dentro não fecha
// ============================================================
function handleOverlayClick(event) {
    closeModal();
}

modalBox.addEventListener("click", function (event) {
    event.stopPropagation(); // impede propagação para o overlay
});

// ============================================================
//  FECHAR COM TECLA ESC
// ============================================================
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});