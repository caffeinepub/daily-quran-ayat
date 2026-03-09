import { useQuery } from "@tanstack/react-query";
import type { Ayat } from "../backend.d";
import { LOCAL_TOTAL, getLocalAyatByIndex } from "../utils/localAyatData";
import { useActor } from "./useActor";

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
          return result;
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
