import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { useIntersectionObserver } from '../../../utils/useIntersectionObserver';

const AboutSection = () => {
    const [sectionRef, sectionInView] = useIntersectionObserver();
    const [leftRef, leftInView] = useIntersectionObserver();
    const [rightRef, rightInView] = useIntersectionObserver();
    const [quoteRef, quoteInView] = useIntersectionObserver();

    return (
        <section ref={sectionRef} className="py-6 bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div ref={leftRef} className="space-y-6">
                        <div>
                            <div
                                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-primary transition-all duration-1000 ${
                                    leftInView ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ backgroundColor: 'rgba(var(--primary), 0.1)' }}
                            >
                                <Icon name="Users" size={16} />
                                <span className="text-sm font-medium">About Us</span>
                            </div>
                            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 transition-all duration-1000 delay-200 ${
                                leftInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                            }`}>
                                About North Step Global
                            </h2>
                            <p className={`text-lg text-muted-foreground leading-relaxed mb-4 transition-all duration-1000 delay-400 ${
                                leftInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
                            }`}>
                                We help organizations take the right step toward building exceptional teams. As a full-service recruitment and talent advisory firm, we specialize in connecting businesses with high-performing professionals across industries and geographies.
                            </p>
                            <p className={`text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-600 ${
                                leftInView ? 'animate-slide-up-delay-2' : 'opacity-0 translate-y-8'
                            }`}>
                                Our mission is to empower organizations by delivering strategic, reliable, and quality-driven hiring solutions with a deep understanding of both local and international markets.
                            </p>
                        </div>

                        <div className={`transition-all duration-1000 delay-800 ${
                            leftInView ? 'animate-fade-in-delay-2' : 'opacity-0'
                        }`}>
                            <Link
                                to="/about"
                                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-brand overflow-hidden"
                            >
                                <span className="relative z-10">Learn More About Us</span>
                                <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Value Props Grid */}
                    <div ref={rightRef} className="grid grid-cols-2 gap-4">
                        {[
                            {
                                icon: "Target",
                                color: "primary",
                                bgColor: "primary/10",
                                title: "Strategic",
                                description: "Data-driven insights for quality hiring decisions"
                            },
                            {
                                icon: "Shield",
                                color: "blue-500",
                                bgColor: "blue-500/10",
                                title: "Reliable",
                                description: "Proven track record across industries"
                            },
                            {
                                icon: "Award",
                                color: "green-500",
                                bgColor: "green-500/10",
                                title: "Excellence",
                                description: "Committed to integrity and collaboration"
                            },
                            {
                                icon: "Globe",
                                color: "purple-500",
                                bgColor: "purple-500/10",
                                title: "Global",
                                description: "Local expertise, international reach"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`bg-background rounded-xl p-6 border border-border hover:shadow-brand-hover transition-all duration-500 hover:scale-105 hover:-translate-y-1 group cursor-pointer ${
                                    rightInView ? 'animate-stagger-fade-in' : 'opacity-0 translate-y-8'
                                }`}
                                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                            >
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                                    style={{
                                        backgroundColor: item.icon === "Target" ? 'rgba(222, 177, 64, 0.1)' :
                                                        item.icon === "Shield" ? 'rgba(59, 130, 246, 0.1)' :
                                                        item.icon === "Award" ? 'rgba(34, 197, 94, 0.1)' :
                                                        'rgba(147, 51, 234, 0.1)'
                                    }}
                                >
                                    <Icon
                                        name={item.icon}
                                        size={24}
                                        className={
                                            item.icon === "Target" ? "text-primary" :
                                            item.icon === "Shield" ? "text-blue-500" :
                                            item.icon === "Award" ? "text-green-500" :
                                            "text-purple-500"
                                        }
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-[17px] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {item.description}
                                </p>
                                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out mt-3"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Quote */}
                <div ref={quoteRef} className={`mt-12 text-center transition-all duration-1000 delay-300 ${
                    quoteInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="max-w-6xl mx-auto bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-500 hover:scale-105 group">
                        <Icon name="Quote" size={32} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-xl font-semibold text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                            We don't just fill positions — we build partnerships that fuel growth and transformation
                        </p>
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-700 ease-out mx-auto mt-4"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
