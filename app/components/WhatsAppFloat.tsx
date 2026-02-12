'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/5491128673181"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            style={{
                position: 'fixed',
                bottom: '28px',
                right: '28px',
                zIndex: 999,
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.55)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.45)';
            }}
        >
            <FaWhatsapp size={28} />

            {/* Pulse ring */}
            <span
                style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '50%',
                    border: '2px solid rgba(37, 211, 102, 0.6)',
                    animation: 'pulse-ring 2s ease-out infinite',
                }}
            />
        </a>
    );
}
