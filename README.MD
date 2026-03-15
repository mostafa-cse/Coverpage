# CoverPage Generator

A web app where students pick an academic cover page template, fill in their details, preview it live, and export it as PDF.

## Tech Stack
- **Frontend**: React + TypeScript (Vite) + Tailwind CSS
- **PDF Export**: react-to-print + html2canvas + jsPDF
- **Backend** *(optional)*: ASP.NET Core

## Features
- 4 built-in templates (Simple, Formal, BUET-style, Modern)
- Multi-step form with live preview
- Assignment & Lab Report modes
- PDF/Print export
- Custom template import via `{{placeholder}}` tags

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

## Project Structure
```
frontend/src/
├── components/
│   ├── TemplateSelector/
│   ├── CoverForm/
│   ├── PreviewPanel/
│   └── templates/
├── types/
├── utils/
└── pages/
```
