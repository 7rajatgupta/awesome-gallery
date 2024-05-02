export default function Nav() {
  return (
    <nav className="border-b-solid text-l mb-4 flex items-end justify-between border-b border-gray-400 px-12 py-4 text-lg font-semibold shadow-sm">
      <div className="logo">
        <img
          src="https://rajat-gupta.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fr-g-logo.f1b92262.png&w=48&q=75"
          alt="logo"
          width={48}
          className="rounded-full"
        />
      </div>
      <ul className="navigation flex gap-4">
        <li className="cursor-pointer transition-all hover:underline">home</li>
        <li className="cursor-pointer transition-all hover:underline">about</li>
        <li className="-mt-1 cursor-pointer rounded-lg bg-orange-800 bg-opacity-70 px-2 py-1 transition-all hover:bg-opacity-100">
          sign in
        </li>
      </ul>
    </nav>
  );
}
