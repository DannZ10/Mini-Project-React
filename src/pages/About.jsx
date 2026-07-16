import React from 'react';
import MainLayout from '@/components/templates/MainLayout';

const About = () => {
    return (
        <MainLayout>
            <div className="flex flex-col w-full bg-surface text-left">

                {/* Mission Hero Header */}
                <section className="relative w-full pb-24 overflow-hidden rounded-b-[3rem]">
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/img/about1.png')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent backdrop-blur-[2px]"></div>
                    <div className="relative max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-16 lg:pt-32 pb-16 z-10 flex flex-col items-center text-center">
                        <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-6 bg-primary-fixed/50 px-4 py-1.5 rounded-full shadow-sm text-xs">
                            Our Mission
                        </span>
                        <h1 className="font-headline-xl text-headline-xl lg:text-[48px] text-on-surface mb-8 max-w-4xl tracking-tight leading-tight">
                            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Learners</span> Worldwide
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed text-sm lg:text-base">
                            At dibiEdu, we believe education is the ultimate catalyst for progress. We build high-tech, intuitive tools that bridge gaps and elevate learning experiences across the globe.
                        </p>
                    </div>
                </section>

                {/* Stats Section Overlay */}
                <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-24 w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-container rounded-3xl p-8 lg:p-12 shadow-md hover:shadow-lg transition-shadow duration-300 transform -mt-36 relative z-20">
                        <div className="flex flex-col items-center text-center p-4 group">
                            <div className="w-16 h-16 rounded-2xl bg-primary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm text-primary">
                                <span className="material-symbols-outlined text-[32px]">school</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl lg:text-2xl">10,000+</h3>
                            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide text-xs">Active Learners</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 group">
                            <div className="w-16 h-16 rounded-2xl bg-secondary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm text-secondary">
                                <span className="material-symbols-outlined text-[32px]">menu_book</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl lg:text-2xl">500+</h3>
                            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide text-xs">Expert Courses</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 group">
                            <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm text-tertiary">
                                <span className="material-symbols-outlined text-[32px]">public</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl lg:text-2xl">120+</h3>
                            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide text-xs">Countries Reached</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 group">
                            <div className="w-16 h-16 rounded-2xl bg-error-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm text-error">
                                <span className="material-symbols-outlined text-[32px]">verified</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl lg:text-2xl">99.9%</h3>
                            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide text-xs">Platform Uptime</p>
                        </div>
                    </div>
                </section>

                {/* Vision and Core Values */}
                <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px] group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('/img/about2.png')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 text-2xl lg:text-3xl">Our Vision</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 text-sm lg:text-base">
                                    We envision a world where high-quality education is accessible to everyone, regardless of geography or background. By leveraging cutting-edge technology and human-centric design, we are breaking down traditional barriers to knowledge.
                                </p>
                                <div className="w-12 h-1 bg-primary rounded-full"></div>
                            </div>
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 text-2xl lg:text-3xl">Our Core Values</h2>
                                <ul className="flex flex-col gap-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                                            <span className="material-symbols-outlined text-[20px]">bolt</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">Innovation First</h4>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Constantly pushing the boundaries of what educational technology can achieve.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1 text-secondary">
                                            <span className="material-symbols-outlined text-[20px]">diversity_3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">Inclusive Community</h4>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Fostering environments where diverse perspectives are celebrated and nurtured.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 mt-1 text-tertiary">
                                            <span className="material-symbols-outlined text-[20px]">trending_up</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">Continuous Growth</h4>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Believing that learning never stops, for our users and ourselves.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-24 w-full">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 text-2xl lg:text-3xl">Meet Our Experts</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl text-sm">The passionate minds architecting the future of digital learning.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Member 1 */}
                        <div className="flex flex-col items-center bg-surface-container-low p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2 group rounded-3xl shadow-md border border-outline-variant/30">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-inner ring-4 ring-surface bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[64px] text-primary">account_circle</span>
                            </div>
                            <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">Dr. Elena Rostova</h4>
                            <p className="font-label-md text-label-md text-primary mb-4 text-xs">Chief Education Officer</p>
                            <div className="flex gap-3 mt-auto">
                                <span className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary cursor-pointer transition-colors">language</span>
                            </div>
                        </div>

                        {/* Member 2 */}
                        <div className="flex flex-col items-center bg-surface-container-low p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2 group rounded-3xl shadow-md border border-outline-variant/30">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-inner ring-4 ring-surface bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[64px] text-primary">account_circle</span>
                            </div>
                            <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">Marcus Chen</h4>
                            <p className="font-label-md text-label-md text-primary mb-4 text-xs">Head of Product</p>
                            <div className="flex gap-3 mt-auto">
                                <span className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary cursor-pointer transition-colors">language</span>
                            </div>
                        </div>

                        {/* Member 3 */}
                        <div className="flex flex-col items-center bg-surface-container-low p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2 group rounded-3xl shadow-md border border-outline-variant/30">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-inner ring-4 ring-surface bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[64px] text-primary">account_circle</span>
                            </div>
                            <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">Aisha Patel</h4>
                            <p className="font-label-md text-label-md text-primary mb-4 text-xs">Lead UX Researcher</p>
                            <div className="flex gap-3 mt-auto">
                                <span className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary cursor-pointer transition-colors">language</span>
                            </div>
                        </div>

                        {/* Member 4 */}
                        <div className="flex flex-col items-center bg-surface-container-low p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2 group rounded-3xl shadow-md border border-outline-variant/30">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-inner ring-4 ring-surface bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[64px] text-primary">account_circle</span>
                            </div>
                            <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">David Kim</h4>
                            <p className="font-label-md text-label-md text-primary mb-4 text-xs">VP of Engineering</p>
                            <div className="flex gap-3 mt-auto">
                                <span className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary cursor-pointer transition-colors">language</span>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </MainLayout>
    );
};

export default About;
