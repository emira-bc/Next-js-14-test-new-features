import React from 'react';
import Link from 'next/link';
import { fetchCategories } from "@/services/category";

const Menu = async () => {
  const categories = await fetchCategories(6000);
  console.log('Hello ---- Server async component! ----');

  return (
    <nav>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`/productListWithStreming/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu