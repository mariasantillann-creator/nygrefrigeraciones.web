'use client';

import Image from 'next/image';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Header() {
    return (
        <header
            id="inicio"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                overflow: 'hidden',
            }}
        >
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src="/img/obra1.jpg"
                    alt="NYG Refrigeraciones - Obra"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    quality={85}
                />
                {/* Gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(135deg, rgba(11, 60, 93, 0.88) 0%, rgba(26, 26, 46, 0.82) 50%, rgba(11, 60, 93, 0.75) 100%)',
                    }}
                />
            </div>

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '850px',
                    padding: '0 24px',
                }}
                className="animate-fade-in-up"
            >
                <div
                    style={{
                        marginBottom: '28px',
                    }}
                    className="animate-float"
                >
                    <Image
                        src="/img/logo.png"
                        alt="NYG Refrigeraciones"
                        width={160}
                        height={160}
                        style={{
                            borderRadius: '20px',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                        }}
                        priority
                    />
                </div>

                <h1
                    style={{
                        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Servicio técnico en{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #64B5F6, #42A5F5, #2196F3)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        refrigeración comercial e industrial
                    </span>
                </h1>

                <p
                    style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                        lineHeight: 1.8,
                        color: 'rgba(255,255,255,0.88)',
                        maxWidth: '700px',
                        margin: '0 auto 36px',
                    }}
                >
                    En NYG Refrigeraciones brindamos soluciones integrales en refrigeración
                    comercial e industrial. Contamos con más de 20 años de experiencia en la
                    instalación, mantenimiento preventivo y correctivo de sistemas de frío
                    alimentario, garantizando eficiencia, seguridad y alto rendimiento.
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '14px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <a
                        href="https://wa.me/5491128673181"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            background: 'linear-gradient(135deg, #25D366, #128C7E)',
                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                        }}
                    >
                        <FaWhatsapp size={20} />
                        Escribinos por WhatsApp
                    </a>
                    <a
                        href="https://www.instagram.com/nyg_refrigeracion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <FaInstagram size={20} />
                        Instagram
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0.6,
                }}
                className="animate-float"
            >
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Descubrí más
                </span>
                <div
                    style={{
                        width: '24px',
                        height: '38px',
                        border: '2px solid rgba(255,255,255,0.5)',
                        borderRadius: '12px',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            width: '4px',
                            height: '8px',
                            background: '#fff',
                            borderRadius: '2px',
                            position: 'absolute',
                            top: '6px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            animation: 'fadeInUp 1.5s ease-in-out infinite',
                        }}
                    />
                </div>
            </div>
        </header>
    );
}
