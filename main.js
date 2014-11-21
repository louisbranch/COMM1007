;(function (window, document) {

  function timer() {
    var start = (new Date()).getTime();
    var el = document.getElementById("timer");

    var interval = window.setInterval(function () {
      el.textContent = update();
    }, 1000);

    function update() {
      var now = (new Date()).getTime();
      var elapsed = (now - start) / 1000;
      if (elapsed > 15 * 60) {
        window.clearInterval(interval);
        el.className = "hidden";
      }
      var secs = elapsed % 60;
      var mins = elapsed / 60;
      return format(mins) + ":" + format(secs);
    }

    function format(number) {
      number = Math.floor(number);
      return number < 10 ? "0" + number : number;
    }

  }

  document.getElementById("diabetes-ratio")
    .addEventListener("impress:stepenter", function(){
      window.setTimeout(function () {
        var img = document.getElementById("patient");
        img.src = "imgs/patient.png";
      }, 4000);
    });

  var youtube = document.getElementById("youtube");
  var sugar = document.getElementById("sugar-process");

  sugar.addEventListener("impress:stepenter", function(){
    youtube.src += "&autoplay=1";
  });

  sugar.addEventListener("impress:stepleave", function(){
    youtube.src = youtube.src.replace(/\&autoplay=1/g, "");
  });


  document.getElementById("thank-you").addEventListener("impress:stepenter", function(){
    document.querySelector("#thank-you iframe").src += "&autoplay=1";
  });

  window.impress().init();
  timer();

}(window, document));
