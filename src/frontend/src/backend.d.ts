import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Ayat {
    surahNumber: bigint;
    hindi: string;
    surahName: string;
    urdu: string;
    surahNameArabic: string;
    arabic: string;
    ayatNumber: bigint;
    english: string;
}
export interface backendInterface {
    getAyatByIndex(index: bigint): Promise<Ayat>;
    getDayIndex(): Promise<bigint>;
    getTodayAyat(): Promise<Ayat>;
    getTotalAyat(): Promise<bigint>;
}
