# Al Wafi Islamic Boarding School - Landing Page

A modern, responsive landing page for Al Wafi Islamic Boarding School built with React.js, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with Islamic aesthetic
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Built with Vite for optimal performance
- **Component-Based**: Modular React components for easy maintenance
- **Data-Driven**: Content managed through JSON data file
- **SEO Friendly**: Semantic HTML and proper meta tags

## 🛠 Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Font Awesome** - Icons and visual elements

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Main banner section
│   ├── About.jsx        # About section with vision/mission
│   ├── Programs.jsx     # Educational programs
│   ├── Alumni.jsx       # Alumni achievements
│   ├── Contact.jsx      # Contact information
│   └── Footer.jsx       # Footer section
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles

public/
└── data.json            # Content data
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lpwafi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📊 Data Management

All content is managed through `public/data.json` which includes:
- School information and branding
- Vision and mission statements
- Educational programs
- Alumni achievements and university logos
- Contact information and campus locations
- Social media links

## 🎨 Design System

- **Primary Color**: Green (#10b981)
- **Secondary Color**: Blue accents
- **Typography**: Inter font family
- **Components**: Consistent spacing, rounded corners, shadows
- **Responsive**: Mobile-first approach

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

The project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📄 License

This project is created for Al Wafi Islamic Boarding School.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
