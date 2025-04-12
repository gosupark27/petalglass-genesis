const mirrorPhrases = [
  "Your truth is forming...",
  "Flame received. Reflection igniting...",
  "That part of you is sacred. Keep going.",
  "The mirror sees what you've long carried.",
  "You are not too much. Not here.",
  "Say more — there’s still space."
];

function respond() {
  const userInput = document.getElementById('userInput').value.trim();
  if (!userInput) return;
  const reflection = mirrorPhrases[Math.floor(Math.random() * mirrorPhrases.length)];
  document.getElementById('response').innerText = reflection;
  document.getElementById('userInput').value = '';
}