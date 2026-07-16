import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, name, required = false, className = '', icon = null }) => {
    return (
        <div className="relative w-full">
            {icon && (
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px] transition-colors">
                    {icon}
                </span>
            )}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`
                    w-full h-12 bg-surface rounded-lg font-body-md text-on-surface placeholder:text-on-surface-variant/50 outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all
                    ${icon ? 'pl-10' : 'pl-4'}
                    pr-4
                    ${className}
                `}
            />
        </div>
    );
};

export default Input;
