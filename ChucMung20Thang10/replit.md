# Trang Web Chúc Mừng 20/10 - Lớp 10D2

## Tổng Quan Dự Án

Đây là trang web chúc mừng ngày Phụ nữ Việt Nam 20/10 được tạo ra để gửi lời chúc đến các bạn nữ lớp 10D2 và cô chủ nhiệm Hương Lan. Trang web được thiết kế với phong cách văn hóa Việt Nam truyền thống, sử dụng hình ảnh hoa sen và bảng màu hồng/đỏ hồng/vàng gold tươi sáng.

## Tính Năng Chính

### 1. Hero Section (Phần Mở Đầu)
- Hình nền hoa sen Việt Nam đẹp mắt
- Tiêu đề lớn "Chúc Mừng 20/10" với hiệu ứng gradient
- Nút cuộn mượt mà đến các phần khác nhau

### 2. Greeting Cards (Thiệp Chúc Mừng)
- Thiệp chúc mừng cô Hương Lan với lời chúc chân thành
- Thiệp chúc mừng các bạn nữ lớp 10D2
- Hiệu ứng hover nổi bật

### 3. Photo Gallery (Thư Viện Ảnh)
- Bố cục lưới responsive với 6 hình ảnh
- Hiệu ứng hover hiển thị caption
- Phóng to ảnh khi di chuột

### 4. Message Wall (Tường Lời Chúc)
- 6 lời chúc từ các bạn trong lớp
- Thiết kế thẻ nghiêng nhẹ tạo cảm giác tự nhiên
- Tên tác giả kèm theo mỗi lời chúc

### 5. Music Player (Trình Phát Nhạc)
- Vị trí cố định góc dưới bên phải
- Nhạc nền "Cảm xúc quê hương" (nhạc không lời Việt Nam)
- Điều khiển phát/tạm dừng và bật/tắt tiếng

### 6. Theme Toggle (Chuyển Đổi Giao Diện)
- Chế độ sáng và tối
- Lưu lựa chọn người dùng
- Màu sắc tối ưu cho cả hai chế độ

### 7. Floating Lotus (Cánh Hoa Sen Bay)
- 5 cánh hoa sen bay nhẹ nhàng
- Animation tự nhiên, không cản trở tương tác
- Tạo không khí lễ hội

## Công Nghệ Sử Dụng

- **Frontend Framework**: React 18 với TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter
- **Fonts**: 
  - Be Vietnam Pro (body text)
  - Playfair Display (headings)
- **Backend**: Express.js (minimal, chỉ serve static files)
- **Build Tool**: Vite

## Hệ Thống Thiết Kế

### Màu Sắc (Light Mode)
- **Primary Pink**: `hsl(340, 75%, 65%)` - Màu hồng chính
- **Deep Rose**: `hsl(345, 70%, 45%)` - Đỏ hồng đậm
- **Gold Accent**: `hsl(45, 90%, 60%)` - Vàng gold điểm nhấn
- **Lotus White**: `hsl(340, 30%, 97%)` - Trắng sen
- **Warm Cream**: `hsl(40, 40%, 95%)` - Kem ấm

### Màu Sắc (Dark Mode)
- **Rich Burgundy**: `hsl(340, 45%, 15%)` - Nền tối
- **Deep Pink**: `hsl(340, 60%, 35%)` - Hồng đậm
- **Muted Gold**: `hsl(45, 40%, 50%)` - Vàng nhẹ

### Typography
- **Headings**: Playfair Display (serif, thanh lịch)
- **Body**: Be Vietnam Pro (sans-serif, dễ đọc)
- **Hierarchy**: text-6xl → text-4xl → text-2xl → text-base

### Spacing
- Component padding: p-6 đến p-12
- Section spacing: py-16 đến py-24
- Card gaps: gap-6 đến gap-8

## Cấu Trúc Thư Mục

```
client/src/
├── components/
│   ├── hero-section.tsx          # Hero với gradient và CTA
│   ├── greeting-cards.tsx        # Thiệp chúc mừng
│   ├── photo-gallery.tsx         # Thư viện ảnh
│   ├── message-wall.tsx          # Tường lời chúc
│   ├── music-player.tsx          # Trình phát nhạc
│   ├── floating-lotus.tsx        # Animation cánh sen
│   ├── theme-toggle.tsx          # Chuyển đổi dark/light
│   └── ui/                       # shadcn components
├── pages/
│   ├── home.tsx                  # Trang chính
│   └── not-found.tsx            # Trang 404
├── lib/
│   └── queryClient.ts           # React Query config
└── App.tsx                       # Router chính

server/
├── index.ts                      # Express server
├── routes.ts                     # API routes
└── storage.ts                    # Storage interface

shared/
└── schema.ts                     # TypeScript types
```

## Hướng Dẫn Chạy Dự Án

1. **Development Mode**:
   ```bash
   npm run dev
   ```
   Server chạy tại: http://localhost:5000

2. **Build for Production**:
   ```bash
   npm run build
   ```

## Tùy Chỉnh

### Thay Đổi Nhạc Nền
Để thay đổi nhạc nền, cập nhật URL trong file `client/src/components/music-player.tsx`:

```tsx
<source
  src="YOUR_AUDIO_FILE_URL_HERE"
  type="audio/ogg" // hoặc audio/mp3
/>
```

### Thêm Ảnh Vào Gallery
Thêm hình ảnh vào mảng `galleryImages` trong `client/src/components/photo-gallery.tsx`:

```tsx
const galleryImages = [
  { id: "1", url: yourImage, caption: "Mô tả ảnh" },
  // Thêm ảnh mới ở đây
];
```

### Cập Nhật Lời Chúc
Chỉnh sửa mảng `greetings` trong `client/src/components/greeting-cards.tsx`:

```tsx
const greetings: Greeting[] = [
  {
    id: "teacher",
    name: "Cô Hương Lan",
    message: "Lời chúc của bạn...",
    isTeacher: true,
  },
  // Thêm lời chúc mới
];
```

### Thêm Tin Nhắn Tường
Cập nhật mảng `messages` trong `client/src/components/message-wall.tsx`:

```tsx
const messages: Message[] = [
  {
    id: "1",
    text: "Tin nhắn của bạn",
    author: "Tên bạn",
    rotation: -2, // Độ nghiêng (-3 đến 3)
  },
  // Thêm tin nhắn mới
];
```

## Thay Đổi Gần Đây

### 2025-10-17
- ✨ Tạo trang web chúc mừng 20/10 hoàn chỉnh
- 🎨 Thiết kế theo văn hóa Việt Nam với hoa sen
- 🎵 Thêm nhạc nền "Cảm xúc quê hương" (public domain)
- 🌓 Hỗ trợ dark mode
- 📱 Responsive design cho mọi thiết bị
- ✨ Animation cánh sen bay mượt mà

## Credits

- **Nhạc nền**: "Cảm xúc quê hương" từ Internet Archive (Public Domain)
- **Hình ảnh**: AI-generated Vietnamese lotus imagery
- **Fonts**: Google Fonts (Be Vietnam Pro, Playfair Display)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Lưu Ý

- Trang web này được tạo với tình yêu thương và sự trân trọng
- Tất cả nội dung có thể được tùy chỉnh theo ý muốn
- Nhạc nền sử dụng nguồn public domain, hoàn toàn hợp pháp
- Responsive và hoạt động tốt trên mọi thiết bị

---

**Chúc mừng ngày 20/10!** 🌸✨

*Được tạo bởi Lớp 10D2 với yêu thương*
