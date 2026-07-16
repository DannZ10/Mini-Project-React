import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/modules/auth/useAuth';

const DashboardLayout = ({ children, activeTab = 'dashboard' }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    
    // Default open on desktop (>=1024px), closed on mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

    // Auto toggle on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSignOut = () => {
        logout();
        navigate('/login');
    };

    // Role-specific navigation items configuration
    const getNavItems = () => {
        const role = user?.role || 'student';
        
        if (role === 'admin') {
            return [
                { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
                { id: 'courses', label: 'Manage Courses', icon: 'school' },
                { id: 'users', label: 'Users', icon: 'group' },
                { id: 'reports', label: 'Reports', icon: 'assessment' },
                { id: 'settings', label: 'Settings', icon: 'settings' }
            ];
        } else if (role === 'instructor') {
            return [
                { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
                { id: 'courses', label: 'My Courses', icon: 'school' },
                { id: 'students', label: 'Students', icon: 'group' },
                { id: 'analytics', label: 'Analytics', icon: 'monitoring' },
                { id: 'settings', label: 'Settings', icon: 'settings' }
            ];
        } else {
            // Student items
            return [
                { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
                { id: 'courses', label: 'Enrolled Courses', icon: 'school' },
                { id: 'certificates', label: 'Certificates', icon: 'workspace_premium' },
                { id: 'settings', label: 'Settings', icon: 'settings' }
            ];
        }
    };

    const navItems = getNavItems();
    const roleLabel = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Student';
    const userInitials = user?.name ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'US';

    return (
        <div className="min-h-screen bg-background font-body-md text-on-background flex antialiased">
            
            {/* Mobile Backdrop overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Left Sidebar (280px) - Collapsible */}
            <aside className={`fixed left-0 top-0 h-full w-[280px] bg-surface-container-lowest z-50 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] border-r border-outline-variant/15 text-left transform transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {/* Logo Area */}
                <div 
                    onClick={() => navigate('/')}
                    className="p-6 flex items-center justify-between border-b border-outline-variant/10 cursor-pointer"
                >
                    <div className="flex items-center gap-3">
                        <img 
                            alt="dibiEdu logo" 
                            className="h-8 w-auto object-contain" 
                            src="https://lh3.googleusercontent.com/aida/AP1WRLvxPfEHLHHECFlTQ0IzFZirqRnpVxgSt2WbQuuHzi2Oc1hm_TxPhJQUwaow6RSwzSSi_Caasye2lR6DmTBAQZnHNJS9FYXObnM3OtGxWig64gc6f4wxuJKOa5_M8tFV_rOYZBxYL6CclKFcAGlYI0T4G8WU3Q_dWeAHocOim9wXmIcrrJo8EbwgJw8e0walYF0vxC3ClcajIm_WZ5qRQZOJCAZh2ZoQeoDZ3e0q-T3_hqODNozWMIU0i0g" 
                        />
                        <span className="font-display-lg text-[22px] font-bold tracking-tight text-primary">dibiEdu</span>
                    </div>
                    {/* Mobile close button inside sidebar */}
                    <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden p-1 text-on-surface-variant hover:bg-surface-container rounded-full"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <nav className="flex-grow mt-6 px-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    if (item.id === 'courses' && user?.role === 'student') {
                                        navigate('/');
                                    }
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group cursor-pointer ${
                                    isActive 
                                        ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary' 
                                        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                                }`}
                            >
                                <span className={`material-symbols-outlined text-[22px] group-hover:scale-105 transition-transform ${isActive ? 'text-primary' : 'text-on-surface-variant/75'}`}>
                                    {item.icon}
                                </span>
                                <span className="font-label-sm text-sm">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* Bottom Sign Out Area */}
                <div className="p-6 border-t border-outline-variant/20">
                    <button 
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 text-on-surface-variant hover:text-error transition-colors cursor-pointer group"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-105 transition-transform">logout</span>
                        <span className="font-label-sm text-sm">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Right Main Panel */}
            <div className={`flex-grow min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
                isSidebarOpen ? 'lg:pl-[280px]' : 'lg:pl-0'
            }`}>
                
                {/* Fixed Header */}
                <header className={`fixed top-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-xl z-40 px-6 lg:px-8 flex items-center justify-between border-b border-outline-variant/10 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? 'lg:left-[280px]' : 'lg:left-0'
                }`}>
                    
                    {/* Collapsible toggle & Search bar */}
                    <div className="flex items-center flex-1 max-w-xl text-left">
                        {/* Toggle Button */}
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 mr-4 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer flex items-center justify-center"
                            aria-label="Toggle Sidebar"
                        >
                            <span className="material-symbols-outlined">{isSidebarOpen ? 'menu_open' : 'menu'}</span>
                        </button>

                        <div className="relative w-full group hidden sm:block">
                            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-[20px]">
                                search
                            </span>
                            <input 
                                className="w-full bg-surface-container-low border border-outline-variant/20 rounded-full py-2 pl-11 pr-4 text-xs focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" 
                                placeholder="Search for courses, activities, or data..." 
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Profile & Notifications Actions */}
                    <div className="flex items-center gap-6 ml-auto">
                        <button className="relative p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[22px]">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
                        </button>
                        
                        <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
                            <div className="text-right hidden sm:block">
                                <div className="font-label-sm text-xs font-semibold text-on-surface">{user?.name || 'Academic Member'}</div>
                                <div className="text-[10px] text-on-surface-variant uppercase tracking-wider">{roleLabel}</div>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow-sm font-semibold text-sm">
                                {userInitials}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Main Content Body */}
                <main className="pt-16 flex-grow bg-background text-left">
                    <div className="max-w-container-max mx-auto p-6 lg:p-8">
                        {children}
                    </div>
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;
