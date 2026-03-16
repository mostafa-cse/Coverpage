export default function Footer() {
  return (
    <footer className="w-full flex justify-center py-4 px-4">
      <a
        href="https://www.facebook.com/muhammadm0stafa/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105 whitespace-nowrap"
        style={{ textDecoration: "none" }}
      >
        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
          </svg>
        </div>
        <span className="text-white/60 text-xs font-medium">Credit to </span>
        <span className="text-white font-semibold text-sm group-hover:text-blue-200 transition-colors duration-300">M0stafa</span>
        <span className="text-white/60 text-xs font-medium">, CSE, JUST.</span>
      </a>
    </footer>
  )
}
