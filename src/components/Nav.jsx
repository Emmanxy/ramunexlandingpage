
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Capabilities", "#capabilities"],
  ["Products", "#products"],
  ["Work", "#work"],
  ["Careers", "#careers"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`nav-shell ${scrolled ? "scrolled" : ""}`}
    >
      {/* RAMUNEX LOGO AND COMPANY NAME */}
      <a
        className="brand"
        href="#top"
        aria-label="Ramunex Technologies home"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          textDecoration: "none",
        }}
      >
        <img
          src="/ramunex-logo.jpg"
          alt="Ramunex Technologies Logo"
          style={{
            width: "52px",
            height: "52px",
            objectFit: "contain",
            borderRadius: "8px",
            display: "block",
            flexShrink: 0,
          }}
        />

        <span
          style={{
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "3px",
            whiteSpace: "nowrap",
            lineHeight: "1",
            display: "flex",
            alignItems: "center",
            transform: "translateY(-2px)",
          }}
        >
          RAMUNEX TECHNOLOGIES
        </span>
      </a>

      {/* DESKTOP NAVIGATION */}
      <nav
        className="desktop-nav"
        aria-label="Primary navigation"
      >
        {links.slice(0, -1).map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}

        <a
          className="button button-small"
          href="#contact"
        >
          Contact
        </a>
      </nav>

      {/* MOBILE MENU BUTTON */}
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* MOBILE NAVIGATION */}
      <div
        className={`mobile-panel ${open ? "open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
