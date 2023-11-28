export default class SlickSlider1 {

    constructor () {
      this.$this = $('.mod-banner-3')
    }
    init () {
      if (this.$this.length) {
        this.addSlick()
      }
    }
    addSlick (){
      this.$this.find('.sliderss').slick({
        'slidesToShow': 3,
        variableWidth:true,
        arrows: true,
        prevArrow: '<button class="slicks-prev arrows  text-blue-400"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slicks-next arrows  text-blue-400"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
        dots: true,
        dotsClass:'slick-dotss',
        responsive: [
            {
            breakpoint: 767,
            settings: {
                'slidesToShow': 2,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: false

            }
            
        },
        {
          breakpoint:430,
          settings: {
              'slidesToShow': 1,
              slidesToScroll: 1,
              infinite: true,
              variableWidth: true

          }

      } 
    ]      
});
    }
}
new SlickSlider1().init()

  
  
  
  
  