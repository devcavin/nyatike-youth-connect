import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../Context/UseTheme'

import logo from "../../assets/logo.png"

// "Contact Us" is intentionally absent: it pointed at "/contavt", which has never
// been a route, so it led to an empty page. Restore it here once the owner decides
// where contact should go (docs/modernization-audit.md, decision D-01).
const NAV_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/blogs", label: "Blogs" },
]

const MENU_ID = "site-menu"
const DESKTOP_QUERY = "(min-width: 48rem)" // matches Tailwind's `md` breakpoint

const linkClass = (base) => ({ isActive }) => (isActive ? `${base} is-active` : base)

const Navbar = () => {
  const { pathname } = useLocation()
  // The menu is "open at" a path, so any route change closes it without an effect.
  const [menuOpenAt, setMenuOpenAt] = useState(null)
  const isMenuOpen = menuOpenAt === pathname
  const { isDarkMode, toggleTheme } = useTheme()

  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeMenu = () => setMenuOpenAt(null)

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return
      const focusWasInHeader = headerRef.current?.contains(document.activeElement)
      closeMenu()
      if (focusWasInHeader) menuButtonRef.current?.focus()
    }
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) closeMenu()
    }
    const desktopMedia = window.matchMedia(DESKTOP_QUERY)
    const onViewportChange = (event) => {
      if (event.matches) closeMenu()
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    desktopMedia.addEventListener("change", onViewportChange)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
      desktopMedia.removeEventListener("change", onViewportChange)
    }
  }, [isMenuOpen])

  const themeLabel = isDarkMode ? "Switch to light theme" : "Switch to dark theme"

  return (
    <header ref={headerRef} className="site-header">
      <a className="site-skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="site-brand" aria-label="Nyatike Youth Connect, home">
          <img src={logo} alt="" width="900" height="600" className="site-brand__logo" />
          <span className="site-brand__name">Nyatike Youth Connect</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass("site-nav-link")}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="site-icon-btn"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {isDarkMode ? (
              <HiSun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <HiMoon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            className="site-icon-btn site-icon-btn--menu"
            onClick={() => setMenuOpenAt(isMenuOpen ? null : pathname)}
            aria-expanded={isMenuOpen}
            aria-controls={MENU_ID}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id={MENU_ID} className="site-menu md:hidden">
          <nav aria-label="Primary mobile">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={linkClass("site-menu-link")}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
