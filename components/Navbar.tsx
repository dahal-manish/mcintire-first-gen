'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/constants/navLinks';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <header className="p-4 bg-blue-2 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">MFGS</Link>
                <nav>
                    <ul className="flex space-x-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <Link 
                                    href={link.href} 
                                    className={`hover:font-semibold transition-all ${pathname === link.href ? 'font-semibold' : 'font-normal'}`}
                                >
                                    {link.pageName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;