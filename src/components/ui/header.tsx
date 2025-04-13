"use client";

//import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center px-5">
            <Logo />
            
          </div>
          <div className="flex-1 text-2xl font-bold text-start">
          Agent Titus
            </div> 
          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="/signin"
                className="btn-sm relative bg-gray-800  p-4 text-gray-200  hover:bg-gray-600"
              >
                Connect on X
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="btn-sm bg-indigo-600 p-4 mr-4 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-indigo-400"
              >
                Discord Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
