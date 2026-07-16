import React from 'react';

// Base Skeleton element
export const Skeleton = ({ className = '', variant = 'text' }) => {
    const baseClasses = "animate-pulse bg-surface-container-high/60";
    const variantClasses = {
        text: "h-4 w-full rounded",
        title: "h-6 w-3/4 rounded-md",
        avatar: "h-10 w-10 rounded-full",
        thumbnail: "w-full h-48 rounded-2xl",
        rect: "w-full h-12 rounded-lg",
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant] || ''} ${className}`} />
    );
};

// Course Card Skeleton
export const CourseCardSkeleton = () => {
    return (
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/40 flex flex-col h-full">
            {/* Thumbnail */}
            <Skeleton variant="thumbnail" className="rounded-none rounded-b-2xl" />
            
            {/* Body */}
            <div className="p-6 flex flex-col flex-grow text-left">
                {/* Level / Rating Row */}
                <div className="flex items-center justify-between mb-4">
                    <Skeleton className="w-16 h-5" />
                    <Skeleton className="w-10 h-5" />
                </div>
                
                {/* Title */}
                <Skeleton variant="title" className="mb-3" />
                <Skeleton variant="text" className="w-1/2 mb-4" />
                
                {/* Description */}
                <div className="space-y-2 mb-6">
                    <Skeleton variant="text" />
                    <Skeleton variant="text" className="w-5/6" />
                </div>
                
                {/* Instructor & Price Row */}
                <div className="mt-auto pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Skeleton variant="avatar" className="w-8 h-8" />
                        <Skeleton className="w-20 h-4" />
                    </div>
                    <Skeleton className="w-24 h-6" />
                </div>
            </div>
        </div>
    );
};

// Course Detail Skeleton
export const CourseDetailSkeleton = () => {
    return (
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-8 w-full text-left">
            {/* Back Button */}
            <Skeleton className="w-28 h-5 mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-4">
                        <Skeleton className="w-24 h-5 rounded-full" />
                        <Skeleton className="w-full h-10 lg:w-4/5" />
                        <div className="flex items-center space-x-6">
                            <Skeleton className="w-16 h-5" />
                            <Skeleton className="w-32 h-5" />
                            <Skeleton className="w-20 h-5" />
                        </div>
                    </div>

                    {/* Description Box */}
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 lg:p-8 space-y-4">
                        <Skeleton className="w-40 h-6 border-b border-outline-variant/20 pb-2" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" className="w-5/6" />
                    </div>

                    {/* Syllabus Box */}
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 lg:p-8 space-y-6">
                        <Skeleton className="w-36 h-6 border-b border-outline-variant/20 pb-2" />
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <Skeleton variant="avatar" className="w-8 h-8" />
                                    <div className="flex-1 space-y-2">
                                        <Skeleton className="w-1/3 h-4" />
                                        <Skeleton variant="text" className="w-2/3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column Checkout Card */}
                <div className="lg:col-span-1">
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl p-6 shadow-xl space-y-6">
                        <Skeleton variant="thumbnail" />
                        
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex justify-between items-center py-2 border-b border-surface-container-low">
                                    <Skeleton className="w-24 h-4" />
                                    <Skeleton className="w-16 h-4" />
                                </div>
                            ))}
                        </div>

                        <Skeleton variant="rect" className="rounded-full h-14" />

                        <div className="pt-6 border-t border-outline-variant/30 space-y-3">
                            <Skeleton className="w-28 h-4" />
                            <div className="flex items-center gap-3">
                                <Skeleton variant="avatar" />
                                <div className="space-y-2 flex-1">
                                    <Skeleton className="w-24 h-4" />
                                    <Skeleton className="w-32 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
