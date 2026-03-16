export default function Footer() {
  return (
    <footer className="w-full flex justify-center pb-6 pt-4 px-4">
      <a
        href="https://www.facebook.com/muhammadm0stafa/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.25)]"
        style={{ textDecoration: 'none' }}
      >
        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300 shadow-lg shadow-blue-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white font-semibold text-sm group-hover:text-blue-200 transition-colors duration-300">
            Mostafa Kamal
          </span>
          <span className="text-white/50 text-xs font-medium tracking-wide">
            CSE · JUST
          </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300 ml-1">
          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
        </svg>
      </a>
    </footer>
  )
}
