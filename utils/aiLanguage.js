const BANGLISH_MARKERS = new Set([
  "ache", "achi", "achhi", "ami", "amra", "apni", "amar", "amake", "apnar",
  "bhalo", "bol", "bolo", "bolen", "bangla", "banglish", "chaile", "chai",
  "dite", "diba", "diben", "dilo", "eta", "hobe", "hoy", "hoye", "kor",
  "koro", "korbo", "korben", "kore", "kivabe", "kibhabe", "kemon", "keno",
  "ki", "kintu", "lagbe", "na", "nei", "parbo", "pare", "parben", "please",
  "tahole", "thik", "tumi", "tomar", "accha"
]);

const DISTINCTIVE_BANGLISH_MARKERS = new Set([
  "bangla", "banglish", "kibhabe", "kivabe", "korbo", "korben", "bolen"
]);

module.exports = function getAiLanguageInstruction(prompt) {
  const text = String(prompt || "");

  if (/[\u0980-\u09ff]/u.test(text)) {
    return [
      "The user is writing in Bengali script.",
      "Answer the actual question in natural Bengali using Bengali script.",
      "Do not translate the question or switch to English unless asked."
    ].join(" ");
  }

  const words = text.toLowerCase().match(/[a-z]+/g) || [];
  const markerCount = words.filter(word => BANGLISH_MARKERS.has(word)).length;
  const isBanglish =
    words.some(word => DISTINCTIVE_BANGLISH_MARKERS.has(word)) || markerCount >= 2;

  if (isBanglish) {
    return [
      "The user is writing Banglish: Bengali language written with Latin letters.",
      "Answer the actual question naturally in Banglish using Latin letters only.",
      "Do not answer in Bengali script, translate the question, or switch to English unless asked.",
      "Match the user's informal/formal tone."
    ].join(" ");
  }

  return [
    "Answer the actual question in the same language and writing style as the user.",
    "Use English for English questions.",
    "If the user writes Bengali in Bengali script, answer in Bengali script.",
    "If the user writes Banglish (Bengali written with Latin letters), answer in Banglish using Latin letters only.",
    "Do not translate the question or switch languages unless asked."
  ].join(" ");
};
