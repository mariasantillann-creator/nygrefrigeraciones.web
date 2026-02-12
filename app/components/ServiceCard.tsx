'use client';

import { IconType } from 'react-icons';

interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
    extra?: string;
    highlighted?: boolean;
    delay?: number;
}

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    extra,
    highlighted = false,
    delay = 0,
}: ServiceCardProps) {
    return (
        <div
            style={{
                background: highlighted
                    ? 'linear-gradient(135deg, #e8f4fd 0%, #d1ecf9 100%)'
                    : '#fff',
                padding: '32px 28px',
                borderRadius: '16px',
                border: highlighted
                    ? '2px solid var(--azul-claro)'
                    : '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.35s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: `${delay}ms`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(29, 111, 165, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
            }}
        >
            {/* Accent line */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: highlighted
                        ? 'linear-gradient(90deg, var(--azul), var(--azul-brillante))'
                        : 'linear-gradient(90deg, var(--azul-claro), var(--azul-brillante))',
                    opacity: highlighted ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
                className="service-accent"
            />

            <div
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: highlighted
                        ? 'linear-gradient(135deg, var(--azul), var(--azul-claro))'
                        : 'linear-gradient(135deg, rgba(29, 111, 165, 0.08), rgba(29, 111, 165, 0.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                    transition: 'all 0.3s ease',
                }}
            >
                <Icon
                    size={26}
                    style={{
                        color: highlighted ? '#fff' : 'var(--azul-claro)',
                    }}
                />
            </div>

            <h3
                style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--azul)',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                }}
            >
                {title}
            </h3>

            <p
                style={{
                    fontSize: '0.93rem',
                    color: '#5a6978',
                    lineHeight: 1.7,
                }}
            >
                {description}
            </p>

            {extra && (
                <p
                    style={{
                        fontSize: '0.93rem',
                        fontWeight: 600,
                        color: 'var(--azul)',
                        marginTop: '12px',
                        padding: '10px 14px',
                        background: 'rgba(29, 111, 165, 0.06)',
                        borderRadius: '8px',
                        borderLeft: '3px solid var(--azul-claro)',
                    }}
                >
                    {extra}
                </p>
            )}

            <style jsx>{`
        div:hover .service-accent {
          opacity: 1 !important;
        }
      `}</style>
        </div>
    );
}
