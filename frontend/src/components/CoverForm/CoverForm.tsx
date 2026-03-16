import { useState } from 'react'
import { CoverPageData } from '@/types/CoverPageData'
import FormStep from './FormStep'
import Step1DocType from './Step1DocType'
import Step2University from './Step2University'
import Step3Subject from './Step3Subject'
import Step4People from './Step4People'
import Step5Dates from './Step5Dates'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  data: CoverPageData
  onChange: (updated: Partial<CoverPageData>) => void
}

const STEPS = [
  { label: 'Type' },
  { label: 'University' },
  { label: 'Subject' },
  { label: 'People' },
  { label: 'Dates' },
]

export default function CoverForm({ data, onChange }: Props) {
  const [step, setStep] = useState(1)

  function renderStep() {
    switch (step) {
      case 1: return <Step1DocType data={data} onChange={onChange} />
      case 2: return <Step2University data={data} onChange={onChange} />
      case 3: return <Step3Subject data={data} onChange={onChange} />
      case 4: return <Step4People data={data} onChange={onChange} />
      case 5: return <Step5Dates data={data} onChange={onChange} />
      default: return null
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Step indicator */}
      <div className="flex items-center gap-1 mb-6">
        {STEPS.map((s, i) => (
          <div key={i} className="flex items-center">
            <button onClick={() => setStep(i + 1)} className="focus:outline-none">
              <FormStep step={i + 1} currentStep={step} label={s.label} />
            </button>
            {i < STEPS.length - 1 && (
              <div className={`w-6 h-px mx-1 ${step > i + 1 ? 'bg-blue-400' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-gray">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4 border-t border-gray-100 mt-4">
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="flex items-center gap-1 text-sm px-4 py-2 rounded-lg border border-gray-300 text-gray-600 disabled:opacity-30 hover:bg-gray-50 transition"
        >
          <ChevronLeft size={15} /> Back
        </button>
        <button
          onClick={() => setStep((s) => Math.min(STEPS.length, s + 1))}
          disabled={step === STEPS.length}
          className="flex items-center gap-1 text-sm px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-30 hover:bg-blue-700 transition"
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
    </div>
  )
}
