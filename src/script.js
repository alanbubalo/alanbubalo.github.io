(function () {
  emailjs.init("user_K5XZXYFal24z6Fqcdc9uO");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const sendButton = document.getElementById("send-button");
      const sending = document.getElementById("sending");
      const readyToSend = document.getElementById("ready-to-send");
      const sent = document.getElementById("sent");
      const form = {
        from_name: `${document.getElementById("from-name").value} (${
          document.getElementById("email").value
        })`,
        message: `${document.getElementById("message").value}`,
      };
      // Sending
      sendButton.disabled = true;
      sendButton.classList.add("sending");
      sending.classList.remove("hidden");
      readyToSend.classList.add("hidden");
      emailjs.send("service_waevsdx", "template_y2dl8ob", form).then(
        (response) => {
          // Success, Sent
          sendButton.classList.remove("sending");
          sendButton.classList.remove("hover:bg-slate-500");
          sending.classList.add("hidden");
          sent.classList.remove("hidden");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          // Failed, Ready to Send
          console.log(err);
          sendButton.disabled = false;
          sendButton.classList.remove("sending");
          sending.classList.add("hidden");
          readyToSend.classList.remove("hidden");
        },
      );
    });
};
