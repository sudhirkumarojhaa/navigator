const $headerTop = $('.header-top');

$('#fullPage').fullpage({
  // sectionsColor: ['#000', '#000', '#000', '#000'],
  lockAnchors: true,
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  fadingEffect: true,
  slidesNavigation: true,
  scrollHorizontally: true,
  scrollingSpeed: 1000,
  navigationPosition: 'right',
  fitToSection: true,
  loopHorizontal: true,
  controlArrows: true,
  anchors: [
    'firstSection',
    'secondSection',
    'thirdSection',
    'fourthSection',
    'fifthSection',
    'sixthSection',
    'seventhSection',
  ],

  afterLoad(anchorLink, index) {
    // $headerTop.css('background', 'rgba(0, 47, 77, .3)');
    if (index == 3 || index == 4 || index == 5 || index == 6) {
      $('#fp-nav').hide();
    } else {
      $('#fp-nav').show();
    }
  },

  onLeave(index, nextIndex, direction) {
    if (index == 7) {
      $('#fp-nav').show();
    }
  },
});
