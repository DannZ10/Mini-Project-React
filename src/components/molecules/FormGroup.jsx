import React from 'react';
import Input from '@/components/atoms/Input';

const FormGroup = ({ label, type = 'text', name, placeholder, value, onChange, required = false, icon = null, className = '' }) => {
    return (
        <div className={`flex flex-col gap-2 relative group w-full ${className}`}>
            <label className="font-label-md text-on-surface text-[13px] text-left" htmlFor={name}>
                {label} {required && <span className="text-error">*</span>}
            </label>
            <Input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                icon={icon}
            />
        </div>
    );
};

export default FormGroup;
