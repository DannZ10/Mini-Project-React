import api from '@/utils/api';

export const getCourses = async (params = {}) => {
    const response = await api.get('/courses', { params });
    return response.data;
};

export const getCourseById = async (id) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
};

export const getCategories = async () => {
    const response = await api.get('/categories');
    return response.data;
};

export const getCourseStats = async () => {
    const response = await api.get('/courses/stats');
    return response.data;
};
