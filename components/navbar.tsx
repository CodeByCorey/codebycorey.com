import Link from 'next/link';
import { useRouter } from 'next/router';

import ThemeSwitcher from './theme-switcher';

export default function Navbar() {
  const router = useRouter();

  const isActive = (href: string) => (router.pathname === href ? 'border-b-2' : '');

  return (
    <nav className="text-gray-200 bg-gray-900 sticky top-0 m-0">
      <div className="p-6 max-w-screen-md mx-auto flex items-center justify-between md:text-lg uppercase">
        <div className="flex">
          <Link href="/">
            <a className={`mx-2 md:mx-4 py-1 ${isActive('/')}`}>Home</a>
          </Link>
          <Link href="/about">
            <a className={`mx-2 md:mx-4 py-1 ${isActive('/about')}`}>About</a>
          </Link>
          <Link href="/blog">
            <a className={`mx-2 md:mx-4 py-1 ${isActive('/blog')}`}>Blog</a>
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
