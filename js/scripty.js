document.addEventListener('DOMContentLoaded', function() {
    const mainVideo = document.getElementById('main-video');
    const recommendedLinks = document.querySelectorAll('.recommended a');

    recommendedLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Armazena o src e a imagem atual do vídeo principal
            const mainVideoSrc = mainVideo.src;
            const mainVideoId = mainVideoSrc.split('/embed/')[1].split('?')[0];
            const mainVideoThumb = `https://img.youtube.com/vi/${mainVideoId}/hqdefault.jpg`;

            // Obtém os atributos do link clicado
            const recommendedVideoSrc = this.getAttribute('data-video');
            const recommendedVideoId = recommendedVideoSrc.split('/embed/')[1].split('?')[0];
            const recommendedVideoThumb = `https://img.youtube.com/vi/${recommendedVideoId}/hqdefault.jpg`;

            // Atualiza o vídeo principal com o vídeo do link clicado
            mainVideo.src = recommendedVideoSrc;

            // Atualiza o data-video e a miniatura do link clicado com os do vídeo principal
            this.setAttribute('data-video', mainVideoSrc);
            this.querySelector('img').src = mainVideoThumb;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-a');

    function changeNavOnScroll() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('ative'));
        if (navLinks[index]) {
            navLinks[index].classList.add('ative');
        }
    }

    window.addEventListener('scroll', changeNavOnScroll);
    changeNavOnScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const videosRight = document.querySelector('.videos-right');
    const recommendedItems = document.querySelectorAll('.recommended'); // Seleciona todos os itens recomendados

    function stopScrolling() {
        recommendedItems.forEach(item => {
            item.classList.add('paused'); // Adiciona a classe de pausa
        });
    }

    function resumeScrolling() {
        recommendedItems.forEach(item => {
            item.classList.remove('paused'); // Remove a classe de pausa
        });
    }

    videosRight.addEventListener('mouseenter', stopScrolling);
    videosRight.addEventListener('mouseleave', resumeScrolling);
});