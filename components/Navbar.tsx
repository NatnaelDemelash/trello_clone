'use client';

import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import { ArrowRight, Trello } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const pathName = usePathname();

  const isDahshboardPage = pathName === '/dashboard';
  const isBoardPage = pathName.startsWith('/board/');

  if (isDahshboardPage) {
    return (
      <header className="border-b border-b-gray-50 backdrop-blur-sm shadow-sm bg-white/100 sticky z-50 top-0">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between ">
          <div className="flex space-x-2 items-center">
            <Trello className="h-4 w-4 sm:h-6 sm:w-6" />
            <span className="font-semibold text-gray-900 sm:text-xl">
              Kanbana
            </span>
          </div>

          <UserButton />
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-b-gray-50 backdrop-blur-sm shadow-sm bg-white/100 sticky z-50 top-0">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between ">
        <div className="flex space-x-2 items-center">
          <Trello className="h-4 w-4 sm:h-6 sm:w-6" />
          <span className="font-semibold text-gray-900 sm:text-xl">
            Kanbana
          </span>
        </div>

        <div>
          {isSignedIn ? (
            <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:spacey-0 space-x-4">
              <span className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                Welcome, {user.firstName ?? user.emailAddresses[0].emailAddress}
              </span>
              <Link href="/dashboard">
                <Button
                  size="sm"
                  className="bg-[#333] text-white text-xs sm:text-sm cursor-pointer"
                >
                  Go to Dashboard <ArrowRight />{' '}
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-2 sm:space-x-4">
              <SignInButton>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs sm:text-sm cursor-pointer"
                >
                  signin
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button
                  size="sm"
                  className="text-xs sm:text-sm bg-[#333] text-white cursor-pointer"
                >
                  signup
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
