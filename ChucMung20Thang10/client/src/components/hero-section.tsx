import heroImage from "@assets/generated_images/Vietnamese_lotus_celebration_hero_61fd513d.png";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--gradient-start) / 0.5), hsl(var(--gradient-end) / 0.7))",
        }}
      />

      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center text-white space-y-8">
          <div className="space-y-4">
            <h1
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              data-testid="text-hero-title"
            >
              Chúc Mừng 20/10
            </h1>
            <p className="text-2xl md:text-3xl font-light" data-testid="text-hero-subtitle">
              Ngày Phụ Nữ Việt Nam
            </p>
          </div>

          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-white to-transparent" />

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Gửi đến các bạn nữ lớp <span className="font-semibold">10D2</span> và{" "}
            <span className="font-semibold">Cô Chủ Nhiệm Hương Lan</span>
            <br />
            những lời chúc tốt đẹp nhất, niềm vui và hạnh phúc tràn đầy
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("greetings")}
              data-testid="button-view-greetings"
              className="rounded-full px-8 bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30"
            >
              <Heart className="mr-2 h-5 w-5" />
              Xem Lời Chúc
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("gallery")}
              data-testid="button-view-gallery"
              className="rounded-full px-8 bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white/20"
            >
              Kỷ Niệm Lớp Học
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
