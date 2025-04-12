let currentMode = '';

function startChat(mode) {
  currentMode = mode;
  let prompt = '';
  if (mode === 'mirrorflow') prompt = '🪞 What do you see when all roles fall away?';
  if (mode === 'question') prompt = '❓ What truth have you always known but rarely speak aloud?';
  if (mode === 'flame') prompt = '🔥 You were never meant to hide. You were meant to rise.';
  document.getElementById('chatlog').innerText = prompt;
}

function respond() {
  const input = document.getElementById('userInput').value;
  if (!input) return;
  let reply = '';
  switch (currentMode) {
    case 'mirrorflow': reply = '🪞 The mirror receives your truth: "' + input + '"'; break;
    case 'question': reply = '🧠 That knowing has always lived in you.'; break;
    case 'flame': reply = '🔥 Flame ignited. You rise again.'; break;
    default: reply = '👁️ Your reflection has been noted.'; break;
  }
  document.getElementById('chatlog').innerText = reply;
  document.getElementById('userInput').value = '';
}