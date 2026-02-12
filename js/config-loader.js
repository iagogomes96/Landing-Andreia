async function loadConfig() {
    try {
        const response = await fetch('../config.json');
        const data = await response.json();

        // Configura WhatsApp (Links e Textos Visíveis)
        const waUrl = `https://wa.me/${data.whatsapp.number}?text=${encodeURIComponent(data.whatsapp.message)}`;
        document.querySelectorAll('.wa-link').forEach(el => {
            el.href = waUrl;

            if(el.querySelector('.wa-text')) el.querySelector('.wa-text').innerText = data.whatsapp.display;
        });

        document.querySelectorAll('.wa-display-text').forEach(el => el.innerText = data.whatsapp.display);

        // Configura Instagram
        document.querySelectorAll('.ig-link').forEach(el => el.href = data.social.instagram.url);
        document.querySelectorAll('.ig-text').forEach(el => el.innerText = data.social.instagram.handle);

        // Configura TikTok
        document.querySelectorAll('.tt-link').forEach(el => el.href = data.social.tiktok.url);
        document.querySelectorAll('.tt-text').forEach(el => el.innerText = data.social.tiktok.handle);

        // Configura Email
        document.querySelectorAll('.mail-link').forEach(el => el.href = `mailto:${data.social.email.address}`);
        document.querySelectorAll('.mail-text').forEach(el => el.innerText = data.social.email.display);

        console.log("Configurações carregadas com sucesso!");
    } catch (error) {
        console.error("Erro ao carregar o arquivo de configuração:", error);
    }
}


document.addEventListener('DOMContentLoaded', loadConfig);