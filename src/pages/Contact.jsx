import React, { useState } from 'react';
import MainLayout from '@/components/templates/MainLayout';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'sales',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1200);
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: 'sales',
            message: ''
        });
        setSubmitted(false);
    };
    const campusImageUrl = '/img/contact1.png';
    const mapImageUrl = '/img/contact2.png';
    return (
        <MainLayout>
            <div className="flex flex-col w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-12 lg:py-24 gap-16 relative overflow-hidden text-left lg:gap-24">

                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>

                {/* Header Title Section */}
                <section className="flex flex-col items-start gap-4 max-w-3xl">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-primary"></div>
                        <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-semibold text-xs">
                            Contact Us
                        </span>
                    </div>
                    <h1 className="font-headline-xl text-3xl lg:text-4xl text-on-surface">Get in Touch</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-2 text-sm lg:text-base">
                        Whether you're an institution looking to scale your learning ecosystem, or a learner needing support, our global team is ready to assist.
                    </p>
                </section>

                {/* Grid Content Columns */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10 items-start">

                    {/* Left Column: Contact Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-12">
                        <div className="flex flex-col gap-8">

                            {/* Email Support Card */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-lg group-hover:-translate-y-1 shadow-md">
                                    <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        mail
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1 pt-1">
                                    <h3 className="font-headline-md text-headline-md text-on-surface text-base lg:text-lg">Email Us</h3>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-2 text-xs">For general inquiries and support.</p>
                                    <a className="font-body-md text-body-md text-primary hover:text-primary-container transition-colors inline-flex items-center gap-2 group-hover:underline text-sm font-semibold" href="mailto:hello@dibiedu.com">
                                        hello@dibiedu.com
                                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            {/* Phone Support Card */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-lg group-hover:-translate-y-1 shadow-md">
                                    <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        phone
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1 pt-1">
                                    <h3 className="font-headline-md text-headline-md text-on-surface text-base lg:text-lg">Call Us</h3>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-2 text-xs">Mon-Fri from 8am to 6pm EST.</p>
                                    <a className="font-body-md text-body-md text-primary hover:text-primary-container transition-colors inline-flex items-center gap-2 group-hover:underline text-sm font-semibold" href="tel:+18005550199">
                                        +1 (800) 555-0199
                                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            {/* Location HQ Card */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-lg group-hover:-translate-y-1 shadow-md">
                                    <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        location_on
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1 pt-1">
                                    <h3 className="font-headline-md text-headline-md text-on-surface text-base lg:text-lg">Global HQ</h3>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-2 text-xs">Come visit our state-of-the-art campus.</p>
                                    <p className="font-body-md text-body-md text-on-surface text-sm leading-relaxed">
                                        100 Innovation Drive<br />
                                        San Francisco, CA 94105
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Interactive Campus Tour Link */}
                        <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group cursor-pointer border border-outline-variant/30">
                            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-40"></div>
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={campusImageUrl}
                                alt="Modern campus office"
                            />
                            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined text-[20px]">explore</span>
                                </div>
                                <span className="font-label-md text-label-md text-white tracking-wide text-xs">View Campus Tour</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Inquiry Form */}
                    <div className="lg:col-span-7 w-full">
                        <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-[2rem] p-8 lg:p-12 relative shadow-xl overflow-hidden min-h-[500px]">

                            {/* Accent Circle Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>

                            {!submitted ? (
                                <>
                                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 text-xl lg:text-2xl">Send a Message</h2>
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                                            {/* First Name */}
                                            <div className="flex flex-col gap-2 relative">
                                                <label className="font-label-md text-label-md text-on-surface-variant text-xs" htmlFor="firstName">First Name</label>
                                                <div className="relative group w-full">
                                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors z-10">person</span>
                                                    <input
                                                        className="w-full h-14 pl-12 pr-4 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-left"
                                                        id="firstName"
                                                        name="firstName"
                                                        required
                                                        type="text"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* Last Name */}
                                            <div className="flex flex-col gap-2 relative">
                                                <label className="font-label-md text-label-md text-on-surface-variant text-xs" htmlFor="lastName">Last Name</label>
                                                <div className="relative group w-full">
                                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors z-10">person</span>
                                                    <input
                                                        className="w-full h-14 pl-12 pr-4 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-left"
                                                        id="lastName"
                                                        name="lastName"
                                                        required
                                                        type="text"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        {/* Work Email */}
                                        <div className="flex flex-col gap-2 relative w-full">
                                            <label className="font-label-md text-label-md text-on-surface-variant text-xs" htmlFor="email">Work Email</label>
                                            <div className="relative group w-full">
                                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors z-10">alternate_email</span>
                                                <input
                                                    className="w-full h-14 pl-12 pr-4 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-left"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        {/* Subject dropdown */}
                                        <div className="flex flex-col gap-2 relative w-full">
                                            <label className="font-label-md text-label-md text-on-surface-variant text-xs" htmlFor="subject">Subject</label>
                                            <div className="relative group w-full">
                                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors z-10">topic</span>
                                                <select
                                                    className="w-full h-14 pl-12 pr-10 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer text-left"
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                >
                                                    <option value="sales">Sales Inquiry</option>
                                                    <option value="support">Technical Support</option>
                                                    <option value="partnership">Partnership Opportunity</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none z-10">expand_more</span>
                                            </div>
                                        </div>

                                        {/* Message Body */}
                                        <div className="flex flex-col gap-2 relative w-full">
                                            <label className="font-label-md text-label-md text-on-surface-variant text-xs" htmlFor="message">How can we help?</label>
                                            <div className="relative group w-full">
                                                <span className="material-symbols-outlined absolute left-4 top-4 text-outline group-focus-within:text-primary transition-colors z-10">chat</span>
                                                <textarea
                                                    className="w-full pt-4 pb-4 pl-12 pr-4 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-xl outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none text-left"
                                                    id="message"
                                                    name="message"
                                                    required
                                                    rows="5"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            disabled={loading}
                                            className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md py-4 rounded-xl shadow-[0_8px_20px_rgba(37,99,235,0.25)] flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                            type="submit"
                                        >
                                            {loading ? 'Sending Message...' : 'Send Message'}
                                            <span className="material-symbols-outlined text-[20px]">send</span>
                                        </button>

                                        <p className="font-body-sm text-body-sm text-on-surface-variant text-center text-xs mt-2">
                                            By submitting this form, you agree to our <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                /* Success State overlay */
                                <div className="absolute inset-0 bg-surface/98 backdrop-blur-sm rounded-[2rem] z-20 flex flex-col items-center justify-center p-12 text-center transition-all duration-500 animate-fadeIn">
                                    <div className="w-20 h-20 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-6 shadow-lg shadow-tertiary-container/30 text-tertiary">
                                        <span className="material-symbols-outlined text-[40px]">check</span>
                                    </div>
                                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3 text-xl lg:text-2xl">Message Sent!</h3>
                                    <p className="font-body-lg text-body-lg text-on-surface-variant text-sm lg:text-base max-w-sm mb-8 leading-relaxed">
                                        Thank you for reaching out, {formData.firstName}. A member of our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={handleReset}
                                        className="px-6 py-3 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors cursor-pointer"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>

                </section>

                {/* Map Section */}
                <section className="w-full flex flex-col gap-6 mt-8">
                    <div className="flex items-center justify-between">
                        <h2 className="font-headline-md text-headline-md text-on-surface text-lg lg:text-xl">Find us on the map</h2>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-xs">San Francisco HQ</span>
                        </div>
                    </div>

                    <div className="w-full h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-md relative group border border-outline-variant/30">
                        <div
                            className="w-full h-full bg-surface-container-high bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-105"
                            style={{ backgroundImage: `url('${mapImageUrl}')` }}
                        ></div>

                        {/* Map Directions Card Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-auto lg:w-80 bg-surface/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-on-surface/5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">directions</span>
                                </div>
                                <div>
                                    <h4 className="font-label-md text-label-md text-on-surface text-sm font-semibold">Get Directions</h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">View in Google Maps</p>
                                </div>
                            </div>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full block py-2.5 bg-surface-container text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-colors text-center text-sm font-semibold"
                            >
                                Open Map
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </MainLayout>
    );
};

export default Contact;
