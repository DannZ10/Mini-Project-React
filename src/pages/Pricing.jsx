import React, { useState } from 'react';
import MainLayout from '@/components/templates/MainLayout';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annually'
    const [activeFaq, setActiveFaq] = useState(null); // stores active FAQ index

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Pricing calculation based on billing cycle (20% discount for annual billing)
    const basicPrice = billingCycle === 'monthly' ? '$19' : '$15';
    const proPrice = billingCycle === 'monthly' ? '$49' : '$39';

    return (
        <MainLayout>
            <div className="flex flex-col w-full relative text-left">

                {/* Visual Background Orbs */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-container to-surface-container-low -z-10 h-[800px]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply -z-10"></div>
                <div className="absolute top-40 left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] mix-blend-multiply -z-10"></div>

                {/* Hero Title Section */}
                <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-24 pb-16 flex flex-col items-center text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high mb-8 shadow-sm text-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">workspace_premium</span>
                        <span className="font-label-md text-on-surface-variant uppercase tracking-wider">Flexible Plans</span>
                    </div>
                    <h1 className="font-headline-xl text-3xl lg:text-4xl text-on-surface mb-6 max-w-3xl">Simple, Transparent Pricing</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
                        Whether you're an individual lifelong learner or scaling an institutional program, dibiEdu offers the precise tools you need to accelerate outcomes.
                    </p>

                    {/* Toggle Button Container */}
                    <div className="mt-12 flex items-center bg-surface-container p-1 rounded-full shadow-inner w-max">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2.5 rounded-full font-label-md text-label-md transition-all cursor-pointer ${billingCycle === 'monthly' ? 'bg-surface shadow-sm text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('annually')}
                            className={`px-6 py-2.5 rounded-full font-label-md text-label-md transition-all cursor-pointer flex items-center gap-2 ${billingCycle === 'annually' ? 'bg-surface shadow-sm text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
                        >
                            Annually
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] font-bold">Save 20%</span>
                        </button>
                    </div>
                </section>

                {/* Pricing Columns Matrix */}
                <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pb-32 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                        {/* 1. Basic Tier */}
                        <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-xl p-8 shadow-md hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full mt-4">
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-lg lg:text-xl">Basic</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 h-10 text-xs lg:text-sm">Essential tools for individual learners starting their journey.</p>
                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="font-headline-xl text-3xl lg:text-4xl text-on-surface tracking-tighter">{basicPrice}</span>
                                <span className="font-body-sm text-xs text-on-surface-variant">{billingCycle === 'monthly' ? '/mo' : '/mo billed annually'}</span>
                            </div>
                            <button className="w-full py-3 px-6 rounded-lg font-label-md text-label-md bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors mb-8 shadow-sm flex items-center justify-center gap-2 group cursor-pointer">
                                Get Started
                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <div className="flex-grow flex flex-col gap-4">
                                <h4 className="font-label-md text-label-md text-on-surface text-sm">Included:</h4>
                                <ul className="flex flex-col gap-3 text-xs lg:text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span className="font-body-sm text-on-surface-variant">Access to 100+ foundational courses</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span className="font-body-sm text-on-surface-variant">Basic progress tracking</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span className="font-body-sm text-on-surface-variant">Community forum access</span>
                                    </li>
                                    <li className="flex items-start gap-3 opacity-50">
                                        <span className="material-symbols-outlined text-on-surface-variant text-[20px] shrink-0">close</span>
                                        <span className="font-body-sm text-on-surface-variant">1-on-1 Mentorship</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Pro Tier (Highlighted) */}
                        <div className="relative rounded-xl p-[2px] bg-gradient-to-br from-primary via-secondary to-tertiary shadow-xl hover:-translate-y-2 transition-transform duration-300 z-10 flex flex-col h-full">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-on-primary px-4 py-1.5 rounded-full font-label-md text-label-md text-xs whitespace-nowrap shadow-md z-20">
                                Most Popular
                            </div>
                            <div className="bg-surface rounded-[10px] p-8 flex flex-col h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10"></div>
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-lg lg:text-xl">Pro</h3>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 h-10 text-xs lg:text-sm">Advanced features for dedicated professionals and active learners.</p>
                                <div className="mb-8 flex items-baseline gap-1">
                                    <span className="font-headline-xl text-3xl lg:text-4xl text-on-surface tracking-tighter">{proPrice}</span>
                                    <span className="font-body-sm text-xs text-on-surface-variant">{billingCycle === 'monthly' ? '/mo' : '/mo billed annually'}</span>
                                </div>
                                <button className="w-full py-3 px-6 rounded-lg font-label-md text-label-md bg-primary text-on-primary hover:bg-primary-container transition-all shadow-[0_4px_12px_rgba(37,99,235,0.2)] active:scale-95 mb-8 flex items-center justify-center gap-2 group cursor-pointer">
                                    Start Free Trial
                                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <div className="flex-grow flex flex-col gap-4">
                                    <h4 className="font-label-md text-label-md text-on-surface text-sm">Everything in Basic, plus:</h4>
                                    <ul className="flex flex-col gap-3 text-xs lg:text-sm">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                            <span className="font-body-sm text-on-surface-variant font-medium">Full library access (1,000+ courses)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                            <span className="font-body-sm text-on-surface-variant font-medium">Advanced analytics dashboard</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                            <span className="font-body-sm text-on-surface-variant font-medium">Certificate generation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                            <span className="font-body-sm text-on-surface-variant font-medium">Monthly 1-on-1 Q&A sessions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3. Enterprise Tier */}
                        <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-xl p-8 shadow-md hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full mt-4 relative overflow-hidden">
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-lg lg:text-xl">Enterprise</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 h-10 text-xs lg:text-sm">Custom scalable solutions for teams and large institutions.</p>
                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="font-headline-xl text-3xl lg:text-4xl text-on-surface tracking-tighter">Custom</span>
                            </div>
                            <button className="w-full py-3 px-6 rounded-lg font-label-md text-label-md bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors mb-8 shadow-sm flex items-center justify-center gap-2 group cursor-pointer">
                                Contact Sales
                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <div className="flex-grow flex flex-col gap-4">
                                <h4 className="font-label-md text-label-md text-on-surface text-sm">Everything in Pro, plus:</h4>
                                <ul className="flex flex-col gap-3 text-xs lg:text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">check_circle</span>
                                        <span className="font-body-sm text-on-surface-variant">Dedicated success manager</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">check_circle</span>
                                        <span className="font-body-sm text-on-surface-variant">SSO & LMS integration</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">check_circle</span>
                                        <span className="font-body-sm text-on-surface-variant">Custom reporting API</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">check_circle</span>
                                        <span className="font-body-sm text-on-surface-variant">White-labeling options</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* FAQ Section */}
                <section className="w-full max-w-3xl mx-auto px-margin-mobile lg:px-margin-desktop py-24 relative z-20 border-t border-outline-variant/30">
                    <div className="text-center mb-12">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 text-2xl lg:text-3xl">Frequently Asked Questions</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Everything you need to know about the product and billing.</p>
                    </div>

                    <div className="flex flex-col gap-6">

                        {/* FAQ 1 */}
                        <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-xl hover:shadow-md transition-shadow">
                            <button
                                onClick={() => toggleFaq(1)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group cursor-pointer"
                            >
                                <span className="font-headline-md text-base lg:text-lg text-on-surface group-hover:text-primary transition-colors">Can I switch plans later?</span>
                                <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${activeFaq === 1 ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                            {activeFaq === 1 && (
                                <div className="px-6 pb-5">
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs lg:text-sm">
                                        Absolutely. You can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the prorated difference will be applied to your next billing cycle.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* FAQ 2 */}
                        <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-xl hover:shadow-md transition-shadow">
                            <button
                                onClick={() => toggleFaq(2)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group cursor-pointer"
                            >
                                <span className="font-headline-md text-base lg:text-lg text-on-surface group-hover:text-primary transition-colors">Do you offer discounts for students?</span>
                                <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${activeFaq === 2 ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                            {activeFaq === 2 && (
                                <div className="px-6 pb-5">
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs lg:text-sm">
                                        Yes, we believe education should be accessible. Verified students, educators, and registered non-profits are eligible for a 50% discount on the Pro plan. Contact support with your credentials.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* FAQ 3 */}
                        <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-xl hover:shadow-md transition-shadow">
                            <button
                                onClick={() => toggleFaq(3)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group cursor-pointer"
                            >
                                <span className="font-headline-md text-base lg:text-lg text-on-surface group-hover:text-primary transition-colors">What happens after the free trial?</span>
                                <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${activeFaq === 3 ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                            {activeFaq === 3 && (
                                <div className="px-6 pb-5">
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs lg:text-sm">
                                        After your 14-day free trial ends, you will automatically be charged for the Pro plan unless you cancel beforehand. We send a reminder email 3 days before the trial expires.
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                {/* Promotional Banner Footer */}
                <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-24 mb-16 relative overflow-hidden rounded-3xl z-20">
                    <div className="absolute inset-0 bg-inverse-surface -z-20"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 -z-10"
                        style={{ backgroundImage: "url('/img/pricing.png')" }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto py-12 px-6">
                        <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface mb-6 text-xl lg:text-2xl">Ready to accelerate your learning?</h2>
                        <p className="font-body-lg text-body-lg text-inverse-on-surface/90 mb-10 text-xs lg:text-sm">Join thousands of professionals mastering new skills every day. Start your 14-day free trial on the Pro plan.</p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button className="px-8 py-3.5 rounded-full font-label-md text-label-md bg-primary text-on-primary hover:bg-primary-container transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 cursor-pointer">
                                Start Free Trial
                                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                            </button>
                            <button className="px-8 py-3.5 rounded-full font-label-md text-label-md bg-inverse-on-surface/10 text-inverse-on-surface hover:bg-inverse-on-surface/20 transition-all backdrop-blur-md cursor-pointer">
                                Talk to Sales
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </MainLayout>
    );
};

export default Pricing;
