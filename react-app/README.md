# PLAYMAKERS React App

A modern React application for PLAYMAKERS Football Coaching business.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy your `styles.css` file into `src/App.css`

3. Create a `public` folder and add:
   - Your videos in `public/videos/`
   - Your images in `public/images/`

### Development

Run the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
react-app/
├── src/
│   ├── components/        # All React components
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── CoachesSection.jsx
│   │   ├── CoachCard.jsx
│   │   ├── SessionsSection.jsx
│   │   ├── SessionCard.jsx
│   │   └── ...
│   ├── data/
│   │   └── data.js       # All data arrays
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   ├── App.css           # Main styles (copy from styles.css)
│   └── index.css         # Global styles
├── public/               # Static assets
│   ├── videos/
│   └── images/
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Adding Your Own Images

1. Replace the Unsplash URLs in `src/data/data.js` with local paths:
```javascript
image: '/images/coaches/jack.jpg'
```

2. Place images in `public/images/` folder

### Adding Videos

1. Place video files in `public/videos/`
2. Update paths in `src/data/data.js`

### Updating Content

All content is centralized in `src/data/data.js`:
- Coaches information
- Services/Sessions
- Videos
- Instagram posts
- Contact information

## 🌐 Deployment

### Netlify (Recommended)
1. Build the app: `npm run build`
2. Drag the `dist/` folder to Netlify
3. Or connect your Git repository for auto-deployment

### Vercel
1. Import your repository
2. Vercel auto-detects Vite
3. Deploy automatically

## 📝 Notes

- The app uses Vite for fast development and optimized builds
- All components are functional components with React Hooks
- Mobile navigation is handled with React state
- Fully responsive design maintained from original HTML
