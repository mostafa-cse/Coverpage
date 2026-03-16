import { CoverPageData, defaultCoverPageData } from '@/types/CoverPageData'

const STORAGE_KEY = 'coverpage_form_data'

export function saveFormData(data: CoverPageData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // quota exceeded or private mode — fail silently
  }
}

export function loadFormData(): CoverPageData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultCoverPageData
    return JSON.parse(raw) as CoverPageData
  } catch {
    return defaultCoverPageData
  }
}

export function clearFormData(): void {
  localStorage.removeItem(STORAGE_KEY)
}
