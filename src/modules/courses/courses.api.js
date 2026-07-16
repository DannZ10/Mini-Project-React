import api from '@/utils/api';

// Fetch all courses (supports search, category filtering)
export const getCourses = async (params = {}) => {
    const response = await api.get('/courses', { params });
    return response.data;
};

// Fetch course detail by ID
export const getCourseById = async (id) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
};

// Fetch all categories
export const getCategories = async () => {
    const response = await api.get('/categories');
    return response.data;
};

// Fetch course stats
export const getCourseStats = async () => {
    const response = await api.get('/courses/stats');
    return response.data;
};
