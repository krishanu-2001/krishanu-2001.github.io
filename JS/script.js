const settings = {
  async: true,
  crossDomain: true,
  url: "https://community-open-weather-map.p.rapidapi.com/find?q=delhi&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=metric",
  method: "GET",
  headers: {
    "x-rapidapi-key": "4ab67d69e3msh1809b74148e0d91p1f4bcejsnc240ad06e2f3",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  },
};

function myFunction() {
  setTimeout(function () {
    var element = document.querySelectorAll(".abcd");
    for (let i = 0; i < element.length; i++)
      element[i].classList.toggle("body_class");
    var element = document.querySelectorAll(".abc");
    for (let i = 0; i < element.length; i++)
      element[i].classList.toggle("text_class");
    var element = document.querySelectorAll(".abcde");
    for (let i = 0; i < element.length; i++)
      element[i].classList.toggle("header_class");
    var element = document.querySelectorAll(".navbar-light");
    for (let i = 0; i < element.length; i++)
      element[i].classList.toggle("navbar-dark");
    var element = document.querySelectorAll(".git_id_shift");
    for (let i = 0; i < element.length; i++)
      element[i].classList.toggle("git_id_light_dark");
    var element = document.querySelectorAll(".close_light");
    for (let i = 0; i < element.length; i++)
      element[i].classList.toggle("open_light");
    var element = document.querySelectorAll(".close_dark");
    for (let i = 0; i < element.length; i++)
      element[i].classList.toggle("open_dark");
  }, 400);
}

function copyFunction() {
  //alert()
  var copyText = document.getElementById("copy_text");
  navigator.clipboard
    .writeText(copyText.value)
    .then(() => {
      alert(`Copied! ${copyText.value}`);
    })
    .catch((error) => {
      alert(`Copy failed! ${error}`);
    });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

window.addEventListener(
  "load",
  function () {
    $("#checkbox1").click(myFunction);
    $("#checkbox2").click(myFunction);
    $("#copy-container").click(copyFunction);

    // $.ajax(settings).done(function (response) {
    //   console.log('For detailed weather see console below')
    //   console.log(response)
    //   var weatherApi = response.list[0];
    //   var city = weatherApi.name;
    //   var temp = Math.round(weatherApi.main.temp);
    //   var maxTemp = weatherApi.main.temp_max;
    //   var minTemp = weatherApi.main.temp_min;
    //   var avgTemp = weatherApi.main.feels_like;
    //   var weather = weatherApi.weather[0].icon;
    //   var wind = weatherApi.wind.speed;
    //   document.querySelectorAll("#weather_img")[0].setAttribute("src", `http://openweathermap.org/img/wn/${weather}@2x.png`);
    //   document.querySelectorAll("#weather_temp")[0].innerHTML = temp;
    // });

    // var city = "Delhi";
    // var temp = 38;
    // var maxTemp = 38;
    // var minTemp = 38;
    // var avgTemp = 42.29;
    // var weather = "http://openweathermap.org/img/wn/10n@2x.png";
    // var wind = 3.09;

    // document.querySelectorAll('#weather_img')[0].setAttribute('src', weather);
    // document.querySelectorAll('#weather_temp')[0].innerHTML = temp;

    var slideIndex = 0;
    showSlides();

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change image every 2 seconds
    }
  },
  false
);
