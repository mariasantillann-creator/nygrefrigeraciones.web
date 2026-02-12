'use client';

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const contactItems = [
    {
        icon: FaWhatsapp,
        label: '+54 9 11 2867-3181',
        href: 'https://wa.me/5491128673181',
        color: '#25D366',
        external: true,
    },
    {
        icon: FaEnvelope,
        label: 'nygrefrigeracion@gmail.com',
        href: 'mailto:nygrefrigeracion@gmail.com',
        color: 'var(--azul-claro)',
        external: false,
    },
    {
        icon: FaEnvelope,
        label: 'gabrielhuetagoyena@gmail.com',
        href: 'mailto:gabrielhuetagoyena@gmail.com',
        color: 'var(--azul-claro)',
        external: false,
    },
    {
        icon: FaMapMarkerAlt,
        label: 'Tortuguitas, Buenos Aires',
        href: '#',
        color: '#E53935',
        external: false,
    },
];

export default function Contact() {
    return (
        <section
            id="contacto"
            style={{
                padding: '100px 24px',
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
            <h2 className="section-title">Contacto</h2>
            <p
                style={{
                    fontSize: '1.05rem',
                    color: '#5a6978',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                }}
            >
                Estamos para ayudarte. Contactanos por cualquiera de estos medios y te
                respondemos a la brevedad.
            </p>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '18px',
                }}
            >
                {contactItems.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '20px 24px',
                            background: '#fff',
                            borderRadius: '14px',
                            border: '1px solid rgba(0,0,0,0.06)',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none',
                            color: 'var(--oscuro)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                        }}
                    >
                        <div
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: `${item.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <item.icon size={22} style={{ color: item.color }} />
                        </div>
                        <span
                            style={{
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                textAlign: 'left',
                            }}
                        >
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
