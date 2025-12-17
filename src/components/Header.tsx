"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Keunggulan', href: '#features' },
    { name: 'Kontak', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Danik Setyaningrum Tempe"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-emerald-800">
                Danik Setyaningrum
              </h1>
              <p className="text-xs text-emerald-600 font-medium">
                Tempe Kedelai Premium
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:082310598347"
              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0823-1059-8347</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:082310598347"
                  className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">0823-1059-8347</span>
                </a>
                <div className="flex items-start space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs leading-relaxed">
                    Jl. Sumantri Raya No.3, Dukuh, Sidomukti, Salatiga
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}