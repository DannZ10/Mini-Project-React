import React from 'react';
import CourseCard from '@/components/molecules/CourseCard';

const CourseGrid = ({ courses }) => {
    if (!courses || courses.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center w-full">
                <span className="material-symbols-outlined text-[64px] text-on-surface-variant/40 mb-4 animate-bounce">
                    menu_book
                </span>
                <h3 className="font-headline-md text-on-surface-variant mb-2">No Courses Found</h3>
                <p className="font-body-md text-on-surface-variant/75 max-w-sm">
                    We couldn't find any courses matching your filters. Try checking other categories or adjusting your search.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter w-full">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseGrid;
