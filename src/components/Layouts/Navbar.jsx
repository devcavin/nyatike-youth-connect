import { useState } from 'react'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../Context/UseTheme'

import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/community", label: "Communities & Programs" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contavt", label: "Contact Us"}
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-bg bg-background/100 backdrop-blur-sm transition-all duration-300">
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span>
            <a href="/">
              <img src={logo} alt="Nyatike Youth Connect Logo" className='w-25' />
            </a>
          </span>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6 text-text-secondary" />
            ) : (
              <HiMenu className="h-6 w-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all transition-colors duration-300`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle and CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background transition-all duration-300">
          <div className="container mx-auto px-4 space-y-4 py-4 text-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={`block text-md font-medium py-2 transition-colors duration-300`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar