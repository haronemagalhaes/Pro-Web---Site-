// Define o ano atual no rodapé de forma segura
document.addEventListener("DOMContentLoaded", () => {
    const ano = new Date().getFullYear();
    const elementoAno = document.getElementById('anoAtual');
    if (elementoAno) {
        elementoAno.textContent = ano.toString();
    }

    // Aplica efeito de rolagem (fade-in) em elementos com a classe "animar"
    const elementosAnimar = document.querySelectorAll('.animar');

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.1
    });

    elementosAnimar.forEach((el) => observer.observe(el));
});
// MODAL de imagem ao clicar nos cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const imagem = card.getAttribute("data-imagem");
        const modal = document.getElementById("modalImagem");
        const imagemPreview = document.getElementById("imagemPreview");

        imagemPreview.src = imagem;
        modal.style.display = "flex";
    });
});

document.querySelector(".fechar").addEventListener("click", () => {
    document.getElementById("modalImagem").style.display = "none";
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("modalImagem");
    if (e.target === modal) modal.style.display = "none";
});
