import { Card } from "@/components/ui/card";
import { MessageCircle, Star } from "lucide-react";

interface Message {
  id: string;
  text: string;
  author: string;
  rotation: number;
}

const messages: Message[] = [
  {
    id: "1",
    text: "Chúc các bạn nữ luôn xinh đẹp và tươi vui!",
    author: "Bạn An",
    rotation: -2,
  },
  {
    id: "2",
    text: "Cô Hương Lan là người thầy tuyệt vời nhất!",
    author: "Bạn Bình",
    rotation: 1,
  },
  {
    id: "3",
    text: "20/10 vui vẻ, hạnh phúc tràn đầy!",
    author: "Bạn Châu",
    rotation: -1,
  },
  {
    id: "4",
    text: "Lớp 10D2 mãi là gia đình thân yêu!",
    author: "Bạn Dũng",
    rotation: 2,
  },
  {
    id: "5",
    text: "Chúc các bạn nữ thành công và rạng rỡ!",
    author: "Bạn Hiền",
    rotation: -1.5,
  },
  {
    id: "6",
    text: "Cảm ơn Cô đã luôn quan tâm chúng em!",
    author: "Bạn Kiên",
    rotation: 0.5,
  },
];

export function MessageWall() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold text-foreground"
              data-testid="text-messages-title"
            >
              Tường Lời Chúc
            </h2>
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những lời chúc từ tất cả mọi người
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message, index) => (
            <Card
              key={message.id}
              className="p-6 hover-elevate transition-all duration-300 border-2"
              data-testid={`message-${message.id}`}
              style={{
                transform: `rotate(${message.rotation}deg)`,
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <Star className="h-4 w-4 text-primary/60 fill-current" />
                </div>
                
                <p
                  className="text-base leading-relaxed text-card-foreground font-medium"
                  data-testid={`text-message-${message.id}`}
                >
                  "{message.text}"
                </p>
                
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                
                <p className="text-sm text-muted-foreground text-right font-medium">
                  — {message.author}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
