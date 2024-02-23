//FORM SUBMISSION
let inputName = document.getElementById("name-input");
let inputEmail = document.getElementById("email-input");
let inputMessage = document.getElementById("message-input");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("#form");

async function submitForm() {
  const url = await fetch("https://portfolio-script.onrender.com/script");
  const script = await url.json();
  const res = await fetch("https://api.country.is");
  const data = await res.json();
  const countryName = data.country;
  const requestBody = new FormData(form);
  requestBody.append("Country", countryName);
  fetch(script.url, { method: "POST", body: requestBody })
    .then((response) => {
      alert(
        "I have receved your message and I will respond shortly!",
        response
      );
      submitButton.disabled = false;
      sentMessage();
    })
    .catch((error) => {
      alert("Error!", error.message);
      submitButton.disabled = false;
    });
}

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;

  e.preventDefault();

  sendingMessage();
  submitForm();
});

let sendingMessage = function () {
  submitButton.innerText = "SENDING...";
};

let sentMessage = function () {
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
  submitButton.innerText = "SEND MESSAGE";
};

// SECTION NAVIGATION
const contactBtn = document.querySelector(".contact-link");
const projectsBtn = document.querySelector(".projects-link");
const videosBtn = document.querySelector(".videos-link");
const contactSection = document.querySelector("#contact");
const projectSection = document.querySelector("#projects");
const videoSection = document.querySelector("#videos");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" });
});

projectsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectSection.scrollIntoView({ behavior: "smooth" });
});

videosBtn.addEventListener("click", (e) => {
  e.preventDefault();
  videoSection.scrollIntoView({ behavior: "smooth" });
});

//BACK TO TOP
const topSection = document.querySelector("header");
const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > document.documentElement.clientHeight) {
    toTopBtn.style.display = "grid";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  topSection.scrollIntoView({ behavior: "smooth" });
});
