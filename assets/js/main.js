
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
  
  
  
  
  
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
  
  
    /**
     * Clients Slider
     */
    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });
  
    
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
  })()

  document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        const currentScrollPos = window.pageYOffset;
        const scrollDifference = currentScrollPos - prevScrollPos;

        if (scrollDifference > 0 && currentScrollPos > 70) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        }

        prevScrollPos = currentScrollPos;
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector('.toggle');
    const menuToggle = document.querySelector('.menu');
    const navLis = document.querySelectorAll('.navList');

    toggler.addEventListener('click', function () {
        toggler.classList.toggle('is-active');
        menuToggle.classList.toggle('active');
    });

    navLis.forEach(navLi => {
        navLi.addEventListener("click", function () {
            toggler.classList.remove('is-active');
            menuToggle.classList.remove('active');
        });
    });

    // Close the menu when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !toggler.contains(event.target)) {
            toggler.classList.remove('is-active');
            menuToggle.classList.remove('active');
        }
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    let accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        let heading = accordion.querySelector(".accordion-heading");
        let icon = heading.querySelector(".icon");
        let content = accordion.querySelector(".accordion-content");

        heading.addEventListener("click", function () {
            accordions.forEach((otherAccordion) => {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove("active");
                    otherAccordion.querySelector(".accordion-heading").classList.remove("active");
                    otherAccordion.querySelector(".accordion-content").classList.remove("active");
                    otherAccordion.querySelector(".icon").classList.remove("active");
                    otherAccordion.querySelector(".icon").classList.replace("bx-minus", "bx-plus");
                }
            });

            heading.classList.toggle("active");
            accordion.classList.toggle("active");
            content.classList.toggle("active");
            icon.classList.toggle("active");
            icon.classList.toggle("bx-minus");
            icon.classList.toggle("bx-plus");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");

  bookingForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission

      const formData = new FormData(bookingForm);

      // Convert form data to an object
      const formDataObject = {};
      formData.forEach((value, key) => {
          formDataObject[key] = value;
      });

      // Send the form data to the server via an API or AJAX request
      fetch("/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
      })
      .then(response => response.json())
      .then(data => {
          console.log(data); // Handle the response from the server
          // Optionally, you can redirect to a thank you page or perform other actions.
      })
      .catch(error => {
          console.error(error); // Handle any errors
      });
  });
});

  $('.form-control').each(function () {
    floatedLabel($(this));
  });

  $('.form-control').on('input', function () {
    floatedLabel($(this));
  });

  function floatedLabel(input) {
    var $field = input.closest('.form-group');
    if (input.val()) {
      $field.addClass('input-not-empty');
    } else {
      $field.removeClass('input-not-empty');
    }
  }

    const header = document.querySelector("header");
      window.addEventListener("scroll",function(){
          header.classList.toggle("sticky",window.scrollY > 0);
      })
        var checkSection = function checkSection() {
          $('.section').each(function () {
            var
            $this = $(this),
            topEdge = $this.offset().top - 80,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
            if (topEdge < wScroll && bottomEdge > wScroll) {
              var
              currentId = $this.data('section'),
              reqLink = $('a').filter('[href*=\\#' + currentId + ']');
              reqLink.closest('li').addClass('active').
              siblings().removeClass('active');
            }
          });
        };
        $('.main-menu, .responsive-menu, .scroll-to-section').on('click', 'a', function (e) {
          e.preventDefault();
          showSection($(this).attr('href'), true);
        });

        $(window).scroll(function () {
          checkSection();
        });