# AURORE - Space Exploration Website

A modern, interactive web application that takes users on a journey through space, featuring real-time 3D visualizations, space news updates, and educational content about our solar system.

## 🚀 Features

- Interactive 3D Solar System visualization with accurate planetary data
- Real-time space news integration with Space Flight News API
- Responsive design with dark theme and glassmorphism effects
- Animated UI components with GSAP and Framer Motion
- Planet information panels with detailed astronomical data
- News aggregation from multiple space agencies
- Immersive space-themed audio experience

## 🛠 Technologies Used

### Core Framework
- Catalyst Framework
- React 18.3
- React Router for navigation
- Vite for build tooling

### Styling
- Tailwind CSS for utility-first styling
- Styled Components for component-specific styles
- GSAP for advanced animations
- Framer Motion for UI animations

### 3D Visualization
- Three.js for 3D rendering
- React Three Fiber
- React Three Drei for 3D helpers

### Data Integration
- Axios for API calls
- Space Flight News API
- NASA APOD API

## 🏗 Project Structure


src/
├── components/         # Reusable UI components
│   ├── 3D/            # Three.js components
│   ├── layout/        # Layout components
│   └── ui/            # UI components
├── pages/             # Page components
├── assets/            # Static assets
└── styles/            # Global styles


## 🎨 Design System

1. *Colors*
   - Primary: #7B89E4 (Space Accent)
   - Secondary: #BF8AEB (Nebula)
   - Background: #0B0D17 (Space Dark)
   - Text: #FFFFFF, #94A3B8 (Gray)

2. *Typography*
   - Headings: Orbitron
   - Body: Inter

3. *UI Elements*
   - Glassmorphism cards
   - Animated buttons
   - Interactive 3D elements
   - Particle effects

## 🚀 Key Features

### News Integration
- Real-time space news updates
- Featured articles section
- News categorization
- Dynamic content loading

### Interactive Elements
- Smooth page transitions
- Hover effects
- Responsive animations
- Audio feedback

## 📱 Responsive Design


## 🔧 Setup Instructions

1. Clone the repository
bash
git clone <repository-url>


2. Install dependencies
bash
npm install


3. Start development server
bash
npm run dev


4. Build for production
bash
npm run build
