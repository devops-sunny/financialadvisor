(function ($) {
  "use strict";

  /*
  |--------------------------------------------------------------------------
  | Template Name: Fingcon
  | Author: Thememarch
  | Version: 1.1
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  | 1. Preloader  
  | 2. Mobile Menu
  | 3. Sticky Header
  | 4. Dynamic Background
  | 5. Swiper Slider Initialization
  | 6. Modal Video
  | 7. Scroll Up
  | 8. Accordion
  | 9. Countdown Timer
  | 10. Title Animation
  | 11. Text Animation FadeUp 
  | 12. Scroll Image Animation
  | 13. Strategic Card Vertical 
  | 14. Video Section ParallaxBg
  | 15. Hover Blog Card Animation
  | 16. Atd Circle 
  | 17. Hover Price Package
  | 18. Container Around
  | 19. Comming Soon Count down
  | 20. Skill Bar
  | 21. Fixed Footer

  */

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

  // Utility function to check element existence
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(function () {
    mainNav();
    stickyHeader();
    dynamicBackground();
    initSwiper();
    modalVideo();
    scrollUp();
    strategicCardContent();
    strategicCardContentHomeTwo()
    textAnimationFadeUp();
    hoverImagesShow();
    funFactCounter();
    scrollTransform();
    parallaxBg();
    initAccordion();
    skillBar();
    packageContent();
    containerAround();
    startCountdown();
  });

  $(window).on("scroll", function () {
    showScrollUp();
  });

  $(window).on("load", function () {
    initPreloader();
    titleAnimation();
    fixedFooter();
    atdCircle();
    atdCircletypeTwo();
  });

  let previousWidth = $(window).width();
  $(window).on("resize", function () {
    let currentWidth = $(window).width();
    if (currentWidth === previousWidth) return;
    titleAnimation();
    fixedFooter();
    previousWidth = currentWidth;
  });

  /*--------------------------------------------------------------
    1. Preloader  
  --------------------------------------------------------------*/
  function initPreloader() {
    if ($.exists(".preloader")) {
      const loadingPercent = document.querySelector(".loading-percent");
      const loadingBorder = document.querySelector(".loading-border");
      const logoImg = document.querySelector(".preloader-text .logo-icon");
      const preloader = document.getElementById("preloader");

      const tl = gsap.timeline({
        onComplete: function () {
          gsap.to(preloader, {
            duration: 1,
            ease: "expo.out",
            transform: "translateY(-100%)",
            onComplete: function () {
              preloader.style.display = "none";
            },
          });
        },
      });

      tl.to(
        loadingPercent,
        {
          innerText: 100,
          duration: 3,
          roundProps: "innerText",
          ease: "power1.inOut",
          onUpdate: function () {
            loadingPercent.innerText =
              Math.floor(this.targets()[0].innerText) + "%";
          },
        },
        0
      );

      tl.to(
        loadingBorder,
        {
          width: "100%",
          duration: 3,
          ease: "power1.inOut",
        },
        0
      );

      gsap.fromTo(
        logoImg,
        { rotationY: 0 },
        {
          rotationY: 180,
          duration: 1,
          ease: "linear",
          repeat: -1,
          yoyo: true,
          transformOrigin: "50% 50%",
        }
      );
    }
  }

  /*--------------------------------------------------------------
    2. Mobile Menu  
  --------------------------------------------------------------*/
  function mainNav() {
    $(".ak-nav").append('<span class="ak-munu_toggle"><span></span></span>');
    $(".menu-item-has-children").append(
      '<span class="ak-munu_dropdown_toggle"></span>'
    );

    $(".ak-munu_toggle").on("click", function () {
      $(this)
        .toggleClass("ak-toggle_active")
        .siblings(".ak-nav_list")
        .slideToggle();
    });

    $(".ak-munu_dropdown_toggle").on("click", function () {
      $(this)
        .toggleClass("active")
        .siblings("ul")
        .slideToggle()
        .parent()
        .toggleClass("active");
    });

    $(".menu-item-has-black-section").append(
      '<span class="ak-munu_dropdown_toggle_1"></span>'
    );

    $(".ak-munu_dropdown_toggle_1").on("click", function () {
      $(this)
        .toggleClass("active")
        .siblings("ul")
        .slideToggle()
        .parent()
        .toggleClass("active");
    });

    $(".ak-mode_btn").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("ak-dark");
    });

    // Side Nav
    $(".ak-icon_btn").on("click", function () {
      $(".ak-side_header").addClass("active");
    });

    $(".ak-close, .ak-side_header_overlay").on("click", function () {
      $(".ak-side_header").removeClass("active");
    });

    // Menu Text Split
    $(".ak-animo_links > li > a").each(function () {
      const letters = $(this).html().split("").join("</span><span>");
      $(this).html(
        `<span class="ak-animo_text"><span>${letters}</span></span>`
      );
    });
  }

  /*--------------------------------------------------------------
    3. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    if ($.exists(".ak-site_header")) {
      var $window = $(window);
      var lastScrollTop = 0;
      var $header = $(".ak-sticky_header");
      var headerHeight = $header.outerHeight() + 30;

      $(window).on("scroll", function () {
        var windowTop = $window.scrollTop();

        if (windowTop >= headerHeight) {
          $header.addClass("ak-gescout_sticky");
        } else {
          $header.removeClass("ak-gescout_sticky");
          $header.removeClass("ak-gescout_show");
        }

        if ($header.hasClass("ak-gescout_sticky")) {
          if (windowTop < lastScrollTop) {
            $header.addClass("ak-gescout_show");
          } else {
            $header.removeClass("ak-gescout_show");
          }
        }

        lastScrollTop = windowTop;
      });
    }
  }

  /*--------------------------------------------------------------
    4. Dynamic Background
  --------------------------------------------------------------*/
  function dynamicBackground() {
    $("[data-src]").each(function () {
      const src = $(this).attr("data-src");
      $(this).css("background-image", `url(${src})`);
    });
  }

  /*--------------------------------------------------------------
    5. Swiper Slider Initialization
  --------------------------------------------------------------*/
  function initSwiper() {
    if ($.exists(".ak-slider-hero-1")) {
      const swiper = new Swiper(".ak-slider-hero-1", {
        loop: true,
        speed: 1500,
        autoplay: false,
        slidesPerView: 1,
        effect: "fade",
        runCallbacksOnInit: true,
        zoom: {
          maxRatio: 1.2,
          minRation: 1,
        },
      });
    }
    if ($.exists(".ak-slider-hero-2")) {
      const swiper = new Swiper(".ak-slider-hero-2", {
        loop: true,
        speed: 1500,
        autoplay: false,
        slidesPerView: 1,
        runCallbacksOnInit: true,
        parallax: true,
        zoom: {
          maxRatio: 1.2,
          minRation: 1,
        },
        navigation: {
          nextEl: ".hero-two-next-btn",
          prevEl: ".hero-two-prev-btn",
        },
      });
    }
    if ($.exists(".ak-slider-hero-3")) {
      const swiper = new Swiper(".ak-slider-hero-3", {
        loop: true,
        speed: 1500,
        autoplay: false,
        slidesPerView: 1,
        runCallbacksOnInit: true,
        effect: "fade",
        zoom: {
          maxRatio: 2, // Zoom effect
        },
        on: {
          slideChange: function () {
            gsap.fromTo('.swiper-slide-active .ak-hero-bg',
              { autoAlpha: 0, y: 200 },
              { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.2 }
            );
          }
        }
      });
      gsap.fromTo('.swiper-slide-active .ak-hero-bg',
        { autoAlpha: 0, y: 200 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.2 }
      );
    }
    if ($.exists(".ak-slider-service")) {
      const swiper = new Swiper(".ak-slider-service", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 15,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".service-next-btn",
          prevEl: ".service-prev-btn",
        },
      });
    }
    if ($.exists(".ak-team-slider")) {
      const swiper = new Swiper(".ak-team-slider", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 15,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".service-next-btn",
          prevEl: ".service-prev-btn",
        },
      });
    }
    if ($.exists(".ak-projects-slider.home-two")) {
      const swiper = new Swiper(".ak-projects-slider.home-two", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 15,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".project-next-btn",
          prevEl: ".project-prev-btn",
        },
      });
    }
    if ($.exists(".ak-projects-slider.home-three")) {
      const swiper = new Swiper(".ak-projects-slider.home-three", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 15,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".project-next-btn",
          prevEl: ".project-prev-btn",
        },
      });
    }
    if ($.exists(".ht-testimonial-slider")) {
      const swiper = new Swiper(".ht-testimonial-slider", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 15,
        slidesPerView: 1,
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".tc-home-two",
          prevEl: ".tc-home-two.prev",
        },
      });
    }
    if ($.exists(".ak-slider-testmonial")) {
      const swiper = new Swiper(".ak-slider-testmonial", {
        loop: true,
        speed: 700,
        autoplay: false,
        parallax: true,
        effect: "creative",
        slidesPerView: "auto",
        creativeEffect: {
          prev: {
            shadow: false,
            translate: [0, 0, -200],
          },
          next: {
            translate: [0, 0, 100],
          },
        },
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".testmonial-next-btn",
          prevEl: ".testmonial-prev-btn",
        },
      });
    }
    if ($.exists(".img-previews-slider")) {
      const swiper = new Swiper(".img-previews-slider", {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: "auto",
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 1],
          },
        },
      });
    }
    if ($.exists(".strategic-slider")) {
      const swiper = new Swiper(".strategic-slider", {
        loop: true,
        speed: 700,
        autoplay: false,
        parallax: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            opacity: 0,
            shadow: false,
            translate: [0, 0, -200],
          },
          next: {
            translate: [0, 0, 200],
            opacity: 0,
          },
          current: {
            translate: [0, 0, 0],
            opacity: 1,
          },
        },
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".strategic-next-btn",
          prevEl: ".strategic-prev-btn",
        },
        on: {
          init: function () {
            document.querySelector(".strategic-total-slides").textContent =
              this.slides.length - this.loopedSlides * 2;
            document.querySelector(".strategic-current-slide").textContent =
              this.realIndex + 1;
          },
          slideChange: function () {
            document.querySelector(".strategic-current-slide").textContent =
              this.realIndex + 1;
          },
        },
      });
    }
    if ($.exists(".ak-slider-client-logo")) {
      const swiper = new Swiper(".ak-slider-client-logo", {
        loop: true,
        speed: 1000,
        autoplay: true,
        slidesPerView: "auto",
      });
    }
  }

  /*--------------------------------------------------------------
    6. Modal Video
  --------------------------------------------------------------*/
  function modalVideo() {
    $(".ak-video-section").on("click", ".ak-video-open", function (e) {
      e.preventDefault();
      const videoId = $(this).attr("href").split("?v=")[1].trim();
      $(".ak-video-popup-container iframe").attr(
        "src",
        `https://www.youtube.com/embed/${videoId}`
      );
      $(".ak-video-popup").addClass("active");
    });

    $(".ak-video-popup-close, .ak-video-popup-layer").on("click", function (e) {
      e.preventDefault();
      $(".ak-video-popup").removeClass("active");
      $("html").removeClass("overflow-hidden");
      $(".ak-video-popup-container iframe").attr("src", "about:blank");
    });
  }

  /*--------------------------------------------------------------
    7. Scroll Up
  --------------------------------------------------------------*/
  function scrollUp() {
    $(".ak-scrollup").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 0);
    });
  }

  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".ak-scrollup").addClass("ak-scrollup-show");
    } else {
      $(".ak-scrollup").removeClass("ak-scrollup-show");
    }
  }

  /*--------------------------------------------------------------
    8. Accordion
  --------------------------------------------------------------*/
  function initAccordion() {
    if ($.exists(".ak-accordion-item")) {
      $(".ak-accordion-title-content").on("click", function () {
        $(this).toggleClass("active");
        $(this)
          .next(".ak-accordion-tab")
          .slideToggle()
          .parent()
          .siblings()
          .find(".ak-accordion-tab")
          .slideUp()
          .prev()
          .removeClass("active");
      });
    }
  }

  /*--------------------------------------------------------------
    9. Countdown Timer
  --------------------------------------------------------------*/
  function funFactCounter() {
    if ($.exists(".funfact.style1")) {
      const count_number = gsap.utils.toArray(".funfact.style1");
      const count_id = gsap.utils.toArray(".counter");
      count_id.forEach((num) => {
        gsap.from(num, {
          scrollTrigger: {
            trigger: count_number,
            start: "top center+=200",
            markers: false,
          },
          delay: 0.3,
          innerText: 0,
          duration: 3,
          snap: {
            innerText: 1,
          },
        });
      });

      gsap.from(count_number, {
        scrollTrigger: {
          trigger: count_number,
          start: "top center+=200",
          markers: false,
        },
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        ease: "elastic",
        force3D: true,
      });
    }
  }

  /*--------------------------------------------------------------
    10. Title Animation
  --------------------------------------------------------------*/
  function titleAnimation() {
    if ($.exists(".animation-title")) {
      const quotes = gsap.utils.toArray(".animation-title");
      if (quotes.length > 0) {
        quotes.forEach((quote) => {
          if (quote.animation) {
            quote.animation.progress(1).kill();
            quote.split.revert();
          }

          quote.split = new SplitText(quote, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });

          gsap.set(quote, { perspective: 400 });

          // Responsive settings
          const baseDuration = window.innerWidth > 768 ? 1 : 0.8;
          const baseStagger = window.innerWidth > 768 ? 0.02 : 0.04;

          // Set up the from and to states with ScrollTrigger
          quote.animation = gsap.fromTo(
            quote.split.chars,
            {
              opacity: 0,
              x: "50",
            },
            {
              opacity: 1,
              x: "0",
              duration: baseDuration,
              ease: "back.out(1.7)",
              stagger: baseStagger,
              scrollTrigger: {
                trigger: quote,
                start: "top 80%",
                end: "top 50%",
                scrub: false,
                markers: false,
              },
            }
          );
        });
      }
    }
  }

  /*--------------------------------------------------------------
  11. Text Animation FadeUp 
--------------------------------------------------------------*/
  function textAnimationFadeUp() {
    if ($.exists(".title-anim")) {
      const quotes = gsap.utils.toArray(".title-anim");
      quotes.forEach((quote) => {
        if (quote.animation) {
          quote.animation.progress(1).kill();
          quote.split.revert();
        }

        quote.split = new SplitText(quote, {
          type: "lines,words,chars",
        });

        gsap.set(quote, { overflow: "hidden" });

        quote.animation = gsap.from(quote.split.lines, {
          scrollTrigger: {
            trigger: quote,
            markers: false,
            start: "top 80%",
          },
          duration: 0.5,
          y: 100,
          autoAlpha: 0,
          stagger: {
            from: "start",
            amount: 0.2,
            ease: Quint.easeOut,
          },
        });
      });
    }
  }

  /*--------------------------------------------------------------
  12. Scroll Image Animation
--------------------------------------------------------------*/
  function scrollTransform() {
    if ($.exists(".image-content")) {
      const images = gsap.utils.toArray(".about-img-1");
      const imagesTwo = gsap.utils.toArray(".about-img-2");

      if (images.length === 0 && imagesTwo.length === 0) return;

      const scrollTriggerConfig = {
        trigger: ".image-content",
        start: "top 80%",
        end: "bottom 0%",
        markers: false,
        scrub: 1,
        toggleActions: "play reverse play reverse",
      };

      function aboutImganim(dets) {
        const direction = dets.deltaY > 0 ? 1 : -1;

        gsap.to(images, {
          scrollTrigger: scrollTriggerConfig,
          y: direction > 0 ? 15 : 0,
          duration: 1.5,
          ease: "power1.out",
        });

        gsap.to(imagesTwo, {
          scrollTrigger: scrollTriggerConfig,
          y: direction > 0 ? -15 : 0,
          x: direction > 0 ? -15 : 0,
          duration: 1.5,
          ease: "power1.out",
        });
      }
      document.addEventListener("wheel", aboutImganim, { passive: true });
    }
  }

  /*--------------------------------------------------------------
  13. Strategic Card Vertical 
--------------------------------------------------------------*/
  function strategicCardContent() {
    if ($.exists(".strategic-card-content")) {
      ScrollTrigger.matchMedia({
        "(min-width: 991px)": function () {
          let pbmitpanels = gsap.utils.toArray(
            ".strategic-card-content .strategic"
          );
          if (pbmitpanels.length === 0) return;
          const spacer = 0;
          let pbmitheight = pbmitpanels[0].offsetHeight + 125;
          pbmitpanels.forEach((pbmitpanel) => {
            ScrollTrigger.create({
              trigger: pbmitpanel,
              start: () => "top 125px",
              endTrigger: ".strategic-card-content",
              end: `bottom top+=${pbmitheight + pbmitpanels.length * spacer}`,
              pin: true,
              pinSpacing: false,
              onEnter: () => gsap.to(pbmitpanel, { scale: 1, duration: 0.5 }),
              onLeaveBack: () =>
                gsap.to(pbmitpanel, { scale: 0.95, duration: 0.5 }),
            });
          });
          let lastPanel = pbmitpanels[pbmitpanels.length - 1];
          lastPanel.classList.add("spacer128");
        },
        "(max-width:991px)": function () {
          ScrollTrigger.getAll().forEach((pbmitpanels) =>
            pbmitpanels.kill(true)
          );
        },
      });
    }
  }

  function strategicCardContentHomeTwo() {
    if ($.exists(".strategic-card-content-home-two")) {
      ScrollTrigger.matchMedia({
        "(min-width: 991px)": function () {
          let pbmitpanels = gsap.utils.toArray(
            ".strategic-card-content-home-two .strategic-anim"
          );
          if (pbmitpanels.length === 0) return;
          const spacer = 0;
          let pbmitheight = pbmitpanels[0].offsetHeight + 125;
          pbmitpanels.forEach((pbmitpanel) => {
            ScrollTrigger.create({
              trigger: pbmitpanel,
              start: () => "top 125px",
              endTrigger: ".strategic-card-content-home-two",
              end: `bottom top+=${pbmitheight + pbmitpanels.length * spacer}`,
              pin: true,
              pinSpacing: false,
              onEnter: () => gsap.to(pbmitpanel, { scale: 1, duration: 0.5 }),
              onLeaveBack: () =>
                gsap.to(pbmitpanel, { scale: 1, duration: 0.5 }),
            });
          });
          let lastPanel = pbmitpanels[pbmitpanels.length - 1];
          lastPanel.classList.add("spacer128");
        },
        "(max-width:991px)": function () {
          ScrollTrigger.getAll().forEach((pbmitpanels) =>
            pbmitpanels.kill(true)
          );
        },
      });
    }
  }

  /*--------------------------------------------------------------
  14. Video Section ParallaxBg
--------------------------------------------------------------*/
  function parallaxBg() {
    if ($.exists(".video-home")) {
      ScrollTrigger.matchMedia({
        "(min-width: 991px)": function () {
          const parallaxBg = gsap.utils.toArray(".parallax-bg");
          if (parallaxBg.length === 0) return;
          parallaxBg.forEach((bg) => {
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: ".video-home",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
            tl.to(bg, { y: -25 }).to(bg, { y: 25 });
          });
        },
      });
    }
  }

  /*--------------------------------------------------------------
  15. Hover Blog Card Animation
--------------------------------------------------------------*/
  function hoverImagesShow() {
    if ($.exists(".blog-card.style-1")) {
      const allElement = gsap.utils.toArray(".blog-card.style-1");

      allElement.forEach((elem) => {
        const imgElem = elem.querySelector("img");
        if (imgElem.length === 0) return;

        if (elem.animation) {
          elem.animation.progress(1).kill();
        }

        elem.addEventListener(
          "mouseenter",
          () =>
          (elem.animation = gsap.to(imgElem, {
            scale: 1,
            opacity: 1,
            ease: "power3.out",
          }))
        );

        elem.addEventListener(
          "mouseleave",
          () =>
          (elem.animation = gsap.to(imgElem, {
            scale: 0.5,
            opacity: 0,
            x: 0,
            y: 0,
            ease: "power3.out",
          }))
        );

        elem.addEventListener("mousemove", (e) => {
          const rect = elem.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / 5;
          const y = (e.clientY - rect.top - rect.height / 2) / 5;

          elem.animation = gsap.to(imgElem, {
            x,
            y,
            ease: "power3.out",
          });
        });
      });
    }
  }

  /*--------------------------------------------------------------
  16. Atd Circle 
--------------------------------------------------------------*/
  function atdCircle() {
    if ($.exists(".atd-circle")) {
      const skills = document.querySelectorAll(".atd-circle");
      skills.forEach((skill) => {
        const percentage = skill.getAttribute("data-percentage");
        const degree = percentage * 3.6;
        skill.style.background = `conic-gradient(#F9D67C 0deg, #e0e0e09a 0deg 360deg)`;
        gsap.to(skill, {
          background: `conic-gradient(#F9D67C ${degree}deg, #e0e0e09a ${degree}deg 360deg)`,
          scrollTrigger: {
            trigger: skill,
            start: "top 90%",
            end: "top 10%",
          },
          delay: 0.5,
          duration: 1,
        });
      });
    }
  }

  function atdCircletypeTwo() {
    if ($.exists(".atd-circle.type-2")) {
      const skills = document.querySelectorAll(".atd-circle.type-2");
      skills.forEach((skill) => {
        const percentage = skill.getAttribute("data-percentage");
        const degree = percentage * 3.6;
        skill.style.background = `conic-gradient(#9FE970 0deg, #e0e0e09a 0deg 360deg)`;
        gsap.to(skill, {
          background: `conic-gradient(#9FE970 ${degree}deg, #e0e0e09a ${degree}deg 360deg)`,
          scrollTrigger: {
            trigger: skill,
            start: "top 90%",
            end: "top 10%",
          },
          delay: 0.5,
          duration: 1,
        });
      });
    }
  }

  /*--------------------------------------------------------------
  17. Hover Price Package
--------------------------------------------------------------*/
  function packageContent() {
    if ($.exists(".package-content")) {
      const packageItems = document.querySelectorAll(
        ".package-content .style2"
      );
      packageItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          packageItems.forEach((item) => {
            item.classList.remove("active");
          });
          this.classList.add("active");
        });
        item.addEventListener("mouseleave", function () {
          packageItems.forEach((item) => {
            console.log(item.className);
            item.classList.remove("active");
          });
          packageItems[1].classList.add("active");
        });
      });
    }
  }

  /*--------------------------------------------------------------
  18. Container Around
--------------------------------------------------------------*/
  function containerAround() {
    if ($.exists("#containerAround")) {
      ScrollTrigger.matchMedia({
        "(min-width: 991px)": function () {
          let pinpontsection = document.getElementById("infoProduto");
          let galeria = document.getElementById("scrollGaleria");
          let section = document.getElementById("containerAround");

          ScrollTrigger.create({
            trigger: section,
            pin: pinpontsection,
            start: "top top+=10",
            end: "bottom top+=" + pinpontsection.clientHeight,
            endTrigger: galeria,
            pinSpacing: false,
          });
        },
      });
    }
  }

  /*--------------------------------------------------------------
  19. Comming Soon Count down
--------------------------------------------------------------*/
  function startCountdown() {
    if ($.exists("#comming-section")) {
      const countdownElements = {
        months: document.getElementById("months"),
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("secound"),
      };

      const targetDate = new Date("2025-08-31T00:00:00").getTime();

      const updateCountdown = () => {
        const timeRemaining = targetDate - new Date().getTime();

        if (timeRemaining <= 0) {
          clearInterval(interval);
          Object.values(countdownElements).forEach((el) => {
            gsap.to(el, {
              textContent: "0",
              duration: 0.5,
              ease: "none",
              snap: { textContent: 1 },
            });
          });
          return;
        }

        const units = {
          months: Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30.44)),
          days: Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24 * 30.44)) /
            (1000 * 60 * 60 * 24)
          ),
          hours: Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
        };

        Object.keys(units).forEach((key) => {
          gsap.to(countdownElements[key], {
            textContent: units[key],
            duration: 0.5,
            ease: "none",
            snap: { textContent: 1 },
          });
        });
      };

      const interval = setInterval(updateCountdown, 1000);
      updateCountdown(); // Initial call
    }
  }

  /*--------------------------------------------------------------
  20. Skill Bar
--------------------------------------------------------------*/
  function skillBar() {
    if ($.exists(".ak-skill-fill")) {
      const skillBars = document.querySelectorAll(".ak-skill-fill");
      skillBars.forEach((skillBar) => {
        const percentage = skillBar.dataset.percentage;

        gsap.to(skillBar, {
          width: `${percentage}%`,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: skillBar,
            start: "top 80%",
          },
        });
      });
    }
  }
  /*--------------------------------------------------------------
  21. Fixed Footer
--------------------------------------------------------------*/
  function fixedFooter() {
    if ($.exists(".ak-footer")) {
      let winWidth = $(window).width() > 1199,
        checkFooter = $(".ak-footer").hasClass("fixed-footer"),
        footerHeight = $(".ak-footer").height();

      if (winWidth && checkFooter) {
        $(".ak-footer").css({
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          width: 100 + "%",
          "z-index": -2,
        });
        $("body").css("margin-bottom", footerHeight);
      } else {
        $(".ak-footer").removeAttr("style");
        $("body").css("margin-bottom", "");
      }
    }
  }
})(jQuery);
