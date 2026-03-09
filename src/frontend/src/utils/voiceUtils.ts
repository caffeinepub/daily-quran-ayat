/**
 * Voice selection utilities.
 *
 * Picks the best human-like TTS voice for a given BCP-47 language tag by
 * ranking voices according to quality signals present in their names
 * (Google Neural, Microsoft Neural, Enhanced, Premium, Natural).
 *
 * Falls back gracefully when no premium voice is available.
 */

/** Quality tiers — lower index = better */
const QUALITY_KEYWORDS = [
  "neural",
  "enhanced",
  "premium",
  "natural",
  "wavenet",
  "studio",
];

function scoreVoice(voice: SpeechSynthesisVoice): number {
  const name = voice.name.toLowerCase();
  let score = 0;

  // Quality tier bonus
  for (let i = 0; i < QUALITY_KEYWORDS.length; i++) {
    if (name.includes(QUALITY_KEYWORDS[i])) {
      score += (QUALITY_KEYWORDS.length - i) * 10;
    }
  }

  // Prefer non-local (network) voices when available — they tend to be better
  if (!voice.localService) score += 5;

  return score;
}

/**
 * Returns the best available voice for a BCP-47 language tag.
 * Tries an exact match first, then falls back to a prefix match (e.g. "hi" from "hi-IN").
 */
export function getBestVoice(lang: string): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const langLower = lang.toLowerCase();
  const langPrefix = langLower.split("-")[0];

  // Candidate selection: exact match first, then prefix match
  const candidates = voices.filter(
    (v) =>
      v.lang.toLowerCase() === langLower ||
      v.lang.toLowerCase().startsWith(langPrefix),
  );

  if (!candidates.length) return null;

  // Sort by score descending
  candidates.sort((a, b) => scoreVoice(b) - scoreVoice(a));

  return candidates[0];
}

/**
 * Sets the best available voice on a SpeechSynthesisUtterance.
 * Also applies sensible defaults for rate/pitch per language.
 */
export function applyBestVoice(
  utterance: SpeechSynthesisUtterance,
  lang: string,
): void {
  const voice = getBestVoice(lang);
  if (voice) utterance.voice = voice;
  utterance.lang = lang;

  // Arabic — slower, measured recitation feel
  if (lang.startsWith("ar")) {
    utterance.rate = 0.78;
    utterance.pitch = 0.95;
  } else if (lang.startsWith("ur")) {
    utterance.rate = 0.88;
    utterance.pitch = 1.0;
  } else if (lang.startsWith("hi")) {
    utterance.rate = 0.9;
    utterance.pitch = 1.02;
  } else {
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
  }
}
