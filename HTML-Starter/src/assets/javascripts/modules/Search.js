export default class Search {
    constructor () {
      this.$this = $('mod-HD')
    }
    init() {
      this.showSearchBox();
      this.hiddenSearchBox();
    }
    showSearchBox() {
      $(document).ready(function() {
        $('#icon-search').click(function() {
          $('.icon').hide();
          $('.search-frame').removeClass('hidden');
          $('.search-frame').addClass('flex');
        });
      });
    }
  
    hiddenSearchBox() {
      $(document).ready(function() {
        $('#close-search-box').click(function() {
          $('.search-frame').removeClass('flex');
          $('.search-frame').addClass('hidden');
          $('.icon').show();
        });
      });
    }
  }
  new Search().init()