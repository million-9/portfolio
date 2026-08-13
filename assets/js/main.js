document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const navToggle =
      document.querySelector(
        ".nav-toggle"
      );

    const navMenu =
      document.querySelector(
        ".nav-menu"
      );


    if (
      navToggle &&
      navMenu
    ) {


      function closeMenu() {

        navMenu.classList.remove(
          "is-open"
        );

        navToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        navToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

      }



      navToggle.addEventListener(
        "click",
        function () {

          const isOpen =
            navToggle.getAttribute(
              "aria-expanded"
            ) === "true";


          navToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
          );


          navToggle.setAttribute(
            "aria-label",
            isOpen
              ? "Open navigation menu"
              : "Close navigation menu"
          );


          navMenu.classList.toggle(
            "is-open",
            !isOpen
          );

        }
      );



      navMenu
        .querySelectorAll("a")
        .forEach(
          function (link) {

            link.addEventListener(
              "click",
              closeMenu
            );

          }
        );



      document.addEventListener(
        "keydown",
        function (event) {

          if (
            event.key === "Escape"
          ) {

            closeMenu();

          }

        }
      );

    }



    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;



    /* =====================================================
       REVEAL ON SCROLL
       ===================================================== */

    const revealItems =
      document.querySelectorAll(
        ".reveal"
      );


    if (
      reduceMotion ||
      !(
        "IntersectionObserver"
        in window
      )
    ) {


      revealItems.forEach(
        function (item) {

          item.classList.add(
            "is-visible"
          );

        }
      );


    } else {


      const observer =
        new IntersectionObserver(
          function (entries) {

            entries.forEach(
              function (entry) {

                if (
                  entry.isIntersecting
                ) {

                  entry.target.classList.add(
                    "is-visible"
                  );

                  observer.unobserve(
                    entry.target
                  );

                }

              }
            );

          },
          {
            threshold:
              0.12,

            rootMargin:
              "0px 0px -30px 0px"
          }
        );


      revealItems.forEach(
        function (item) {

          observer.observe(
            item
          );

        }
      );

    }



    /* =====================================================
       HERO ROTATING PHRASE
       ===================================================== */

    const phrase =
      document.querySelector(
        ".phrase"
      );


    if (
      phrase &&
      !reduceMotion
    ) {


      let phrases =
        [];


      try {

        phrases =
          JSON.parse(
            phrase.dataset.phrases ||
            "[]"
          );

      } catch (_) {

        phrases =
          [];

      }


      if (
        phrases.length > 1
      ) {


        let phraseIndex =
          0;


        window.setInterval(
          function () {


            const fadeOut =
              phrase.animate(
                [
                  {
                    opacity:
                      1,

                    transform:
                      "translateY(0)"
                  },

                  {
                    opacity:
                      0,

                    transform:
                      "translateY(-8px)"
                  }
                ],
                {
                  duration:
                    180,

                  fill:
                    "forwards",

                  easing:
                    "ease"
                }
              );


            fadeOut.finished.then(
              function () {


                phraseIndex =
                  (
                    phraseIndex + 1
                  ) %
                  phrases.length;


                phrase.textContent =
                  phrases[
                    phraseIndex
                  ];


                phrase.animate(
                  [
                    {
                      opacity:
                        0,

                      transform:
                        "translateY(8px)"
                    },

                    {
                      opacity:
                        1,

                      transform:
                        "translateY(0)"
                    }
                  ],
                  {
                    duration:
                      220,

                    fill:
                      "forwards",

                    easing:
                      "ease"
                  }
                );


              }
            );


          },
          2600
        );

      }

    }



    /* =====================================================
       HOME ENGINEERING CAROUSEL
       ===================================================== */

    const slides =
      Array.from(
        document.querySelectorAll(
          ".showcase-slide"
        )
      );


    const counter =
      document.querySelector(
        "[data-showcase-current]"
      );


    const previousButton =
      document.querySelector(
        "[data-showcase-prev]"
      );


    const nextButton =
      document.querySelector(
        "[data-showcase-next]"
      );


    const carousel =
      document.querySelector(
        ".hero-showcase"
      );


    /*
     Other pages use this shared script.
     If there is no homepage carousel,
     simply stop carousel setup here.
    */

    if (
      slides.length === 0
    ) {
      return;
    }



    let currentSlide =
      0;


    let slideshowTimer =
      null;


    /*
     2 seconds per slide.
    */

    const SLIDE_TIME =
      5000;



    /* =====================================================
       SHOW SLIDE
       ===================================================== */

    function showSlide(
      requestedIndex
    ) {


      currentSlide =
        (
          requestedIndex +
          slides.length
        ) %
        slides.length;



      slides.forEach(
        function (
          slide,
          index
        ) {


          const active =
            index ===
            currentSlide;


          slide.classList.toggle(
            "is-active",
            active
          );


          slide.setAttribute(
            "aria-hidden",
            String(!active)
          );


        }
      );



      if (
        counter
      ) {


        counter.textContent =
          String(
            currentSlide + 1
          ).padStart(
            2,
            "0"
          );


      }

    }



    /* =====================================================
       NEXT
       ===================================================== */

    function nextSlide() {

      showSlide(
        currentSlide + 1
      );

    }



    /* =====================================================
       PREVIOUS
       ===================================================== */

    function previousSlide() {

      showSlide(
        currentSlide - 1
      );

    }



    /* =====================================================
       STOP AUTO PLAY
       ===================================================== */

    function stopSlideshow() {


      if (
        slideshowTimer !== null
      ) {


        window.clearInterval(
          slideshowTimer
        );


        slideshowTimer =
          null;


      }

    }



    /* =====================================================
       START AUTO PLAY
       ===================================================== */

    function startSlideshow() {


      stopSlideshow();


      if (
        reduceMotion ||
        slides.length < 2
      ) {
        return;
      }


      slideshowTimer =
        window.setInterval(
          nextSlide,
          SLIDE_TIME
        );

    }



    /* =====================================================
       PREVIOUS BUTTON
       ===================================================== */

    if (
      previousButton
    ) {


      previousButton.addEventListener(
        "click",
        function () {


          previousSlide();

          startSlideshow();


        }
      );

    }



    /* =====================================================
       NEXT BUTTON
       ===================================================== */

    if (
      nextButton
    ) {


      nextButton.addEventListener(
        "click",
        function () {


          nextSlide();

          startSlideshow();


        }
      );

    }



    /* =====================================================
       KEYBOARD CONTROL
       ===================================================== */

    if (
      carousel
    ) {


      carousel.addEventListener(
        "keydown",
        function (event) {


          if (
            event.key ===
            "ArrowRight"
          ) {


            event.preventDefault();

            nextSlide();

            startSlideshow();


          }



          if (
            event.key ===
            "ArrowLeft"
          ) {


            event.preventDefault();

            previousSlide();

            startSlideshow();


          }


        }
      );

    }



    /* =====================================================
       TAB VISIBILITY
       ===================================================== */

    document.addEventListener(
      "visibilitychange",
      function () {


        if (
          document.hidden
        ) {


          stopSlideshow();


        } else {


          startSlideshow();


        }


      }
    );



    /* =====================================================
       PREPARE IMAGES
       ===================================================== */

    slides.forEach(
      function (slide) {


        const image =
          slide.querySelector(
            "img"
          );


        if (
          !image
        ) {
          return;
        }


        image.loading =
          "eager";


        image.decoding =
          "async";


      }
    );



    /* =====================================================
       INITIALISE
       ===================================================== */

    showSlide(0);

    startSlideshow();


  }
);
