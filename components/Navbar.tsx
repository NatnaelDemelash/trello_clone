'use client';

import { Trello } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="border-b border-b-gray-50 backdrop-blur-sm shadow-sm bg-white/100 sticky z-50 top-0">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between ">
        <div className="flex space-x-2 items-center">
          <Trello className="h-4 w-4 sm:h-6 sm:w-6" />
          <span className="font-semibold text-gray-900 sm:text-xl">
            Trello Clone
          </span>
        </div>
      </div>
    </header>
  );
}
