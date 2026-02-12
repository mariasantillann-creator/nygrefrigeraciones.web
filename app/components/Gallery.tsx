'use client';

import Image from 'next/image';

const images = [
    { src: '/img/obra1.jpg', alt: 'Obra NYG - Cámara frigorífica' },
    { src: '/img/obra2.jpg', alt: 'Obra NYG - Instalación industrial' },
    { src: '/img/obra3.jpg', alt: 'Obra NYG - Sistema de frío' },
    { src: '/img/obra4.jpg', alt: 'Obra NYG - Central de refrigeración' },
    { src: '/img/obra5.jpg', alt: 'Obra NYG - Mantenimiento' },
    { src: '/img/obra6.jpg', alt: 'Obra NYG - Equipamiento' },
];

export default function Gallery() {
    return (
        <section
            id="obras"
            style={{
                padding: '100px 24px',
                background: 'var(--gris)',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="section-title">Obras Realizadas</h2>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {images.map((img, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                aspectRatio: '4/3',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                transition: 'all 0.4s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                                const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                                if (img) img.style.transform = 'scale(1.08)';
                                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
                                if (overlay) overlay.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                                if (img) img.style.transform = 'scale(1)';
                                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
                                if (overlay) overlay.style.opacity = '0';
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div
                                className="gallery-overlay"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(11, 60, 93, 0.7) 0%, transparent 60%)',
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: '20px',
                                }}
                            >
                                <span
                                    style={{
                                        color: '#fff',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Video */}
                    <div
                        style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            aspectRatio: '4/3',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            position: 'relative',
                        }}
                    >
                        <video
                            src="/video/obra.mp4"
                            controls
                            playsInline
                            preload="metadata"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
