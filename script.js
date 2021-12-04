const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('nav-close');

const openNavbar = () => {
    document.querySelector('.header .navbar').classList.add('active')
}

const closeMenu = () => {
    document.querySelector('.header .navbar').classList.toggle('active')
}

//Opens mobile menu
menuBtn.addEventListener('click', openNavbar)

//Closes the menu
menuClose.addEventListener('click', closeMenu)

const searchForm = document.querySelector('.search-form');
const searchBtn = document.getElementById('search-btn');
const closeSearch = document.getElementById('close-search');

const openSearchForm = () => {
   searchForm.classList.add('active')
}

const closeSearchForm = () => {
    searchForm.classList.toggle('active')
}
searchBtn.addEventListener('click', openSearchForm)
closeSearch.addEventListener('click', closeSearchForm)


window.onscroll = () => {
    document.querySelector('.header .navbar').classList.remove('active')

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }
}


window.onload = () => {
    // openNavbar.classList.toggle('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }
}


let swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let swiper1 = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
  });

  let swiper2 = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
  });

  let swiper3 = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  let swiper4 = new Swiper(".clients-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
  });