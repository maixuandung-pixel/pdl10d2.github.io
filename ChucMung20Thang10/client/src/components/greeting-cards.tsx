import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";
import type { Greeting } from "@shared/schema";

const greetings: Greeting[] = [
  {
    id: "teacher",
    name: "Cô Hương Lan",
    message:
      "Kính gửi Cô Hương Lan thân mến, nhân ngày 20/10, chúng em xin gửi đến Cô lời chúc sức khỏe dồi dào, luôn tràn đầy năng lượng và niềm vui trong công việc. Cảm ơn Cô đã luôn dành tình yêu thương, sự quan tâm và những bài học quý báu cho chúng em. Cô mãi là người thầy đáng kính trong lòng học trò!",
    isTeacher: true,
  },
  {
    id: "1",
    name: "Các Bạn Nữ 10D2",
    message:
      "Chúc các bạn nữ lớp 10D2 luôn xinh đẹp, tươi trẻ và rạng rỡ như những bông hoa sen trong ngày 20/10 này. Mong rằng các bạn sẽ luôn giữ được nụ cười tươi, tinh thần lạc quan và đạt được nhiều thành công trong học tập cũng như cuộc sống!",
    isTeacher: false,
  },
];

export function GreetingCards() {
  return (
    <section id="greetings" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold text-foreground"
              data-testid="text-greetings-title"
            >
              Lời Chúc Chân Thành
            </h2>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những lời chúc yêu thương và trân trọng nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {greetings.map((greeting, index) => (
            <Card
              key={greeting.id}
              className="p-8 hover-elevate transition-all duration-300 border-2"
              data-testid={`card-greeting-${greeting.id}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-semibold text-lg">
                      {greeting.isTeacher ? "CÔ" : "10D2"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3
                      className="font-serif text-2xl font-semibold text-foreground"
                      data-testid={`text-greeting-name-${greeting.id}`}
                    >
                      {greeting.name}
                    </h3>
                    {greeting.isTeacher && (
                      <p className="text-sm text-muted-foreground">
                        Chủ Nhiệm Lớp 10D2
                      </p>
                    )}
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <p
                  className="text-base leading-relaxed text-card-foreground"
                  data-testid={`text-greeting-message-${greeting.id}`}
                >
                  {greeting.message}
                </p>

                <div className="flex justify-end">
                  <div className="text-primary">
                    <Heart className="h-6 w-6 fill-current" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
      />
    </svg>
  );
}
