/**
 * @author: Cavin
 */

import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-gradient-to-r from-gray to-gray/100 shadow-md z-50 opacity-100 backdrop-blur-lg backdrop-brightness-75 backdrop-contrast-125 transition-all duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo / Title */}
                    <a href="/" className="text-2xl transition-colors">
                        <h1 className="text-2xl font-bold font-accent text-green-600">NYC</h1>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-6 ml-10">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-green-600 hover:text-white text-sm font-medium font-primary transition-colors transition-smooth"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <X className="h-6 w-6 text-green-500" /> : <Menu className="h-6 w-6 text-green-500" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden px-4 py-3 shadow-md space-y-2">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="block w-full text-center text-green-500 hover:text-white text-base font-medium font-primary"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};