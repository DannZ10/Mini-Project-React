import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/templates/MainLayout';
import CourseGrid from '@/components/organisms/CourseGrid';
import { CourseCardSkeleton } from '@/components/atoms/Skeleton';
import { getCourses, getCategories } from '@/modules/courses/courses.api';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                if (response.success && response.data) {
                    setCategories(response.data);
                }
            } catch (err) {
                console.error("Error loading categories", err);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            setError('');
            try {
                const params = {};
                if (search.trim()) params.search = search;
                if (selectedCategory) params.category_id = selectedCategory;

                const response = await getCourses(params);
                if (response.success && response.data) {
                    setCourses(response.data);
                } else {
                    setCourses([]);
                }
            } catch (err) {
                console.error("Error loading courses", err);
                setError('Failed to load courses. Please check if Laravel service is active.');
            } finally {
                setLoading(false);
            }
        };

        const delayDebounce = setTimeout(() => {
            fetchCourses();
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [search, selectedCategory]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
        setVisibleCount(6);
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const paginatedCourses = courses.slice(0, visibleCount);

    return (
        <MainLayout>
            <div className="flex flex-col w-full text-left bg-surface-container-low">

                {/* Header Banner */}
                <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-inverse-surface">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Lifelong learning illustration"
                            className="w-full h-full object-cover"
                            src="/img/course.png"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 z-10"></div>
                    <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col items-center text-center">
                        <span className="font-label-md text-label-md text-[#dbe1ff] tracking-[0.2em] uppercase mb-4 text-xs font-semibold">
                            Lifelong Learning
                        </span>
                        <h1 className="font-headline-xl text-headline-xl text-white mb-4 text-[48px] font-bold">
                            Explore Our <span className="text-[#b4c5ff]">Courses</span>
                        </h1>
                        <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
                            Discover a world of knowledge with our high-tech, expertly crafted courses. Elevate your skills and shape your future.
                        </p>
                    </div>
                </section>

                {/* Search & Filters Panel */}
                <section className="relative px-margin-mobile lg:px-margin-desktop z-10 -mt-24 w-full">
                    <div className="max-w-container-max mx-auto bg-surface/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl shadow-primary/5 flex flex-col md:flex-row items-center justify-between gap-6 border border-outline-variant/30">
                        <div className="flex flex-col md:flex-row items-center w-full gap-4 bg-surface-container-lowest p-2 rounded-2xl border border-outline-variant shadow-sm">

                            {/* Search input */}
                            <div className="relative flex-grow group w-full">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                                    search
                                </span>
                                <input
                                    className="w-full bg-transparent font-body-md text-body-md text-on-surface pl-12 pr-4 py-3 focus:outline-none"
                                    placeholder="Search courses, instructors, or topics..."
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="h-8 w-px bg-outline-variant hidden md:block"></div>

                            {/* Categories tab scroll */}
                            <div className="flex overflow-x-auto gap-2 p-1 w-full md:w-auto scrollbar-hide">
                                <button
                                    onClick={() => handleCategoryClick(null)}
                                    className={`px-5 py-2 font-label-md text-label-md text-sm rounded-xl whitespace-nowrap transition-all cursor-pointer ${!selectedCategory ? 'bg-primary text-on-primary font-semibold' : 'bg-transparent text-on-surface-variant hover:bg-surface-container-high hover:text-primary'}`}
                                >
                                    All Categories
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleCategoryClick(cat.id)}
                                        className={`px-5 py-2 font-label-md text-label-md text-sm rounded-xl whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat.id ? 'bg-primary text-on-primary font-semibold' : 'bg-transparent text-on-surface-variant hover:bg-surface-container-high hover:text-primary'}`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                {/* Course Grid & Pagination */}
                <section className="py-4 px-margin-mobile lg:px-margin-desktop w-full">
                    <div className="max-w-[1280px] mx-auto flex flex-col items-center">

                        {loading && courses.length === 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-4">
                                <CourseCardSkeleton />
                                <CourseCardSkeleton />
                                <CourseCardSkeleton />
                                <CourseCardSkeleton />
                                <CourseCardSkeleton />
                                <CourseCardSkeleton />
                            </div>
                        ) : error ? (
                            <div className="bg-error-container border border-error/20 text-on-error-container p-6 rounded-lg text-sm text-center max-w-md my-10">
                                <span>{error}</span>
                            </div>
                        ) : (
                            <>
                                <CourseGrid courses={paginatedCourses} />

                                {courses.length > visibleCount && (
                                    <div className="mt-12 flex justify-center w-full">
                                        <button
                                            onClick={handleLoadMore}
                                            className="px-8 py-3 bg-surface-container-lowest border border-outline-variant/60 text-on-surface font-label-md text-label-md rounded-full hover:border-primary hover:text-primary hover:shadow-md transition-all flex items-center gap-2 shadow-sm cursor-pointer active:scale-95 text-sm font-semibold"
                                        >
                                            Load More Courses
                                            <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                        </button>
                                    </div>
                                )}
                            </>
                        )}

                    </div>
                </section>

            </div>
        </MainLayout>
    );
};

export default Courses;
