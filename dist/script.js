window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let send = document.getElementById("send");
      let sending = document.getElementById("sending");
      let readyToSend = document.getElementById("ready-to-send");
      let sent = document.getElementById("sent");
      // document.getElementByID("send").classList.add("")
      send.disabled = true;
      send.classList.add("sending");
      sending.classList.remove("hidden");
      readyToSend.classList.add("hidden");
      emailjs.sendForm("service_waevsdx", "template_y2dl8ob", this).then(
        () => {
          send.classList.remove("sending");
          sending.classList.add("hidden");
          sent.classList.remove("hidden");
          send.classList.remove("hover:bg-slate-500");
        },
        (err) => {
          console.log(err);
          send.disabled = false;
          send.classList.remove("sending");
          sending.classList.add("hidden");
          readyToSend.classList.remove("hidden");
        }
      );
    });
};
