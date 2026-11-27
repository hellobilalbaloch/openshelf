"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmoothScrollShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        // Delay slightly to allow new route paint before scrolling
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <main key={pathname} className="flex-1 page-transition">
      {children}
    </main>
  );
}