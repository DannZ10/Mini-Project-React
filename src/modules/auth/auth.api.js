import api from '@/utils/api';

// Register user
export const registerUser = async (name, email, password, role = 'student') => {
    const response = await api.post('/register', { name, email, password, role });
    return response.data;
};

// Login user
export const loginUser = async (email, password) => {
    const response = await api.post('/login', { email, password });
    return response.data;
};

// Logout user
export const logoutUser = async () => {
    const response = await api.post('/logout');
    return response.data;
};
