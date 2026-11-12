const MAX_MESSAGE_LENGTH = 1800;

module.exports = function splitAiMessage(text) {
  const chunks = [];
  let remaining = text;

  while (remaining.length > MAX_MESSAGE_LENGTH) {
    let splitAt = remaining.lastIndexOf("\n", MAX_MESSAGE_LENGTH);
    if (splitAt < MAX_MESSAGE_LENGTH * 0.6) {
      splitAt = remaining.lastIndexOf(" ", MAX_MESSAGE_LENGTH);
    }
    if (splitAt < MAX_MESSAGE_LENGTH * 0.6) {
      splitAt = MAX_MESSAGE_LENGTH;
    }
    if (
      splitAt > 0 &&
      splitAt < remaining.length &&
      remaining.charCodeAt(splitAt - 1) >= 0xd800 &&
      remaining.charCodeAt(splitAt - 1) <= 0xdbff &&
      remaining.charCodeAt(splitAt) >= 0xdc00 &&
      remaining.charCodeAt(splitAt) <= 0xdfff
    ) {
      splitAt += 1;
    }

    chunks.push(remaining.slice(0, splitAt).trimEnd());
    remaining = remaining.slice(splitAt).trimStart();
  }

  if (remaining) {
    chunks.push(remaining);
  }
  return chunks;
};
