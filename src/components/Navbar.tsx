"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dancing_Script, Baloo_2 } from "next/font/google";
import { TypewriterNameEffect } from "./ui/typewriter-effect";

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});
export const baloo = Baloo_2({
  subsets: ["devanagari"],
  weight: ["400", "700"],
});

export function NavigationBar() {
  const englishName = [
    {
      text: "Atul  ",
      className: `dark:text-white dark:text-3xl font-bold ${dancingScript.className}`,
    },
    {
      text: "Kumar",
      className: `${dancingScript.className} dark:text-white text-2xl`,
    },
  ];

  const hindiName = [
    {
      text: "अतुल",
      className: `dark:text-white dark:text-2xl  ${baloo.className}`,
    },
    {
      text: "कुमार",
      className: `${baloo.className} dark:text-white text-2xl`,
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Apps", link: "/apps" },
    { name: "Hobby", link: "/hobby" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border shadow-md font">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center">
              <span>
                <TypewriterNameEffect
                  englishName={englishName}
                  hindiName={hindiName}
                />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <Link
                  key={`desktop-link-${idx}`}
                  href={item.link}
                  className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                    pathname === item.link
                      ? "text-primary border-b-2 border-primary"
                      : "text-card-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-card-foreground focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {!isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-card/95 backdrop-blur-sm border-t border-border ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === item.link
                    ? "bg-secondary text-secondary-foreground"
                    : "text-card-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
