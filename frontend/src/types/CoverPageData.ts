export type DocType = 'assignment' | 'lab_report'

export type Designation =
  | 'Professor'
  | 'Associate Professor'
  | 'Assistant Professor'
  | 'Lecturer'

export type CourseType = 'Theory' | 'Lab' | 'Project'

export interface CoverPageData {
  // Document type
  docType: DocType

  // University & department
  university: {
    name: string
    dept: string
    logoUrl: string   // base64 or URL
  }

  // Subject information
  subject: {
    name: string
    courseCode: string
    courseType: CourseType
    session: string   // e.g. "2021-22"
  }

  // Submitted by (student)
  submittedBy: {
    name: string
    roll: string
    regNo: string
    year: string      // e.g. "2nd Year"
    semester: string  // e.g. "1st Semester"
    dept: string
    groupNo?: string
  }

  // Submitted to (teacher)
  submittedTo: {
    name: string
    designation: Designation
    dept: string
    university: string
  }

  // Dates
  submissionDate: string

  // Lab-only fields
  experimentDate?: string
  experimentNo?: string
  experimentTitle?: string
}

export const defaultCoverPageData: CoverPageData = {
  docType: 'assignment',
  university: { name: '', dept: '', logoUrl: '' },
  subject: { name: '', courseCode: '', courseType: 'Theory', session: '' },
  submittedBy: { name: '', roll: '', regNo: '', year: '', semester: '', dept: '' },
  submittedTo: { name: '', designation: 'Lecturer', dept: '', university: '' },
  submissionDate: new Date().toLocaleDateString('en-BD'),
}
