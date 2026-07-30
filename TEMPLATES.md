# CoverPage Templates Gallery

This document showcases all 11 academic cover page templates available in the CoverPage Generator.

## Template Overview

All templates are designed with:
- **A4 dimensions** (210mm × 297mm)
- **Times New Roman font** for academic authenticity
- **Print-ready styling** with exact spacing
- **Support for both Assignment and Lab Report modes**
- **Logo upload capability**
- **Dark/Light theme preview** (templates themselves are always print-ready white)

---

## 1. Classic Template (Style 1)
**ID:** `classic`  
**Tags:** universal, formal

### Description
Clean centered serif layout — classic A4 format suitable for all BD universities.

### Features
- Centered university logo at top
- Bold university name in all caps
- Double horizontal rules (thick + thin)
- Boxed document type label
- Two-column submission section (Submitted By | Submitted To)
- Footer with thick rule and submission date

### Best For
- General assignments across all universities
- Formal reports
- Standard academic submissions

### Layout Structure
```
┌──────────────────────────────────┐
│         [University Logo]         │
│      UNIVERSITY NAME (16pt)       │
│    Department of Department       │
│         Address (optional)        │
│  ═══════════════════════════════  │ (thick + thin rule)
│     ┌──────────────────┐          │
│     │   ASSIGNMENT     │          │
│     └──────────────────┘          │
│                                   │
│  Course Title  : Subject Name     │
│  Course Code   : CSE 301          │
│  Session       : 2021-22          │
│  ───────────────────────────────  │
│                                   │
│  ┌─────────────┐ ┌─────────────┐ │
│  │ Submitted By│ │ Submitted To│ │
│  │   (details) │ │   (details) │ │
│  └─────────────┘ └─────────────┘ │
│  ═══════════════════════════════  │
│  Date of Submission: 2024-01-15   │
└──────────────────────────────────┘
```

---

## 2. BUET Template (Style 2)
**ID:** `buet`  
**Tags:** BUET, engineering

### Description
Double border frame with boxed layout — inspired by BUET engineering standards.

### Features
- **Double border:** 3px outer border + 1px inner border (ornamental frame)
- University logo with centered header
- Triple horizontal rule divider
- Boxed document type with extra padding
- Grey header bars for submission sections
- Boxed course information

### Best For
- BUET students
- Engineering departments
- Formal engineering reports

### Unique Elements
- `border: 3px solid #000` with `outline: 1px solid #000`
- Grey background (`#f0f0f0`) for section headers
- More padding and spacing for premium feel

---

## 3. DU Template (Style 3)
**ID:** `du`  
**Tags:** DU, arts, science

### Description
Underlined headings with double rules — DU compact serif academic format.

### Features
- Centered logo and university name
- Double horizontal rules (2px + 1px)
- **Underlined document type** (unique styling)
- Stacked submission sections with underlined headers
- "Submitted By:" and "Submitted To:" as separate blocks
- Combined Year & Semester display

### Best For
- University of Dhaka students
- Arts and science faculties
- Traditional academic style preference

### Unique Elements
- `textDecoration: 'underline'` for section headers
- Vertical stacking instead of side-by-side layout
- More compact spacing

---

## 4. KUET Template (Style 4)
**ID:** `kuet`  
**Tags:** KUET, engineering

### Description
Corner-decorated border frame — KUET-inspired academic layout.

### Features
- **Corner decorations:** Four ornamental corner frames (14mm × 14mm)
- 3px solid outer border
- Centered logo header
- Triple ornamental rule divider
- Boxed course information section
- Grey section headers like BUET style

### Best For
- KUET students
- Engineering departments
- Decorative formal reports

### Unique Elements
- Four absolutely positioned corner decorations
- `position: relative` parent container
- Corner styling: `{ borderTop: '2px solid', borderLeft: '2px solid' }` etc.

---

## 5. RUET Template (Style 5)
**ID:** `ruet`  
**Tags:** RUET, engineering

### Description
Top & bottom accent bars with double rules — RUET standard format.

### Features
- **Full-width accent bars:** 6px black bars at top and bottom
- 2px border around entire page
- Centered logo and header
- Row-by-row course info with light grey borders
- Double horizontal rules

### Best For
- RUET students
- Engineering reports
- Modern clean aesthetic

### Unique Elements
- `height: '6px', background: '#000'` accent bars
- `borderBottom: '1px solid #e0e0e0'` for table rows
- Inside-border accent bars (contained within page border)

---

## 6. NSU Template (Style 6)
**ID:** `nsu`  
**Tags:** NSU, private, BRAC, DIU

### Description
Side-by-side header with boxed course info — private university format.

### Features
- **Horizontal header layout:** Logo + University name side-by-side
- Top & bottom 5px accent bars
- Grey-header boxed sections ("Course Information", "Submitted By", etc.)
- 1.5px border around entire page
- Modern sans-serif styling in headers

### Best For
- NSU, BRAC, IUB, DIU students
- Private universities
- Modern academic style

### Unique Elements
- `display: 'flex'` header with logo on left
- `background: '#f0f0f0'` box headers with `borderBottom`
- Cleaner, more contemporary design

---

## 7. Elegant Template (Style 7)
**ID:** `elegant`  
**Tags:** premium, elegant

### Description
Thick accent bars with clean serif typography — elegant premium formal.

### Features
- **Double accent bars:** 6px + 2px at top and bottom
- Centered logo in header section
- All-caps university name with extra letter-spacing
- Grey section backgrounds (`#f5f5f5`)
- Bordered submission boxes
- Centered date box at bottom

### Best For
- Premium formal submissions
- Thesis cover pages
- High-profile academic reports

### Unique Elements
- Multiple accent bar layers (`height: 6px` + `height: 2px`)
- Extra padding and spacing throughout
- `letterSpacing: '1.5px'` on university name
- Small-caps effect on section headers

---

## 8. Modern Template (Style 8)
**ID:** `modern`  
**Tags:** modern, minimal

### Description
Horizontal header with left-border subject block — modern minimal design.

### Features
- **No outer border** (clean minimal look)
- 5px accent bars at top and bottom only
- Horizontal logo + name header (like NSU but more minimal)
- **Left-border accent** on subject block (`borderLeft: '3px solid #000'`)
- Document type as small tag/badge
- Footer with horizontal info layout

### Best For
- Contemporary style preference
- Modern universities
- Minimal clean aesthetic

### Unique Elements
- `padding: '0'` (no page padding, uses section padding)
- `borderLeft: '3px solid'` for subject emphasis
- Horizontal footer with multiple info points
- No table borders, cleaner spacing

---

## 9. JUST Style 1 (Style 9)
**ID:** `just1`  
**Tags:** JUST, Jashore

### Description
Logo + university centered with two-column submission table.

### Features
- Large logo (120px × 120px)
- "Assignment On" / "Lab Report On" label
- Bold centered title
- Course metadata as inline text (Code | Session | Exp. No.)
- **Two-column layout** with right border divider
- "Submitted By:" left column, "Submitted To:" right column

### Best For
- Jashore University of Science and Technology students
- Traditional JUST format preference

### Unique Elements
- `borderRight: '1px solid #000'` column divider
- Stacked format for teacher info (not table)
- Larger logo size
- Inline metadata with `|` separators

---

## 10. JUST Style 2 (Style 10)
**ID:** `just2`  
**Tags:** JUST, Jashore, compact

### Description
No logo, course info first, side-by-side submission layout — compact variation.

### Features
- **No logo** (text-only header)
- 1.5px border around entire page
- Triple ornamental rule divider
- Course info table at top (before title)
- "Assignment on" / "Lab report on" label
- Side-by-side submission sections

### Best For
- JUST students preferring no-logo format
- When logo is unavailable
- More compact layout

### Unique Elements
- Larger university name (18pt) to compensate for no logo
- Course table comes first (reversed order)
- `borderTop: '3px double #000'` ornamental divider
- Both submission sections use tables (not stacked text)

---

## 11. Scholarly Classic Template (Style 11)
**ID:** `scholarly`  
**Tags:** scholarly, premium, formal

### Description
Ornamental double border with small-caps and italic doc label — scholarly premium.

### Features
- **Ornamental frame:** 2.5px outer border + 1px inner outline with `-5mm` offset
- Small-caps university name (`fontVariant: 'small-caps'`)
- **Italic document type** label (`fontStyle: 'italic'`)
- Grey section headers with small-caps
- Double border tables
- Triple ornamental footer divider

### Best For
- Thesis and dissertation covers
- PhD submissions
- Scholarly publications
- Premium formal requirements

### Unique Elements
- `outline: '1px solid #000', outlineOffset: '-5mm'` creates inner border
- `fontVariant: 'small-caps'` for elegant typography
- `fontStyle: 'italic'` on doc type
- `borderTop: '3px double #000'` footer divider
- Most ornamental and formal design

---

## Template Comparison Table

| Template | Border Style | Logo Size | Header Layout | Best For |
|----------|-------------|-----------|---------------|----------|
| Classic | Double rule | 110px | Centered | Universal |
| BUET | Double frame | 96px | Centered | BUET / Engineering |
| DU | Double rule | 90px | Centered | DU / Arts & Science |
| KUET | Corner-decorated | 100px | Centered | KUET / Engineering |
| RUET | Accent bars + border | 96px | Centered | RUET / Engineering |
| NSU | Accent bars + border | 80px | Horizontal | Private universities |
| Elegant | Double accent bars | 90px | Centered | Premium formal |
| Modern | Accent bars only | 68px | Horizontal | Modern minimal |
| JUST Style 1 | Thick rule | 120px | Centered | JUST traditional |
| JUST Style 2 | Border + triple rule | None | Text-only | JUST compact |
| Scholarly | Ornamental frame | 96px | Centered | Scholarly/Thesis |

---

## Common Template Features

All templates support:

### Assignment Mode Fields
- Document type (Assignment)
- University name, department, address, logo
- Course title, code, type (Theory/Lab/Project), session
- Student: name, roll, registration, year, semester, group
- Teacher: name, designation, department, university
- Submission date

### Lab Report Mode Fields
All assignment fields PLUS:
- Experiment number
- Experiment title
- Date of experiment

### Responsive Features
- A4 dimensions locked at 210mm × 297mm
- Print-optimized styling
- PDF export via html2canvas + jsPDF
- Browser print via react-to-print
- Live preview with scaling

---

## Template Selection Guide

### By University
- **BUET:** Style 2 (BUET Template)
- **DU:** Style 3 (DU Template)
- **KUET:** Style 4 (KUET Template)
- **RUET:** Style 5 (RUET Template)
- **NSU/BRAC/DIU:** Style 6 (NSU Template)
- **JUST:** Style 9 or 10 (JUST Style 1 or 2)

### By Aesthetic
- **Traditional:** Style 1 (Classic), Style 3 (DU)
- **Modern:** Style 8 (Modern), Style 6 (NSU)
- **Premium:** Style 7 (Elegant), Style 11 (Scholarly)
- **Engineering:** Style 2 (BUET), Style 4 (KUET), Style 5 (RUET)

### By Border Preference
- **No border:** Style 8 (Modern)
- **Single border:** Style 6 (NSU), Style 10 (JUST Style 2)
- **Double border:** Style 2 (BUET), Style 4 (KUET)
- **Ornamental:** Style 11 (Scholarly), Style 4 (KUET corners)

---

## Technical Implementation

Each template:
- Returns a React component
- Receives `CoverPageData` as props
- Uses inline styles (no Tailwind for print compatibility)
- Fixed width: `210mm`, min-height: `297mm`
- `fontFamily: "Times New Roman", Times, serif`
- `fontSize: '12pt'` (base)
- `color: '#000'`, `backgroundColor: '#fff'`
- `boxSizing: 'border-box'`

### Template File Structure
```
components/templates/
├── ClassicTemplate.tsx       (Style 1)
├── BUETTemplate.tsx          (Style 2)
├── DUTemplate.tsx            (Style 3)
├── KUETTemplate.tsx          (Style 4)
├── RUETTemplate.tsx          (Style 5)
├── NSUTemplate.tsx           (Style 6)
├── ElegantTemplate.tsx       (Style 7)
├── ModernTemplate.tsx        (Style 8)
├── JUSTStyle1Template.tsx    (Style 9)
├── JUSTStyle2Template.tsx    (Style 10)
├── ScholarlyClassicTemplate.tsx (Style 11)
└── index.ts                  (exports all)
```

### Template Routing
In `PreviewPanel.tsx`:
```typescript
function renderTemplate(templateId: string, data: CoverPageData) {
  switch (templateId) {
    case 'buet':      return <BUETTemplate data={data} />
    case 'du':        return <DUTemplate data={data} />
    // ... etc
    default:          return <ClassicTemplate data={data} />
  }
}
```

---

## Custom Template Support

Users can also upload custom HTML templates with placeholder tokens:

### Available Placeholders
```
{{universityName}}    {{universityDept}}
{{subjectName}}       {{courseCode}}
{{courseType}}        {{session}}
{{studentName}}       {{studentRoll}}
{{studentRegNo}}      {{studentYear}}
{{studentSemester}}   {{groupNo}}
{{teacherName}}       {{teacherDesignation}}
{{teacherDept}}       {{teacherUniversity}}
{{submissionDate}}    {{experimentDate}}
{{experimentNo}}      {{experimentTitle}}
{{docType}}
```

### Example Custom Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Times New Roman'; padding: 20mm; }
    h1 { text-align: center; }
  </style>
</head>
<body>
  <h1>{{universityName}}</h1>
  <p>Course: {{subjectName}} ({{courseCode}})</p>
  <p>Student: {{studentName}} - {{studentRoll}}</p>
  <p>Submitted to: {{teacherName}}</p>
  <p>Date: {{submissionDate}}</p>
</body>
</html>
```

---

## Changelog

### v0.1.0 (Current)
- 11 built-in templates
- Assignment & Lab Report modes
- Logo upload support
- PDF & Print export
- Custom template import
- Auto-save to localStorage
- Dark/Light theme UI (print remains white)

---

**Built with ❤️ by M0stafa**  
Department of Computer Science and Engineering  
Jashore University of Science and Technology
