'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Obras', href: '#obras' },
        { label: 'Contacto', href: '#contacto' },
        { label: 'Nosotros', href: '/nosotros' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '10px 0' : '18px 0',
                background: scrolled
                    ? 'rgba(11, 60, 93, 0.95)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                transition: 'all 0.35s ease',
                boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Image
                        src="/img/logo.png"
                        alt="NYG Refrigeraciones"
                        width={45}
                        height={45}
                        style={{ borderRadius: '8px' }}
                    />
                    <span
                        style={{
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '1.15rem',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        NYG Refrigeraciones
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                    className="nav-desktop"
                >
                    {navLinks.map((link) =>
                        link.href.startsWith('/') ? (
                            <Link
                                key={link.label}
                                href={link.href}
                                style={{
                                    color: 'rgba(255,255,255,0.85)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '0.93rem',
                                    fontWeight: 500,
                                    transition: 'all 0.25s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    color: 'rgba(255,255,255,0.85)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '0.93rem',
                                    fontWeight: 500,
                                    transition: 'all 0.25s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                {link.label}
                            </a>
                        )
                    )}
                </div>

                {/* Mobile toggle */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                    }}
                    aria-label="Menú"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="nav-mobile-menu"
                    style={{
                        background: 'rgba(11, 60, 93, 0.98)',
                        backdropFilter: 'blur(20px)',
                        padding: '20px 24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                    }}
                >
                    {navLinks.map((link) =>
                        link.href.startsWith('/') ? (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    color: 'rgba(255,255,255,0.9)',
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    transition: 'background 0.2s',
                                }}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    color: 'rgba(255,255,255,0.9)',
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    transition: 'background 0.2s',
                                }}
                            >
                                {link.label}
                            </a>
                        )
                    )}
                </div>
            )}

            <style jsx>{`
        @media (min-width: 769px) {
          .nav-desktop {
            display: flex !important;
          }
          .nav-mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
}
