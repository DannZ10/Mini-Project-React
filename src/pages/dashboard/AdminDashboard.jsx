import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import { getCourseStats } from '@/modules/courses/courses.api';
import useAuth from '@/modules/auth/useAuth';
import { formatRupiah } from '@/utils/helpers';

const AdminDashboard = () => {
    const { user } = useAuth();
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await getCourseStats();
                if (response.success && response.data) {
                    setStats(response.data);
                }
            } catch (err) {
                console.error("Error fetching admin stats", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);


    return (
        <DashboardLayout activeTab="dashboard">
            <div className="flex flex-col w-full text-left">

                {/* Dashboard Welcome Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full mb-8 gap-4">
                    <div>
                        <h1 className="font-display-lg text-2xl lg:text-3xl text-on-surface mb-0">Platform Overview</h1>
                        <p className="font-body-md text-on-surface-variant text-sm mt-1">Welcome back, {user?.name || 'Admin'}. Here's what's happening today.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-surface-container-high text-on-surface px-5 py-2 rounded-full font-label-sm text-xs hover:bg-surface-variant transition-colors flex items-center gap-2 cursor-pointer border border-outline-variant/30">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            Last 30 Days
                        </button>
                        <button className="bg-primary text-on-primary px-5 py-2 rounded-full font-label-sm text-xs hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-[16px]">download</span>
                            Export Report
                        </button>
                    </div>
                </div>

                {/* Metrics Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                    {/* Stat Card 1 */}
                    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group border border-outline-variant/30">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">group</span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] font-label-sm text-primary bg-primary/10 px-2 py-0.5 rounded">
                                <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
                                12.5%
                            </div>
                        </div>
                        <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1">Total Users</p>
                        <h3 className="font-headline-md text-2xl text-on-surface">24,592</h3>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group border border-outline-variant/30">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] font-label-sm text-primary bg-primary/10 px-2 py-0.5 rounded">
                                <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
                                4.2%
                            </div>
                        </div>
                        <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1">Total Courses</p>
                        <h3 className="font-headline-md text-2xl text-on-surface">{stats?.total_courses || 4}</h3>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group border border-outline-variant/30">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] font-label-sm text-primary bg-primary/10 px-2 py-0.5 rounded">
                                <span className="material-symbols-outlined text-[12px]">payments</span>
                                Avg Price
                            </div>
                        </div>
                        <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1">Average Tuition</p>
                        <h3 className="font-headline-md text-lg text-on-surface truncate">{formatRupiah(stats?.avg_price || 150000)}</h3>
                    </div>

                    {/* Stat Card 4 */}
                    <div className="bg-primary rounded-2xl p-6 shadow-md shadow-primary/20 hover:shadow-lg transition-shadow relative overflow-hidden text-on-primary group">
                        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                <span className="material-symbols-outlined">health_and_safety</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-label-sm text-primary bg-white px-2 py-0.5 rounded shadow-sm">
                                Status: Optimal
                            </div>
                        </div>
                        <p className="font-label-sm text-[11px] text-primary-fixed uppercase tracking-wider mb-1 relative z-10">Platform Uptime</p>
                        <h3 className="font-headline-md text-2xl text-white relative z-10">99.98%</h3>
                    </div>

                </div>

                {/* Split Panel Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left 2 Columns: SVG Chart & Actions */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Interactive Trends Box */}
                        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 lg:p-8 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
                                <div>
                                    <h2 className="font-headline-md text-lg text-on-surface">Enrollment Trends</h2>
                                    <p className="font-body-md text-xs text-on-surface-variant">Monthly active student signups across all disciplines.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-primary shadow-sm"></div>
                                        <span className="font-label-sm text-[11px] text-on-surface-variant">Undergraduate</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim shadow-sm"></div>
                                        <span className="font-label-sm text-[11px] text-on-surface-variant">Postgraduate</span>
                                    </div>
                                </div>
                            </div>

                            {/* SVG Graph Vector Mockup */}
                            <div className="w-full h-64 relative">
                                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 250">
                                    <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
                                    <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
                                    <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
                                    <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
                                    <line className="text-outline-variant/30" stroke="currentColor" strokeWidth="1" x1="0" x2="800" y1="250" y2="250"></line>

                                    {/* Line Graph paths */}
                                    <path d="M0,220 C100,200 200,210 300,180 C400,150 500,170 600,140 C700,110 800,90 800,90" fill="none" stroke="#b7c8e1" strokeWidth="3"></path>
                                    <path d="M0,200 C100,180 200,150 300,160 C400,170 500,120 600,80 C700,40 800,60 800,60" fill="none" stroke="#004ac6" strokeWidth="4"></path>
                                    <path d="M0,200 C100,180 200,150 300,160 C400,170 500,120 600,80 C700,40 800,60 800,60 L800,250 L0,250 Z" fill="url(#gradient-primary)" opacity="0.08"></path>

                                    <defs>
                                        <linearGradient id="gradient-primary" x1="0%" x2="0%" y1="0%" y2="100%">
                                            <stop offset="0%" stopColor="#004ac6" stopOpacity="1"></stop>
                                            <stop offset="100%" stopColor="#004ac6" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>

                                    <circle cx="300" cy="160" fill="#ffffff" r="4" stroke="#004ac6" strokeWidth="2"></circle>
                                    <circle cx="600" cy="80" fill="#ffffff" r="4" stroke="#004ac6" strokeWidth="2"></circle>
                                </svg>

                                <div className="absolute bottom-[-24px] left-0 w-full flex justify-between font-label-sm text-[10px] text-on-surface-variant font-semibold">
                                    <span>Jan</span>
                                    <span>Mar</span>
                                    <span>May</span>
                                    <span>Jul</span>
                                    <span>Sep</span>
                                    <span>Nov</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick action buttons grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <button className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 text-on-surface-variant hover:text-primary group border border-outline-variant/20 cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-105 transition-all text-on-surface">
                                    <span className="material-symbols-outlined text-[24px]">person_add</span>
                                </div>
                                <span className="font-label-sm text-xs font-semibold">Add User</span>
                            </button>
                            <button className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 text-on-surface-variant hover:text-primary group border border-outline-variant/20 cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-105 transition-all text-on-surface">
                                    <span className="material-symbols-outlined text-[24px]">library_add</span>
                                </div>
                                <span className="font-label-sm text-xs font-semibold">New Course</span>
                            </button>
                            <button className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 text-on-surface-variant hover:text-primary group border border-outline-variant/20 cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-105 transition-all text-on-surface">
                                    <span className="material-symbols-outlined text-[24px]">campaign</span>
                                </div>
                                <span className="font-label-sm text-xs font-semibold">Broadcast</span>
                            </button>
                            <button className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 text-on-surface-variant hover:text-primary group border border-outline-variant/20 cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-105 transition-all text-on-surface">
                                    <span className="material-symbols-outlined text-[24px]">settings_suggest</span>
                                </div>
                                <span className="font-label-sm text-xs font-semibold">System Config</span>
                            </button>
                        </div>

                    </div>

                    {/* Right Column: Registrations & Load Metrics */}
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">

                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-headline-md text-base font-semibold text-on-surface">Recent Registrations</h2>
                                <button className="text-primary font-label-sm text-xs hover:underline cursor-pointer">View All</button>
                            </div>

                            <div className="flex flex-col gap-5">
                                {/* Registration log items */}
                                <div className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">SJ</div>
                                        <div>
                                            <p className="font-label-sm text-xs text-on-surface font-semibold group-hover:text-primary transition-colors">Sarah Jenkins</p>
                                            <p className="font-body-md text-[11px] text-on-surface-variant">Computer Science, MSc</p>
                                        </div>
                                    </div>
                                    <span className="font-label-sm text-[9px] text-secondary bg-secondary-container/50 px-1.5 py-0.5 rounded">2m ago</span>
                                </div>

                                <div className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">MT</div>
                                        <div>
                                            <p className="font-label-sm text-xs text-on-surface font-semibold group-hover:text-primary transition-colors">Michael Torres</p>
                                            <p className="font-body-md text-[11px] text-on-surface-variant">Data Analytics, BSc</p>
                                        </div>
                                    </div>
                                    <span className="font-label-sm text-[9px] text-secondary bg-secondary-container/50 px-1.5 py-0.5 rounded">14m ago</span>
                                </div>

                                <div className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">DC</div>
                                        <div>
                                            <p className="font-label-sm text-xs text-on-surface font-semibold group-hover:text-primary transition-colors">David Chen</p>
                                            <p className="font-body-md text-[11px] text-on-surface-variant">Business Admin, MBA</p>
                                        </div>
                                    </div>
                                    <span className="font-label-sm text-[9px] text-secondary bg-secondary-container/50 px-1.5 py-0.5 rounded">1h ago</span>
                                </div>

                                <div className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">EL</div>
                                        <div>
                                            <p className="font-label-sm text-xs text-on-surface font-semibold group-hover:text-primary transition-colors">Emily Larson</p>
                                            <p className="font-body-md text-[11px] text-on-surface-variant">Graphic Design, BFA</p>
                                        </div>
                                    </div>
                                    <span className="font-label-sm text-[9px] text-secondary bg-secondary-container/50 px-1.5 py-0.5 rounded">3h ago</span>
                                </div>
                            </div>
                        </div>

                        {/* System Load Indicators */}
                        <div className="mt-8 pt-6 border-t border-surface-container relative w-full">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface-container-lowest px-4 text-[10px] font-label-sm text-outline tracking-widest uppercase">
                                System Load
                            </div>

                            <div className="flex items-center gap-4 mt-2 text-xs">
                                <span className="font-label-sm text-on-surface w-12">CPU</span>
                                <div className="flex-grow h-2 bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[35%] rounded-full shadow-[0_0_8px_rgba(0,74,198,0.2)]"></div>
                                </div>
                                <span className="font-label-sm text-on-surface-variant">35%</span>
                            </div>

                            <div className="flex items-center gap-4 mt-3 text-xs">
                                <span className="font-label-sm text-on-surface w-12">RAM</span>
                                <div className="flex-grow h-2 bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-tertiary w-[62%] rounded-full"></div>
                                </div>
                                <span className="font-label-sm text-on-surface-variant">62%</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;
