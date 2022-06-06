$(document).ready(function () {
  const owl = $('.owl-services')

  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  })
  $('#left').click(function () {
    console.log("aqui")
    console.log("aqui")
    owl.trigger('prev.owl.carousel')
  })
  
  $('#right').click(function () {
    console.log("aqui")
    owl.trigger('next.owl.carousel')
  })
  const team = $('.owl-team')
  team.owlCarousel({
    item: 3,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  })
})
