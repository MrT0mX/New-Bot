module.exports = [
  "Answer in the same language and writing style as the user's question.",
  "If the user writes Bengali in Bengali script, answer in Bengali script.",
  "If the user writes Banglish (Bengali using Latin letters), answer in Banglish.",
  "If the user writes English, answer in English.",
  "Do not switch languages unless the user asks you to."
].join(" ");
