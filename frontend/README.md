# CoverPage Generator — Frontend

A React + TypeScript (Vite) web app for generating academic cover pages.

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Features

- **4 Built-in Templates** — Classic, BUET-style, DU-style, Modern Minimal
- **Multi-step Form** — Doc type → University → Subject → People → Dates
- **Lab Report Mode** — Extra fields: experiment no., title, date of experiment
- **Live A4 Preview** — Updates in real-time as you type
- **PDF Export** — via `jsPDF` + `html2canvas`
- **Print** — via `react-to-print` with `@media print` CSS
- **Custom HTML Templates** — Upload `.html` with `{{placeholder}}` tokens
- **Auto-save** — Form data persisted to `localStorage`

## Placeholder Tokens (Custom Templates)

| Token | Value |
|---|---|
| `{{universityName}}` | University name |
| `{{universityDept}}` | Department |
| `{{subjectName}}` | Course/subject name |
| `{{courseCode}}` | Course code |
| `{{courseType}}` | Theory / Lab / Project |
| `{{session}}` | Academic session |
| `{{studentName}}` | Student full name |
| `{{studentRoll}}` | Roll number |
| `{{studentRegNo}}` | Registration number |
| `{{studentYear}}` | Year (1st/2nd/3rd/4th) |
| `{{studentSemester}}` | Semester |
| `{{groupNo}}` | Group number |
| `{{teacherName}}` | Teacher name |
| `{{teacherDesignation}}` | Designation |
| `{{teacherDept}}` | Teacher's department |
| `{{teacherUniversity}}` | Teacher's university |
| `{{submissionDate}}` | Date of submission |
| `{{experimentDate}}` | Date of experiment (lab) |
| `{{experimentNo}}` | Experiment number (lab) |
| `{{experimentTitle}}` | Experiment title (lab) |
| `{{docType}}` | Assignment / Lab Report |

## Folder Structure

```
src/
├── components/
│   ├── CoverForm/          # 5-step form components
│   ├── CustomTemplateImport/
│   ├── ExportBar/
│   ├── PreviewPanel/
│   ├── TemplateSelector/
│   └── templates/          # ClassicTemplate, BUETTemplate, DUTemplate, ModernTemplate
├── pages/
│   ├── Home.tsx
│   └── Editor.tsx
├── types/
│   ├── CoverPageData.ts
│   └── Template.ts
└── utils/
    ├── customTemplate.ts
    ├── exportPDF.ts
    └── localStorage.ts
```
