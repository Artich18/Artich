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

// AUTO CLOSE MENU WHEN CLICK OUTSIDE

document.addEventListener("click", (e) => {

  if(
    !menuBtn.contains(e.target) &&
    !navLinks.contains(e.target)
  ){

    navLinks.style.display = "none";

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
// =========================
// REAL WEBSITE SEARCH
// =========================

document.addEventListener("DOMContentLoaded", () => {

  const aiSearch =
  document.getElementById("aiSearch");

  const suggestionsBox =
  document.getElementById("suggestions");

  // =========================
// FULL WEBSITE SEARCH
// =========================

document.addEventListener("DOMContentLoaded", () => {

  const aiSearch =
  document.getElementById("aiSearch");

  const suggestionsBox =
  document.getElementById("suggestions");

  // WEBSITE ALL TEXT ELEMENTS

  const searchableElements = [

    ...document.querySelectorAll("h1"),
    ...document.querySelectorAll("h2"),
    ...document.querySelectorAll("h3"),
    ...document.querySelectorAll("p"),
    ...document.querySelectorAll("a"),
    ...document.querySelectorAll("button"),
    ...document.querySelectorAll("span")

  ];

  aiSearch.addEventListener("input", () => {

    const input =
    aiSearch.value.toLowerCase().trim();

    suggestionsBox.innerHTML = "";

    if(input === ""){

      suggestionsBox.style.display = "none";

      return;

    }

    let matched = [];

    searchableElements.forEach(element => {

      const text =
      element.innerText.trim();

      if(

        text.toLowerCase().includes(input)

        &&

        text.length > 0

      ){

        matched.push({

          text:text,

          element:element

        });

      }

    });

    // REMOVE DUPLICATES

    const uniqueMatches =
    matched.filter((item,index,self)=>

      index === self.findIndex(t =>
        t.text === item.text
      )

    );

    // LIMIT RESULTS

    uniqueMatches.slice(0,8).forEach(item => {

      const div =
      document.createElement("div");

      // SHORT TEXT

      div.innerText =
      item.text.substring(0,60);

      div.addEventListener("click", () => {

        item.element.scrollIntoView({

          behavior:"smooth",
          block:"center"

        });

        suggestionsBox.style.display = "none";

      });

      suggestionsBox.appendChild(div);

    });

    if(uniqueMatches.length > 0){

      suggestionsBox.style.display = "block";

    } else {

      suggestionsBox.innerHTML =
      `<div>No Results Found</div>`;

      suggestionsBox.style.display = "block";

    }

  });

  // CLOSE DROPDOWN

  document.addEventListener("click", (e) => {

    if(

      !aiSearch.contains(e.target)

      &&

      !suggestionsBox.contains(e.target)

    ){

      suggestionsBox.style.display = "none";

    }

  });

});

