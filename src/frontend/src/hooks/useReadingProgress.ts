import { useCallback, useEffect, useState } from "react";
import { PARA_LIST, SURAH_LIST } from "../utils/quranData";

const STORAGE_KEY = "quran_completed_surahs";

export function useReadingProgress() {
  const [completedSurahs, setCompletedSurahs] = useState<Set<number>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return new Set(JSON.parse(raw) as number[]);
    } catch {
      // ignore parse errors
    }
    return new Set<number>();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedSurahs]));
  }, [completedSurahs]);

  const toggleSurah = useCallback((surahNumber: number) => {
    setCompletedSurahs((prev) => {
      const next = new Set(prev);
      if (next.has(surahNumber)) next.delete(surahNumber);
      else next.add(surahNumber);
      return next;
    });
  }, []);

  const isSurahComplete = useCallback(
    (surahNumber: number) => completedSurahs.has(surahNumber),
    [completedSurahs],
  );

  // A para is complete when ALL its surahs are marked complete
  const completedParas = new Set(
    PARA_LIST.filter((para) =>
      SURAH_LIST.filter((s) => s.paraNumber === para.paraNumber).every((s) =>
        completedSurahs.has(s.surahNumber),
      ),
    ).map((p) => p.paraNumber),
  );

  return {
    completedSurahs,
    toggleSurah,
    isSurahComplete,
    completedCount: completedSurahs.size,
    totalSurahs: 114,
    completedParas,
    totalParas: 30,
  };
}
