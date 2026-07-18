import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import { aboutStats, teamMembers, coreValues } from '@/data/data';


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
                        {aboutStats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-4 group">
                                <div className={`w-16 h-16 rounded-2xl ${stat.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm ${stat.textClass}`}>
                                    <span className="material-symbols-outlined text-[32px]">{stat.icon}</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl lg:text-2xl">{stat.value}</h3>
                                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide text-xs">{stat.label}</p>
                            </div>
                        ))}
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
                                    {coreValues.map((val) => (
                                        <li key={val.id} className="flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-full ${val.bgClass} flex items-center justify-center shrink-0 mt-1`}>
                                                <span className="material-symbols-outlined text-[20px]">{val.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">{val.title}</h4>
                                                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">{val.description}</p>
                                            </div>
                                        </li>
                                    ))}
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
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-surface-container-low p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2 group rounded-3xl shadow-md border border-outline-variant/30">
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-inner ring-4 ring-surface bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[64px] text-primary">account_circle</span>
                                </div>
                                <h4 className="font-headline-md text-headline-md text-on-surface text-base mb-1">{member.name}</h4>
                                <p className="font-label-md text-label-md text-primary mb-4 text-xs">{member.role}</p>
                                <div className="flex gap-3 mt-auto">
                                    <a href={member.socials.website} className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary cursor-pointer transition-colors">language</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </MainLayout>
    );
};

export default About;
