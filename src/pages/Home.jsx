import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/templates/MainLayout';
import CourseCard from '@/components/molecules/CourseCard';
import { CourseCardSkeleton } from '@/components/atoms/Skeleton';
import { getCourses } from '@/modules/courses/courses.api';
import { testimonials, features, homeStats } from '@/data/data';

const Home = () => {
    const navigate = useNavigate();
    const [featuredCourses, setFeaturedCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFeaturedCourses = async () => {
            setLoading(true);
            try {
                const response = await getCourses({ sort_by: 'rating', order: 'desc' });
                if (response.success && response.data) {
                    setFeaturedCourses(response.data.slice(0, 3));
                }
            } catch (err) {
                console.error("Error loading featured courses", err);
                setError('Failed to load top picks.');
            } finally {
                setLoading(false);
            }
        };
        fetchFeaturedCourses();
    }, []);


    return (
        <MainLayout>
            <div className="flex flex-col w-full text-left bg-surface">

                {/* 1. Hero Section */}
                <section className="relative w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop pt-12 lg:pt-20 pb-20 overflow-hidden text-left">
                    {/* Background Orbs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-fixed-dim/30 to-secondary-fixed/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-surface-container-highest to-primary-fixed/20 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4 opacity-50"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Block */}
                        <div className="flex flex-col space-y-8 z-10">
                            <div className="inline-flex items-center space-x-2 bg-surface-container-high px-4 py-2 rounded-full w-max shadow-sm border border-outline-variant/20">
                                <span className="material-symbols-outlined text-primary text-[18px]">school</span>
                                <span className="font-label-md text-primary tracking-wide uppercase text-xs">Learn Anything, Anytime</span>
                            </div>

                            <h1 className="font-headline-xl text-headline-xl lg:text-[56px] lg:leading-[64px] text-on-surface mb-0 font-bold tracking-tight">
                                Master Your Future with <span className="text-primary relative inline-block">
                                    dibiEdu
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary-fixed-dim -z-10" preserveAspectRatio="none" viewBox="0 0 100 20">
                                        <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"></path>
                                    </svg>
                                </span>
                            </h1>

                            <p className="font-body-lg text-on-surface-variant max-w-lg leading-relaxed text-sm lg:text-base">
                                Embark on a journey of knowledge and skill development with our comprehensive online courses. Learn at your own pace, anytime, anywhere.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button
                                    onClick={() => navigate('/courses')}
                                    className="bg-primary hover:bg-primary/95 text-on-primary font-label-md px-8 py-4 rounded-full shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] flex items-center justify-center space-x-2 group cursor-pointer text-sm font-semibold"
                                >
                                    <span>Explore Courses</span>
                                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>

                            {/* Social Proof */}
                            <div className="flex items-center space-x-4 pt-6 border-t border-outline-variant/30 w-max">
                                <div className="flex -space-x-3">
                                    <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80" alt="User" />
                                    <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80" alt="User" />
                                    <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&q=80" alt="User" />
                                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center z-10">
                                        <span className="material-symbols-outlined text-[16px] text-primary">add</span>
                                    </div>
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="font-label-md text-on-surface text-sm font-semibold">Join 10,000+ learners</span>
                                    <span className="font-body-sm text-on-surface-variant text-xs">growing their skills everyday</span>
                                </div>
                            </div>
                        </div>

                        {/* Local Home Illustration */}
                        <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                            <div className="relative w-full h-full rounded-[48px] overflow-hidden bg-surface-container-low">
                                <img
                                    alt="Modern student illustration"
                                    className="w-full h-full object-cover rounded-[40px]"
                                    src="/img/home.png"
                                />
                            </div>

                            {/* Floating details cards */}
                            {/* <div className="absolute top-10 -left-6 bg-surface/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/20 flex flex-col">
                                <span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wider mb-1 text-left">Progress</span>
                                <div className="flex items-end space-x-2 mb-1.5">
                                    <span className="font-headline-md text-on-surface leading-none text-base font-bold">78%</span>
                                </div>
                                <div className="w-28 h-2 bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[78%] rounded-full"></div>
                                </div>
                                <span className="font-body-sm text-[10px] text-on-surface-variant mt-2 text-left">Keep it up! 🚀</span>
                            </div> */}

                            {/* <div className="absolute bottom-20 -right-4 bg-surface/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/20 flex items-center space-x-3">
                                <div className="w-10 h-10 bg-secondary-fixed rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-on-secondary-fixed text-[18px]">workspace_premium</span>
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="font-label-md text-[9px] text-on-surface-variant uppercase">Certificate</span>
                                    <span className="font-label-md text-xs text-on-surface font-semibold">Web Development</span>
                                    <span className="font-body-sm text-[9px] text-primary mt-0.5">Completed</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                {/* 2. Stats Bar */}
                <section className="w-full bg-surface-container py-10 relative z-20 border-y border-outline-variant/10">
                    <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {homeStats.map((stat, idx) => (
                                <div key={idx} className="flex items-center space-x-4 justify-center">
                                    <div className={`w-12 h-12 rounded-xl ${stat.bgClass} flex items-center justify-center ${stat.textClass}`}>
                                        <span className="material-symbols-outlined text-[28px]">{stat.icon}</span>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="font-headline-lg text-on-surface text-xl lg:text-2xl leading-tight font-bold">{stat.value}</span>
                                        <span className="font-body-sm text-on-surface-variant text-xs">{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Features Section */}
                <section className="w-full py-16 bg-surface relative overflow-hidden">
                    <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="font-label-md text-primary tracking-widest uppercase mb-2 block text-xs">Our Advantages</span>
                            <h2 className="font-headline-xl text-on-surface text-2xl lg:text-3xl mb-4 font-bold">Why Choose dibiEdu?</h2>
                            <p className="font-body-lg text-on-surface-variant text-sm lg:text-base leading-relaxed">
                                Our platform is designed to provide a seamless and effective learning experience, ensuring you gain the skills you need to succeed.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature) => (
                                <div key={feature.id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/40 group text-left">
                                    <div className={`w-12 h-12 rounded-xl ${feature.iconBgClass} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                        <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
                                    </div>
                                    <h3 className="font-headline-md text-base text-on-surface mb-2 font-semibold">{feature.title}</h3>
                                    <p className="font-body-sm text-sm text-on-surface-variant">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Featured Courses (Top Picks) */}
                <section className="py-16 px-margin-mobile lg:px-margin-desktop w-full bg-surface-container-low border-y border-outline-variant/20">
                    <div className="max-w-[1280px] mx-auto flex flex-col items-center">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="font-label-md text-primary tracking-widest uppercase mb-2 block text-xs">Featured Curriculum</span>
                            <h2 className="font-headline-xl text-on-surface text-2xl lg:text-3xl mb-4 font-bold">Our Top Picks Courses</h2>
                            <p className="font-body-lg text-on-surface-variant text-sm leading-relaxed">
                                Get enrolled in our highly recommended courses to start learning from leading practitioners.
                            </p>
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                <CourseCardSkeleton />
                                <CourseCardSkeleton />
                                <CourseCardSkeleton />
                            </div>
                        ) : error ? (
                            <span className="text-sm text-on-surface-variant">{error}</span>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                {featuredCourses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        )}

                        <button
                            onClick={() => navigate('/courses')}
                            className="mt-12 px-6 py-3 bg-primary hover:bg-primary/95 text-on-primary font-label-md rounded-full shadow-md transition-all text-sm font-semibold active:scale-95 cursor-pointer"
                        >
                            View All Courses
                        </button>
                    </div>
                </section>

                {/* 5. Testimonials Section */}
                <section className="py-20 px-margin-mobile lg:px-margin-desktop w-full bg-surface">
                    <div className="max-w-[1280px] mx-auto flex flex-col items-center">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="font-label-md text-primary tracking-widest uppercase mb-2 block text-xs">Success Stories</span>
                            <h2 className="font-headline-xl text-on-surface text-2xl lg:text-3xl mb-4 font-bold">What Our Students Say</h2>
                            <p className="font-body-lg text-on-surface-variant text-sm leading-relaxed">
                                Discover how dibiEdu has helped individuals build skills, launch tech careers, and advance their professional goals.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            {testimonials.map((t, idx) => (
                                <div key={idx} className="bg-surface-container rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-outline-variant/30 relative">
                                    <span className="text-primary text-6xl absolute top-4 right-6 font-serif opacity-20 pointer-events-none">“</span>

                                    <div className="flex gap-1 mb-4 text-secondary-fixed">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                                        ))}
                                    </div>

                                    <p className="font-body-md text-on-surface-variant text-sm leading-relaxed italic mb-6">
                                        "{t.comment}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <img className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" src={t.avatar} alt={t.name} />
                                        <div className="flex flex-col text-left">
                                            <h4 className="font-headline-md text-sm font-bold text-on-surface">{t.name}</h4>
                                            <span className="font-body-sm text-[11px] text-on-surface-variant">{t.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Join Now CTA Section */}
                <section className="py-20 px-margin-mobile lg:px-margin-desktop w-full">
                    <div className="max-w-[1280px] mx-auto bg-gradient-to-r from-primary to-primary-fixed-dim rounded-[2.5rem] p-10 lg:p-16 text-center text-on-primary shadow-2xl relative overflow-hidden flex flex-col items-center">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-fixed/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>

                        <div className="relative z-10 flex flex-col items-center max-w-2xl">
                            <span className="bg-white/10 text-white uppercase text-xs tracking-wider px-4 py-1.5 rounded-full mb-6 font-semibold shadow-sm">
                                Start Today
                            </span>
                            <h2 className="text-3xl lg:text-[44px] lg:leading-[52px] font-bold mb-6 tracking-tight">
                                Ready to Elevate Your Digital Skills?
                            </h2>
                            <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-8">
                                Join thousands of learners worldwide. Sign up now, get access to dozens of expert tutorials, and start building the projects of your dreams.
                            </p>
                            <button
                                onClick={() => navigate('/login')}
                                className="bg-white text-primary hover:bg-white/95 font-label-md px-10 py-4 rounded-full shadow-lg transition-all text-sm font-bold hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                            >
                                Join Now for Free
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </MainLayout>
    );
};

export default Home;
