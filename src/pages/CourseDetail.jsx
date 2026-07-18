import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/templates/MainLayout';
import { CourseDetailSkeleton } from '@/components/atoms/Skeleton';
import { getCourseById } from '@/modules/courses/courses.api';
import { formatRupiah } from '@/utils/helpers';


const CourseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [enrolled, setEnrolled] = useState(false);

    useEffect(() => {
        const fetchCourseDetail = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await getCourseById(id);
                if (response.success && response.data) {
                    setCourse(response.data);
                } else {
                    setError('Course details not found.');
                }
            } catch (err) {
                console.error("Error loading course details", err);
                setError('Failed to load course details. It might have been deleted.');
            } finally {
                setLoading(false);
            }
        };
        fetchCourseDetail();
    }, [id]);



    const handleEnroll = () => {
        setEnrolled(true);
    };

    if (loading) {
        return (
            <MainLayout>
                <CourseDetailSkeleton />
            </MainLayout>
        );
    }

    if (error || !course) {
        return (
            <MainLayout>
                <div className="max-w-md mx-auto my-12 text-center">
                    <div className="bg-error-container border border-error/25 text-on-error-container p-6 rounded-lg mb-6">
                        <span>{error || 'Course not found'}</span>
                    </div>
                    <button 
                        onClick={() => navigate('/')}
                        className="px-6 py-2.5 bg-primary text-on-primary rounded-full font-label-md cursor-pointer"
                    >
                        Back to Courses
                    </button>
                </div>
            </MainLayout>
        );
    }

    const displayRating = course.rating ? (course.rating / 2).toFixed(1) : '0.0';
    const instructorAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(course.instructor?.name || 'Instructor')}`;

    return (
        <MainLayout>
            <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-8 w-full text-left">
                
                {/* Back Link */}
                <button 
                    onClick={() => navigate('/')}
                    className="mb-8 font-label-md text-primary hover:underline flex items-center gap-2 cursor-pointer"
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Courses
                </button>

                {/* Enrollment Success Notification Banner */}
                {enrolled && (
                    <div className="bg-tertiary-container border border-tertiary/20 text-on-tertiary-container p-5 rounded-2xl mb-8 flex items-center justify-between shadow-sm animate-pulse">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[28px] text-tertiary">verified</span>
                            <div>
                                <h4 className="font-label-md text-base">Congratulations!</h4>
                                <p className="font-body-sm text-sm opacity-90">You have successfully enrolled in this course. You can now access all learning materials.</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setEnrolled(false)}
                            className="material-symbols-outlined text-[20px] opacity-60 hover:opacity-100 cursor-pointer"
                        >
                            close
                        </button>
                    </div>
                )}

                {/* Two-column layout grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 flex flex-col space-y-8">
                        
                        {/* Course Category Badge & Title */}
                        <div>
                            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-md text-xs rounded-full uppercase tracking-wider mb-4">
                                {course.category?.name || 'General'}
                            </div>
                            <h1 className="font-headline-xl text-3xl lg:text-4xl text-on-surface mb-4 leading-tight">
                                {course.title}
                            </h1>
                            
                            {/* Stars rating and Reviews count */}
                            <div className="flex items-center space-x-6 text-sm">
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        star
                                    </span>
                                    <span className="font-label-md text-base">{displayRating}</span>
                                </div>
                                <span className="text-on-surface-variant font-body-sm">
                                    {course.enrolled_count || 0} enrolled students
                                </span>
                                <span className="text-outline-variant/60 font-body-sm">|</span>
                                <span className="font-label-md text-primary bg-primary/5 px-2.5 py-0.5 rounded text-xs capitalize">
                                    {course.level}
                                </span>
                            </div>
                        </div>

                        {/* Description block */}
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 lg:p-8 text-left">
                            <h3 className="font-headline-md text-lg text-on-surface mb-4 border-b border-outline-variant/20 pb-2">
                                Course Description
                            </h3>
                            <p className="font-body-md text-on-surface-variant leading-relaxed whitespace-pre-line text-sm lg:text-base">
                                {course.description}
                            </p>
                        </div>

                        {/* Syllabus Outline details */}
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 lg:p-8 text-left">
                            <h3 className="font-headline-md text-lg text-on-surface mb-4 border-b border-outline-variant/20 pb-2">
                                Course Syllabus
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-3 hover:bg-surface-container-low rounded-xl transition-all">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0 text-sm">1</div>
                                    <div>
                                        <h5 className="font-label-md text-sm text-on-surface">Introduction to the Topic</h5>
                                        <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">Overview of course content, setup parameters, and fundamental terminology.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-3 hover:bg-surface-container-low rounded-xl transition-all">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0 text-sm">2</div>
                                    <div>
                                        <h5 className="font-label-md text-sm text-on-surface">Core Principles and Methodologies</h5>
                                        <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">Deep diving into basic algorithms, architectures, and design concepts.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-3 hover:bg-surface-container-low rounded-xl transition-all">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0 text-sm">3</div>
                                    <div>
                                        <h5 className="font-label-md text-sm text-on-surface">Practical Implementation</h5>
                                        <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">Step-by-step hands-on training, build frameworks, and troubleshoot errors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Checkout Card */}
                    <div className="lg:col-span-1 flex flex-col space-y-6">
                        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl p-6 shadow-xl shadow-primary/5 flex flex-col overflow-hidden relative">
                            <div className="absolute inset-0 border border-outline-variant/30 rounded-3xl pointer-events-none"></div>
                            
                            {/* Course Image Preview */}
                            <img 
                                src={course.thumbnail} 
                                alt={course.title}
                                className="w-full h-48 object-cover rounded-2xl mb-6 bg-surface-container"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500';
                                }}
                            />

                            {/* Info Blocks */}
                            <div className="space-y-4 mb-8 text-sm">
                                <div className="flex justify-between items-center py-2 border-b border-surface-container-low">
                                    <span className="font-body-sm text-on-surface-variant flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[18px]">payments</span>
                                        Course Price
                                    </span>
                                    <span className="font-headline-md text-lg text-primary">{formatRupiah(course.price)}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-surface-container-low">
                                    <span className="font-body-sm text-on-surface-variant flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                        Duration
                                    </span>
                                    <span className="font-label-md text-on-surface">{course.duration} hours</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-surface-container-low">
                                    <span className="font-body-sm text-on-surface-variant flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[18px]">group_work</span>
                                        Available Seats
                                    </span>
                                    <span className="font-label-md text-on-surface">{course.quota} slots left</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-surface-container-low">
                                    <span className="font-body-sm text-on-surface-variant flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                                        Certificate
                                    </span>
                                    <span className="font-label-md text-on-surface">Yes</span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button
                                onClick={handleEnroll}
                                disabled={enrolled}
                                className="w-full py-4 bg-primary hover:bg-primary-container text-on-primary font-label-md rounded-full shadow-[0_4px_14px_rgba(0,74,198,0.25)] hover:shadow-[0_6px_20px_rgba(0,74,198,0.35)] transition-all active:scale-[0.98] cursor-pointer disabled:bg-surface-variant disabled:text-on-surface-variant disabled:cursor-not-allowed disabled:shadow-none"
                            >
                                {enrolled ? 'Already Enrolled' : 'Enroll in this Course'}
                            </button>

                            {/* Instructor Profile segment */}
                            <div className="mt-8 pt-6 border-t border-outline-variant/30 text-left">
                                <h4 className="font-label-md text-sm text-on-surface mb-3">Your Instructor</h4>
                                <div className="flex items-center gap-3">
                                    <img 
                                        className="w-10 h-10 rounded-full object-cover bg-surface-container" 
                                        src={instructorAvatar} 
                                        alt={course.instructor?.name}
                                    />
                                    <div>
                                        <h5 className="font-label-md text-sm text-on-surface">{course.instructor?.name}</h5>
                                        <p className="font-body-sm text-[11px] text-on-surface-variant capitalize">LMS Certified {course.instructor?.role || 'Instructor'}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </MainLayout>
    );
};

export default CourseDetail;
