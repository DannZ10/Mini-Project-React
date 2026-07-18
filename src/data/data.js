/**
 * Static data lists for dibiEdu application
 */

export const logoUrl = '/img/logo-icon.png';

// Testimonials data for Home page
export const testimonials = [
    {
        name: "Sarah Connors",
        role: "Software Engineer at TechCorp",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment: "dibiEdu changed my career trajectory! The Advanced Frontend course was extremely structured and hands-on. I landed a job in 3 months."
    },
    {
        name: "David Jenkins",
        role: "Graphic Designer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment: "The UI/UX Masterclass was outstanding. I learned how to build production-ready design systems in Figma and present them effectively."
    },
    {
        name: "Lina Alvarez",
        role: "Data Analyst",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        comment: "The Python for Machine Learning course made complex mathematical algorithms so easy to understand. Highly recommended!"
    }
];

// Why Choose Us / Advantages features for Home page
export const features = [
    {
        id: 1,
        icon: "school",
        iconBgClass: "bg-primary/10 text-primary",
        title: "Expert Instructors",
        description: "Learn from industry experts with real-world experience and proven teaching methodologies."
    },
    {
        id: 2,
        icon: "schedule",
        iconBgClass: "bg-secondary/10 text-secondary",
        title: "Flexible Learning",
        description: "Access courses on any device. Learn at your own pace, anytime, anywhere that suits you."
    },
    {
        id: 3,
        icon: "trending_up",
        iconBgClass: "bg-tertiary/10 text-tertiary",
        title: "Track Progress",
        description: "Monitor your learning journey with detailed analytics and progress tracking tools."
    },
    {
        id: 4,
        icon: "workspace_premium",
        iconBgClass: "bg-primary/10 text-primary",
        title: "Certifications",
        description: "Earn globally recognized certificates upon completion to boost your career opportunities."
    }
];

// Statistics for Home page
export const homeStats = [
    {
        value: "10,000+",
        label: "Active Learners",
        icon: "group",
        bgClass: "bg-primary-fixed/50",
        textClass: "text-primary"
    },
    {
        value: "200+",
        label: "Online Courses",
        icon: "menu_book",
        bgClass: "bg-tertiary-fixed-dim/30",
        textClass: "text-tertiary"
    },
    {
        value: "95%",
        label: "Success Rate",
        icon: "emoji_events",
        bgClass: "bg-secondary-fixed/50",
        textClass: "text-secondary"
    },
    {
        value: "50+",
        label: "Expert Instructors",
        icon: "public",
        bgClass: "bg-primary-fixed-dim/30",
        textClass: "text-primary-container"
    }
];

// Statistics for About page
export const aboutStats = [
    {
        value: "10,000+",
        label: "Active Learners",
        icon: "school",
        bgClass: "bg-primary-fixed",
        textClass: "text-primary"
    },
    {
        value: "500+",
        label: "Expert Courses",
        icon: "menu_book",
        bgClass: "bg-secondary-fixed",
        textClass: "text-secondary"
    },
    {
        value: "120+",
        label: "Countries Reached",
        icon: "public",
        bgClass: "bg-tertiary-fixed",
        textClass: "text-tertiary"
    },
    {
        value: "99.9%",
        label: "Platform Uptime",
        icon: "verified",
        bgClass: "bg-error-container",
        textClass: "text-error"
    }
];

// Core Values for About page
export const coreValues = [
    {
        id: 1,
        icon: "bolt",
        bgClass: "bg-primary/10 text-primary",
        title: "Innovation First",
        description: "Constantly pushing the boundaries of what educational technology can achieve."
    },
    {
        id: 2,
        icon: "diversity_3",
        bgClass: "bg-secondary/10 text-secondary",
        title: "Inclusive Community",
        description: "Fostering environments where diverse perspectives are celebrated and nurtured."
    },
    {
        id: 3,
        icon: "trending_up",
        bgClass: "bg-tertiary/10 text-tertiary",
        title: "Continuous Growth",
        description: "Believing that learning never stops, for our users and ourselves."
    }
];

// Team Experts for About page
export const teamMembers = [
    {
        name: "Dr. Elena Rostova",
        role: "Chief Education Officer",
        socials: { website: "#" }
    },
    {
        name: "Marcus Chen",
        role: "Head of Product",
        socials: { website: "#" }
    },
    {
        name: "Aisha Patel",
        role: "Lead UX Researcher",
        socials: { website: "#" }
    },
    {
        name: "David Kim",
        role: "VP of Engineering",
        socials: { website: "#" }
    }
];

// FAQ items for Pricing page
export const faqs = [
    {
        id: 1,
        question: "Can I switch plans later?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the prorated difference will be applied to your next billing cycle."
    },
    {
        id: 2,
        question: "Do you offer discounts for students?",
        answer: "Yes, we believe education should be accessible. Verified students, educators, and registered non-profits are eligible for a 50% discount on the Pro plan. Contact support with your credentials."
    },
    {
        id: 3,
        question: "What happens after the free trial?",
        answer: "After your 14-day free trial ends, you will automatically be charged for the Pro plan unless you cancel beforehand. We send a reminder email 3 days before the trial expires."
    }
];

// Pricing tiers for Pricing page
export const pricingPlans = [
    {
        id: "basic",
        name: "Basic",
        description: "Essential tools for individual learners starting their journey.",
        price: {
            monthly: "$19",
            annually: "$15"
        },
        buttonText: "Get Started",
        buttonClass: "bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
        highlighted: false,
        featuresHeader: "Included:",
        features: [
            { text: "Access to 100+ foundational courses", included: true },
            { text: "Basic progress tracking", included: true },
            { text: "Community forum access", included: true },
            { text: "1-on-1 Mentorship", included: false }
        ]
    },
    {
        id: "pro",
        name: "Pro",
        description: "Advanced features for dedicated professionals and active learners.",
        price: {
            monthly: "$49",
            annually: "$39"
        },
        buttonText: "Start Free Trial",
        buttonClass: "bg-primary text-on-primary hover:bg-primary-container shadow-[0_4px_12px_rgba(37,99,235,0.25)]",
        highlighted: true,
        featuresHeader: "Everything in Basic, plus:",
        features: [
            { text: "Full library access (1,000+ courses)", included: true, bold: true },
            { text: "Advanced analytics dashboard", included: true, bold: true },
            { text: "Certificate generation", included: true, bold: true },
            { text: "Monthly 1-on-1 Q&A sessions", included: true, bold: true }
        ]
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "Custom scalable solutions for teams and large institutions.",
        price: {
            monthly: "Custom",
            annually: "Custom"
        },
        buttonText: "Contact Sales",
        buttonClass: "bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
        highlighted: false,
        featuresHeader: "Everything in Pro, plus:",
        features: [
            { text: "Dedicated success manager", included: true, iconColor: "text-tertiary" },
            { text: "SSO & LMS integration", included: true, iconColor: "text-tertiary" },
            { text: "Custom reporting API", included: true, iconColor: "text-tertiary" },
            { text: "White-labeling options", included: true, iconColor: "text-tertiary" }
        ]
    }
];
