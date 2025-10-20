// Fun tech facts for Grade 9
const facts = [
    "Did you know? Quantum computers can solve some problems millions of times faster than classical computers! ⚛️",
    "Fun fact! The first computer virus was created in 1986 and was called 'Brain'. 🦠",
    "Did you know? The world’s first 1TB hard drive was released in 2007 and cost $40,000! 💾",
    "Wow! AI is now capable of generating music, art, and text in minutes! 🤖",
    "Fun fact! Over 500 hours of video are uploaded to YouTube every minute! 🎥"
];

const factBox = document.getElementById("factBox");
const funFactBtn = document.getElementById("funFactBtn");

funFactBtn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factBox.textContent = randomFact;
    factBox.style.display = "block";
    setTimeout(() => factBox.style.display = "none", 4000);
});

// Welcome message
window.onload = function() {
    alert("Welcome Grade 9 Innovator! 🌟 Ready to try the ICT quiz and explore new topics?");
};
