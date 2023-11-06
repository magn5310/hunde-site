import React from "react";
import Link from "next/link";
async function NavBar() {
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs`);
  const pages = await res.json();
  return (
    <nav>
      <ul className="flex gap-2">
        <Link href={"/"}>Home</Link>
        {pages.map((page) => {
          return (
            <Link key={page.id} href={`/dogs/${page.slug}`}>
              {page.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
