import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatRupiah } from '@/utils/helpers';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    // Map categories to distinct styling colors
    const getCategoryStyles = (categoryName) => {
        const name = categoryName?.toLowerCase() || '';
        if (name.includes('web')) {
            return 'bg-primary-fixed text-on-primary-fixed';
        } else if (name.includes('design')) {
            return 'bg-secondary-fixed text-on-secondary-fixed';
        } else if (name.includes('data') || name.includes('science')) {
            return 'bg-tertiary-fixed text-on-tertiary-fixed';
        } else if (name.includes('marketing')) {
            return 'bg-error-container text-on-error-container';
        }
        return 'bg-surface-variant text-on-surface-variant';
    };


    // Map 10-scale rating to 5-star standard (e.g. 9.2 -> 4.6)
    const displayRating = course.rating ? (course.rating / 2).toFixed(1) : '0.0';

    // Generate clean instructor avatar
    const instructorAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(course.instructor?.name || 'Instructor')}`;

    return (
        <article 
            onClick={() => navigate(`/courses/${course.id}`)}
            className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/60 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer"
        >
            {/* Header Thumbnail */}
            <div className="relative h-44 overflow-hidden bg-surface-container">
                <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500';
                    }}
                />
                <span className={`absolute top-3 left-3 px-2.5 py-0.5 font-label-md text-[11px] rounded-md uppercase tracking-wider ${getCategoryStyles(course.category?.name)}`}>
                    {course.category?.name || 'General'}
                </span>
            </div>

            {/* Content Details */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                        </span>
                        <span className="font-label-md text-label-md">{displayRating}</span>
                    </div>
                    <span className="text-on-surface-variant font-body-sm text-[11px]">
                        {course.enrolled_count || 0} reviews
                    </span>
                </div>

                <h3 className="font-headline-md text-[18px] leading-tight text-on-surface mb-2 line-clamp-2 text-left">
                    {course.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2 text-left">
                    {course.description}
                </p>

                {/* Footer Section */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-surface-variant">
                    <div className="flex items-center gap-2">
                        <img 
                            className="w-6 h-6 rounded-full object-cover bg-surface-container" 
                            src={instructorAvatar} 
                            alt={course.instructor?.name || 'Instructor'}
                        />
                        <span className="font-body-sm text-[13px] text-on-surface">
                            {course.instructor?.name || 'Instructor'}
                        </span>
                    </div>
                    <span className="font-headline-md text-[18px] text-primary">
                        {formatRupiah(course.price)}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default CourseCard;
