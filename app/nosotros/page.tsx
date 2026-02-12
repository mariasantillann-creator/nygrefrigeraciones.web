'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import {
    FaCheckCircle,
    FaUsers,
    FaClock,
    FaShieldAlt,
    FaHandshake,
    FaStar,
} from 'react-icons/fa';

const valores = [
    {
        icon: FaCheckCircle,
        title: 'Calidad garantizada',
        description: 'Trabajamos con materiales de primera línea y seguimos estándares internacionales en cada proyecto.',
    },
    {
        icon: FaClock,
        title: 'Más de 20 años',
        description: 'Dos décadas de experiencia respaldan cada instalación y servicio que realizamos.',
    },
    {
        icon: FaUsers,
        title: 'Equipo profesional',
        description: 'Técnicos altamente capacitados y en constante actualización tecnológica.',
    },
    {
        icon: FaShieldAlt,
        title: 'Seguridad',
        description: 'Cumplimos con todas las normativas de seguridad para instalaciones de frío alimentario.',
    },
    {
        icon: FaHandshake,
        title: 'Compromiso',
        description: 'Nos comprometemos con cada cliente, ofreciendo soluciones a medida y seguimiento post-venta.',
    },
    {
        icon: FaStar,
        title: 'Excelencia',
        description: 'Buscamos la excelencia en cada detalle, desde el diseño hasta la puesta en marcha.',
    },
];

export default function Nosotros() {
    return (
        <>
            <Navbar />

            {/* Hero */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#fff',
                    overflow: 'hidden',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="/img/obra2.jpg"
                        alt="Sobre NYG Refrigeraciones"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(11,60,93,0.92) 0%, rgba(26,26,46,0.85) 100%)',
                        }}
                    />
                </div>
                <div
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        padding: '120px 24px 60px',
                        maxWidth: '800px',
                    }}
                >
                    <h1
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '16px',
                        }}
                    >
                        Sobre Nosotros
                    </h1>
                    <p
                        style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.85)',
                            lineHeight: 1.8,
                        }}
                    >
                        Conocé quiénes somos, nuestra trayectoria y los valores que nos guían.
                    </p>
                </div>
            </section>

            {/* Historia */}
            <section
                style={{
                    padding: '80px 24px',
                    maxWidth: '900px',
                    margin: '0 auto',
                }}
            >
                <h2 className="section-title">Nuestra Historia</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        fontSize: '1.02rem',
                        color: '#4a5568',
                        lineHeight: 1.9,
                    }}
                >
                    <p>
                        <strong style={{ color: 'var(--azul)' }}>NYG Refrigeraciones</strong> nació
                        hace más de 20 años con la visión de brindar soluciones integrales y de alta
                        calidad en el sector de la refrigeración comercial e industrial.
                    </p>
                    <p>
                        Desde nuestros comienzos en Tortuguitas, Buenos Aires, hemos crecido
                        acompañando a cientos de clientes — desde pequeños comercios hasta grandes
                        plantas industriales — en el diseño, montaje y mantenimiento de sistemas de
                        frío alimentario.
                    </p>
                    <p>
                        Nuestro compromiso con la excelencia, la seguridad y la innovación nos ha
                        convertido en un referente confiable en el rubro, con un equipo técnico
                        altamente capacitado y en constante actualización.
                    </p>
                </div>
            </section>

            {/* Valores */}
            <section
                style={{
                    padding: '80px 24px',
                    background: 'var(--gris)',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="section-title">Nuestros Valores</h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        {valores.map((val, i) => (
                            <div
                                key={i}
                                style={{
                                    background: '#fff',
                                    padding: '30px 26px',
                                    borderRadius: '16px',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <div
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, rgba(29,111,165,0.08), rgba(29,111,165,0.15))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <val.icon size={22} style={{ color: 'var(--azul-claro)' }} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        color: 'var(--azul)',
                                        marginBottom: '8px',
                                    }}
                                >
                                    {val.title}
                                </h3>
                                <p style={{ fontSize: '0.93rem', color: '#5a6978', lineHeight: 1.7 }}>
                                    {val.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
        </>
    );
}
