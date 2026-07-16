import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import { getCourses } from '@/modules/courses/courses.api';
import useAuth from '@/modules/auth/useAuth';

const StudentDashboard = () => {
    const { user } = useAuth();
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudentCourses = async () => {
            try {
                const response = await getCourses();
                if (response.success && response.data) {
                    // Simulating enrolled courses by taking the first few elements from seeded list
                    setEnrolledCourses(response.data.slice(0, 2));
                }
            } catch (err) {
                console.error("Error loading student enrolled courses", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStudentCourses();
    }, []);

    const focusBannerImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcarRkVWpKu_jZ4o9CzBE2pTDNBIWAxkbuyAMBVic2MFfzWIf_MHYJciky60NQIsh4eBFzJbpUYQiwKKyFSpoMVa8kj3CE77tp4U845SSGcXIMkqJicKZ2GaY-zlnHQsHRWTLui4JQBp177dGZ-U3QbIwuvxHbxPprIi_0PBgxcM94UAIJy376-YRz1fdV1ohBj3yUga1HEjHxLkl11k4sTvgweLo4a-Ia1T1B54tdPj3iKNa5AUYm';

    return (
        <DashboardLayout activeTab="dashboard">
            <div className="flex flex-col w-full text-left gap-8 pb-12">
                
                {/* Current Focus Welcome Banner */}
                <div className="w-full relative rounded-2xl overflow-hidden shadow-md border border-outline-variant/20">
                    <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ backgroundImage: `url('${focusBannerImg}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/60 to-transparent mix-blend-multiply"></div>
                    
                    <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 text-on-primary">
                        <div className="flex-grow space-y-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-primary-fixed-dim font-label-sm uppercase tracking-wider text-[10px] font-semibold">
                                    <span className="material-symbols-outlined text-[14px]">school</span>
                                    Current Focus
                                </div>
                                <h1 className="font-display-lg text-2xl lg:text-3xl text-white leading-tight font-bold">
                                    Advanced Data Visualization with D3.js
                                </h1>
                                <p className="font-body-lg text-xs lg:text-sm text-surface-variant max-w-2xl leading-relaxed">
                                    Welcome back, {user?.name || 'Student'}. Master the art of translating complex data into compelling, interactive visual narratives. You're currently in Module 4: Scales and Axes.
                                </p>
                            </div>
                            
                            <div className="space-y-3 max-w-md">
                                <div className="flex justify-between font-label-sm text-surface-container text-xs">
                                    <span>Course Progress</span>
                                    <span className="font-bold">68%</span>
                                </div>
                                <div className="h-2 w-full bg-surface-variant/20 rounded-full overflow-hidden backdrop-blur-sm">
                                    <div className="h-full bg-primary-fixed transition-all duration-1000 ease-out" style={{ width: '68%' }}></div>
                                </div>
                                <p className="text-[11px] text-primary-fixed-dim font-semibold">Next Lesson: Implementing Time Scales (15 mins)</p>
                            </div>
                            
                            <div className="pt-4 flex gap-4">
                                <button className="px-5 py-3 bg-primary text-on-primary font-label-sm rounded-lg hover:bg-primary-container transition-colors shadow-lg flex items-center gap-2 text-xs font-semibold cursor-pointer">
                                    <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                                    Continue Learning
                                </button>
                                <button className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-sm rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2 text-xs font-semibold cursor-pointer">
                                    View Syllabus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Split section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left 2 Columns: Time spent, Certs, Enrolled courses */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        
                        {/* Weekly log & Certs summary row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            
                            {/* Study time stat box */}
                            <div className="bg-surface-container rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group border border-outline-variant/10">
                                <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                                <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm">
                                                <span className="material-symbols-outlined text-[24px]">timer</span>
                                            </div>
                                            <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Weekly Study Time</h3>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col justify-end pb-2">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-display-lg text-3xl text-on-surface leading-none font-bold">12.5</span>
                                            <span className="font-body-md text-xs text-on-surface-variant font-semibold">hours</span>
                                        </div>
                                        <div className="flex items-center gap-1 mt-2 text-xs">
                                            <span className="material-symbols-outlined text-[16px] text-tertiary">trending_up</span>
                                            <span className="text-tertiary font-bold">+2.1 hrs</span>
                                            <span className="text-on-surface-variant">vs last week</span>
                                        </div>
                                    </div>
                                    {/* Mini Chart bars mock */}
                                    <div className="h-16 w-full flex items-end justify-between gap-2 px-1">
                                        <div className="w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
                                        <div className="w-full bg-primary/30 rounded-t-sm h-[55%]"></div>
                                        <div className="w-full bg-primary/40 rounded-t-sm h-[80%]"></div>
                                        <div className="w-full bg-primary/50 rounded-t-sm h-[60%]"></div>
                                        <div className="w-full bg-primary/60 rounded-t-sm h-[95%]"></div>
                                        <div className="w-full bg-primary rounded-t-sm h-[100%]"></div>
                                        <div className="w-full bg-surface-variant rounded-t-sm h-[30%]"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-on-surface-variant px-1 font-bold">
                                        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span className="text-primary">S</span><span>S</span>
                                    </div>
                                </div>
                            </div>

                            {/* Certificates stats circle box */}
                            <div className="bg-surface-container rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group border border-outline-variant/10">
                                <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
                                <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-secondary shadow-sm">
                                                <span className="material-symbols-outlined text-[24px]">military_tech</span>
                                            </div>
                                            <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Certifications</h3>
                                        </div>
                                    </div>
                                    
                                    {/* Circle Progress Visual */}
                                    <div className="flex justify-center items-center py-2">
                                        <div className="relative w-24 h-24">
                                            <svg className="transform -rotate-90" height="96" viewBox="0 0 100 100" width="96">
                                                <circle className="text-outline-variant/40" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="8"></circle>
                                                <circle className="text-primary transition-all duration-1000 ease-out" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="62.8" strokeWidth="8"></circle>
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="font-headline-md text-xl text-on-surface font-bold">3</span>
                                                <span className="text-[10px] text-on-surface-variant">Earned</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-surface rounded-lg p-2.5 flex flex-col items-center justify-center shadow-sm text-xs">
                                        <span className="text-[11px] text-on-surface-variant">Next: <strong className="text-on-surface">UX Principles</strong></span>
                                        <span className="text-[10px] text-primary mt-1 font-semibold flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[12px]">lock_open</span> 
                                            2 modules remaining
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Enrolled Courses Grid list */}
                        <div className="bg-surface-container rounded-2xl p-6 lg:p-8 shadow-sm border border-outline-variant/10">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="font-headline-md text-base lg:text-lg font-semibold text-on-surface">Enrolled Courses</h2>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-surface rounded-md text-primary shadow-sm hover:bg-surface-bright cursor-pointer">
                                        <span className="material-symbols-outlined text-[20px]">grid_view</span>
                                    </button>
                                </div>
                            </div>

                            {loading ? (
                                <div className="flex flex-col items-center py-10 w-full">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                    <span className="text-xs text-on-surface-variant mt-3">Loading active enrollments...</span>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                    {enrolledCourses.map((course, index) => {
                                        const progressPct = index === 0 ? 42 : 15;
                                        return (
                                            <div key={course.id} className="group cursor-pointer">
                                                <div className="relative h-40 rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow border border-outline-variant/20">
                                                    <img 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                                        src={course.thumbnail} 
                                                        alt={course.title}
                                                        onError={(e) => {
                                                            e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500';
                                                        }}
                                                    />
                                                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-surface/90 backdrop-blur-sm rounded text-[9px] font-bold text-on-surface tracking-wide uppercase">
                                                        {course.level}
                                                    </div>
                                                    <div className="absolute bottom-3 right-3 w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                        <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                                                    </div>
                                                </div>
                                                <h3 className="font-body-lg text-sm text-on-surface font-bold mb-1 group-hover:text-primary transition-colors truncate">
                                                    {course.title}
                                                </h3>
                                                <p className="text-[11px] text-on-surface-variant mb-3 line-clamp-1">
                                                    {course.description}
                                                </p>
                                                <div className="flex items-center gap-3 text-xs">
                                                    <div className="flex-grow h-1.5 bg-surface-variant rounded-full overflow-hidden">
                                                        <div className="h-full bg-primary rounded-full" style={{ width: `${progressPct}%` }}></div>
                                                    </div>
                                                    <span className="text-[11px] font-semibold text-on-surface-variant w-8 text-right">{progressPct}%</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            <button className="mt-8 w-full py-4 border border-outline-variant border-dashed rounded-xl text-on-surface-variant font-label-sm hover:bg-surface hover:text-primary transition-colors flex items-center justify-center gap-2 group cursor-pointer text-xs font-semibold">
                                <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
                                Explore Course Catalog
                            </button>
                        </div>

                    </div>

                    {/* Right Column: Deadlines list & Help cards */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        
                        {/* Deadlines stat card */}
                        <div className="bg-surface-container rounded-2xl p-6 shadow-sm border border-outline-variant/10">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-headline-md text-sm font-semibold text-on-surface">Upcoming Deadlines</h2>
                                <span className="material-symbols-outlined text-on-surface-variant">event</span>
                            </div>
                            
                            <div className="space-y-4 text-left">
                                <div className="flex gap-4 p-4 bg-surface rounded-lg border-l-4 border-error shadow-sm text-xs">
                                    <div className="flex flex-col items-center justify-center w-12 shrink-0 border-r border-surface-variant pr-4">
                                        <span className="text-[10px] text-error font-bold uppercase tracking-wide">Oct</span>
                                        <span className="font-display-lg text-lg text-on-surface leading-none font-bold">24</span>
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <h4 className="font-label-sm text-on-surface truncate font-semibold">Project: D3 Canvas</h4>
                                        <p className="text-[10px] text-on-surface-variant truncate mt-0.5">Adv. Data Visualization</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-4 hover:bg-surface rounded-lg transition-colors border-l-4 border-transparent hover:border-primary cursor-pointer group text-xs">
                                    <div className="flex flex-col items-center justify-center w-12 shrink-0 border-r border-surface-variant pr-4">
                                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wide group-hover:text-primary transition-colors">Oct</span>
                                        <span className="font-display-lg text-lg text-on-surface leading-none group-hover:text-primary transition-colors font-bold">28</span>
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <h4 className="font-label-sm text-on-surface truncate font-semibold">Quiz: Neural Networks</h4>
                                        <p className="text-[10px] text-on-surface-variant truncate mt-0.5">Machine Learning Basics</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-4 hover:bg-surface rounded-lg transition-colors border-l-4 border-transparent hover:border-primary cursor-pointer group text-xs">
                                    <div className="flex flex-col items-center justify-center w-12 shrink-0 border-r border-surface-variant pr-4">
                                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wide group-hover:text-primary transition-colors">Nov</span>
                                        <span className="font-display-lg text-lg text-on-surface leading-none group-hover:text-primary transition-colors font-bold">02</span>
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <h4 className="font-label-sm text-on-surface truncate font-semibold">Peer Review: Wireframes</h4>
                                        <p className="text-[10px] text-on-surface-variant truncate mt-0.5">UI/UX Fundamentals</p>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="mt-6 w-full py-2 text-primary font-label-sm text-xs font-semibold hover:underline text-center cursor-pointer">
                                View Full Calendar
                            </button>
                        </div>

                        {/* Discussion callout box */}
                        <div className="bg-gradient-to-br from-primary-container to-primary rounded-xl p-8 shadow-md text-on-primary relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner mb-2 text-white">
                                    <span className="material-symbols-outlined text-[28px]">forum</span>
                                </div>
                                <h3 className="font-headline-md text-lg text-white font-bold">Need Help?</h3>
                                <p className="font-body-md text-primary-fixed-dim text-xs">Connect with mentors or join a study group to overcome challenges.</p>
                                <button className="mt-4 px-6 py-2.5 bg-white text-primary font-label-sm rounded-lg hover:bg-surface-bright transition-colors shadow-sm w-full text-xs font-semibold cursor-pointer">
                                    Join Discussion
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default StudentDashboard;
