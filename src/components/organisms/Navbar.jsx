import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '@/modules/auth/useAuth';
import { logoutUser } from '@/modules/auth/auth.api';
import { logoUrl } from '@/data/data';

const Navbar = () => {
    const { user, token, logout } = useAuth();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logoutUser();
        } catch (e) {
            console.error("API logout failed, performing local logout", e);
        } finally {
            logout();
            navigate('/login');
        }
    };


    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20">
                <div className="h-20 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">

                    {/* Logo and Brand */}
                    <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer">
                        <img
                            alt="dibiEdu Logo"
                            className="h-8 w-auto object-contain"
                            src={logoUrl}
                        />
                        <span className="font-headline-md text-headline-md text-primary tracking-tight">dibiEdu</span>
                    </div>

                    {/* Center Navigation links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/courses" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                            Courses
                        </Link>
                        <Link to="/about" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link to="/pricing" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                            Pricing
                        </Link>
                        <Link to="/contact" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                            Contact
                        </Link>
                        {token && user && (
                            <Link to="/dashboard" className="font-label-md text-label-md text-primary font-bold hover:underline transition-colors">
                                Dashboard
                            </Link>
                        )}
                    </nav>

                    {/* Auth Controls & Hamburger Menu */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                            {token && user ? (
                                <>
                                    <div className="hidden sm:flex flex-col items-end text-right">
                                        <span className="font-label-md text-xs text-on-surface-variant">Welcome back,</span>
                                        <span className="font-label-md text-sm text-on-surface">{user.name}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-semibold text-xs uppercase shadow-sm">
                                        {user.name?.charAt(0)}
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="hidden sm:flex font-label-md text-label-md text-error px-4 py-2 hover:bg-error-container/20 rounded-full transition-all items-center gap-1 cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">logout</span>
                                        <span>Logout</span>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="hidden sm:block font-label-md text-label-md text-primary px-4 py-2 hover:bg-primary-fixed rounded-lg transition-all"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        to="/login"
                                        className="hidden sm:block font-label-md text-label-md bg-primary text-on-primary px-6 py-2.5 rounded-full hover:bg-primary-container transition-all shadow-sm active:scale-95"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="flex md:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors cursor-pointer"
                            aria-label="Open navigation menu"
                        >
                            <span className="material-symbols-outlined text-[24px]">menu</span>
                        </button>
                    </div>

                </div>
            </header>

            {isSidebarOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    {/* Drawer */}
                    <aside className="fixed inset-y-0 right-0 z-[100] w-64 bg-surface-container-lowest shadow-2xl p-6 flex flex-col justify-between border-l border-outline-variant/20 transform transition-transform duration-300 translate-x-0 text-left">
                        <div>
                            {/* Header */}
                            <div className="flex items-center justify-between pb-6 border-b border-outline-variant/10 mb-6">
                                <div className="flex items-center gap-2">
                                    <img alt="dibiEdu logo" className="h-6 w-auto" src={logoUrl} />
                                    <span className="font-headline-md text-base text-primary font-bold">dibiEdu</span>
                                </div>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="p-1 text-on-surface-variant hover:bg-surface-container rounded-full cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-[20px]">close</span>
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-4">
                                <Link to="/" onClick={() => setIsSidebarOpen(false)} className="font-label-md text-sm text-on-surface hover:text-primary transition-colors py-2 border-b border-outline-variant/5">
                                    Home
                                </Link>
                                <Link to="/courses" onClick={() => setIsSidebarOpen(false)} className="font-label-md text-sm text-on-surface hover:text-primary transition-colors py-2 border-b border-outline-variant/5">
                                    Courses
                                </Link>
                                <Link to="/about" onClick={() => setIsSidebarOpen(false)} className="font-label-md text-sm text-on-surface hover:text-primary transition-colors py-2 border-b border-outline-variant/5">
                                    About
                                </Link>
                                <Link to="/pricing" onClick={() => setIsSidebarOpen(false)} className="font-label-md text-sm text-on-surface hover:text-primary transition-colors py-2 border-b border-outline-variant/5">
                                    Pricing
                                </Link>
                                <Link to="/contact" onClick={() => setIsSidebarOpen(false)} className="font-label-md text-sm text-on-surface hover:text-primary transition-colors py-2 border-b border-outline-variant/5">
                                    Contact
                                </Link>
                                {token && user && (
                                    <Link to="/dashboard" onClick={() => setIsSidebarOpen(false)} className="font-label-md text-sm text-primary font-bold hover:underline transition-colors py-2">
                                        Dashboard
                                    </Link>
                                )}
                            </nav>
                        </div>

                        {/* Footer User Info / Auth */}
                        <div className="pt-6 border-t border-outline-variant/10">
                            {token && user ? (
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-semibold text-xs uppercase shadow-sm">
                                            {user.name?.charAt(0)}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-label-md text-xs text-on-surface font-semibold">{user.name}</span>
                                            <span className="text-[10px] text-on-surface-variant uppercase">{user.role}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => { handleLogout(); setIsSidebarOpen(false); }}
                                        className="w-full font-label-md text-sm text-error px-4 py-2.5 bg-error-container/10 hover:bg-error-container/20 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">logout</span>
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <Link
                                        to="/login"
                                        onClick={() => setIsSidebarOpen(false)}
                                        className="w-full text-center font-label-md text-sm text-primary py-2.5 border border-primary/20 rounded-xl hover:bg-primary-fixed transition-all"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        to="/login"
                                        onClick={() => setIsSidebarOpen(false)}
                                        className="w-full text-center font-label-md text-sm bg-primary text-on-primary py-2.5 rounded-xl hover:bg-primary-container transition-all"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>
                    </aside>
                </>
            )}
        </>
    );
};

export default Navbar;
