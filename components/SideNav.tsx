"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { id: "about",      label: "About"      },
  { id: "stack",      label: "Stack"      },
  { id: "projects",   label: "Projects"   },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education"  },
  { id: "contact",    label: "Contact"    },
];

export default function SideNav() {
  const active = useActiveSection();
  const visible = active !== "hero";

  return (
    <div
      className="fixed left-8 top-0 h-full z-40 hidden xl:flex items-center pointer-events-none"
      aria-hidden={!visible}
    >
      <nav
        className="relative flex flex-col pl-5 pointer-events-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-16px)",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
        aria-label="Section navigation"
      >

        <span
          className="absolute left-0 top-1 bottom-1 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-border) 15%, var(--color-border) 85%, transparent)" }}
        />

        {navItems.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className="group relative flex items-center gap-3 py-3 first:pt-0 last:pb-0"
              aria-label={label}
            >

              <span
                className="relative shrink-0 rounded-full border transition-all duration-500"
                style={{
                  width:       isActive ? 8 : 6,
                  height:      isActive ? 8 : 6,
                  marginLeft:  isActive ? -1 : 0,
                  borderColor: isActive
                    ? "var(--color-accent)"
                    : "rgba(255,255,255,0.12)",
                  background: isActive
                    ? "rgba(129,140,248,0.25)"
                    : "transparent",
                  boxShadow: isActive
                    ? "0 0 8px 2px rgba(129,140,248,0.4), 0 0 2px rgba(129,140,248,0.8)"
                    : "none",
                }}
              />


              <span
                className="hidden 2xl:inline-block text-[9px] font-medium tracking-[0.18em] uppercase whitespace-nowrap transition-all duration-300"
                style={{
                  color: isActive ? "var(--color-accent)" : "var(--color-muted)",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0)" : "translateX(-6px)",
                  pointerEvents: "none",
                }}
              >
                {label}
              </span>


              {!isActive && (
                <span
                  className="hidden 2xl:block absolute left-8 text-[9px] font-medium tracking-[0.18em] uppercase whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  style={{ color: "var(--color-muted)" }}
                >
                  {label}
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}