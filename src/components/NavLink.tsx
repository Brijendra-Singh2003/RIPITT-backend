"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

const NavLink = ({ href, children }: {href: string; children: ReactNode}) => {
    const path = usePathname();
    const isActive = path.indexOf(href) === 0;
  return (
    <Link
      className={
          "flex md:flex-row p-2 md:border flex-col md:gap-2 items-center md:px-5 md:py-3 rounded " +
          (isActive
            ? "text-blue-700 bg-blue-50 border-blue-700/50"
            : "text-muted-foreground hover:text-blue-700 hover:bg-blue-50")
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink