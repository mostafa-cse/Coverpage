export type DocType = 'assignment' | 'lab_report'

export type Designation =
  | 'Professor'
  | 'Associate Professor'
  | 'Assistant Professor'
  | 'Lecturer'

export type CourseType = 'Theory' | 'Lab' | 'Project'

export interface CoverPageData {
  docType: DocType

  university: {
    name: string
    dept: string
    logoUrl: string   // base64 or URL
  }

  subject: {
    name: string
    courseCode: string
    courseType: CourseType
    session: string   // e.g. "2021-22"
  }

  submittedBy: {
    name: string
    roll: string
    regNo: string
    year: string      // e.g. "3rd"
    semester: string  // e.g. "1st"
    groupNo: string
  }

  submittedTo: {
    name: string
    designation: Designation
    dept: string
    university: string
  }

  submissionDate: string

  // Lab report only
  experimentDate?: string
  experimentNo?: string
  experimentTitle?: string
}

export const defaultCoverPageData: CoverPageData = {
  docType: 'assignment',
  university: {
    name: '',
    dept: '',
    logoUrl: '',
  },
  subject: {
    name: '',
    courseCode: '',
    courseType: 'Theory',
    session: '',
  },
  submittedBy: {
    name: '',
    roll: '',
    regNo: '',
    year: '',
    semester: '',
    groupNo: '',
  },
  submittedTo: {
    name: '',
    designation: 'Lecturer',
    dept: '',
    university: '',
  },
  submissionDate: new Date().toISOString().split('T')[0],
  experimentDate: '',
  experimentNo: '',
  experimentTitle: '',
}
