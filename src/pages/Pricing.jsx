import React, { useState } from 'react';
import MainLayout from '@/components/templates/MainLayout';
import { pricingPlans, faqs } from '@/data/data';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annually'
    const [activeFaq, setActiveFaq] = useState(null); // stores active FAQ index

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };


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
                        {pricingPlans.map((plan) => {
                            const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually;
                            const isEnterprise = plan.id === 'enterprise';
                            const billingSuffix = isEnterprise ? "" : (billingCycle === 'monthly' ? '/mo' : '/mo billed annually');

                            const cardInner = (
                                <div className={`flex flex-col h-full ${plan.highlighted ? 'bg-surface rounded-[10px] p-8 relative overflow-hidden' : ''}`}>
                                    {plan.highlighted && <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10"></div>}
                                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-lg lg:text-xl">{plan.name}</h3>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 h-10 text-xs lg:text-sm">{plan.description}</p>
                                    <div className="mb-8 flex items-baseline gap-1">
                                        <span className="font-headline-xl text-3xl lg:text-4xl text-on-surface tracking-tighter">{price}</span>
                                        {billingSuffix && <span className="font-body-sm text-xs text-on-surface-variant">{billingSuffix}</span>}
                                    </div>
                                    <button className={`w-full py-3 px-6 rounded-lg font-label-md text-label-md transition-all active:scale-95 mb-8 flex items-center justify-center gap-2 group cursor-pointer ${plan.buttonClass}`}>
                                        {plan.buttonText}
                                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                    <div className="flex-grow flex flex-col gap-4">
                                        <h4 className="font-label-md text-label-md text-on-surface text-sm">{plan.featuresHeader}</h4>
                                        <ul className="flex flex-col gap-3 text-xs lg:text-sm">
                                            {plan.features.map((feature, fIdx) => (
                                                <li key={fIdx} className={`flex items-start gap-3 ${!feature.included ? 'opacity-50' : ''}`}>
                                                    <span className={`material-symbols-outlined ${feature.iconColor || (feature.included ? 'text-primary' : 'text-on-surface-variant')} text-[20px] shrink-0`}>
                                                        {feature.included ? 'check_circle' : 'close'}
                                                    </span>
                                                    <span className={`font-body-sm text-on-surface-variant ${feature.bold ? 'font-medium' : ''}`}>
                                                        {feature.text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );

                            if (plan.highlighted) {
                                return (
                                    <div key={plan.id} className="relative rounded-xl p-[2px] bg-gradient-to-br from-primary via-secondary to-tertiary shadow-xl hover:-translate-y-2 transition-transform duration-300 z-10 flex flex-col h-full">
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-on-primary px-4 py-1.5 rounded-full font-label-md text-label-md text-xs whitespace-nowrap shadow-md z-20">
                                            Most Popular
                                        </div>
                                        {cardInner}
                                    </div>
                                );
                            }

                            return (
                                <div key={plan.id} className={`bg-surface-container-lowest border border-outline-variant/35 rounded-xl p-8 shadow-md hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full mt-4 ${isEnterprise ? 'relative overflow-hidden' : ''}`}>
                                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-lg lg:text-xl">{plan.name}</h3>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 h-10 text-xs lg:text-sm">{plan.description}</p>
                                    <div className="mb-8 flex items-baseline gap-1">
                                        <span className="font-headline-xl text-3xl lg:text-4xl text-on-surface tracking-tighter">{price}</span>
                                        {billingSuffix && <span className="font-body-sm text-xs text-on-surface-variant">{billingSuffix}</span>}
                                    </div>
                                    <button className={`w-full py-3 px-6 rounded-lg font-label-md text-label-md transition-all active:scale-95 mb-8 flex items-center justify-center gap-2 group cursor-pointer ${plan.buttonClass}`}>
                                        {plan.buttonText}
                                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                    <div className="flex-grow flex flex-col gap-4">
                                        <h4 className="font-label-md text-label-md text-on-surface text-sm">{plan.featuresHeader}</h4>
                                        <ul className="flex flex-col gap-3 text-xs lg:text-sm">
                                            {plan.features.map((feature, fIdx) => (
                                                <li key={fIdx} className={`flex items-start gap-3 ${!feature.included ? 'opacity-50' : ''}`}>
                                                    <span className={`material-symbols-outlined ${feature.iconColor || (feature.included ? 'text-primary' : 'text-on-surface-variant')} text-[20px] shrink-0`}>
                                                        {feature.included ? 'check_circle' : 'close'}
                                                    </span>
                                                    <span className={`font-body-sm text-on-surface-variant ${feature.bold ? 'font-medium' : ''}`}>
                                                        {feature.text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="w-full max-w-3xl mx-auto px-margin-mobile lg:px-margin-desktop py-24 relative z-20 border-t border-outline-variant/30">
                    <div className="text-center mb-12">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 text-2xl lg:text-3xl">Frequently Asked Questions</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Everything you need to know about the product and billing.</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="bg-surface-container-lowest border border-outline-variant/35 rounded-xl hover:shadow-md transition-shadow">
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left group cursor-pointer"
                                >
                                    <span className="font-headline-md text-base lg:text-lg text-on-surface group-hover:text-primary transition-colors">{faq.question}</span>
                                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                {activeFaq === faq.id && (
                                    <div className="px-6 pb-5">
                                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xs lg:text-sm">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
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
