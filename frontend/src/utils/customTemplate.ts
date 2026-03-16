import { CoverPageData } from '@/types/CoverPageData'

/**
 * Replace {{placeholder}} tokens in a raw HTML string
 * with values from CoverPageData.
 */
export function renderCustomTemplate(
  html: string,
  data: CoverPageData
): string {
  const map: Record<string, string> = {
    universityName: data.university.name,
    universityDept: data.university.dept,
    subjectName: data.subject.name,
    courseCode: data.subject.courseCode,
    courseType: data.subject.courseType,
    session: data.subject.session,
    studentName: data.submittedBy.name,
    studentRoll: data.submittedBy.roll,
    studentRegNo: data.submittedBy.regNo,
    studentYear: data.submittedBy.year,
    studentSemester: data.submittedBy.semester,
    groupNo: data.submittedBy.groupNo,
    teacherName: data.submittedTo.name,
    teacherDesignation: data.submittedTo.designation,
    teacherDept: data.submittedTo.dept,
    teacherUniversity: data.submittedTo.university,
    submissionDate: data.submissionDate,
    experimentDate: data.experimentDate ?? '',
    experimentNo: data.experimentNo ?? '',
    experimentTitle: data.experimentTitle ?? '',
    docType:
      data.docType === 'assignment' ? 'Assignment' : 'Lab Report',
  }

  return html.replace(/\{\{(\w+)\}\}/g, (_, key) => map[key] ?? '')
}
