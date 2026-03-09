import { useQuery } from "@tanstack/react-query";
import type { Ayat } from "../backend.d";
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
      if (!actor) throw new Error("Actor not ready");
      return actor.getTotalAyat();
    },
    enabled: !!actor && !isFetching,
    staleTime: Number.POSITIVE_INFINITY,
    retry: 2,
  });
}

export function useGetAyatByIndex(index: bigint | null, enabled: boolean) {
  const { actor, isFetching } = useActor();
  return useQuery<Ayat>({
    queryKey: ["ayatByIndex", index?.toString()],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not ready");
      if (index === null) throw new Error("Index not set");
      return actor.getAyatByIndex(index);
    },
    enabled: !!actor && !isFetching && enabled && index !== null,
    staleTime: Number.POSITIVE_INFINITY,
    retry: 2,
  });
}
