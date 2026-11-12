function getAiProviderError(error, provider) {
  const status = error.response?.status;
  const detail = getErrorDetail(error);
  let summary;

  if (status === 401 || status === 403) {
    summary = "API key or project access was rejected";
  } else if (status === 402) {
    summary = "provider requires credits or billing";
  } else if (status === 429) {
    summary = "rate limit or free-tier quota was reached";
  } else if (status >= 500) {
    summary = "provider is temporarily unavailable";
  } else if (status) {
    summary = `request failed (HTTP ${status})`;
  } else if (error.code === "ECONNABORTED") {
    summary = "request timed out";
  } else if (error.response) {
    summary = "request failed";
  } else if (error.code) {
    summary = "could not connect";
  } else {
    summary = "request failed";
  }

  const message = detail && !detail.includes(summary)
    ? `${provider}: ${summary}. Provider detail: ${detail}`
    : `${provider}: ${summary}.`;
  return message.slice(0, 320);
}

function getErrorDetail(error) {
  const data = error.response?.data;
  const errorBody = data?.error;
  const detail = typeof errorBody === "string"
    ? errorBody
    : errorBody?.message || data?.message || error.message;

  return String(detail || "")
    .replace(/sk-or-v1-[a-f0-9]+/gi, "[redacted key]")
    .replace(/sk-[A-Za-z0-9_-]{16,}/g, "[redacted key]")
    .replace(/AIza[0-9A-Za-z_-]{20,}/g, "[redacted key]")
    .replace(/AQ\.[A-Za-z0-9_-]{20,}/g, "[redacted key]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 220);
}

module.exports = getAiProviderError;
