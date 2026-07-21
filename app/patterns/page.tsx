'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PatternsPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/patterns/enterprise-hero');
  }, [router]);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center font-mono">
      <span className="text-xs text-neutral-500 animate-pulse">Redirecting to visual editor...</span>
    </div>
  );
}
