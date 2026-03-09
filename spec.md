# Daily Quran Ayat

## Current State
- Full Quran app with Arabic text, Urdu, Hindi, English translations
- Reading progress tracked per Surah and Para via localStorage
- Navigation: Previous/Next buttons + Jump to Filter
- Audio playback per language card
- Hindi field currently shows Urdu-script text on some verses (no actual Devanagari Hindi translation)
- Reading progress allows marking Surahs complete; Para 2 & 5 are marked in the user's saved state
- No share/export feature

## Requested Changes (Diff)

### Add
- **Share as HD Image** button below the translations (or near the Mark Surah Complete button): When clicked, generates a high-resolution canvas image containing the Arabic verse, Urdu translation, Hindi translation, and English translation, then triggers a browser share (Web Share API) or download if share is unsupported. Image should be visually styled (Islamic theme, gold accents, dark background) and render at 1200x1600px (portrait) for HD sharing.
- **Reset Progress button** inside the Reading Progress collapsible panel so the user can clear all marks (removes Para 2 & 5 marks and any other saved progress).

### Modify
- **Hindi translation**: The `hindi` field in `localAyatData.ts` must contain proper Devanagari Hindi text, not Urdu. Audit every entry in `localAyatData.ts` and replace any Urdu-script entries in the `hindi` field with correct Devanagari translations. Also update `useReadingProgress.ts` to expose a `resetProgress` function.

### Remove
- Nothing removed.

## Implementation Plan
1. Add `resetProgress` function to `useReadingProgress.ts` that clears localStorage and resets state.
2. Add Reset Progress button inside the collapsible body of `ReadingProgressSection` in `App.tsx`.
3. Audit all `hindi` fields in `localAyatData.ts` — ensure every entry uses proper Devanagari Hindi script. Fix any that contain Urdu script.
4. Create `ShareVerseButton` component in `App.tsx` that uses `html2canvas` or a custom canvas draw function to render Arabic text + 3 translations as an HD 1200x1600 image and triggers download/share.
5. Place the Share button below the translations section, alongside the Mark Surah Complete button.
6. Validate and deploy.
