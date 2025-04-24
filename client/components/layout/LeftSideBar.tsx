"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

export const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <div className="h-screen left-0 top-0 sticky p-8 flex flex-col gap-12 bg-blue-2 shadow-xl max-sm:hidden max-md:hidden max-lg-hidden">
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={120}
          height={80}
          className="rounded-md shadow-md"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-8">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            data-testid={link.testId}
            className={`flex items-center gap-4 text-body-medium transition-colors duration-300 ${
              pathname === link.url
                ? "text-blue-1 font-semibold"
                : "text-grey-1 hover:text-blue-1"
            }`}
          >
            <span className="text-lg">{link.icon}</span>
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;