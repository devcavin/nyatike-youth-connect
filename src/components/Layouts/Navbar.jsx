import { useState } from 'react'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../Context/UseTheme'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const { isDarkMode, toggleTheme } = useTheme()

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/testimonials", label: "Testimonials" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 border-b border-border shadow-sm transition-all duration-300">
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-primary-blue rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-primary-green rounded-full -ml-2 hover:opacity-75 transition-opacity"></div>
          <span className="text-xl font-medium ml-1 text-text-heading font-secondary">NYC</span>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface hover:bg-surface-hover text-text-primary transition-all duration-300"
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
              <HiX className="h-6 w-6 text-secondary" />
            ) : (
              <HiMenu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all transition-colors duration-300
                ${activeLink === link.href ? 'text-primary after:w-full' : 'text-text-secondary hover:text-text-primary'}`}
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
            className="p-2 rounded-lg bg-surface hover:bg-surface-hover text-text-primary transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </button>
          
          {/* CTA Button */}
          <button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-button-primary hover:bg-button-primary-hover text-button-text transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <a href="#newsletter">Get in touch</a>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background transition-all duration-300">
          <div className="container mx-auto px-4 space-y-4 py-4 text-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 transition-colors duration-300 ${
                  activeLink === link.href 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 rounded-lg text-sm font-medium  hover:bg-button-primary-hover text-button-text transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar