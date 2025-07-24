'use client';

import { useUser } from '@clerk/nextjs';
import Navbar from '../../components/Navbar';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-3xl font-semibold mb-2 text-gray-900">
            Welcome back,{' '}
            {user?.firstName ?? user?.emailAddresses[0].emailAddress}! 👋🏾
          </h1>
          <p className="text-gray-600">
            Here is what happening on your board today
          </p>
        </div>
      </main>
    </div>
  );
}
