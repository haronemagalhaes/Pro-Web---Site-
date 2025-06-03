// Define o ano atual no rodapé de forma segura
document.addEventListener("DOMContentLoaded", () => {
    const ano = new Date().getFullYear();
    const elementoAno = document.getElementById('anoAtual');
    if (elementoAno) {
        elementoAno.textContent = ano;
    }
});
