import { useEffect, useState } from "react";

interface LotusPetal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export function FloatingLotus() {
  const [petals, setPetals] = useState<LotusPetal[]>([]);

  useEffect(() => {
    const newPetals: LotusPetal[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 20 + Math.random() * 30,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-30 animate-float"
          style={{
            left: `${petal.left}%`,
            top: "-10%",
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, hsl(340, 75%, 75%), hsl(345, 70%, 55%))",
              filter: "blur(1px)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
