"use client";

import { House, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionLinks = [
  { id: "about",      label: "About"    },
  { id: "stack",      label: "Stack"    },
  { id: "projects",   label: "Projects" },
  { id: "experience", label: "Exp"      },
  { id: "education",  label: "Edu"      },
  { id: "contact",    label: "Contact"  },
];

export default function Navbar() {
  const active = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3">
      <div className="mx-auto px-4 flex items-center justify-center">


        <nav
          className="hidden md:flex items-center gap-0.5 sm:gap-1 px-2 py-2 rounded-full glass-nav"
        >
          <a
            href="#hero"
            className={`p-2.5 rounded-full transition-all duration-200 ${
              active === "hero" ? "text-text bg-white/8" : "text-muted hover:text-text hover:bg-white/5"
            }`}
            aria-label="Home"
          >
            <House className="h-4 w-4" />
          </a>

          <div className="w-px h-5 bg-border mx-1" />

          <a
            href="https://github.com/nemesic"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-muted hover:text-text hover:bg-white/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>

          <a
            href="https://linkedin.com/in/oleksiikobzan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-muted hover:text-text hover:bg-white/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={15} />
          </a>

          <a
            href="#projects"
            className={`p-2.5 rounded-full transition-all duration-200 ${
              ["projects", "experience", "education"].includes(active)
                ? "text-text bg-white/8"
                : "text-muted hover:text-text hover:bg-white/5"
            }`}
            aria-label="Projects"
          >
            <FileText className="h-4 w-4" />
          </a>

            <a
            href="#contact"
            className="ml-1 px-4 py-2 bg-accent text-white hover:bg-white/5 text-sm font-medium rounded-full hover:opacity-90 active:scale-95 transition-all duration-150"
          >
         Hire me
        </a>
        </nav>


        <div className="md:hidden w-full overflow-x-auto no-scrollbar px-3">
          <nav
            className="flex items-center gap-0 px-1 py-1 rounded-full mx-auto w-fit glass-nav"
          >
            {/* Home icon */}
            <a
              href="#hero"
              className={`p-1.5 rounded-full transition-all duration-200 shrink-0 ${
                active === "hero" ? "text-text bg-white/8" : "text-muted"
              }`}
              aria-label="Home"
            >
              <House className="h-3 w-3" />
            </a>

            <div className="w-px h-3.5 bg-border mx-1 shrink-0" />


            {sectionLinks.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className="flex items-center gap-0.5 px-1.5 py-1 rounded-full whitespace-nowrap transition-all duration-300 shrink-0"
                  style={{
                    background: isActive ? "rgba(129,140,248,0.12)" : "transparent",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{
                      background: isActive ? "var(--color-accent)" : "rgba(255,255,255,0.18)",
                      boxShadow: isActive ? "0 0 5px 2px rgba(129,140,248,0.55)" : "none",
                      transition: "background 0.3s, box-shadow 0.3s",
                    }}
                  />
                  <span
                    className="text-[9px] font-medium tracking-wide"
                    style={{
                      color: isActive ? "var(--color-accent)" : "var(--color-muted)",
                      transition: "color 0.3s",
                    }}
                  >
                    {label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

      </div>
    </header>
  );
}