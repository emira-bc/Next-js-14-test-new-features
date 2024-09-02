// app/header.js

import Menu from '@/components/menu/Menu';
import SearchBar from '@/components/searchBar/SearchBar';
import Link from 'next/link';

export default function Header() {
  console.log('Hello ---- Server non async component! ----');
  return (
    <header>
      <div className="logo">
        <Link href={`/`}>
          <img src="/storeLogo.jpg" alt="FakeStore Logo" />
        </Link>
        <h1>FakeStore</h1>
      </div>
      <SearchBar/>
      <Menu />
    </header>
  );
}