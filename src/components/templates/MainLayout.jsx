import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import { logoUrl } from '@/data/data';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header / Nav */}
            <Navbar />

            {/* Content Slot */}
            <main className="flex-grow pt-20 w-full flex flex-col">
                {children}
            </main>

            {/* Footer */}
            <footer className="w-full bg-surface-container-highest py-16 border-t border-outline-variant/20 mt-16 text-left">
                <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <img 
                                    alt="dibiEdu Logo" 
                                    className="h-8 w-auto" 
                                    src={logoUrl}
                                />
                                <span className="font-headline-md text-headline-md text-primary">dibiEdu</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                Empowering learners through world-class educational tools and high-tech experiences.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-label-md text-label-md text-on-surface">Platform</h4>
                            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Courses</a>
                            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Learning Paths</a>
                            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Instructors</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-label-md text-label-md text-on-surface">Company</h4>
                            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
                            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
                            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-label-md text-label-md text-on-surface">Connect</h4>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">public</span>
                                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">mail</span>
                                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">hub</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-outline-variant/30 text-center font-body-sm text-body-sm text-on-surface-variant">
                        © 2026 dibiEdu LMS. Engineered for Excellence.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
