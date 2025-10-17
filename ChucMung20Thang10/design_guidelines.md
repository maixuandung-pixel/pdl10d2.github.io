# Design Guidelines: Vietnamese Women's Day Celebration Website

## Design Approach

**Reference-Based Approach** - Drawing inspiration from modern Vietnamese celebration platforms and social media aesthetics (Instagram stories, Zalo features) combined with traditional Vietnamese cultural elegance. This is an experience-focused, emotion-driven celebration that requires visual richness and cultural authenticity.

**Key Design Principles:**
- Elegance meets celebration: Balance festive energy with respectful sophistication
- Vietnamese cultural authenticity: Integrate lotus motifs, traditional patterns subtly
- Personal warmth: Create intimate, heartfelt atmosphere for class 10D2
- Joyful interactivity: Engaging elements that spark delight

---

## Color Palette

**Primary Colors (Light Mode):**
- Primary Pink: 340 75% 65% (Soft celebratory pink, main brand color)
- Deep Rose: 345 70% 45% (Elegant accent for text/buttons)
- Gold Accent: 45 90% 60% (Traditional Vietnamese festive gold - use sparingly)

**Supporting Colors:**
- Lotus White: 340 30% 97% (Background, cards)
- Warm Cream: 40 40% 95% (Section backgrounds)
- Soft Peach: 15 80% 88% (Subtle highlights)

**Dark Mode:**
- Rich Burgundy: 340 45% 15% (Primary background)
- Deep Pink: 340 60% 35% (Interactive elements)
- Muted Gold: 45 40% 50% (Refined gold accent)

---

## Typography

**Font Families:**
- Primary: 'Be Vietnam Pro' (Google Fonts) - Vietnamese-optimized, modern sans-serif for body text and UI
- Display: 'Playfair Display' (Google Fonts) - Elegant serif for headers, celebration messages

**Hierarchy:**
- Hero Heading: text-6xl md:text-7xl lg:text-8xl, Playfair Display, font-bold
- Section Titles: text-4xl md:text-5xl, Playfair Display, font-semibold
- Card Headings: text-2xl md:text-3xl, Be Vietnam Pro, font-semibold
- Body Text: text-base md:text-lg, Be Vietnam Pro, font-normal
- Captions: text-sm, Be Vietnam Pro, font-light

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Component padding: p-6 to p-12
- Section spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Element margins: m-4 to m-8

**Container Strategy:**
- Hero: Full-width with max-w-7xl inner container
- Content sections: max-w-6xl centered
- Card grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

---

## Component Library

**Hero Section:**
Large hero image showcasing Vietnamese Women's Day theme (lotus flowers, elegant festive imagery). Overlaid typography with celebration message. Soft gradient overlay (340 75% 65% to 345 70% 45% at 50% opacity) for text readability. Include floating lotus petal animations (very subtle).

**Greeting Cards Section:**
Masonry grid layout displaying personalized greeting cards. Each card with photo, name, heartfelt message. Glassmorphic cards (backdrop-blur-md, border, subtle shadow). Hover lift effect (transform scale-105).

**Photo Gallery:**
Pinterest-style responsive masonry grid of class memories. Images with rounded corners (rounded-xl). Lightbox modal on click with smooth transitions.

**Music Player:**
Floating bottom-right player (fixed position). Minimalist controls: play/pause, volume, track info. Glassmorphic background with blur effect.

**Message Wall:**
Interactive section where wishes appear as decorative cards. Staggered animation reveal on scroll. Mix of text sizes and rotations for dynamic feel.

**Navigation:**
Sticky header with glass effect. Logo/title on left, smooth scroll anchors to sections. Mobile hamburger menu with slide-in drawer.

**Buttons:**
- Primary: Deep Rose background, white text, rounded-full, px-8 py-4
- Outline (on images): backdrop-blur-md, border-2 Deep Rose, text-white, rounded-full
- Ghost: Transparent with Deep Rose text for secondary actions

**Footer:**
Clean, minimal. Class attribution, special thanks section, soft Warm Cream background.

---

## Images

**Large Hero Image:** YES - Full-width hero showcasing Vietnamese lotus flowers, October 20th celebration theme, warm festive atmosphere. Should feel elegant and celebratory, not generic stock photo.

**Additional Images:**
- Greeting card avatars: Personal photos of each female student and teacher Hương Lan
- Gallery section: 15-20 class memory photos in various sizes
- Decorative elements: Subtle lotus illustrations, Vietnamese traditional patterns as background textures
- Section dividers: Watercolor-style lotus motifs between major sections

---

## Animations

**Minimal & Purposeful:**
- Entrance animations: Fade-up on scroll for cards/sections (subtle, 0.3s duration)
- Lotus petals: 3-5 floating petals in hero (slow, gentle movement)
- Hover states: Gentle lift on cards (scale-105, 0.2s ease)
- Page transitions: Smooth fade between sections on scroll
- NO complex scroll-triggered animations, NO parallax effects, NO excessive motion

---

## Accessibility & Experience

- Maintain dark mode consistency across all components including forms
- Vietnamese language support throughout (UTF-8 encoding)
- High contrast ratios for text readability (WCAG AA minimum)
- Touch-friendly tap targets (min 44x44px) for mobile
- Keyboard navigation support for all interactive elements
- Respectful, appropriate celebration tone in all messaging