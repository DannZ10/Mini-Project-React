import api from './api';

export const authService = {
  register: (name, email, password, role) =>
    api.post('/register', { name, email, password, role }),

  login: (email, password) =>
    api.post('/login', { email, password }),

  logout: () =>
    api.post('/logout'),

  getToken: () => localStorage.getItem('token'),

  setToken: (token) => localStorage.setItem('token', token),

  removeToken: () => localStorage.removeItem('token'),
};
