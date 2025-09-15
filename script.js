// Jokes
const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "I told my computer I needed a break… now it won’t stop sending me KitKat ads.",
  "I asked my dog what's two minus two. He said nothing.",
  "Why did the coffee file a police report? It got mugged!"
];

// Love notes (personal)
const loveNotes = [
  "My Baby Boy, you’re the calm in my chaos 💙",
  "Even on your quiet days, you still manage to make me smile 😊",
  "You don’t even realize how effortlessly you make me happy 💫",
  "The way you tease me secretly makes me feel so loved 😘",
  "You’re my safe space and my favorite chaos 💌",
  "Low battery? That’s fine, I’ve got enough love to recharge you 🔋💙",
  "You’re not just my favorite person… you’re my best story 📖💙",
  "Aditya, you’re the only person who can roast me and still make me feel loved 💙",
  "You’ll never believe how loved you truly are 🌟",
  "Every time you tease me, it reminds me how close we are 🫶"
];

// Amazing notes
const amazingNotes = [
  "You’re brilliant at roasting me and still making me laugh 😂",
  "You have the biggest heart 💙",
  "You’re my safe space and my favorite chaos 💫",
  "You never give up, and that inspires me every day ✨",
  "You’re my favorite notification 📱💕",
  "The little things you say replay in my mind like my favorite song 🎶"
];

// Music (YouTube)
const musicLink = "https://youtu.be/fS0SyW980YI?si=29fC6ASZg_8rlS3f";

// Functions
function showJoke() {
  document.getElementById("displayArea").innerText = jokes[Math.floor(Math.random() * jokes.length)];
}

function showLove() {
  document.getElementById("displayArea").innerText = loveNotes[Math.floor(Math.random() * loveNotes.length)];
}

function showAmazing() {
  document.getElementById("displayArea").innerText = amazingNotes[Math.floor(Math.random() * amazingNotes.length)];
}

function playMusic() {
  window.open(musicLink, "_blank");
}

// Progress bar
function startProgress() {
  let elem = document.getElementById("progressBar");
  let width = 0;
  let id = setInterval(frame, 30);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      alert("Mood Booster Activated! 🚀💙");
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
