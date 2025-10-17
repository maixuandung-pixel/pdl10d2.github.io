import { HeroSection } from "@/components/hero-section";
import { GreetingCards } from "@/components/greeting-cards";
import { PhotoGallery } from "@/components/photo-gallery";
import { MessageWall } from "@/components/message-wall";
import { MusicPlayer } from "@/components/music-player";
import { FloatingLotus } from "@/components/floating-lotus";
import { ThemeToggle } from "@/components/theme-toggle";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingLotus />
      
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary fill-current" />
            <span className="font-serif text-xl font-semibold text-foreground">
              20/10 - Lớp 10D2
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="pt-16">
        <HeroSection />
        <GreetingCards />
        <PhotoGallery />
        <MessageWall />
        
        <footer className="py-12 px-6 bg-muted/30 border-t border-border">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-primary fill-current" />
              <p className="text-foreground font-medium">
                Chúc mừng ngày Phụ nữ Việt Nam 20/10
              </p>
              <Heart className="h-5 w-5 text-primary fill-current" />
            </div>
            <p className="text-muted-foreground text-sm">
              Với tình yêu thương và lòng trân trọng từ Lớp 10D2
            </p>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />
            <p className="text-muted-foreground text-xs">
              © 2025 Lớp 10D2 • Trang web được tạo với yêu thương
            </p>
          </div>
        </footer>
      </main>

      <MusicPlayer />
    </div>
  );
}
