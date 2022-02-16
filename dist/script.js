(function () {
  emailjs.init("user_K5XZXYFal24z6Fqcdc9uO");
})();

$(document).ready(function () {
  $(".animate").hover(
    function () {
      $(this).animate({
        height: "+=5px",
        width: "+=5px",
      });
    },
    function () {
      $(this).animate({
        height: "-=5px",
        width: "-=5px",
      });
    }
  );
});

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_waevsdx", "template_y2dl8ob", this).then(
        () => {
          alert("SUCCESS!");
        },
        (err) => {
          console.log(err);
          alert("FAILED...");
        }
      );
    });
};
