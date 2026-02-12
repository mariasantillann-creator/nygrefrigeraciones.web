'use client';

import ServiceCard from './ServiceCard';
import {
    FaSnowflake,
    FaIndustry,
    FaCogs,
    FaLayerGroup,
    FaStore,
    FaTools,
} from 'react-icons/fa';

const services = [
    {
        icon: FaSnowflake,
        title: 'Montaje de cámaras frigoríficas',
        description:
            'Instalación de cámaras de baja y media temperatura con terminaciones profesionales y puesta en marcha segura.',
    },
    {
        icon: FaIndustry,
        title: 'Centrales de frío alimentario',
        description:
            'Diseño, instalación y mantenimiento de sistemas centralizados para grandes instalaciones.',
    },
    {
        icon: FaCogs,
        title: 'Unidades condensadoras',
        description:
            'Venta, instalación y mantenimiento de equipos de alto rendimiento y eficiencia energética.',
    },
    {
        icon: FaLayerGroup,
        title: 'Venta de paneles',
        description:
            'Paneles de alta calidad para cámaras frigoríficas, con excelente aislación térmica.',
    },
    {
        icon: FaStore,
        title: 'Instalación de exhibidoras',
        description:
            'Montaje y puesta en marcha de exhibidoras comerciales para optimizar conservación y presentación.',
    },
    {
        icon: FaTools,
        title: 'Mantenimiento preventivo y correctivo',
        description:
            'Servicio clave para evitar fallas, reducir costos y prolongar la vida útil de los equipos.',
        extra: 'Consultá presupuestos por montajes en altura y montajes en seco.',
        highlighted: true,
    },
];

export default function Services() {
    return (
        <section
            id="servicios"
            style={{
                padding: '100px 24px',
                maxWidth: '1200px',
                margin: '0 auto',
            }}
        >
            <h2 className="section-title">Nuestros Servicios</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px',
                }}
            >
                {services.map((svc, i) => (
                    <ServiceCard
                        key={svc.title}
                        icon={svc.icon}
                        title={svc.title}
                        description={svc.description}
                        extra={svc.extra}
                        highlighted={svc.highlighted}
                        delay={i * 100}
                    />
                ))}
            </div>
        </section>
    );
}
