/*
(function () {
  emailjs.init("user_K5XZXYFal24z6Fqcdc9uO");
})();
*/
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
      let send = document.getElementById("send");
      let sending = document.getElementById("sending");
      let not_sending = document.getElementById("not_sending");
      let sent = document.getElementById("sent");
      // document.getElementByID("send").classList.add("")
      send.disabled = true;
      send.classList.add("sending");
      sending.classList.remove("hidden");
      not_sending.classList.add("hidden");
      emailjs.sendForm("service_waevsdx", "template_y2dl8ob", this).then(
        () => {
          send.classList.remove("sending");
          sending.classList.add("hidden");
          sent.classList.remove("hidden");
          send.classList.remove("hover:bg-gray-700");
        },
        (err) => {
          console.log(err);
          send.disabled = false;
          send.classList.remove("sending");
          sending.classList.add("hidden");
          not_sending.classList.remove("hidden");
        }
      );
    });
};
