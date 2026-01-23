'use client';

import React from "react"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur border-b border-gray-200 dark:border-gray-800 z-50 bg-white/80 dark:bg-[#020617]/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
            <Image
              src="/profile.jpg"
              alt="Samuel Yeboah Agyemang Badu"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-bold text-sm md:text-base">SAMUEL YEBOAH AGYEMANG BADU</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/SAMUEL YEBOAH AGYEMANG BADU.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors text-sm font-medium"
          >
            CV
          </a>
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#020617]">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/SAMUEL YEBOAH AGYEMANG BADU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors text-sm font-medium text-center"
            >
              CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
