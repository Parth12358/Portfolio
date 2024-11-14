import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  Mail,
  User,
  Code,
  Briefcase,
  Cpu,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "About", icon: <User className="w-4 h-4" /> },
    {
      href: "/projects",
      label: "Projects",
      icon: <Code className="w-4 h-4" />,
    },
    {
      href: "/experience",
      label: "Experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { href: "/skills", label: "Skills", icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-gray-800/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
          >
            Parth Kshirsagar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all
                  ${
                    pathname === item.href
                      ? "text-blue-500 bg-gray-700"
                      : "text-gray-300 hover:text-blue-500"
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex gap-6">
            <a
              href="https://github.com/Parth12358"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/parth-kshirsagar-0a46a9217/"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:parth.kshirsagar1410@gmail.com"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all
                    ${
                      pathname === item.href
                        ? "text-blue-500 bg-gray-700"
                        : "text-gray-300 hover:text-blue-500"
                    }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-4 px-3 py-2">
                <a
                  href="https://github.com/Parth12358"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/parth-kshirsagar-0a46a9217/"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:parth.kshirsagar1410@gmail.com"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
