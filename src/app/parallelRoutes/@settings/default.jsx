// import { CurrentRoute } from '@/components/currentRoute/CurrentRoute';
import Link from 'next/link';

export default function Default() {
  return (
      <div className="prose prose-sm prose-invert max-w-none">
        <div className="not-prose flex">
          <Link
            href="/parallel-routes"
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
          >
            Home - default content
          </Link>
        </div>
      </div>
  );
}