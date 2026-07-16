import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false, className = '' }) => {
    const styles = {
        primary: 'bg-primary hover:bg-primary/95 text-on-primary shadow-[0_4px_14px_rgba(0,74,198,0.2)] hover:shadow-[0_6px_20px_rgba(0,74,198,0.35)]',
        secondary: 'bg-surface hover:bg-surface-container-low text-on-surface border border-outline-variant/50 shadow-sm',
        danger: 'bg-error hover:bg-error/90 text-on-error shadow-sm',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                px-6 py-3 rounded-full font-label-md text-label-md transition-all duration-300 active:scale-[0.98]
                ${styles[variant] || styles.primary}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;
