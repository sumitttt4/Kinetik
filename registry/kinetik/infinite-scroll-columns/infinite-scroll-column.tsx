'use client';

import { cn } from '@/lib/utils';

const testimonials = [
  '“Kinetik made our app feel alive.”',
  '“This is the closest web gets to native physics.”',
  '“The copy-paste ergonomics are unreal.”',
  '“Our conversion jumped after shipping fluid UI.”'
];

function Column({ reverse }: { reverse?: boolean }) {
  const loop = [...testimonials, ...testimonials];

  return (
    <div className="relative h-44 overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
      <div className={cn('kinetik-marquee space-y-2', reverse && 'kinetik-marquee-reverse')}>
        {loop.map((quote, index) => (
          <p key={`${quote}-${index}`} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
            {quote}
          </p>
        ))}
      </div>
    </div>
  );
}

export function InfiniteScrollColumn() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Column />
      <Column reverse />
    </div>
  );
}
