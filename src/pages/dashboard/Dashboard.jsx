import React from 'react';
import useAuth from '@/modules/auth/useAuth';
import AdminDashboard from './AdminDashboard';
import InstructorDashboard from './InstructorDashboard';
import StudentDashboard from './StudentDashboard';

const Dashboard = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <span className="text-sm text-on-surface-variant mt-4">Loading dashboard session...</span>
            </div>
        );
    }

    const role = user?.role || 'student';

    switch (role) {
        case 'admin':
            return <AdminDashboard />;
        case 'instructor':
            return <InstructorDashboard />;
        case 'student':
        default:
            return <StudentDashboard />;
    }
};

export default Dashboard;
