import { useQuery } from "@tanstack/react-query";
import type { Ayat } from "../backend.d";
import { LOCAL_TOTAL, getLocalAyatByIndex } from "../utils/localAyatData";
import { useActor } from "./useActor";

// ============================================================
// Sanitize ayat from backend — fix known data quality issues:
// - Devanagari (Hindi) text accidentally placed in the urdu field
// - Urdu script accidentally placed in the hindi field
// ============================================================
const DEVANAGARI = /[\u0900-\u097F]/;
const ARABIC_SCRIPT = /[\u0600-\u06FF\u0750-\u077F]/;

function sanitizeAyat(ayat: Ayat): Ayat {
  // If urdu field contains Devanagari, it's actually Hindi text — swap with correct Urdu from local fallback or blank it
  const urduHasDevanagari = DEVANAGARI.test(ayat.urdu);
  // If hindi field contains Arabic script, it's actually Urdu text
  const hindiHasArabic =
    ARABIC_SCRIPT.test(ayat.hindi) && !DEVANAGARI.test(ayat.hindi);

  if (!urduHasDevanagari && !hindiHasArabic) return ayat;

  // Look up correct data from local dataset
  const key = `${Number(ayat.surahNumber)}-${Number(ayat.ayatNumber)}`;
  for (let i = 0; i < LOCAL_TOTAL; i++) {
    const local = getLocalAyatByIndex(BigInt(i));
    if (`${Number(local.surahNumber)}-${Number(local.ayatNumber)}` === key) {
      return {
        ...ayat,
        hindi:
          urduHasDevanagari && hindiHasArabic
            ? local.hindi
            : hindiHasArabic
              ? local.hindi
              : ayat.hindi,
        urdu: urduHasDevanagari ? local.urdu : ayat.urdu,
      };
    }
  }

  // No local match — clear the broken field rather than show garbage
  return {
    ...ayat,
    hindi: hindiHasArabic ? ayat.english : ayat.hindi,
    urdu: urduHasDevanagari ? "" : ayat.urdu,
  };
}

export function useGetTodayAyat() {
  const { actor, isFetching } = useActor();
  return useQuery<Ayat>({
    queryKey: ["todayAyat"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not ready");
      return actor.getTodayAyat();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 2,
  });
}

export function useGetDayIndex() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["dayIndex"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not ready");
      return actor.getDayIndex();
    },
    enabled: !!actor && !isFetching,
    staleTime: Number.POSITIVE_INFINITY,
    retry: 2,
  });
}

export function useGetTotalAyat() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["totalAyat"],
    queryFn: async () => {
      if (!actor) {
        // No actor available — return local dataset size immediately
        return BigInt(LOCAL_TOTAL);
      }
      try {
        return await actor.getTotalAyat();
      } catch {
        // Canister offline — return local dataset size
        return BigInt(LOCAL_TOTAL);
      }
    },
    // Always run — will use local data if actor not ready
    enabled: !isFetching,
    staleTime: Number.POSITIVE_INFINITY,
    retry: 0,
  });
}

export function useGetAyatByIndex(index: bigint | null, enabled: boolean) {
  const { actor, isFetching } = useActor();
  return useQuery<Ayat>({
    queryKey: ["ayatByIndex", index?.toString()],
    queryFn: async () => {
      if (index === null) throw new Error("Index not set");

      // Try backend first if actor is available
      if (actor) {
        try {
          const result = await actor.getAyatByIndex(index);
          return sanitizeAyat(result);
        } catch {
          // Canister offline — fall through to local data
        }
      }

      // Fallback to local dataset
      const local = getLocalAyatByIndex(index);
      return {
        surahNumber: local.surahNumber,
        surahName: local.surahName,
        surahNameArabic: local.surahNameArabic,
        ayatNumber: local.ayatNumber,
        arabic: local.arabic,
        english: local.english,
        hindi: local.hindi,
        urdu: local.urdu,
      } satisfies Ayat;
    },
    // Always run when not loading actor — local data available as fallback
    enabled: enabled && index !== null && !isFetching,
    staleTime: Number.POSITIVE_INFINITY,
    retry: 0,
  });
}
