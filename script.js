// =========================
// HERO TEXT ANIMATION
// =========================

const changingText = document.getElementById("changing-text");

const words = [

  "never speak.",
  "stay forever.",
  "change people.",
  "feel invisible.",
  "become stories."

];

let index = 0;

setInterval(() => {

  index++;

  if(index >= words.length){
    index = 0;
  }

  changingText.innerText = words[index];

}, 2500);



// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  if(navLinks.style.display === "flex"){

    navLinks.style.display = "none";

  } else {

    navLinks.style.display = "flex";

    navLinks.style.flexDirection = "column";

    navLinks.style.position = "absolute";

    navLinks.style.top = "80px";

    navLinks.style.right = "8%";

    navLinks.style.padding = "20px";

    navLinks.style.borderRadius = "20px";

    navLinks.style.background = "#07111f";

  }

});



// =========================
// LIKE BUTTON
// =========================

const likeButtons = document.querySelectorAll(".book-icons button:first-child");

likeButtons.forEach(button => {

  button.addEventListener("click", () => {

    if(button.style.background === "rgb(96, 165, 250)"){

      button.style.background = "rgba(255,255,255,0.08)";
      button.style.color = "#fff";

    } else {

      button.style.background = "#60a5fa";
      button.style.color = "#000";

    }

  });

});



// =========================
// SHARE BUTTON
// =========================

const shareButtons = document.querySelectorAll(".book-icons button:nth-child(2)");

shareButtons.forEach(button => {

  button.addEventListener("click", () => {

    navigator.clipboard.writeText(window.location.href);

    alert("Website link copied successfully!");

  });

});
// =========================
// ABOUT POPUP
// =========================

const aboutBtn = document.getElementById("aboutMeBtn");

const aboutPopup = document.getElementById("aboutPopup");

const closePopup = document.getElementById("closePopup");

aboutBtn.addEventListener("click", () => {

  aboutPopup.style.display = "flex";

});

closePopup.addEventListener("click", () => {

  aboutPopup.style.display = "none";

});
// =========================
// POLICY POPUPS
// =========================

const privacyLink = document.getElementById("privacyLink");
const termsLink = document.getElementById("termsLink");
const copyrightLink = document.getElementById("copyrightLink");
const disclaimerLink = document.getElementById("disclaimerLink");
const contactLink = document.getElementById("contactLink");

const privacyPopup = document.getElementById("privacyPopup");
const termsPopup = document.getElementById("termsPopup");
const copyrightPopup = document.getElementById("copyrightPopup");
const disclaimerPopup = document.getElementById("disclaimerPopup");
const contactPopup = document.getElementById("contactPopup");

if(privacyLink){
  privacyLink.onclick = () => {
    privacyPopup.style.display = "flex";
  };
}

if(termsLink){
  termsLink.onclick = () => {
    termsPopup.style.display = "flex";
  };
}

if(copyrightLink){
  copyrightLink.onclick = () => {
    copyrightPopup.style.display = "flex";
  };
}

if(disclaimerLink){
  disclaimerLink.onclick = () => {
    disclaimerPopup.style.display = "flex";
  };
}

if(contactLink){
  contactLink.onclick = () => {
    contactPopup.style.display = "flex";
  };
}

// CLOSE BUTTONS

const closeButtons = document.querySelectorAll(".close-policy");

closeButtons.forEach(button => {

  button.onclick = () => {

    const popupId = button.getAttribute("data-close");

    document.getElementById(popupId).style.display = "none";

  };

});
