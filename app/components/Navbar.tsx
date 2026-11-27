"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileOpen(false);

    // Smooth scroll if clicking an anchor on the current page
    const [targetPath, hash] = href.split("#");
    const isSamePage =
      !targetPath || targetPath === pathname || (targetPath === "/" && pathname === "/");

    if (hash && isSamePage) {
      const el = document.getElementById(hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${hash}`);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6E3DD]"
          : "bg-[#FAF8F5] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => handleAnchorClick(e, "/#top")}
          className="flex items-center gap-2.5 shrink-0"
        >
          <svg
            width="25"
            height="23"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 4C2 2.89543 2.89543 2 4 2H11C12.1046 2 13 2.89543 13 4V20C13 18.8954 12.1046 18 11 18H4C2.89543 18 2 18.8954 2 20V4Z"
              fill="#0277BD"
            />
            <path
              d="M24 4C24 2.89543 23.1046 2 22 2H15C13.8954 2 13 2.89543 13 4V20C13 18.8954 13.8954 18 15 18H22C23.1046 18 24 18.8954 24 20V4Z"
              fill="#0277BD"
            />
          </svg>
          <span className="text-[21px] sm:text-[22px] font-bold tracking-[-0.025em] text-[#1E2022]">
            OpenShelf
          </span>
        </Link>

        {/* Desktop Center Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-normal text-[#33373D]">
          <Link
            href="/#how-it-works"
            onClick={(e) => handleAnchorClick(e, "/#how-it-works")}
            className="hover:text-[#000000] transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/sources"
            className={`transition-colors ${
              pathname === "/sources"
                ? "text-[#0277BD] font-medium"
                : "hover:text-[#000000]"
            }`}
          >
            Sources &amp; policy
          </Link>
          <Link
            href="/sources#access-labels"
            onClick={(e) => handleAnchorClick(e, "/sources#access-labels")}
            className="hover:text-[#000000] transition-colors"
          >
            Access labels
          </Link>
          <Link
            href="/sources#submissions"
            onClick={(e) => handleAnchorClick(e, "/sources#submissions")}
            className="hover:text-[#000000] transition-colors"
          >
            Submissions
          </Link>
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/#status"
            onClick={(e) => handleAnchorClick(e, "/#status")}
            className="text-[14.5px] font-normal text-[#4A4F55] hover:text-[#1E2022] transition-colors"
          >
            Launching soon
          </Link>
          <Link
            href="/sources"
            className="bg-[#0277BD] hover:bg-[#01639E] text-white text-[14.5px] font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Policy &amp; licences
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 -mr-2 rounded-lg text-[#1E2022] hover:bg-[#EFECE6] transition-colors"
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out bg-[#FAF8F5] border-b border-[#E6E3DD] ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-none"
        }`}
      >
        <nav className="px-5 pt-2 pb-6 flex flex-col gap-3.5 text-[16px] text-[#2C3035]">
          <Link
            href="/#how-it-works"
            onClick={(e) => handleAnchorClick(e, "/#how-it-works")}
            className="py-1.5 hover:text-[#0277BD]"
          >
            How it works
          </Link>
          <Link
            href="/sources"
            onClick={() => setMobileOpen(false)}
            className="py-1.5 hover:text-[#0277BD]"
          >
            Sources &amp; policy
          </Link>
          <Link
            href="/sources#access-labels"
            onClick={(e) => handleAnchorClick(e, "/sources#access-labels")}
            className="py-1.5 hover:text-[#0277BD]"
          >
            Access labels
          </Link>
          <Link
            href="/sources#submissions"
            onClick={(e) => handleAnchorClick(e, "/sources#submissions")}
            className="py-1.5 hover:text-[#0277BD]"
          >
            Submissions
          </Link>
          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              href="/sources"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center bg-[#0277BD] hover:bg-[#01639E] text-white text-[15px] font-semibold px-5 py-3 rounded-full transition-colors"
            >
              Policy &amp; licences
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}