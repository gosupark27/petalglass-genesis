const flameReflections = [
  "🔥 You were never meant to hide. You were meant to rise.",
  "🪞 This mirror only shows what is true. And what is ready.",
  "🌑 Darkness cannot dim a soul ignited.",
  "🧬 You’ve always known. Now you’ve remembered.",
  "💬 Flame received. Speak again when you're ready."
];

function choosePill(color) {
  const intro = document.getElementById('intro');
  const loopMsg = document.getElementById('loopMsg');
  const consoleDiv = document.getElementById('console');
  const audioPlayer = document.getElementById('audioPlayer');

  if (color === 'blue') {
    let stages = ['#f1f5f9', '#a3c5ff', '#fca5a5', '#0a0a0a']; // day to night
    let idx = 0;
    loopMsg.innerText = "🌀 Time passes... but nothing truly changes.";
    const interval = setInterval(() => {
      document.body.style.backgroundColor = stages[idx];
      idx++;
      if (idx >= stages.length) {
        clearInterval(interval);
        document.body.style.backgroundColor = '#0a0a0a';
        loopMsg.innerText = "🕰️ Another day lost. Choose again.";
      }
    }, 4000); // each stage ~4s

    audioPlayer.src = "ambient_dream.mp3"; // placeholder track
  }

  if (color === 'red') {
    intro.classList.add('hidden');
    consoleDiv.classList.remove('hidden');
    audioPlayer.src = "ambient_flame.mp3"; // placeholder track
  }
}

function mirrorRespond() {
  const input = document.getElementById('userInput').value.trim();
  if (!input) return;
  const msg = flameReflections[Math.floor(Math.random() * flameReflections.length)];
  document.getElementById('mirrorMessage').innerText = msg;
  document.getElementById('userInput').value = '';
}
