# 📋 CoverPage Generator

A powerful web application that helps students create professional academic cover pages for assignments and lab reports. Pick from 11 meticulously designed templates, fill in your details, preview in real-time, and export as print-ready PDF.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://mostafa-cse.github.io/Coverpage/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## ✨ Features

### 🎨 11 Professional Templates
- **Classic** - Universal centered serif layout
- **BUET** - Double border frame, engineering standard
- **DU** - Underlined headings, DU academic format
- **KUET** - Corner-decorated border frame
- **RUET** - Top & bottom accent bars
- **NSU** - Side-by-side header, private university style
- **Elegant** - Premium formal with thick accent bars
- **Modern** - Minimal horizontal header design
- **JUST Style 1** - Logo + two-column layout
- **JUST Style 2** - Compact, no-logo format
- **Scholarly Classic** - Ornamental double border, thesis-ready

📖 **[View Template Gallery →](./TEMPLATE_SHOWCASE.md)**

### 🚀 Core Features
- ✅ **11 Built-in Templates** - All A4, Times New Roman, print-ready
- ✅ **Live Preview** - Real-time A4 preview with responsive scaling
- ✅ **Assignment & Lab Report Modes** - Extra fields for experiments
- ✅ **Logo Upload** - University logo support (PNG/JPG)
- ✅ **PDF Export** - High-quality PDF via jsPDF + html2canvas
- ✅ **Print Support** - Direct browser printing with print CSS
- ✅ **Auto-Save** - Form data persisted to localStorage
- ✅ **Custom Templates** - Import HTML with `{{placeholder}}` tokens
- ✅ **Dark Mode** - White/Dark/Black-Glass themes (UI only, print stays white)
- ✅ **Responsive Design** - Desktop/tablet/mobile optimized

---

## 📚 Documentation

- 📖 [Complete Template Guide](./TEMPLATES.md) - Detailed technical documentation
- 🎨 [Visual Template Showcase](./TEMPLATE_SHOWCASE.md) - ASCII art previews & quick reference
- 💡 [Custom Template Guide](./frontend/README.md) - Create your own templates

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.2 + TypeScript 5.2
- **Build Tool**: Vite 5.1 (fast HMR & optimized builds)
- **Styling**: Tailwind CSS 3.4 + Custom CSS with CSS Variables
- **Routing**: React Router v6 (HashRouter for GitHub Pages)
- **State**: React Context API + localStorage persistence

### PDF Generation
- **react-to-print** - Browser printing
- **html2canvas** - DOM to canvas rendering
- **jsPDF** - PDF file generation

### Deployment
- **Platform**: GitHub Pages
- **CI/CD**: GitHub Actions (automatic deployment on push)
- **Base Path**: `/Coverpage/`

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ (recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mostafa-cse/Coverpage.git
cd Coverpage/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173/Coverpage/](http://localhost:5173/Coverpage/)

### Build for Production

```bash
npm run build
```

Output will be in `frontend/dist/`

---

## 📂 Project Structure

```
frontend/src/
├── components/
│   ├── CoverForm/              # Form controls (consolidated single-page form)
│   │   └── CoverForm.tsx       # Main form with all sections
│   ├── PreviewPanel/           # A4 live preview with scaling
│   ├── ExportBar/              # PDF/Print/Clear actions
│   ├── CustomTemplateImport/   # HTML template uploader
│   ├── ThemeToggle/            # Dark mode switcher
│   └── templates/              # 11 template implementations
│       ├── ClassicTemplate.tsx
│       ├── BUETTemplate.tsx
│       ├── DUTemplate.tsx
│       ├── KUETTemplate.tsx
│       ├── RUETTemplate.tsx
│       ├── NSUTemplate.tsx
│       ├── ElegantTemplate.tsx
│       ├── ModernTemplate.tsx
│       ├── JUSTStyle1Template.tsx
│       ├── JUSTStyle2Template.tsx
│       ├── ScholarlyClassicTemplate.tsx
│       └── index.ts
├── pages/
│   ├── Home.tsx               # Landing page with template gallery
│   └── Editor.tsx             # Main editor (sidebar + preview)
├── context/
│   └── ThemeContext.tsx       # Theme state + system detection
├── utils/
│   ├── localStorage.ts        # Form data persistence
│   ├── exportPDF.ts           # PDF generation logic
│   └── customTemplate.ts      # Placeholder token replacement
├── types/
│   ├── CoverPageData.ts       # Main data model
│   └── Template.ts            # Template metadata
├── hooks/
│   └── useLocalStorageState.ts
└── data/
    └── templates.ts           # Template configurations
```

---

## 🎯 Usage Guide

### Step 1: Choose Template
1. Visit the [Editor page](https://mostafa-cse.github.io/Coverpage/#/editor)
2. Select your preferred style from 11 templates in the sidebar
3. Preview updates in real-time

### Step 2: Fill Details

**Document Type**
- Assignment or Lab Report

**University Information**
- University name
- Department
- Logo (optional, PNG/JPG)
- Address (optional)

**Course Details**
- Course title
- Course code
- Course type (Theory/Lab/Project)
- Session (e.g., 2021-22)

**Student Information (Submitted By)**
- Full name
- Roll number
- Registration number
- Year & Semester
- Group number (optional)

**Teacher Information (Submitted To)**
- Teacher name
- Designation (Professor/Associate Prof/Assistant Prof/Lecturer)
- Department
- University

**Dates**
- Submission date

**Lab Report Only**
- Experiment number
- Experiment title
- Date of experiment

### Step 3: Export
- **Download PDF**: High-quality PDF file (2× resolution)
- **Print**: Direct browser printing with print CSS
- **Clear**: Reset form data

---

## 🎨 Template Customization

### Custom Template Import
1. Create HTML file with Times New Roman font
2. Use `{{placeholder}}` tokens for dynamic data
3. Set page to 210mm × 297mm (A4)
4. Click "Import Template" in editor

### Available Placeholders
```
{{universityName}}      {{universityDept}}
{{subjectName}}         {{courseCode}}
{{courseType}}          {{session}}
{{studentName}}         {{studentRoll}}
{{studentRegNo}}        {{studentYear}}
{{studentSemester}}     {{groupNo}}
{{teacherName}}         {{teacherDesignation}}
{{teacherDept}}         {{teacherUniversity}}
{{submissionDate}}      {{experimentDate}}
{{experimentNo}}        {{experimentTitle}}
{{docType}}             (Assignment or Lab Report)
```

### Example Custom Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Times New Roman', Times, serif;
      width: 210mm;
      min-height: 297mm;
      padding: 20mm;
      font-size: 12pt;
    }
    h1 { text-align: center; font-size: 18pt; }
  </style>
</head>
<body>
  <h1>{{universityName}}</h1>
  <h2>{{docType}}</h2>
  <p><strong>Course:</strong> {{subjectName}} ({{courseCode}})</p>
  <p><strong>Student:</strong> {{studentName}} - {{studentRoll}}</p>
  <p><strong>Submitted to:</strong> {{teacherName}}, {{teacherDesignation}}</p>
  <p><strong>Date:</strong> {{submissionDate}}</p>
</body>
</html>
```

---

## 🌈 Theme System

### Available Themes
- **White** (default) - Clean light theme
- **Dark** - Premium dark with soft indigo accents
- **Black Glass** - Glassmorphism dark theme
- **System** - Follows OS preference

### Theme Variables
All themes use CSS custom properties for easy customization:
```css
:root {
  --bg-main: #f8fafc;
  --text-main: #0f172a;
  --card-bg: rgba(255, 255, 255, 0.85);
  --accent: #3b82f6;
  /* ... and more */
}
```

Note: Themes only affect the UI. Templates are always print-ready white.

---

## 🔧 Configuration

### Vite Config
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/Coverpage/',  // GitHub Pages base path
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
```

### Tailwind Config
```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  }
}
```

---

## 📦 Deployment

### Automatic Deployment (GitHub Actions)
Push to `main` branch triggers automatic deployment via `.github/workflows/deploy.yml`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting service
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
- Follow TypeScript strict mode
- Use Times New Roman for all templates
- Keep templates at exactly 210mm × 297mm (A4)
- Maintain print-friendly black ink only
- Test PDF export thoroughly

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**M0stafa**  
Department of Computer Science and Engineering  
Jashore University of Science and Technology (JUST)

- 🌐 Website: [mostafa-cse.github.io/Coverpage](https://mostafa-cse.github.io/Coverpage/)
- 💼 GitHub: [@mostafa-cse](https://github.com/mostafa-cse)
- 📘 Facebook: [muhammadm0stafa](https://www.facebook.com/muhammadm0stafa/)

---

## 🙏 Acknowledgments

- Built for students of Bangladesh universities
- Inspired by traditional academic cover page formats
- Special thanks to JUST CSE Department

---

## 📊 Version History

### v0.1.0 (Current)
- ✅ 11 professional templates
- ✅ Assignment & Lab Report modes
- ✅ PDF & Print export
- ✅ Custom template support
- ✅ Dark mode themes
- ✅ Auto-save functionality
- ✅ Responsive design
- ✅ Logo upload support

---

**⭐ Star this repo if you find it useful!**

Made with ❤️ for academic excellence
