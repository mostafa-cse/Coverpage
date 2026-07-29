import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Editor from '@/pages/Editor'
import { ThemeProvider } from '@/context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </ThemeProvider>
  )
}
