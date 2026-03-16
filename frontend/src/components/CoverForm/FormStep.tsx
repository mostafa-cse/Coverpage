import clsx from 'clsx'

interface Props {
  step: number
  currentStep: number
  label: string
}

export default function FormStep({ step, currentStep, label }: Props) {
  const done = step < currentStep
  const active = step === currentStep

  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors',
          done && 'bg-blue-600 text-white',
          active && 'bg-blue-600 text-white ring-2 ring-blue-200',
          !done && !active && 'bg-gray-200 text-gray-500'
        )}
      >
        {done ? '✓' : step}
      </div>
      <span
        className={clsx(
          'text-xs font-medium hidden sm:block',
          active ? 'text-blue-700' : 'text-gray-400'
        )}
      >
        {label}
      </span>
    </div>
  )
}
