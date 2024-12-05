(function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: .7,
        tablet: {
            breakpoint: 1024,
            smooth: true
        },
        smartphone: {
            breakpoint: 767
        }
    });  

    

    // Get references to the button and audio element
    const audioButton = document.getElementById('audioButton');
    const backgroundAudio = document.getElementById('backgroundAudio');

    // Toggle play/pause and change button icon
    audioButton.addEventListener('click', () => {
        if (backgroundAudio.paused) {
            backgroundAudio.play();
            audioButton.textContent = '❚❚'; // Change to pause icon
        } else {
            backgroundAudio.pause();
            audioButton.textContent = '▶'; // Change back to play icon
        }
    });


   

    const links = document.querySelectorAll('.indicator');
   

    links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault(); // Evita el comportamiento predeterminado
          const targetId = link.getAttribute('href'); // Obtén el ID de destino
          const targetElement = document.querySelector(targetId); // Selecciona la sección
      
          scroll.scrollTo(targetElement); // Desplázate a la sección
        });
      });

         
    scroll.on('scroll', (args) => {
        // Get all current elements : args.currentElements
        if(typeof args.currentElements['hey'] === 'object') {
            let progress = args.currentElements['hey'].progress;
            console.log(progress);
            // ouput log example: 0.34
            // gsap example : myGsapAnimation.progress(progress);
        }
    });

   



})();