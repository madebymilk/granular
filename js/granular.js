$('header a').on('click', function() {
  console.log('Click')
  var sectionDistance = $('.announcement').offset().top
  console.log(sectionDistance)
  $("body").animate({ scrollTop: sectionDistance}, 1000)
})