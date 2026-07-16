import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sessionExpired, setSessionExpired] = useState(false);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        
        if (savedToken && savedUser) {
            setToken(savedToken);
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error("Error parsing user data from localStorage", e);
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, []);

    // Session inactivity tracker (30 minutes)
    useEffect(() => {
        if (!token) return;

        // Initialize activity time
        localStorage.setItem('lastActivityTime', Date.now().toString());

        const handleActivity = () => {
            localStorage.setItem('lastActivityTime', Date.now().toString());
        };

        // Attach listeners
        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('click', handleActivity);
        window.addEventListener('scroll', handleActivity);

        // Check for inactivity every 10 seconds
        const interval = setInterval(() => {
            const lastActivity = Number(localStorage.getItem('lastActivityTime') || Date.now());
            const diff = Date.now() - lastActivity;
            const timeoutLimit = 30 * 60 * 1000; // 30 minutes in milliseconds

            if (diff > timeoutLimit) {
                console.log("Inactivity timeout. Session expired.");
                logout();
                setSessionExpired(true);
            }
        }, 10000); // 10 seconds check interval

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('click', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            clearInterval(interval);
        };
    }, [token]);

    const login = (userData, userToken) => {
        setUser(userData);
        setToken(userToken);
        setSessionExpired(false);
        localStorage.setItem('token', userToken);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('lastActivityTime', Date.now().toString());
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('lastActivityTime');
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, sessionExpired, setSessionExpired, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
