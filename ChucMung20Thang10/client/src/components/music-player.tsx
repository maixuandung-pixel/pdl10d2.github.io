import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.log("Audio playback failed:", error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;
  }, [isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="https://archive.org/download/ClassicVietnameseInstrumentalPieces/09.Camxucquehuong-st.cokimhung.ogg"
          type="audio/ogg"
        />
      </audio>

      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-card/80 backdrop-blur-md border-2 border-card-border rounded-full shadow-lg p-2 flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={togglePlay}
            data-testid="button-music-toggle"
            className="rounded-full h-10 w-10"
            title={isPlaying ? "Tạm dừng" : "Phát nhạc"}
          >
            <Music className={`h-5 w-5 ${isPlaying ? "text-primary" : ""}`} />
          </Button>

          {isPlaying && (
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleMute}
              data-testid="button-volume-toggle"
              className="rounded-full h-10 w-10"
              title={isMuted ? "Bật tiếng" : "Tắt tiếng"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5 text-primary" />
              )}
            </Button>
          )}

          {isPlaying && !isMuted && (
            <div className="flex items-center gap-1 px-2">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
              <div
                className="w-1 h-4 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="w-1 h-5 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          )}

          {isPlaying && (
            <div className="px-2 text-xs text-muted-foreground whitespace-nowrap hidden sm:block">
              Cảm xúc quê hương
            </div>
          )}
        </div>
      </div>
    </>
  );
}
