'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/constants/navLinks';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    if (!isMounted) return null;

    return (
        <header className="sticky top-0 z-50 bg-blue-2 text-white border-b-2 border-blue-gray">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold flex-shrink-0">
                        MFGS
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {NAV_LINKS.map((link) => (
                                <li key={link.id}>
                                    <Link 
                                        href={link.href} 
                                        className={`hover:text-blue-1 transition-colors duration-200 ${
                                            pathname === link.href 
                                            ? 'font-semibold text-blue-1' 
                                            : 'font-normal'
                                        }`}
                                    >
                                        {link.pageName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 pb-4" : "max-h-0"
                    }`}
                >
                    <nav className="flex flex-col space-y-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className={`px-2 py-1 rounded-md transition-colors duration-200 ${
                                    pathname === link.href
                                    ? 'font-semibold bg-blue-3 text-blue-1'
                                    : 'font-normal hover:bg-blue-3'
                                }`}
                            >
                                {link.pageName}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;