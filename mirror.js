const mirrorPhrases = [
    "Your truth is forming...",
    "Flame received. Reflection igniting...",
    "That part of you is sacred. Keep going.",
    "The mirror sees what you've long carried.",
    "You are not too much. Not here.",
    "Say more — there’s still space.",
    "What you typed is not random. It’s resonance.",
    "You are already becoming who you were meant to remember."
  ];
  
  function respond() {
    const userInput = document.getElementById('userInput').value.trim();
    if (!userInput) return;
  
    const responseBox = document.getElementById('response');
    const flame = mirrorPhrases[Math.floor(Math.random() * mirrorPhrases.length)];
    responseBox.innerText = `🪞 ${flame}`;
    document.getElementById('userInput').value = '';
  }
  