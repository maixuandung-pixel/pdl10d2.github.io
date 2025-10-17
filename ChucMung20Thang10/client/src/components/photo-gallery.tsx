import classroomImage from "@assets/generated_images/Classroom_celebration_background_5393a111.png";
import lotusImage from "@assets/generated_images/Decorative_lotus_flower_element_f802eeb5.png";
import { Camera } from "lucide-react";

export function PhotoGallery() {
  const galleryImages = [
    { id: "1", url: classroomImage, caption: "Lớp học thân yêu" },
    { id: "2", url: lotusImage, caption: "Sen Việt Nam" },
    { id: "3", url: classroomImage, caption: "Kỷ niệm đáng nhớ" },
    { id: "4", url: lotusImage, caption: "Hoa sen tươi đẹp" },
    { id: "5", url: classroomImage, caption: "Những ngày học vui" },
    { id: "6", url: lotusImage, caption: "Thanh khiết & đẹp đẽ" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Camera className="h-6 w-6 text-primary" />
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold text-foreground"
              data-testid="text-gallery-title"
            >
              Kỷ Niệm Lớp 10D2
            </h2>
            <Camera className="h-6 w-6 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những khoảnh khắc đẹp đáng nhớ của chúng ta
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl aspect-square hover-elevate transition-all duration-300"
              data-testid={`gallery-image-${image.id}`}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
