import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { useIntersectionObserver } from '../../../utils/useIntersectionObserver';

const ServicesShowcase = () => {
    const [headerRef, headerInView] = useIntersectionObserver();
    const [servicesRef, servicesInView] = useIntersectionObserver();
    const [ctaRef, ctaInView] = useIntersectionObserver();

    const services = [
        {
            title: 'Executive Search',
            path: '/services/ExecutiveSearch',
            icon: 'Search',
            gradient: 'from-orange-500 to-orange-600',
            description: 'Discover hidden executive talent for transformational growth',
            features: ['C-Suite Hiring', 'Leadership Roles', 'Passive Sourcing']
        },
        {
            title: 'Senior & Mid-Level Hiring',
            path: '/services/SeniorHiring',
            icon: 'Users',
            gradient: 'from-blue-500 to-blue-600',
            description: 'Build strong teams with experienced professionals',
            features: ['Fast Turnaround', 'Quality Talent', 'Industry Experts']
        },
        {
            title: 'International Hiring',
            path: '/services/International',
            icon: 'Globe',
            gradient: 'from-purple-500 to-purple-600',
            description: 'Access global talent pools across borders',
            features: ['Global Reach', 'Cultural Fit', 'Visa Support']
        },
        {
            title: 'RPO Services',
            path: '/services/RPO',
            icon: 'Briefcase',
            gradient: 'from-green-500 to-green-600',
            description: 'Complete recruitment process outsourcing solutions',
            features: ['Scalable Model', 'Cost Efficient', 'End-to-End']
        },
        {
            title: 'GCC Hiring',
            path: '/services/GCCHiring',
            icon: 'Building2',
            gradient: 'from-pink-500 to-pink-600',
            description: 'Specialized talent for Global Capability Centers',
            features: ['Tech Talent', 'Rapid Scaling', 'GCC Expertise']
        }
    ];

    return (
        <section className="py-6 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-10">
                    <div className={`inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 text-primary transition-all duration-1000 ${
                        headerInView ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
                    }`}>
                        <Icon name="Briefcase" size={16} />
                        <span className="text-sm font-medium">Our Services</span>
                    </div>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 transition-all duration-1000 delay-200 ${
                        headerInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                    }`}>
                        Comprehensive Talent Solutions
                    </h2>
                    <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                        headerInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
                    }`}>
                        From executive search to complete RPO, we deliver strategic hiring solutions tailored to your needs
                    </p>
                </div>

                {/* Services Grid - Creative Layout */}
                <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {services.map((service, index) => (
                        <Link
                            key={service.path}
                            to={service.path}
                            className={`group relative overflow-hidden rounded-2xl border border-border bg-background hover:shadow-brand-hover transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                                index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                            } ${
                                servicesInView ? 'animate-stagger-fade-in' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="relative p-6 lg:p-8">
                                {/* Icon and Title */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                                        <Icon name={service.icon} size={28} color="white" className="relative z-10" />
                                        <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:rotate-12">
                                        <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-[17px] text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <span
                                            key={feature}
                                            className={`text-[14px] px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 transform hover:scale-105 ${
                                                servicesInView ? 'animate-stagger-fade-in' : ''
                                            }`}
                                            style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>

                            {/* Hover effect border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300"></div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div ref={ctaRef} className={`text-center transition-all duration-1000 delay-300 ${
                    ctaInView ? 'animate-fade-in-delay-2' : 'opacity-0'
                }`}>
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-full px-6 py-4 border border-primary/20 hover:shadow-lg transition-all duration-500 hover:scale-105 group">
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                            Need a custom solution?
                        </p>
                        <Link
                            to="/contact"
                            className="group/btn relative inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg overflow-hidden"
                        >
                            <span className="relative z-10">Let's Talk</span>
                            <Icon name="MessageCircle" size={16} className="group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
