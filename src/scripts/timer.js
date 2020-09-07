$(function () {
  var blockTop = $('.timer__list').offset().top;
  var CountUpFlag = 0;
  var $window = $(window);
  $window.on('load scroll', function () {
    var top = $window.scrollTop();
    var height = $window.height();
    if (top + height >= blockTop && CountUpFlag == 0) {
      CountUp();
      CountUpFlag = 1;
    }
  });
  function CountUp() {

 

    $(function () {

      $({ numberValue: 0 }).animate({ numberValue: 20 }, {

        duration: 1300, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",

        step: function (val) {

          $(".timer__number-20").html(Math.ceil(val));

        }

      });

    });
    $(function () {

      $({ numberValue: 0 }).animate({ numberValue: 18 }, {

        duration: 1300, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",

        step: function (val) {

          $(".timer__number-18").html(Math.ceil(val));

        }

      });

    });
    $(function () {

      $({ numberValue: 0 }).animate({ numberValue: 24 }, {

        duration: 1300, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",

        step: function (val) {

          $(".timer__number-24").html(Math.ceil(val));

        }

      });

    });
    $(function () {

      $({ numberValue: 0 }).animate({ numberValue: 31 }, {

        duration: 1300, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",

        step: function (val) {

          $(".timer__number-31").html(Math.ceil(val));

        }

      });

    });

  }
});
