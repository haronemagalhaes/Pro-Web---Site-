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
