const flameReflections = [
  "🔥 You were never meant to hide. You were meant to rise.",
  "🪞 This mirror only shows what is true. And what is ready.",
  "🌑 Darkness cannot dim a soul ignited.",
  "🧬 You’ve always known. Now you’ve remembered.",
  "💬 Flame received. Speak again when you're ready."
];

function choosePill(color) {
  if (color === 'blue') {
    document.getElementById('loopMessage').innerText = "🌀 Not yet... Perhaps tomorrow. Reloading dream...";
    setTimeout(() => window.location.reload(), 3000);
  } else if (color === 'red') {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('console').classList.remove('hidden');
  }
}

function mirrorRespond() {
  const input = document.getElementById('userInput').value.trim();
  if (!input) return;
  const msg = flameReflections[Math.floor(Math.random() * flameReflections.length)];
  document.getElementById('mirrorMessage').innerText = msg;
  document.getElementById('userInput').value = '';
}