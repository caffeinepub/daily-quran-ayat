# Daily Quran Ayat

## Current State
- App shows Quran ayat one at a time with Previous/Next navigation
- Backend has ~35 sample ayat with surahNumber, surahName, surahNameArabic, ayatNumber, arabic, english, hindi, urdu fields
- No para/juz field in the data model
- Navigation is purely sequential (index-based)
- Audio playback (TTS) with language selection (English/Hindi/Urdu)
- Push notification prompt
- Festive decorations (fairy lights, petals, candles)
- Premium white/black/gold design with Playfair Display font

## Requested Changes (Diff)

### Add
- **Para (Juz) filter**: Dropdown with all 30 Para names/numbers. On selection, navigates to the first ayat of that Para using a frontend-side Para→Surah mapping table.
- **Surah filter**: Dropdown with all 114 Surah names (number + English name). On selection, navigates to the first available ayat of that Surah in the dataset (by finding the lowest index where surahNumber matches).
- **Ayah number filter**: Numeric input or dropdown (1 to max ayah of selected surah). On selection, navigates to the matching ayat in the dataset (surahNumber + ayatNumber match).
- A compact "Jump To" panel above the navigation section, styled in the existing gold/card aesthetic.
- data-ocid markers on all new filter controls.

### Modify
- Navigation section: add the new filter panel above the Previous/Next buttons.
- The three filters are independent but aware: selecting a Para auto-fills the Surah dropdown to the first surah of that Para; selecting a Surah clears the Ayah input.

### Remove
- Nothing removed.

## Implementation Plan
1. Create a `quranData.ts` utility file in `src/utils/` with:
   - Para/Juz data: array of 30 entries with { paraNumber, name (e.g. "Alif Lam Meem"), startSurah, startAyah }
   - Surah data: array of 114 entries with { surahNumber, name, arabicName, totalAyah }
2. Add a `JumpToFilter` component in App.tsx:
   - Para dropdown (1–30)
   - Surah dropdown (1–114, filtered by para selection or all)
   - Ayah input (1–totalAyah for selected surah)
   - "Go" button that calls a handler to find and jump to the matching index
3. Add `findAyatIndex(surahNum, ayahNum)` helper that searches the loaded ayat dataset for the closest match. Since the backend has limited data, fall back to the nearest available surah.
4. Wire the filter state to `currentIndex` via the existing `setCurrentIndex`.
5. Add `data-ocid` markers: `filter.para_select`, `filter.surah_select`, `filter.ayah_input`, `filter.go_button`.
