$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, // 1000ms is 1 sec... //
  autoplayHoverPause: true,
  responsive: {
    1200: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: false,
    },
    800: {
      items: 1,
      nav: false,
    },
    500: {
      items: 1,
      nav: false,
    },
    400: {
      items: 1,
      nav: false,
    },
    200: {
      items: 1,
      nav: false,
    },
  },
});

//  Btn Functions Written soon...

let responsBtn = document.querySelector(".btn-res-pon");
let responBtnClick = "none";

responsBtn.addEventListener("click", () => {
  if (responBtnClick === "none") {
    responBtnClick = "block";
    document.querySelector(".nav_list").style.display = "block";
  } else {
    responBtnClick = "none";
    document.querySelector(".nav_list").style.display = "none";
  }
});
