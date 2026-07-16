import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import { getCourses } from '@/modules/courses/courses.api';
import useAuth from '@/modules/auth/useAuth';

const InstructorDashboard = () => {
    const { user } = useAuth();
    
    const [myCourses, setMyCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstructorCourses = async () => {
            try {
                const response = await getCourses();
                if (response.success && response.data) {
                    // Filter courses managed by this specific instructor
                    const filtered = response.data.filter(course => 
                        course.instructor_id === user?.id || 
                        course.instructor?.name === user?.name
                    );
                    setMyCourses(filtered);
                }
            } catch (err) {
                console.error("Error loading instructor courses", err);
            } finally {
                setLoading(false);
            }
        };
        fetchInstructorCourses();
    }, [user]);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <DashboardLayout activeTab="dashboard">
            <div className="flex flex-col w-full text-left gap-8 pb-12">
                
                {/* Welcome Card banner */}
                <div className="rounded-[24px] shadow-md relative overflow-hidden flex flex-col md:flex-row items-center min-h-[280px] bg-surface-container-low border border-outline-variant/20">
                    <div className="p-8 md:p-12 flex-1 flex flex-col gap-6 z-10 relative w-full md:w-[60%]">
                        <div className="max-w-xl">
                            <span className="font-label-sm text-xs text-primary uppercase tracking-wider mb-2 block font-semibold">
                                Instructor Dashboard
                            </span>
                            <h1 className="font-display-lg text-2xl lg:text-3xl text-on-surface">Welcome back, {user?.name || 'Instructor'}.</h1>
                            <p className="font-body-lg text-sm lg:text-base text-on-surface-variant mt-3 leading-relaxed">
                                Your courses are performing in the top 10% this week. Student engagement is up across your advanced learning modules. Keep up the momentum.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <button className="bg-primary text-on-primary font-label-sm text-xs px-6 py-3 rounded-full hover:bg-primary-container transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer">
                                <span className="material-symbols-outlined text-[18px]">add</span>
                                Create New Course
                            </button>
                            <button className="bg-transparent border border-outline-variant text-on-surface font-label-sm text-xs px-6 py-3 rounded-full hover:bg-surface-container hover:border-outline transition-all flex items-center gap-2 cursor-pointer">
                                View Analytics
                            </button>
                        </div>
                    </div>
                    
                    {/* Background overlay */}
                    <div className="w-full md:w-[40%] h-full absolute right-0 top-0 pointer-events-none opacity-20 md:opacity-100 z-0">
                        <div 
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: "url('/img/About.jpg')" }}
                        ></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/90 to-transparent z-0 md:w-[70%]"></div>
                </div>

                {/* Key Metrics / Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Stat Card 1: Revenue */}
                    <div className="bg-surface-container-lowest rounded-[24px] shadow-md p-8 flex flex-col gap-6 relative group overflow-hidden transition-transform duration-300 hover:-translate-y-1 border border-outline-variant/20">
                        <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl group-hover:bg-primary-container/40 transition-colors"></div>
                        <div className="flex items-center justify-between z-10">
                            <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Total Revenue</h3>
                            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">payments</span>
                            </div>
                        </div>
                        <div className="z-10 flex flex-col gap-1">
                            <div className="font-display-lg text-2xl lg:text-3xl text-on-surface tracking-tight font-bold">$12,450</div>
                            <div className="font-label-sm text-xs text-tertiary flex items-center gap-1.5 mt-1 font-semibold">
                                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                <span>+14.2%</span> from last month
                            </div>
                        </div>
                        {/* SVG sparkline */}
                        <div className="w-full h-12 mt-2 z-10">
                            <svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 30">
                                <path d="M0,25 C10,20 20,28 30,15 C40,5 50,18 60,10 C70,2 80,15 90,5 L100,8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                                <path d="M0,25 C10,20 20,28 30,15 C40,5 50,18 60,10 C70,2 80,15 90,5 L100,8 L100,30 L0,30 Z" fill="url(#spark-grad-1)" stroke="none"></path>
                                <defs>
                                    <linearGradient id="spark-grad-1" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.15"></stop>
                                        <stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* Stat Card 2: Students */}
                    <div className="bg-surface-container-lowest rounded-[24px] shadow-md p-8 flex flex-col gap-6 relative group overflow-hidden transition-transform duration-300 hover:-translate-y-1 border border-outline-variant/20">
                        <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl group-hover:bg-secondary-container/40 transition-colors"></div>
                        <div className="flex items-center justify-between z-10">
                            <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Active Students</h3>
                            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">groups</span>
                            </div>
                        </div>
                        <div className="z-10 flex flex-col gap-1">
                            <div className="font-display-lg text-2xl lg:text-3xl text-on-surface tracking-tight font-bold">842</div>
                            <div className="font-label-sm text-xs text-tertiary flex items-center gap-1.5 mt-1 font-semibold">
                                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                <span>+5.8%</span> from last week
                            </div>
                        </div>
                        <div className="w-full h-12 mt-2 z-10">
                            <svg className="w-full h-full text-secondary" preserveAspectRatio="none" viewBox="0 0 100 30">
                                <path d="M0,20 C15,22 25,15 40,18 C55,20 65,10 80,12 C90,14 95,8 100,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                                <path d="M0,20 C15,22 25,15 40,18 C55,20 65,10 80,12 C90,14 95,8 100,5 L100,30 L0,30 Z" fill="url(#spark-grad-2)" stroke="none"></path>
                                <defs>
                                    <linearGradient id="spark-grad-2" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.15"></stop>
                                        <stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* Stat Card 3: Engagement */}
                    <div className="bg-surface-container-lowest rounded-[24px] shadow-md p-8 flex flex-col gap-6 relative group overflow-hidden transition-transform duration-300 hover:-translate-y-1 border border-outline-variant/20">
                        <div className="absolute -right-12 -top-12 w-40 h-40 bg-tertiary-container/20 rounded-full blur-3xl group-hover:bg-tertiary-container/40 transition-colors"></div>
                        <div className="flex items-center justify-between z-10">
                            <h3 className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Avg Engagement</h3>
                            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                            </div>
                        </div>
                        <div className="z-10 flex flex-col gap-1">
                            <div className="font-display-lg text-2xl lg:text-3xl text-on-surface tracking-tight font-bold">
                                92<span className="text-[20px] text-on-surface-variant">%</span>
                            </div>
                            <div className="font-label-sm text-xs text-tertiary flex items-center gap-1.5 mt-1 font-semibold">
                                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                <span>+2.1%</span> from last week
                            </div>
                        </div>
                        <div className="w-full h-12 mt-2 z-10 flex items-end">
                            <div className="w-full flex gap-1.5 h-full items-end">
                                <div className="flex-1 bg-surface-container-high rounded-t-sm h-[40%] group-hover:bg-tertiary/40 transition-colors"></div>
                                <div className="flex-1 bg-surface-container-high rounded-t-sm h-[60%] group-hover:bg-tertiary/50 transition-colors"></div>
                                <div className="flex-1 bg-surface-container-high rounded-t-sm h-[45%] group-hover:bg-tertiary/60 transition-colors"></div>
                                <div className="flex-1 bg-surface-container-high rounded-t-sm h-[80%] group-hover:bg-tertiary/70 transition-colors"></div>
                                <div className="flex-1 bg-surface-container-high rounded-t-sm h-[75%] group-hover:bg-tertiary/80 transition-colors"></div>
                                <div className="flex-1 bg-surface-container-high rounded-t-sm h-[95%] group-hover:bg-tertiary/90 transition-colors"></div>
                                <div className="flex-1 bg-tertiary rounded-t-sm h-[100%] shadow-[0_0_8px_rgba(70,86,108,0.4)]"></div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Grid: Instructor Active Courses */}
                    <div className="xl:col-span-8 flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h2 className="font-headline-md text-lg font-semibold text-on-surface">Active Courses</h2>
                            <button className="font-label-sm text-xs text-primary hover:text-primary-container transition-colors flex items-center gap-1 group cursor-pointer font-semibold">
                                View All 
                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                        
                        {loading ? (
                            <div className="flex flex-col items-center py-10 bg-surface-container-lowest rounded-[24px] border border-outline-variant/20 w-full">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                <span className="text-xs text-on-surface-variant mt-3">Loading active courses...</span>
                            </div>
                        ) : myCourses.length === 0 ? (
                            <div className="flex flex-col items-center justify-center p-12 bg-surface-container-lowest rounded-[24px] border border-outline-variant/30 text-center gap-4">
                                <span className="material-symbols-outlined text-[48px] text-on-surface-variant/40">school</span>
                                <h4 className="font-label-md text-sm text-on-surface font-semibold">No Courses Created</h4>
                                <p className="font-body-sm text-xs text-on-surface-variant max-w-sm">You haven't listed any learning catalogs yet. Click "Create New Course" above to add one.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {myCourses.map(course => {
                                    const progressPct = Math.floor(Math.random() * 40) + 40; // mock cohort progress
                                    return (
                                        <div key={course.id} className="bg-surface-container-lowest border border-outline-variant/20 rounded-[24px] shadow-md overflow-hidden group flex flex-col transition-all hover:shadow-lg">
                                            <div className="h-48 w-full relative overflow-hidden bg-surface-container">
                                                <img 
                                                    src={course.thumbnail} 
                                                    alt={course.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    onError={(e) => {
                                                        e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500';
                                                    }}
                                                />
                                                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-4 py-1 rounded-full font-label-sm text-xs text-on-surface shadow-sm font-semibold">
                                                    {course.category?.name || 'Education'}
                                                </div>
                                                <button className="absolute top-4 right-4 w-9 h-9 bg-surface/90 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm cursor-pointer">
                                                    <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                                                </button>
                                            </div>
                                            
                                            <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                                                <div>
                                                    <h3 className="font-headline-md text-base text-on-surface font-semibold line-clamp-2">{course.title}</h3>
                                                    <div className="flex items-center gap-4 mt-3 text-xs text-on-surface-variant">
                                                        <span className="flex items-center gap-1">
                                                            <span className="material-symbols-outlined text-[14px]">group</span> 
                                                            {course.enrolled_count || 12} students
                                                        </span>
                                                        <span className="flex items-center gap-1 font-semibold text-primary">
                                                            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 
                                                            {(course.rating / 2).toFixed(1)}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <div className="pt-2">
                                                    <div className="flex justify-between items-end mb-2 text-xs">
                                                        <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">Cohort Progress</span>
                                                        <span className="font-label-sm text-on-surface font-semibold">{progressPct}%</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                                        <div 
                                                            className="h-full bg-primary rounded-full relative shadow-[0_0_8px_rgba(0,74,198,0.2)]" 
                                                            style={{ width: `${progressPct}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Right Grid: Action Items & Checklists */}
                    <div className="xl:col-span-4 flex flex-col gap-6">
                        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-[24px] shadow-md p-8 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="font-headline-md text-base font-semibold text-on-surface">Action Items</h2>
                                <span className="bg-error-container text-on-error-container font-label-sm text-[10px] px-2.5 py-0.5 rounded shadow-sm font-semibold">3 High Priority</span>
                            </div>
                            
                            <div className="flex flex-col gap-3">
                                
                                {/* Task 1 */}
                                <div className="flex items-start gap-4 p-4 rounded-[16px] bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group border border-transparent hover:border-outline-variant/30">
                                    <div className="relative w-4 h-4 mt-1 flex-shrink-0">
                                        <div className="absolute inset-0 bg-error rounded-full opacity-30 animate-ping"></div>
                                        <div className="relative w-4 h-4 rounded-full bg-error border-2 border-surface-container-lowest shadow-[0_0_8px_rgba(186,26,26,0.3)]"></div>
                                    </div>
                                    <div className="flex-1 min-w-0 text-xs">
                                        <h4 className="font-body-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors text-sm">Grade Midterm Projects</h4>
                                        <p className="font-label-sm text-on-surface-variant mt-1 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">schedule</span> Due Today, 5:00 PM
                                        </p>
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_forward</span>
                                    </div>
                                </div>

                                {/* Task 2 */}
                                <div className="flex items-start gap-4 p-4 rounded-[16px] bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group border border-transparent hover:border-outline-variant/30">
                                    <div className="w-4 h-4 mt-1 flex-shrink-0 rounded-full bg-secondary border-2 border-surface-container-lowest"></div>
                                    <div className="flex-1 min-w-0 text-xs">
                                        <h4 className="font-body-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors text-sm">Review Syllabus Updates</h4>
                                        <p className="font-label-sm text-on-surface-variant mt-1 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">schedule</span> Tomorrow, 10:00 AM
                                        </p>
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_forward</span>
                                    </div>
                                </div>

                                {/* Task 3 */}
                                <div className="flex items-start gap-4 p-4 rounded-[16px] bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group border border-transparent hover:border-outline-variant/30">
                                    <div className="w-4 h-4 mt-1 flex-shrink-0 rounded-full bg-tertiary border-2 border-surface-container-lowest"></div>
                                    <div className="flex-1 min-w-0 text-xs">
                                        <h4 className="font-body-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors text-sm">Respond to Student Q&A</h4>
                                        <p className="font-label-sm text-on-surface-variant mt-1 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">forum</span> 14 Unread Messages
                                        </p>
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_forward</span>
                                    </div>
                                </div>

                            </div>

                            <button className="mt-8 pt-6 font-label-sm text-xs text-primary hover:text-primary-container transition-colors flex items-center justify-center gap-2 w-full py-4 border-t border-outline-variant/30 cursor-pointer font-semibold">
                                <span className="material-symbols-outlined text-[18px]">checklist</span>
                                Open Task Manager
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default InstructorDashboard;
