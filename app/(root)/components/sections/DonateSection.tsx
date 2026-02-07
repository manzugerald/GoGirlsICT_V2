'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function DonateSection() {
  return (
    <div className="wrapper max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Support Our Mission</h2>
      <p className="text-xl mb-8 opacity-90">
        Your donation helps us continue our work and reach more communities.
      </p>
      <Link
        href="/donate"
        className="inline-flex items-center gap-2 bg-white text-[#9f004d] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
      >
        <ShoppingCart className="w-5 h-5" />
        Donate Now
      </Link>
    </div>
  );
}
