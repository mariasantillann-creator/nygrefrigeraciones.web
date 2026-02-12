'use client';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #0b3c5d 100%)',
                color: 'rgba(255,255,255,0.7)',
                padding: '50px 24px 30px',
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '24px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                    }}
                >
                    <a
                        href="https://wa.me/5491128673181"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            color: 'rgba(255,255,255,0.7)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#25D366';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                            e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <FaWhatsapp size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/nyg_refrigeracion"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            color: 'rgba(255,255,255,0.7)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                            e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>

                <div
                    style={{
                        width: '60px',
                        height: '1px',
                        background: 'rgba(255,255,255,0.15)',
                    }}
                />

                <p style={{ fontSize: '0.88rem', textAlign: 'center' }}>
                    © {currentYear} NYG Refrigeraciones – Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
}
