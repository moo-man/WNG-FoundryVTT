// Activate chat listeners defined in dice-wng.js
Hooks.on('renderChatLog', (log, html, data) => DiceWNG.chatListeners(html));