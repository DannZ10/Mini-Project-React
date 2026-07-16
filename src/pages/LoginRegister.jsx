import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '@/modules/auth/useAuth';
import { loginUser, registerUser } from '@/modules/auth/auth.api';

const LoginRegister = () => {
    const { login, sessionExpired, setSessionExpired } = useAuth();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('login');
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', role: 'student' });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (sessionExpired) {
            setError('Your session has expired due to 30 minutes of inactivity. Please login again.');
            setSessionExpired(false);
        }
    }, [sessionExpired, setSessionExpired]);

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const response = await loginUser(loginData.email, loginData.password);
            if (response.success && response.data) {
                const { user, token } = response.data;
                login(user, token);
                navigate('/');
            } else {
                setError(response.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error("Login error", err);
            setError(err.response?.data?.message || 'Invalid email or password.');
        } finally {
            setLoading(false);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const response = await registerUser(
                registerData.name,
                registerData.email,
                registerData.password,
                registerData.role
            );
            if (response.success) {
                setSuccess('Registration successful! Please sign in using your new credentials.');
                setActiveTab('login');
                setLoginData({ email: registerData.email, password: '' });
                setRegisterData({ name: '', email: '', password: '', role: 'student' });
            } else {
                setError(response.message || 'Registration failed.');
            }
        } catch (err) {
            console.error("Register error", err);
            const validationErrors = err.response?.data?.data;
            if (validationErrors) {
                const message = Object.values(validationErrors).flat().join(' ');
                setError(message);
            } else {
                setError(err.response?.data?.message || 'Registration failed. Email might already be taken.');
            }
        } finally {
            setLoading(false);
        }
    };

    const logoUrl = 'https://lh3.googleusercontent.com/aida/AP1WRLvxPfEHLHHECFlTQ0IzFZirqRnpVxgSt2WbQuuHzi2Oc1hm_TxPhJQUwaow6RSwzSSi_Caasye2lR6DmTBAQZnHNJS9FYXObnM3OtGxWig64gc6f4wxuJKOa5_M8tFV_rOYZBxYL6CclKFcAGlYI0T4G8WU3Q_dWeAHocOim9wXmIcrrJo8EbwgJw8e0walYF0vxC3ClcajIm_WZ5qRQZOJCAZh2ZoQeoDZ3e0q-T3_hqODNozWMIU0i0g';

    return (
        <div className="min-h-screen bg-surface-container-low font-body-md text-on-surface antialiased flex flex-col text-left">
            
            {/* Header / Navbar */}
            <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20">
                <div className="h-16 w-full px-margin-desktop flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                        <img alt="dibiEdu logo" className="h-8 w-auto object-contain" src={logoUrl} />
                        <span className="font-headline-md text-headline-md text-on-surface font-semibold">dibiEdu</span>
                    </div>
                    <nav className="flex items-center">
                        <Link to="/" className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors font-semibold text-sm">
                            Back to Landing
                        </Link>
                    </nav>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">person</span>
                    </div>
                </div>
            </header>

            {/* Split Main Content */}
            <main className="w-full pt-16 bg-surface-container-low flex-grow flex">
                <div className="flex flex-col w-full lg:flex-row min-h-[calc(100vh-64px)] overflow-hidden">
                    
                    {/* Left Column: Full bleed image with overlay */}
                    <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center overflow-hidden">
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-12 bg-black/25">
                            <h1 className="font-headline-xl text-headline-xl text-white mb-6 drop-shadow-lg text-[48px] font-bold leading-[58px]">
                                Continue your<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] to-[#4edea3]">learning journey.</span>
                            </h1>
                            <p className="font-body-lg text-body-lg text-white/95 max-w-[480px] leading-relaxed drop-shadow-md text-sm lg:text-base">
                                Access your courses, track your progress, and achieve your goals with dibiEdu's intuitive learning platform.
                            </p>
                        </div>
                        <img 
                            alt="Student using digital learning tools" 
                            className="absolute inset-0 w-full h-full object-cover" 
                            src="/img/login-register.png" 
                        />
                    </div>

                    {/* Right Column: Form Container */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-margin-mobile lg:p-margin-desktop bg-surface relative z-10">
                        <div className="w-full max-w-[440px] bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(37,99,235,0.06)] relative border border-outline-variant/30">
                            
                            {/* Alert Banners */}
                            {error && (
                                <div className="bg-error-container border border-error/20 text-on-error-container p-4 rounded-lg mb-6 text-sm text-left flex items-start gap-2">
                                    <span className="material-symbols-outlined text-[20px] text-error flex-shrink-0">error</span>
                                    <span>{error}</span>
                                </div>
                            )}
                            {success && (
                                <div className="bg-tertiary-container border border-tertiary/20 text-on-tertiary-container p-4 rounded-lg mb-6 text-sm text-left flex items-start gap-2">
                                    <span className="material-symbols-outlined text-[20px] text-tertiary flex-shrink-0">check_circle</span>
                                    <span>{success}</span>
                                </div>
                            )}

                            {/* Tabs Header */}
                            <div className="flex w-full mb-8 relative">
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-surface-container-high rounded-full"></div>
                                <button 
                                    id="tab-login"
                                    aria-selected={activeTab === 'login'}
                                    onClick={() => { setActiveTab('login'); setError(''); setSuccess(''); }}
                                    className={`flex-1 pb-4 text-center font-label-md relative font-semibold text-sm transition-colors cursor-pointer ${activeTab === 'login' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                                >
                                    Login
                                    <div className={`absolute bottom-[-1px] left-0 w-full h-[3px] bg-primary rounded-t-sm z-10 transition-transform duration-300 transform ${activeTab === 'login' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                                </button>
                                <button 
                                    id="tab-register"
                                    aria-selected={activeTab === 'register'}
                                    onClick={() => { setActiveTab('register'); setError(''); setSuccess(''); }}
                                    className={`flex-1 pb-4 text-center font-label-md relative font-semibold text-sm transition-colors cursor-pointer ${activeTab === 'register' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                                >
                                    Register
                                    <div className={`absolute bottom-[-1px] left-0 w-full h-[3px] bg-primary rounded-t-sm z-10 transition-transform duration-300 transform ${activeTab === 'register' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                                </button>
                            </div>

                            {/* Social Logins */}
                            <div className="flex flex-col gap-4 mb-6">
                                <button className="w-full h-12 flex items-center justify-center gap-3 bg-surface-container-lowest text-on-surface font-label-md rounded-lg shadow-sm border border-outline-variant/50 hover:bg-surface-container-low hover:shadow-md transition-all active:scale-[0.98] font-semibold text-sm cursor-pointer">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <g transform="matrix(1, 0, 0, 1, 0, 0)">
                                            <path d="M21.35,11.1H12v2.7h5.38c-0.24,1.28 -0.96,2.37 -2.04,3.1v2.58h3.3c1.93,-1.78 3.04,-4.4 3.04,-7.48c0,-0.6 -0.05,-1.2 -0.15,-1.7z" fill="#4285F4" />
                                            <path d="M12,20.5c2.3,0 4.23,-0.76 5.64,-2.08l-3.3,-2.58c-0.9,0.6 -2.07,0.98 -3.34,0.98c-2.57,0 -4.75,-1.73 -5.53,-4.06H2.1v2.66c1.5,2.98 4.6,5.08 8.22,5.08z" fill="#34A853" />
                                            <path d="M6.47,12.76c-0.2,-0.6 -0.31,-1.24 -0.31,-1.9s0.11,-1.3 0.31,-1.9V6.3H2.1c-0.77,1.56 -1.2,3.3 -1.2,5.16s0.43,3.6 1.2,5.16l4.37,-3.26z" fill="#FBBC05" />
                                            <path d="M12,5.9c1.5,0 2.85,0.52 3.9,1.52l2.93,-2.93C17.07,2.9 14.7,2.1 12,2.1c-3.62,0 -6.72,2.1 -8.22,5.08l4.37,3.26c0.78,-2.33 2.96,-4.06 5.53,-4.06z" fill="#EA4335" />
                                        </g>
                                    </svg>
                                    Continue with Google
                                </button>
                                <button className="w-full h-12 flex items-center justify-center gap-3 bg-surface-container-lowest text-on-surface font-label-md rounded-lg shadow-sm border border-outline-variant/50 hover:bg-surface-container-low hover:shadow-md transition-all active:scale-[0.98] font-semibold text-sm cursor-pointer">
                                    <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    Continue with LinkedIn
                                </button>
                            </div>

                            {/* Form Divider */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-1 h-px bg-outline-variant/40"></div>
                                <span className="font-body-sm text-on-surface-variant text-[12px] uppercase tracking-wider font-semibold">Or {activeTab === 'login' ? 'login' : 'register'} with email</span>
                                <div className="flex-1 h-px bg-outline-variant/40"></div>
                            </div>

                            {/* LOGIN VIEW */}
                            {activeTab === 'login' ? (
                                <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5 w-full">
                                    {/* Email */}
                                    <div className="flex flex-col gap-2 relative group text-left">
                                        <label className="font-label-md text-on-surface text-[13px] font-semibold" htmlFor="email">Email Address</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px] group-focus-within:text-primary transition-colors">mail</span>
                                            <input 
                                                className="w-full h-12 bg-surface pl-10 pr-4 rounded-lg font-body-md text-on-surface placeholder:text-on-surface-variant/50 outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-left" 
                                                id="email" 
                                                name="email"
                                                placeholder="name@institution.edu" 
                                                required 
                                                type="email"
                                                value={loginData.email}
                                                onChange={handleLoginChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="flex flex-col gap-2 relative group text-left">
                                        <label className="font-label-md text-on-surface text-[13px] font-semibold" htmlFor="password">Password</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px] group-focus-within:text-primary transition-colors">lock</span>
                                            <input 
                                                className="w-full h-12 bg-surface pl-10 pr-10 rounded-lg font-body-md text-on-surface placeholder:text-on-surface-variant/50 outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-left" 
                                                id="password" 
                                                name="password"
                                                placeholder="••••••••" 
                                                required 
                                                type={showPassword ? 'text' : 'password'}
                                                value={loginData.password}
                                                onChange={handleLoginChange}
                                            />
                                            <button 
                                                aria-label="Toggle password visibility" 
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-surface transition-colors cursor-pointer" 
                                                onClick={() => setShowPassword(!showPassword)} 
                                                type="button"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember / Forgot Row */}
                                    <div className="flex items-center justify-between mt-1">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center justify-center w-4 h-4">
                                                <input 
                                                    className="peer sr-only" 
                                                    type="checkbox"
                                                    checked={rememberMe}
                                                    onChange={(e) => setRememberMe(e.target.checked)}
                                                />
                                                <div className="w-4 h-4 border border-outline-variant rounded-[3px] bg-surface peer-checked:bg-primary peer-checked:border-primary transition-colors group-hover:border-primary"></div>
                                                <span className="material-symbols-outlined absolute text-on-primary text-[12px] opacity-0 peer-checked:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                            </div>
                                            <span className="font-body-sm text-on-surface-variant text-sm select-none">Remember me</span>
                                        </label>
                                        <a className="font-label-md text-primary text-[13px] hover:underline underline-offset-4 decoration-primary/50 font-semibold" href="#">Forgot password?</a>
                                    </div>

                                    {/* Sign In Button */}
                                    <button 
                                        disabled={loading}
                                        className="w-full h-12 mt-4 bg-primary text-on-primary font-label-md rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.2)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 group font-semibold text-sm active:scale-[0.98] cursor-pointer disabled:opacity-50" 
                                        type="submit"
                                    >
                                        {loading ? 'Signing In...' : 'Sign In'}
                                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </form>
                            ) : (
                                /* REGISTER VIEW */
                                <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-5 w-full">
                                    {/* Full Name */}
                                    <div className="flex flex-col gap-2 relative group text-left">
                                        <label className="font-label-md text-on-surface text-[13px] font-semibold" htmlFor="register-name">Full Name</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px] group-focus-within:text-primary transition-colors">person</span>
                                            <input 
                                                className="w-full h-12 bg-surface pl-10 pr-4 rounded-lg font-body-md text-on-surface placeholder:text-on-surface-variant/50 outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-left" 
                                                id="register-name" 
                                                name="name"
                                                placeholder="Enter your full name" 
                                                required 
                                                type="text"
                                                value={registerData.name}
                                                onChange={handleRegisterChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-2 relative group text-left">
                                        <label className="font-label-md text-on-surface text-[13px] font-semibold" htmlFor="register-email">Email Address</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px] group-focus-within:text-primary transition-colors">mail</span>
                                            <input 
                                                className="w-full h-12 bg-surface pl-10 pr-4 rounded-lg font-body-md text-on-surface placeholder:text-on-surface-variant/50 outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-left" 
                                                id="register-email" 
                                                name="email"
                                                placeholder="name@institution.edu" 
                                                required 
                                                type="email"
                                                value={registerData.email}
                                                onChange={handleRegisterChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <div className="flex flex-col gap-2 relative group text-left">
                                        <label className="font-label-md text-on-surface text-[13px] font-semibold" htmlFor="register-role">Role</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">badge</span>
                                            <select 
                                                className="w-full h-12 bg-surface pl-10 pr-10 rounded-lg font-body-md text-on-surface outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer text-left" 
                                                id="register-role" 
                                                name="role"
                                                value={registerData.role}
                                                onChange={handleRegisterChange}
                                            >
                                                <option value="student">Student</option>
                                                <option value="instructor">Instructor</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 pointer-events-none">expand_more</span>
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="flex flex-col gap-2 relative group text-left">
                                        <label className="font-label-md text-on-surface text-[13px] font-semibold" htmlFor="register-password">Password</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px] group-focus-within:text-primary transition-colors">lock</span>
                                            <input 
                                                className="w-full h-12 bg-surface pl-10 pr-10 rounded-lg font-body-md text-on-surface placeholder:text-on-surface-variant/50 outline-none border border-outline-variant/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-left" 
                                                id="register-password" 
                                                name="password"
                                                placeholder="••••••••" 
                                                required 
                                                type={showPassword ? 'text' : 'password'}
                                                value={registerData.password}
                                                onChange={handleRegisterChange}
                                            />
                                            <button 
                                                aria-label="Toggle password visibility" 
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-surface transition-colors cursor-pointer" 
                                                onClick={() => setShowPassword(!showPassword)} 
                                                type="button"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Sign Up Button */}
                                    <button 
                                        disabled={loading}
                                        className="w-full h-12 mt-4 bg-primary text-on-primary font-label-md rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.2)] hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 group font-semibold text-sm active:scale-[0.98] cursor-pointer disabled:opacity-50" 
                                        type="submit"
                                    >
                                        {loading ? 'Creating Account...' : 'Sign Up'}
                                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </form>
                            )}

                            {/* Footer links */}
                            <p className="font-body-sm text-center text-on-surface-variant mt-8 text-sm">
                                {activeTab === 'login' ? (
                                    <>
                                        Don't have an account?{' '}
                                        <button 
                                            className="font-label-md text-primary hover:underline underline-offset-4 decoration-primary/50 font-semibold cursor-pointer" 
                                            onClick={() => { setActiveTab('register'); setError(''); setSuccess(''); }}
                                        >
                                            Sign up
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{' '}
                                        <button 
                                            className="font-label-md text-primary hover:underline underline-offset-4 decoration-primary/50 font-semibold cursor-pointer" 
                                            onClick={() => { setActiveTab('login'); setError(''); setSuccess(''); }}
                                        >
                                            Sign in
                                        </button>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default LoginRegister;
