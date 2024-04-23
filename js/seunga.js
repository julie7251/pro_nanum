(function ($) {
    // 햄버거 작동 및 상단 스크롤 기능
    window.onload = function () {
      const header = document.querySelector(".header");
      const mbt = document.querySelector(".mbt");
      const navMb = document.querySelector(".nav-mb");
      const htmlRoot = document.querySelector("html");
      let scy = 0;
  
      mbt.addEventListener("click", function () {
        const state = this.classList.contains("ani");
        if (state) {
          this.classList.remove("ani");
          navMb.classList.remove("active");
          htmlRoot.classList.remove("active");
        } else {
          this.classList.add("ani");
          navMb.classList.add("active");
          htmlRoot.classList.add("active");
        }
      });
    };
  
    // jQuery countTo 플러그인 초기화
    $.fn.countTo = function (options) {
      options = options || {};
  
      return $(this).each(function () {
        var settings = $.extend(
          {},
          $.fn.countTo.defaults,
          {
            from: $(this).data("from"),
            to: $(this).data("to"),
            speed: $(this).data("speed"),
            refreshInterval: $(this).data("refresh-interval"),
            decimals: $(this).data("decimals"),
          },
          options
        );
  
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;
  
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data("countTo") || {};
  
        $self.data("countTo", data);
  
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
  
        render(value);
  
        function updateTimer() {
          value += increment;
          loopCount++;
  
          render(value);
  
          if (typeof settings.onUpdate == "function") {
            settings.onUpdate.call(self, value);
          }
  
          if (loopCount >= loops) {
            $self.removeData("countTo");
            clearInterval(data.interval);
            value = settings.to;
  
            if (typeof settings.onComplete == "function") {
              settings.onComplete.call(self, value);
            }
          }
        }
  
        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };
  
    $.fn.countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1000,
      refreshInterval: 100,
      decimals: 0,
      formatter: formatter,
      onUpdate: null,
      onComplete: null,
    };
  
    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  })(jQuery);
  
  // custom formatting example
  jQuery(function ($) {
    $(".count-number").data("countToOptions", {
      formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      },
    });
  
    $(".timer").each(count);
  
    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
    }
  });
  