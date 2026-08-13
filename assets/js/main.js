(() => {

  /* =========================================================
     MOBILE NAVIGATION
     ========================================================= */

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {

    const closeMenu = () => {
      navMenu.classList.remove('is-open');

      navToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      navToggle.setAttribute(
        'aria-label',
        'Open navigation menu'
      );
    };


    navToggle.addEventListener('click', () => {

      const isOpen =
        navToggle.getAttribute('aria-expanded') === 'true';

      navToggle.setAttribute(
        'aria-expanded',
        String(!isOpen)
      );

      navToggle.setAttribute(
        'aria-label',
        isOpen
          ? 'Open navigation menu'
          : 'Close navigation menu'
      );

      navMenu.classList.toggle(
        'is-open',
        !isOpen
      );

    });


    navMenu
      .querySelectorAll('a')
      .forEach(link => {

        link.addEventListener(
          'click',
          closeMenu
        );

      });


    document.addEventListener(
      'keydown',
      event => {

        if (event.key === 'Escape') {
          closeMenu();
        }

      }
    );

  }


  /* =========================================================
     REDUCED MOTION
     ========================================================= */

  const reduceMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;


  /* =========================================================
     REVEAL ON SCROLL
     ========================================================= */

  const revealItems =
    document.querySelectorAll('.reveal');


  if (
    reduceMotion ||
    !('IntersectionObserver' in window)
  ) {

    revealItems.forEach(item => {
      item.classList.add('is-visible');
    });

  } else {

    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                'is-visible'
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },

        {
          threshold: 0.12,
          rootMargin:
            '0px 0px -30px 0px'
        }

      );


    revealItems.forEach(item => {
      observer.observe(item);
    });

  }


  /* =========================================================
     ROTATING HERO PHRASE
     ========================================================= */

  const phrase =
    document.querySelector('.phrase');


  if (
    phrase &&
    !reduceMotion
  ) {

    let phrases = [];


    try {

      phrases =
        JSON.parse(
          phrase.dataset.phrases || '[]'
        );

    } catch (_) {

      phrases = [];

    }


    if (phrases.length > 1) {

      let phraseIndex = 0;


      window.setInterval(() => {

        phrase.animate(

          [
            {
              opacity: 1,
              transform:
                'translateY(0)'
            },

            {
              opacity: 0,
              transform:
                'translateY(-8px)'
            }
          ],

          {
            duration: 180,
            fill: 'forwards',
            easing: 'ease'
          }

        ).finished.then(() => {

          phraseIndex =
            (phraseIndex + 1) %
            phrases.length;


          phrase.textContent =
            phrases[phraseIndex];


          phrase.animate(

            [
              {
                opacity: 0,
                transform:
                  'translateY(8px)'
              },

              {
                opacity: 1,
                transform:
                  'translateY(0)'
              }
            ],

            {
              duration: 220,
              fill: 'forwards',
              easing: 'ease'
            }

          );

        });

      }, 2600);

    }

  }


  /* =========================================================
     HOMEPAGE SLIDESHOW
     ========================================================= */

  const slideshow =
    document.querySelector(
      '.hero-showcase'
    );


  if (slideshow) {

    const slides =
      Array.from(
        slideshow.querySelectorAll(
          '.showcase-slide'
        )
      );


    const currentCounter =
      slideshow.querySelector(
        '[data-showcase-current]'
      );


    const previousButton =
      slideshow.querySelector(
        '[data-showcase-prev]'
      );


    const nextButton =
      slideshow.querySelector(
        '[data-showcase-next]'
      );


    /*
       Change this value to control
       slideshow speed.

       4000 = 4 seconds
       5000 = 5 seconds
       etc.
    */

    const SLIDE_TIME = 5000;


    let currentSlide = 0;

    let slideInterval = null;

    let isHovered = false;

    let hasFocus = false;


    /* -------------------------------------------------------
       SHOW SPECIFIC SLIDE
       ------------------------------------------------------- */

    const showSlide = index => {

      if (!slides.length) {
        return;
      }


      currentSlide =
        (
          index +
          slides.length
        ) %
        slides.length;


      slides.forEach(
        (slide, slideIndex) => {

          const isActive =
            slideIndex === currentSlide;


          slide.classList.toggle(
            'is-active',
            isActive
          );


          slide.setAttribute(
            'aria-hidden',
            String(!isActive)
          );

        }
      );


      if (currentCounter) {

        currentCounter.textContent =
          String(
            currentSlide + 1
          ).padStart(
            2,
            '0'
          );

      }

    };


    /* -------------------------------------------------------
       NEXT / PREVIOUS
       ------------------------------------------------------- */

    const nextSlide = () => {

      showSlide(
        currentSlide + 1
      );

    };


    const previousSlide = () => {

      showSlide(
        currentSlide - 1
      );

    };


    /* -------------------------------------------------------
       STOP AUTOPLAY
       ------------------------------------------------------- */

    const stopAutoplay = () => {

      if (slideInterval) {

        window.clearInterval(
          slideInterval
        );

        slideInterval = null;

      }

    };


    /* -------------------------------------------------------
       START AUTOPLAY
       ------------------------------------------------------- */

    const startAutoplay = () => {

      /*
         Do not autoplay when:

         - reduced motion is enabled
         - mouse is over slideshow
         - slideshow has keyboard focus
         - browser tab is hidden
         - there is only one slide
      */

      if (
        reduceMotion ||
        isHovered ||
        hasFocus ||
        document.hidden ||
        slides.length <= 1
      ) {

        return;

      }


      stopAutoplay();


      slideInterval =
        window.setInterval(
          nextSlide,
          SLIDE_TIME
        );

    };


    /* -------------------------------------------------------
       RESET TIMER AFTER MANUAL NAVIGATION
       ------------------------------------------------------- */

    const restartAutoplay = () => {

      stopAutoplay();

      startAutoplay();

    };


    /* -------------------------------------------------------
       BUTTONS
       ------------------------------------------------------- */

    if (previousButton) {

      previousButton.addEventListener(
        'click',
        () => {

          previousSlide();

          restartAutoplay();

        }
      );

    }


    if (nextButton) {

      nextButton.addEventListener(
        'click',
        () => {

          nextSlide();

          restartAutoplay();

        }
      );

    }


    /* =======================================================
       PAUSE WHEN MOUSE IS OVER SLIDESHOW
       ======================================================= */

    slideshow.addEventListener(
      'mouseenter',
      () => {

        isHovered = true;

        stopAutoplay();

      }
    );


    slideshow.addEventListener(
      'mouseleave',
      () => {

        isHovered = false;

        startAutoplay();

      }
    );


    /* =======================================================
       ALSO PAUSE FOR KEYBOARD USERS
       ======================================================= */

    slideshow.addEventListener(
      'focusin',
      () => {

        hasFocus = true;

        stopAutoplay();

      }
    );


    slideshow.addEventListener(
      'focusout',
      event => {

        /*
           Only resume when focus has
           completely left the slideshow.
        */

        if (
          !slideshow.contains(
            event.relatedTarget
          )
        ) {

          hasFocus = false;

          startAutoplay();

        }

      }
    );


    /* -------------------------------------------------------
       KEYBOARD ARROWS
       ------------------------------------------------------- */

    slideshow.addEventListener(
      'keydown',
      event => {

        if (event.key === 'ArrowLeft') {

          event.preventDefault();

          previousSlide();

        }


        if (event.key === 'ArrowRight') {

          event.preventDefault();

          nextSlide();

        }

      }
    );


    /* -------------------------------------------------------
       PAUSE WHEN TAB IS HIDDEN
       ------------------------------------------------------- */

    document.addEventListener(
      'visibilitychange',
      () => {

        if (document.hidden) {

          stopAutoplay();

        } else {

          startAutoplay();

        }

      }
    );


    /* -------------------------------------------------------
       INITIAL STATE
       ------------------------------------------------------- */

    showSlide(0);

    startAutoplay();

  }

})();
