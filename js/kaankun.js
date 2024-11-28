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



    // Activar GSAP y ScrollTrigger
    // gsap.registerPlugin(ScrollTrigger);
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

    // const sections = document.querySelectorAll("section");
    // sections.forEach((section, index) => {
    //     gsap.fromTo(
    //         section,
    //         { opacity: 0, y: 100 }, // Estado inicial
    //         {
    //             opacity: 1,
    //             y: 0, // Estado final
    //             duration: 1.2,
    //             scrollTrigger: {
    //                 trigger: section,
    //                 start: "top 80%", // Inicia la animación cuando el 80% de la sección está en vista
    //                 end: "top 20%", // Termina cuando llega al 20%
    //                 scrub: true, // Suaviza el efecto con el *scroll*
    //             },
    //         }
    //     );
    // });




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


    // const indicators = document.querySelectorAll(".indicator");
    // const sections = document.querySelectorAll("section");

    // const resetCurrentActiveIndicator = () => {
    //   const activeIndicator = document.querySelector(".active");
    //   activeIndicator.classList.remove("active");
    // };

    // const onSectionLeavesViewport = (section) => {
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           resetCurrentActiveIndicator();
    //           const element = entry.target;
    //           const indicator = document.querySelector(`a[href='#${element.id}']`);
    //           indicator.classList.add("active");
    //           return;
    //         }
    //       });
    //     },
    //     {
    //       root: null,
    //       rootMargin: "0px",
    //       threshold: 0.75
    //     }
    //   );
    //   observer.observe(section);
    // };

    // indicators.forEach((indicator) => {
    //   indicator.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     document
    //       .querySelector(this.getAttribute("href"))
    //       .scrollIntoView({ behavior: "smooth" });
    //     resetCurrentActiveIndicator();
    //     this.classList.add("active");
    //   });
    // });

    // sections.forEach(onSectionLeavesViewport);



    // Get elements
    const openPopup = document.getElementById('play-chapter-one');
    const closePopup = document.getElementById('closePopup');
    const videoPopup = document.getElementById('videoPopup');
    const youtubeVideo = document.getElementById('youtubeVideo');

    // Open popup and autoplay video
    openPopup.addEventListener('click', () => {
        videoPopup.style.display = 'flex';
        youtubeVideo.src += "&autoplay=1"; // Add autoplay parameter
    });

    // Close popup and stop video
    closePopup.addEventListener('click', () => {
        videoPopup.style.display = 'none';
        youtubeVideo.src = youtubeVideo.src.replace("&autoplay=1", ""); // Stop autoplay
    });



})();