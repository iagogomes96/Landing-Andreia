// Configuração Centralizada do WhatsApp
const config = {
    whatsappNumber: "5511999999999", // Mude apenas aqui
    defaultMessage: "Olá! Gostaria de uma consulta com o Tarólogo do Amor."
};

// Função para atualizar links
function setupWhatsAppLinks() {
    const links = document.querySelectorAll('.wa-link');
    const encodedMsg = encodeURIComponent(config.defaultMessage);
    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodedMsg}`;

    links.forEach(link => {
        link.href = waUrl;
        link.target = "_blank";
    });
}

// Inicialização Lucide e Configurações de Interatividade
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            setupWhatsAppLinks();

            // Lógica de acordeão
            const details = document.querySelectorAll("details");
            details.forEach((targetDetail) => {
                targetDetail.addEventListener("click", () => {
                    details.forEach((detail) => {
                        if (detail !== targetDetail) detail.removeAttribute("open");
                    });
                });
            });
        });