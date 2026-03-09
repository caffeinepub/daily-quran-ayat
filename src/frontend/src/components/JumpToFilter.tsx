import { BookOpen } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PARA_LIST, SURAH_LIST, getSurahsInPara } from "../utils/quranData";

// ============================================================
// Types
// ============================================================

interface JumpToFilterProps {
  onJump: (surahNumber: number, ayahNumber: number) => void;
  isSwitching?: boolean;
}

// ============================================================
// Inline select style helpers (match the gold/white/black theme)
// ============================================================

const selectStyle: React.CSSProperties = {
  background: "oklch(var(--card))",
  border: "1.5px solid oklch(var(--gold) / 0.35)",
  borderRadius: "0.375rem",
  color: "oklch(var(--foreground))",
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  padding: "0.55rem 2rem 0.55rem 0.75rem",
  width: "100%",
  appearance: "none" as const,
  WebkitAppearance: "none" as const,
  MozAppearance: "none" as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23c9a227' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.5rem center",
  backgroundSize: "1rem",
  cursor: "pointer",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const selectFocusStyle: React.CSSProperties = {
  ...selectStyle,
  borderColor: "oklch(var(--gold) / 0.8)",
  boxShadow: "0 0 0 3px oklch(var(--gold) / 0.12)",
};

const inputStyle: React.CSSProperties = {
  background: "oklch(var(--card))",
  border: "1.5px solid oklch(var(--gold) / 0.35)",
  borderRadius: "0.375rem",
  color: "oklch(var(--foreground))",
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  padding: "0.55rem 0.75rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const inputFocusStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: "oklch(var(--gold) / 0.8)",
  boxShadow: "0 0 0 3px oklch(var(--gold) / 0.12)",
};

// ============================================================
// FocusableSelect — select with gold focus ring
// ============================================================

function FocusableSelect({
  id,
  value,
  onChange,
  disabled,
  children,
  "aria-label": ariaLabel,
  "data-ocid": dataOcid,
}: {
  id?: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
  "aria-label"?: string;
  "data-ocid"?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      id={id}
      aria-label={ariaLabel}
      data-ocid={dataOcid}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={focused ? selectFocusStyle : selectStyle}
    >
      {children}
    </select>
  );
}

// ============================================================
// FocusableInput — number input with gold focus ring
// ============================================================

function FocusableInput({
  id,
  value,
  onChange,
  min,
  max,
  placeholder,
  disabled,
  onKeyDown,
  "aria-label": ariaLabel,
  "data-ocid": dataOcid,
}: {
  id?: string;
  value: string;
  onChange: (v: string) => void;
  min: number;
  max: number;
  placeholder?: string;
  disabled?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  "aria-label"?: string;
  "data-ocid"?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id}
      type="number"
      aria-label={ariaLabel}
      data-ocid={dataOcid}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      min={min}
      max={max}
      placeholder={placeholder}
      disabled={disabled}
      onKeyDown={onKeyDown}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={focused ? inputFocusStyle : inputStyle}
    />
  );
}

// ============================================================
// JumpToFilter Component
// ============================================================

export function JumpToFilter({ onJump, isSwitching }: JumpToFilterProps) {
  const [selectedPara, setSelectedPara] = useState<string>("");
  const [selectedSurah, setSelectedSurah] = useState<string>("");
  const [ayahInput, setAyahInput] = useState<string>("");

  // The surahs to display depend on which para is selected
  const visibleSurahs = useMemo(() => {
    if (selectedPara === "") return SURAH_LIST;
    const paraNum = Number.parseInt(selectedPara, 10);
    return getSurahsInPara(paraNum);
  }, [selectedPara]);

  // When para changes, reset surah if the current surah is not in the new para
  useEffect(() => {
    if (selectedSurah === "") return;
    const surahNum = Number.parseInt(selectedSurah, 10);
    const isInPara = visibleSurahs.some((s) => s.surahNumber === surahNum);
    if (!isInPara) {
      setSelectedSurah("");
      setAyahInput("");
    }
  }, [visibleSurahs, selectedSurah]);

  // Max ayah for selected surah
  const maxAyah = useMemo(() => {
    if (!selectedSurah) return 286;
    const surahNum = Number.parseInt(selectedSurah, 10);
    const surah = SURAH_LIST.find((s) => s.surahNumber === surahNum);
    return surah ? surah.totalAyah : 286;
  }, [selectedSurah]);

  // Keep ayah in bounds when surah changes
  useEffect(() => {
    if (ayahInput === "") return;
    const ayahNum = Number.parseInt(ayahInput, 10);
    if (ayahNum > maxAyah) {
      setAyahInput(String(maxAyah));
    }
  }, [maxAyah, ayahInput]);

  const handleParaChange = useCallback((value: string) => {
    setSelectedPara(value);
    // If a para is selected, auto-select the first surah in that para
    if (value !== "") {
      const paraNum = Number.parseInt(value, 10);
      const surahsInPara = getSurahsInPara(paraNum);
      if (surahsInPara.length > 0) {
        setSelectedSurah(String(surahsInPara[0].surahNumber));
        setAyahInput("1");
      }
    }
  }, []);

  const handleSurahChange = useCallback((value: string) => {
    setSelectedSurah(value);
    setAyahInput("1");
  }, []);

  const handleGo = useCallback(() => {
    if (!selectedSurah) return;
    const surahNum = Number.parseInt(selectedSurah, 10);
    const ayahNum = ayahInput
      ? Math.max(1, Math.min(Number.parseInt(ayahInput, 10), maxAyah))
      : 1;
    onJump(surahNum, ayahNum);
  }, [selectedSurah, ayahInput, maxAyah, onJump]);

  // Allow Enter key to trigger Go
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleGo();
    },
    [handleGo],
  );

  const selectedSurahInfo = selectedSurah
    ? SURAH_LIST.find(
        (s) => s.surahNumber === Number.parseInt(selectedSurah, 10),
      )
    : null;

  return (
    <section
      className="card-islamic rounded-xl p-5 fade-in-up fade-in-up-delay-3"
      aria-label="Jump to verse filter"
    >
      {/* Header row */}
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gold/20">
        <BookOpen
          size={13}
          style={{ color: "oklch(var(--gold))", flexShrink: 0 }}
          aria-hidden="true"
        />
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{
            color: "oklch(var(--gold))",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Jump to Verse
        </span>
        <span
          className="ml-auto text-xs opacity-50"
          style={{
            color: "oklch(var(--gold))",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
          aria-hidden="true"
        >
          30 Para · 114 Surah · 6236 Ayah
        </span>
      </div>

      {/* Filter controls row */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr_0.8fr_auto] gap-3 items-end">
        {/* Para (Juz) selector */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="jump-para-select"
            className="text-xs font-medium opacity-60"
            style={{
              color: "oklch(var(--foreground))",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Para (Juz)
          </label>
          <FocusableSelect
            id="jump-para-select"
            aria-label="Select Para (Juz)"
            data-ocid="filter.para_select"
            value={selectedPara}
            onChange={handleParaChange}
            disabled={isSwitching}
          >
            <option value="">All Paras</option>
            {PARA_LIST.map((para) => (
              <option key={para.paraNumber} value={String(para.paraNumber)}>
                Para {para.paraNumber} — {para.name}
              </option>
            ))}
          </FocusableSelect>
        </div>

        {/* Surah selector */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="jump-surah-select"
            className="text-xs font-medium opacity-60"
            style={{
              color: "oklch(var(--foreground))",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Surah
          </label>
          <FocusableSelect
            id="jump-surah-select"
            aria-label="Select Surah"
            data-ocid="filter.surah_select"
            value={selectedSurah}
            onChange={handleSurahChange}
            disabled={isSwitching}
          >
            <option value="">Select Surah</option>
            {visibleSurahs.map((surah) => (
              <option key={surah.surahNumber} value={String(surah.surahNumber)}>
                {surah.surahNumber}. {surah.name} ({surah.arabicName})
              </option>
            ))}
          </FocusableSelect>
        </div>

        {/* Ayah number input */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="jump-ayah-input"
            className="text-xs font-medium opacity-60"
            style={{
              color: "oklch(var(--foreground))",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Ayah
          </label>
          <FocusableInput
            id="jump-ayah-input"
            aria-label={`Ayah number (1–${selectedSurahInfo ? selectedSurahInfo.totalAyah : maxAyah})`}
            data-ocid="filter.ayah_input"
            value={ayahInput}
            onChange={setAyahInput}
            min={1}
            max={maxAyah}
            placeholder={`1 – ${selectedSurahInfo ? selectedSurahInfo.totalAyah : "…"}`}
            disabled={!selectedSurah || isSwitching}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Go button */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs opacity-0 select-none" aria-hidden="true">
            Go
          </span>
          <button
            type="button"
            data-ocid="filter.go_button"
            onClick={handleGo}
            disabled={!selectedSurah || isSwitching}
            aria-label="Jump to selected verse"
            style={{
              background:
                selectedSurah && !isSwitching
                  ? "oklch(var(--gold))"
                  : "oklch(var(--gold) / 0.3)",
              color: "oklch(0.99 0 0)",
              border: "none",
              borderRadius: "0.375rem",
              padding: "0.55rem 1.25rem",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              cursor: selectedSurah && !isSwitching ? "pointer" : "not-allowed",
              transition: "background 0.2s, box-shadow 0.2s",
              boxShadow:
                selectedSurah && !isSwitching
                  ? "0 2px 12px oklch(var(--gold) / 0.3)"
                  : "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              if (selectedSurah && !isSwitching) {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 18px oklch(var(--gold) / 0.45)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedSurah && !isSwitching) {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 2px 12px oklch(var(--gold) / 0.3)";
              }
            }}
          >
            Go ✦
          </button>
        </div>
      </div>

      {/* Subtle helper hint */}
      {selectedSurahInfo && (
        <p
          className="mt-3 text-xs opacity-50 tracking-wide"
          style={{
            color: "oklch(var(--foreground))",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
          aria-live="polite"
        >
          {selectedSurahInfo.name} ({selectedSurahInfo.arabicName}) —{" "}
          {selectedSurahInfo.totalAyah} ayahs · Para{" "}
          {selectedSurahInfo.paraNumber}
        </p>
      )}
    </section>
  );
}
