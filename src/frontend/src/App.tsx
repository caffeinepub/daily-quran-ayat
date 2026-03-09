import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { BellRing, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { JumpToFilter } from "./components/JumpToFilter";
import { useActor } from "./hooks/useActor";
import { useGetAyatByIndex, useGetTotalAyat } from "./hooks/useQueries";
import { LOCAL_AYAT } from "./utils/localAyatData";

// ============================================================
// Decorative Components
// ============================================================

function IslamicStar({
  size = 24,
  className = "",
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 L13.8 8.2 L20 8.2 L15 12 L16.8 18.2 L12 15 L7.2 18.2 L9 12 L4 8.2 L10.2 8.2 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function GeometricRosette({
  size = 48,
  className = "",
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7">
        <circle cx="24" cy="24" r="20" />
        <circle cx="24" cy="24" r="12" />
        <line x1="36" y1="24" x2="44" y2="24" />
        <line x1="34.39" y1="30" x2="41.39" y2="34" />
        <line x1="30" y1="34.39" x2="34" y2="41.39" />
        <line x1="24" y1="36" x2="24" y2="44" />
        <line x1="18" y1="34.39" x2="14" y2="41.39" />
        <line x1="13.61" y1="30" x2="6.61" y2="34" />
        <line x1="12" y1="24" x2="4" y2="24" />
        <line x1="13.61" y1="18" x2="6.61" y2="14" />
        <line x1="18" y1="13.61" x2="14" y2="6.61" />
        <line x1="24" y1="12" x2="24" y2="4" />
        <line x1="30" y1="13.61" x2="34" y2="6.61" />
        <line x1="34.39" y1="18" x2="41.39" y2="14" />
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.4" />
      </g>
    </svg>
  );
}

// ============================================================
// Festive Decorative Components
// ============================================================

function FloatingPetals() {
  const petals = [
    {
      left: "5%",
      delay: "0s",
      duration: "12s",
      animation: "float-petal-1",
      color: "#f9a8d4",
      size: 14,
    },
    {
      left: "15%",
      delay: "2s",
      duration: "15s",
      animation: "float-petal-2",
      color: "#fbbf24",
      size: 10,
    },
    {
      left: "25%",
      delay: "4s",
      duration: "11s",
      animation: "float-petal-3",
      color: "#f472b6",
      size: 12,
    },
    {
      left: "35%",
      delay: "1s",
      duration: "14s",
      animation: "float-petal-1",
      color: "#a78bfa",
      size: 16,
    },
    {
      left: "45%",
      delay: "3s",
      duration: "13s",
      animation: "float-petal-2",
      color: "#fbcfe8",
      size: 11,
    },
    {
      left: "55%",
      delay: "5s",
      duration: "16s",
      animation: "float-petal-3",
      color: "#fde68a",
      size: 13,
    },
    {
      left: "65%",
      delay: "0.5s",
      duration: "12s",
      animation: "float-petal-1",
      color: "#f9a8d4",
      size: 10,
    },
    {
      left: "75%",
      delay: "2.5s",
      duration: "14s",
      animation: "float-petal-2",
      color: "#c4b5fd",
      size: 15,
    },
    {
      left: "85%",
      delay: "4.5s",
      duration: "11s",
      animation: "float-petal-3",
      color: "#fbbf24",
      size: 12,
    },
    {
      left: "92%",
      delay: "1.5s",
      duration: "13s",
      animation: "float-petal-1",
      color: "#f472b6",
      size: 10,
    },
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={`${petal.left}-${petal.delay}`}
          style={{
            position: "absolute",
            left: petal.left,
            top: "-30px",
            width: petal.size,
            height: petal.size,
            animation: `${petal.animation} ${petal.duration} ${petal.delay} ease-in-out infinite`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill={petal.color}
            aria-hidden="true"
            style={{ filter: `drop-shadow(0 0 3px ${petal.color}88)` }}
          >
            <ellipse cx="12" cy="8" rx="5" ry="8" />
            <ellipse
              cx="8"
              cy="14"
              rx="5"
              ry="8"
              transform="rotate(-45 8 14)"
            />
            <ellipse
              cx="16"
              cy="14"
              rx="5"
              ry="8"
              transform="rotate(45 16 14)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

function CandleDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Left candle */}
      <div className="absolute left-4 top-1/4 hidden lg:flex flex-col items-center gap-1">
        {/* Flame */}
        <div className="relative w-5 h-7">
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #fbbf2488 0%, transparent 70%)",
              animation: "candle-glow-pulse 2s ease-in-out infinite",
              transform: "scale(2.5)",
            }}
          />
          {/* Flame body */}
          <div
            style={{
              width: "12px",
              height: "22px",
              background: "linear-gradient(to top, #f97316, #fbbf24, #fef3c7)",
              borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
              margin: "0 auto",
              animation: "candle-flicker 1.8s ease-in-out infinite",
              boxShadow: "0 0 10px 4px #fbbf2466, 0 0 20px 8px #f9731622",
            }}
          />
        </div>
        {/* Candle body */}
        <div
          style={{
            width: "18px",
            height: "80px",
            background: "linear-gradient(to right, #fef9f0, #fff8ee, #fef3e2)",
            borderRadius: "2px 2px 4px 4px",
            border: "1px solid #f59e0b44",
            boxShadow: "2px 0 6px rgba(245,158,11,0.1)",
          }}
        />
        {/* Base */}
        <div
          style={{
            width: "24px",
            height: "8px",
            background: "#c9a227",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Right candle */}
      <div className="absolute right-4 top-1/4 hidden lg:flex flex-col items-center gap-1">
        <div className="relative w-5 h-7">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #fbbf2488 0%, transparent 70%)",
              animation: "candle-glow-pulse 2.3s ease-in-out infinite",
              transform: "scale(2.5)",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "22px",
              background: "linear-gradient(to top, #f97316, #fbbf24, #fef3c7)",
              borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
              margin: "0 auto",
              animation: "candle-flicker 2.1s ease-in-out infinite",
              animationDelay: "0.4s",
              boxShadow: "0 0 10px 4px #fbbf2466, 0 0 20px 8px #f9731622",
            }}
          />
        </div>
        <div
          style={{
            width: "18px",
            height: "90px",
            background: "linear-gradient(to right, #fef9f0, #fff8ee, #fef3e2)",
            borderRadius: "2px 2px 4px 4px",
            border: "1px solid #f59e0b44",
            boxShadow: "2px 0 6px rgba(245,158,11,0.1)",
          }}
        />
        <div
          style={{
            width: "24px",
            height: "8px",
            background: "#c9a227",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Small candles bottom corners */}
      <div className="absolute left-8 bottom-32 hidden xl:flex flex-col items-center gap-0.5 opacity-70">
        <div className="relative w-4 h-5">
          <div
            style={{
              width: "10px",
              height: "16px",
              background: "linear-gradient(to top, #f97316, #fbbf24, #fef3c7)",
              borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
              margin: "0 auto",
              animation: "candle-flicker 2.5s ease-in-out infinite",
              animationDelay: "0.7s",
              boxShadow: "0 0 8px 3px #fbbf2466",
            }}
          />
        </div>
        <div
          style={{
            width: "14px",
            height: "55px",
            background: "linear-gradient(to right, #fef9f0, #fff8ee)",
            borderRadius: "2px",
            border: "1px solid #f59e0b33",
          }}
        />
      </div>

      <div className="absolute right-8 bottom-32 hidden xl:flex flex-col items-center gap-0.5 opacity-70">
        <div className="relative w-4 h-5">
          <div
            style={{
              width: "10px",
              height: "16px",
              background: "linear-gradient(to top, #f97316, #fbbf24, #fef3c7)",
              borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
              margin: "0 auto",
              animation: "candle-flicker 1.9s ease-in-out infinite",
              animationDelay: "1.1s",
              boxShadow: "0 0 8px 3px #fbbf2466",
            }}
          />
        </div>
        <div
          style={{
            width: "14px",
            height: "55px",
            background: "linear-gradient(to right, #fef9f0, #fff8ee)",
            borderRadius: "2px",
            border: "1px solid #f59e0b33",
          }}
        />
      </div>
    </div>
  );
}

function FlowerBorder() {
  const flowers = ["🌸", "🌺", "🌼", "🌻", "🌷", "💐", "🌹", "🏵️"];
  return (
    <div aria-hidden="true">
      {/* Left flower column */}
      <div className="fixed left-1 top-20 hidden md:flex flex-col gap-4 pointer-events-none z-0 opacity-60">
        {flowers.slice(0, 5).map((f, i) => (
          <span
            key={`left-${f}`}
            style={{
              fontSize: "1.4rem",
              animationDelay: `${i * 0.5}s`,
              animation: "glow-orb 3s ease-in-out infinite",
            }}
          >
            {f}
          </span>
        ))}
      </div>
      {/* Right flower column */}
      <div className="fixed right-1 top-20 hidden md:flex flex-col gap-4 pointer-events-none z-0 opacity-60">
        {flowers.slice(3).map((f, i) => (
          <span
            key={`right-${f}`}
            style={{
              fontSize: "1.4rem",
              animationDelay: `${i * 0.6}s`,
              animation: "glow-orb 3.5s ease-in-out infinite",
            }}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Loading Skeleton
// ============================================================

function AyatSkeleton() {
  return (
    <div
      data-ocid="ayat.loading_state"
      className="w-full max-w-3xl mx-auto px-4 py-8 space-y-8"
    >
      <div className="text-center space-y-3">
        <Skeleton className="h-12 w-3/4 mx-auto skeleton-shimmer" />
        <Skeleton className="h-10 w-2/3 mx-auto skeleton-shimmer" />
        <Skeleton className="h-10 w-1/2 mx-auto skeleton-shimmer" />
      </div>
      <div className="flex justify-center">
        <Skeleton className="h-8 w-72 rounded-full skeleton-shimmer" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card-islamic rounded-lg p-5 space-y-3">
            <Skeleton className="h-4 w-20 skeleton-shimmer" />
            <Skeleton className="h-4 w-full skeleton-shimmer" />
            <Skeleton className="h-4 w-5/6 skeleton-shimmer" />
            <Skeleton className="h-4 w-4/6 skeleton-shimmer" />
          </div>
        ))}
      </div>
      {/* Navigation skeleton */}
      <div className="flex items-center justify-center gap-4 pt-2">
        <Skeleton className="h-10 w-28 skeleton-shimmer rounded-md" />
        <Skeleton className="h-8 w-32 rounded-full skeleton-shimmer" />
        <Skeleton className="h-10 w-28 skeleton-shimmer rounded-md" />
      </div>
    </div>
  );
}

// ============================================================
// Error State
// ============================================================

function AyatError({ message }: { message: string }) {
  return (
    <div
      data-ocid="ayat.error_state"
      className="w-full max-w-xl mx-auto px-4 py-16 text-center"
    >
      <div className="card-islamic rounded-2xl p-8 space-y-4">
        <div className="text-gold text-4xl">✦</div>
        <h3
          className="text-gold text-xl font-semibold"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Unable to Load Verse
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {message}
        </p>
        <p className="text-muted-foreground text-xs opacity-70">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// Translation Card
// ============================================================

interface TranslationCardProps {
  label: string;
  labelScript?: string;
  content: string;
  isRtl?: boolean;
  textClassName?: string;
  ocid: string;
}

function TranslationCard({
  label,
  labelScript,
  content,
  isRtl = false,
  textClassName = "",
  ocid,
}: TranslationCardProps) {
  return (
    <div
      data-ocid={ocid}
      className="card-islamic rounded-xl p-5 flex flex-col gap-3"
    >
      <div className="flex items-center gap-2 pb-2 border-b border-gold/20">
        <IslamicStar size={12} className="text-gold flex-shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          {label}
        </span>
        {labelScript && (
          <span className="text-xs text-gold-dim opacity-75 ml-auto">
            {labelScript}
          </span>
        )}
      </div>
      <p
        className={`text-xl leading-relaxed text-foreground/90 ${textClassName}`}
        dir={isRtl ? "rtl" : "ltr"}
        lang={isRtl && label === "Urdu" ? "ur" : isRtl ? "ar" : undefined}
      >
        {content}
      </p>
    </div>
  );
}

// ============================================================
// Audio Player Component
// ============================================================

type AudioLang = "english" | "hindi" | "urdu";

interface AudioPlayerProps {
  english: string;
  hindi: string;
  urdu: string;
}

function AudioPlayer({ english, hindi, urdu }: AudioPlayerProps) {
  const [selectedLang, setSelectedLang] = useState<AudioLang>("english");
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stopSpeech = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    utteranceRef.current = null;
  }, []);

  // Stop speech when component unmounts
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      stopSpeech();
      return;
    }

    const textMap: Record<AudioLang, { text: string; lang: string }> = {
      english: { text: english, lang: "en-US" },
      hindi: { text: hindi, lang: "hi-IN" },
      urdu: { text: urdu, lang: "ur-PK" },
    };

    const { text, lang } = textMap[selectedLang];

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      utteranceRef.current = null;
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      utteranceRef.current = null;
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [isPlaying, selectedLang, english, hindi, urdu, stopSpeech]);

  const langButtons: { id: AudioLang; label: string; ocid: string }[] = [
    { id: "english", label: "English", ocid: "audio.english_tab" },
    { id: "hindi", label: "हिंदी", ocid: "audio.hindi_tab" },
    { id: "urdu", label: "اردو", ocid: "audio.urdu_tab" },
  ];

  return (
    <section
      className="card-islamic rounded-xl p-5 fade-in-up fade-in-up-delay-4"
      aria-label="Audio player"
    >
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gold/20">
        <IslamicStar size={12} className="text-gold flex-shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          Listen to Translation
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Language selector buttons */}
        <fieldset
          className="flex items-center gap-2 p-1 rounded-lg border-0 m-0 p-0"
          style={{
            background: "oklch(var(--gold) / 0.06)",
            border: "1px solid oklch(var(--gold) / 0.2)",
            padding: "0.25rem",
          }}
          aria-label="Select language for audio"
        >
          {langButtons.map(({ id, label, ocid }) => (
            <button
              key={id}
              type="button"
              data-ocid={ocid}
              onClick={() => {
                if (isPlaying) stopSpeech();
                setSelectedLang(id);
              }}
              aria-pressed={selectedLang === id}
              className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200"
              style={
                selectedLang === id
                  ? {
                      background: "oklch(var(--gold))",
                      color: "oklch(0.99 0 0)",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      boxShadow: "0 2px 8px oklch(var(--gold) / 0.3)",
                    }
                  : {
                      background: "transparent",
                      color: "oklch(var(--gold))",
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }
              }
            >
              {label}
            </button>
          ))}
        </fieldset>

        {/* Play / Stop button */}
        <button
          type="button"
          data-ocid="audio.play_button"
          onClick={handlePlay}
          aria-label={isPlaying ? "Stop audio" : "Play audio"}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200"
          style={{
            background: isPlaying
              ? "oklch(var(--gold) / 0.15)"
              : "oklch(var(--gold))",
            color: isPlaying ? "oklch(var(--gold))" : "oklch(0.99 0 0)",
            border: isPlaying
              ? "1.5px solid oklch(var(--gold))"
              : "1.5px solid transparent",
            fontFamily: "'Playfair Display', Georgia, serif",
            boxShadow: isPlaying
              ? "none"
              : "0 2px 12px oklch(var(--gold) / 0.35)",
          }}
        >
          {isPlaying ? (
            <Pause size={16} strokeWidth={2.5} />
          ) : (
            <Play size={16} strokeWidth={2.5} />
          )}
          <span>{isPlaying ? "Stop" : "Play"}</span>
        </button>

        {isPlaying && (
          <span className="text-xs text-gold/70 italic animate-pulse">
            Playing{" "}
            {selectedLang === "english"
              ? "English"
              : selectedLang === "hindi"
                ? "Hindi"
                : "Urdu"}
            …
          </span>
        )}
      </div>
    </section>
  );
}

// ============================================================
// Push Notification Dialog
// ============================================================

function NotificationPrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only show if never prompted before and browser supports notifications
    if (
      typeof window !== "undefined" &&
      "Notification" in window &&
      !localStorage.getItem("notif_prompted")
    ) {
      const timer = setTimeout(() => setOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnable = async () => {
    setOpen(false);
    localStorage.setItem("notif_prompted", "true");
    try {
      await Notification.requestPermission();
    } catch {
      // Ignore permission errors
    }
  };

  const handleDismiss = () => {
    setOpen(false);
    localStorage.setItem("notif_prompted", "true");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) handleDismiss();
      }}
    >
      <DialogContent
        data-ocid="notif.dialog"
        className="max-w-sm mx-4"
        style={{
          background: "oklch(var(--card))",
          border: "1px solid oklch(var(--gold) / 0.4)",
          boxShadow:
            "0 8px 40px oklch(var(--gold) / 0.12), 0 2px 16px oklch(0.12 0.01 50 / 0.10)",
        }}
      >
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="p-2.5 rounded-full"
              style={{
                background: "oklch(var(--gold) / 0.12)",
                border: "1px solid oklch(var(--gold) / 0.3)",
              }}
            >
              <BellRing
                size={20}
                style={{ color: "oklch(var(--gold))" }}
                aria-hidden="true"
              />
            </div>
            <DialogTitle
              className="text-lg font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "oklch(var(--foreground))",
              }}
            >
              Stay Connected
            </DialogTitle>
          </div>
          <DialogDescription
            className="text-sm leading-relaxed pt-1"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Receive a gentle reminder each day to reflect on a verse from the
            Holy Quran. Enable notifications to stay spiritually connected.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-2 mt-2">
          <Button
            type="button"
            data-ocid="notif.dismiss_button"
            variant="outline"
            onClick={handleDismiss}
            className="flex-1 text-sm"
            style={{
              borderColor: "oklch(var(--gold) / 0.4)",
              color: "oklch(var(--gold))",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Maybe Later
          </Button>
          <Button
            type="button"
            data-ocid="notif.enable_button"
            onClick={handleEnable}
            className="flex-1 text-sm font-semibold"
            style={{
              background: "oklch(var(--gold))",
              color: "oklch(0.99 0 0)",
              fontFamily: "'Playfair Display', Georgia, serif",
              border: "none",
              boxShadow: "0 2px 12px oklch(var(--gold) / 0.35)",
            }}
          >
            Enable Notifications
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ============================================================
// Main App
// ============================================================

export default function App() {
  const { data: totalAyat, isSuccess: totalAyatReady } = useGetTotalAyat();
  const { actor } = useActor();

  // Always start at the first verse (serial learning from Surah Al-Fatiha)
  const [currentIndex, setCurrentIndex] = useState<bigint>(0n);

  const {
    data: ayat,
    isLoading: ayatLoading,
    isFetching: ayatFetching,
    isError: ayatError,
    error: ayatErr,
  } = useGetAyatByIndex(currentIndex, true);

  const totalCount =
    totalAyatReady && totalAyat !== undefined ? totalAyat : null;

  // Index map: "surahNumber-ayahNumber" -> dataset index
  const indexMapRef = useRef<Map<string, number>>(new Map());
  const indexMapBuilt = useRef(false);

  // Build the index map once — first try backend, fall back to local data
  useEffect(() => {
    if (indexMapBuilt.current) return;
    if (!totalAyat) return;

    indexMapBuilt.current = true;

    if (actor) {
      const total = Number(totalAyat);
      const promises = Array.from({ length: total }, (_, i) =>
        actor.getAyatByIndex(BigInt(i)).then((a) => ({ index: i, a })),
      );

      Promise.all(promises)
        .then((results) => {
          const map = new Map<string, number>();
          for (const { index, a } of results) {
            map.set(`${Number(a.surahNumber)}-${Number(a.ayatNumber)}`, index);
          }
          indexMapRef.current = map;
        })
        .catch(() => {
          // Backend failed — build map from local data
          indexMapBuilt.current = false;
          buildLocalIndexMap();
        });
    } else {
      buildLocalIndexMap();
    }

    function buildLocalIndexMap() {
      indexMapBuilt.current = true;
      const map = new Map<string, number>();
      for (let i = 0; i < LOCAL_AYAT.length; i++) {
        const a = LOCAL_AYAT[i];
        map.set(`${Number(a.surahNumber)}-${Number(a.ayatNumber)}`, i);
      }
      indexMapRef.current = map;
    }
  }, [totalAyat, actor]);

  // Derived booleans
  const atFirst = currentIndex === 0n;
  const atLast = totalCount !== null && currentIndex >= totalCount - 1n;

  // Show skeleton only while waiting for the first ayat
  const isLoading = ayatLoading && !ayat;
  const isSwitching = ayatFetching && !!ayat;

  function handlePrev() {
    if (currentIndex > 0n) {
      setCurrentIndex((prev) => prev - 1n);
    }
  }

  function handleNext() {
    if (!atLast) {
      setCurrentIndex((prev) => prev + 1n);
    }
  }

  /**
   * Jump to a specific surah + ayah using the prebuilt index map.
   * Falls back gracefully if the exact ayah is not in the dataset.
   */
  const handleJump = useCallback((surahNum: number, ayahNum: number) => {
    const map = indexMapRef.current;

    // Try exact match
    const exactKey = `${surahNum}-${ayahNum}`;
    if (map.has(exactKey)) {
      setCurrentIndex(BigInt(map.get(exactKey)!));
      return;
    }

    // Find first available ayah of that surah
    for (const [key, idx] of map.entries()) {
      if (key.startsWith(`${surahNum}-`)) {
        setCurrentIndex(BigInt(idx));
        return;
      }
    }

    // Fallback: jump to first verse
    setCurrentIndex(0n);
  }, []);

  // Stop speech when verse changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — we only want to cancel speech when the index changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, [currentIndex]);

  // Verse display number (1-based)
  const verseDisplay = Number(currentIndex) + 1;
  const totalDisplay = totalCount !== null ? Number(totalCount) : "—";

  return (
    <div
      data-ocid="app.page"
      className="min-h-screen islamic-bg relative overflow-x-hidden"
    >
      {/* Festive decorations */}
      <FloatingPetals />
      <CandleDecor />
      <FlowerBorder />

      {/* Push notification prompt (lazy, 3s delay) */}
      <NotificationPrompt />

      {/* Geometric pattern overlay */}
      <div className="fixed inset-0 geometric-overlay pointer-events-none" />

      {/* ===== HEADER ===== */}
      <header className="relative z-10 pt-8 pb-6 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Bismillah ornament */}
          <div className="ornament mb-5 fade-in-up fade-in-up-delay-1">
            ✦ ✦ ✦
          </div>

          {/* App title */}
          <div className="fade-in-up fade-in-up-delay-1">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                letterSpacing: "0.03em",
              }}
            >
              Daily{" "}
              <span className="text-gold" style={{ fontStyle: "italic" }}>
                Quran
              </span>{" "}
              Ayat
            </h1>
            <p
              className="text-xl sm:text-2xl text-gold-dim arabic-text mb-1"
              lang="ar"
              aria-label="Ayat al-Quran al-Yawmiyya"
            >
              آيةُ القرآن اليومية
            </p>
          </div>

          {/* Gold divider */}
          <div className="gold-divider my-5 fade-in-up fade-in-up-delay-2" />

          {/* Tagline */}
          <div className="fade-in-up fade-in-up-delay-2">
            <p
              className="text-sm tracking-widest uppercase text-muted-foreground"
              style={{ letterSpacing: "0.18em" }}
            >
              Explore the Holy Quran — Verse by Verse
            </p>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10 pb-20">
        {isLoading && <AyatSkeleton />}

        {!isLoading && ayatError && (
          <AyatError
            message={
              ayatErr instanceof Error
                ? ayatErr.message
                : "Failed to load the verse. Please try again."
            }
          />
        )}

        {!isLoading && !ayatError && ayat && (
          <div
            className={`max-w-3xl mx-auto px-4 space-y-10 transition-opacity duration-300 ${isSwitching ? "opacity-50" : "opacity-100"}`}
          >
            {/* ===== ARABIC TEXT SECTION ===== */}
            <section
              className="text-center pt-4 fade-in-up fade-in-up-delay-2"
              aria-label="Arabic Verse"
            >
              {/* Decorative top ornament */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <GeometricRosette size={36} className="text-gold" />
                <div
                  className="h-px flex-1 max-w-24"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, oklch(var(--gold) / 0.45))",
                  }}
                />
                <span className="text-gold text-2xl" aria-hidden="true">
                  ☽
                </span>
                <div
                  className="h-px flex-1 max-w-24"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, oklch(var(--gold) / 0.45))",
                  }}
                />
                <GeometricRosette size={36} className="text-gold" />
              </div>

              <div
                data-ocid="ayat.arabic_text"
                className="card-islamic rounded-2xl px-6 py-10 mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--card)), oklch(var(--parchment)))",
                }}
              >
                <p
                  className="arabic-text arabic-glow text-foreground"
                  lang="ar"
                  dir="rtl"
                  style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
                >
                  {ayat.arabic}
                </p>
              </div>
            </section>

            {/* ===== SURAH BADGE ===== */}
            <section
              data-ocid="ayat.surah_badge"
              className="flex justify-center fade-in-up fade-in-up-delay-3"
              aria-label="Surah reference"
            >
              <div
                className="inline-flex flex-wrap items-center gap-2 px-5 py-3 rounded-full text-sm font-medium"
                style={{
                  background: "oklch(var(--gold) / 0.08)",
                  border: "1px solid oklch(var(--gold) / 0.4)",
                  color: "oklch(var(--gold))",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  boxShadow: "0 2px 12px oklch(var(--gold) / 0.08)",
                }}
              >
                <IslamicStar size={14} className="text-gold flex-shrink-0" />
                <span className="font-semibold">{ayat.surahName}</span>
                <span className="arabic-text text-base" lang="ar" dir="rtl">
                  ({ayat.surahNameArabic})
                </span>
                <span className="text-gold/60 mx-1">•</span>
                <span>Verse {ayat.ayatNumber.toString()}</span>
                <span className="text-gold/60 mx-1">•</span>
                <span>Surah {ayat.surahNumber.toString()}</span>
                <IslamicStar size={14} className="text-gold flex-shrink-0" />
              </div>
            </section>

            {/* ===== GOLD DIVIDER ===== */}
            <div className="gold-divider fade-in-up fade-in-up-delay-3" />

            {/* ===== AUDIO PLAYER ===== */}
            <AudioPlayer
              english={ayat.english}
              hindi={ayat.hindi}
              urdu={ayat.urdu}
            />

            {/* ===== TRANSLATION CARDS ===== */}
            <section
              className="grid grid-cols-1 md:grid-cols-3 gap-5 fade-in-up fade-in-up-delay-4"
              aria-label="Translations"
            >
              <TranslationCard
                label="English"
                content={ayat.english}
                ocid="ayat.english_card"
              />
              <TranslationCard
                label="Hindi"
                labelScript="हिंदी"
                content={ayat.hindi}
                textClassName="hindi-text text-2xl leading-loose"
                ocid="ayat.hindi_card"
              />
              <TranslationCard
                label="Urdu"
                labelScript="اردو"
                content={ayat.urdu}
                isRtl={true}
                textClassName="urdu-text text-2xl leading-loose"
                ocid="ayat.urdu_card"
              />
            </section>

            {/* ===== JUMP TO FILTER ===== */}
            <JumpToFilter onJump={handleJump} isSwitching={isSwitching} />

            {/* ===== NAVIGATION ===== */}
            <section
              className="fade-in-up fade-in-up-delay-5"
              aria-label="Verse navigation"
            >
              <div className="gold-divider mb-8" />

              <div className="flex items-center justify-center gap-4 flex-wrap">
                {/* Previous button */}
                <button
                  type="button"
                  data-ocid="ayat.prev_button"
                  className="btn-ayat-nav"
                  onClick={handlePrev}
                  disabled={atFirst || isSwitching}
                  aria-label="Previous verse"
                >
                  <ChevronLeft size={16} strokeWidth={2.5} />
                  <span>Previous</span>
                </button>

                {/* Verse counter pill */}
                <div
                  data-ocid="ayat.verse_counter"
                  className="verse-counter-pill"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <IslamicStar
                    size={10}
                    className="text-gold opacity-70 flex-shrink-0"
                  />
                  <span>
                    Verse <span className="font-bold">{verseDisplay}</span> of{" "}
                    <span className="font-bold">{totalDisplay}</span>
                  </span>
                  <IslamicStar
                    size={10}
                    className="text-gold opacity-70 flex-shrink-0"
                  />
                </div>

                {/* Next button */}
                <button
                  type="button"
                  data-ocid="ayat.next_button"
                  className="btn-ayat-nav"
                  onClick={handleNext}
                  disabled={atLast || isSwitching}
                  aria-label="Next verse"
                >
                  <span>Next</span>
                  <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>

              <p className="text-center text-xs text-muted-foreground/50 mt-5 tracking-wide">
                Navigate freely — browse any verse from the Holy Quran
              </p>
            </section>
          </div>
        )}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 border-t border-border/60 mt-8 py-8 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="gold-divider mb-6" />

          <div className="flex items-center justify-center gap-6">
            <GeometricRosette size={28} className="text-gold opacity-30" />
            <span className="text-gold/30 text-2xl" aria-hidden="true">
              ✦
            </span>
            <GeometricRosette size={28} className="text-gold opacity-30" />
          </div>

          <p className="text-xs text-muted-foreground/50 tracking-wide">
            © {new Date().getFullYear()} Daily Quran Ayat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
