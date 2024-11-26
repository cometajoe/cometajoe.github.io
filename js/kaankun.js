(function () {
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector('[data-scroll-container]'),
    //   smooth: true,
    //   multiplier: .7,
    //   tablet: {
    //     breakpoint: 1024,
    //     smooth: true
    //   },
    //   smartphone: {
    //     breakpoint: 767
    //   }
    // });
    const lenis = new Lenis({
        duration: 1.2, // Adjust scroll smoothness
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    })

    // Update Lenis on every animation frame
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    // Activar GSAP y ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    // // Play audio when reaching specific sections
    // scroll.on('scroll', (event) => {
    //   if (event.scroll.y > document.querySelector('#section2').offsetTop) {
    //     if (!sound.playing()) {
    //       sound.play();
    //     }
    //   } else {
    //     sound.stop();
    //   }
    // });

    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 100 }, // Estado inicial
            {
                opacity: 1,
                y: 0, // Estado final
                duration: 1.2,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Inicia la animación cuando el 80% de la sección está en vista
                    end: "top 20%", // Termina cuando llega al 20%
                    scrub: true, // Suaviza el efecto con el *scroll*
                },
            }
        );
    });

    // const backgroundMusic = new Howl({
    //   src: ['./img/sea-waves-169411.mp3'], // Adjust the path based on your folder structure
    //   loop: true,   // Enable looping if you want the audio to play continuously
    //   volume: 0.5   // Set the initial volume (0.0 to 1.0)
    // });
    // let isPlaying = false; // Flag to track if audio is currently playing


    // let hasUserInteracted = false; // Track if the user has interacted

    // // Start audio only after a user interaction (click or touch)
    // const enableAudio = () => {
    //   hasUserInteracted = true;
    //   document.removeEventListener('click', enableAudio); // Remove listener after first interaction
    //   document.removeEventListener('touchstart', enableAudio);
    // };

    // document.addEventListener('click', enableAudio);
    // document.addEventListener('touchstart', enableAudio);

    // // Play audio on scroll after user interaction
    // window.addEventListener('scroll', () => {
    //   if (hasUserInteracted && !isPlaying) {
    //     scrollAudio.play();
    //     isPlaying = true;
    //   }
    // });

})();