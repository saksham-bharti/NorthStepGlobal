import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServicesShowcase = () => {
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
        <section className="py-6 bg-background">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 text-primary">
                        <Icon name="Briefcase" size={16} />
                        <span className="text-sm font-medium">Our Services</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Comprehensive Talent Solutions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        From executive search to complete RPO, we deliver strategic hiring solutions tailored to your needs
                    </p>
                </div>

                {/* Services Grid - Creative Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {services.map((service, index) => (
                        <Link
                            key={service.path}
                            to={service.path}
                            className={`group relative overflow-hidden rounded-2xl border border-border bg-background hover:shadow-brand transition-all duration-500 hover:-translate-y-2 ${
                                index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                            }`}
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="relative p-6 lg:p-8">
                                {/* Icon and Title */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                        <Icon name={service.icon} size={28} color="white" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                        <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-[17px] text-muted-foreground mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-[14px] px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-full px-6 py-4 border border-primary/20">
                        <p className="text-foreground font-medium">
                            Need a custom solution?
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group"
                        >
                            <span>Let's Talk</span>
                            <Icon name="MessageCircle" size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
