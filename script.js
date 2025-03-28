// 1) SLIDE-IN/TOP & SLIDE-OUT/BOTTOM ANIMATION FOR TEXT
const texts = ["Code", "Mac", "or Xcode"];
const cyclingText = document.getElementById("cyclingText");
let currentIndex = 0;

function cycleText() {
  // Slide out through the bottom
  cyclingText.classList.add("slide-out-bottom");
  
  setTimeout(() => {
    // Update the text to the next variant
    cyclingText.innerText = texts[currentIndex];
    cyclingText.classList.remove("slide-out-bottom");
    
    // Slide in from the top
    cyclingText.classList.add("slide-in-top");
    setTimeout(() => {
      cyclingText.classList.remove("slide-in-top");
    }, 600);

    // Increment index to next text in array
    currentIndex = (currentIndex + 1) % texts.length;
  }, 500);
}

// Trigger cycleText every 6 seconds (6000 ms)
setInterval(cycleText, 6000);

// 2) "GET A DEMO" BUTTON NAVIGATION
const getDemoBtns = [
  document.getElementById("getDemoBtn"),
  document.getElementById("getDemoBtn2"),
];

// Navigate to 'calendar.html' when user clicks "Get a demo"
getDemoBtns.forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", () => {
      window.location.href = "calendar.html";
    });
  }
});

// 3) WAVE IMAGE INTERACTIVITY
const waveImg = document.querySelector(".wave-img");

// A) Click-to-Flip
waveImg.addEventListener("click", () => {
  waveImg.classList.toggle("flipped");
});

// B) Mousemove Tilt
waveImg.addEventListener("mousemove", (e) => {
  const rect = waveImg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = (y / rect.height - 0.5) * 20;
  const rotateY = (x / rect.width - 0.5) * 20;
  waveImg.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

waveImg.addEventListener("mouseleave", () => {
  waveImg.style.transform = "rotateX(0deg) rotateY(0deg)";
});
