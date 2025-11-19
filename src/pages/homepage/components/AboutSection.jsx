import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const AboutSection = () => {
    return (
        <section className="py-6 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 text-primary">
                                <Icon name="Users" size={16} />
                                <span className="text-sm font-medium">About Us</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                About North Step Global
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                We help organizations take the right step toward building exceptional teams. As a full-service recruitment and talent advisory firm, we specialize in connecting businesses with high-performing professionals across industries and geographies.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our mission is to empower organizations by delivering strategic, reliable, and quality-driven hiring solutions with a deep understanding of both local and international markets.
                            </p>
                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-brand group"
                        >
                            <span>Learn More About Us</span>
                            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Right Side - Value Props Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <Icon name="Target" size={24} className="text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Strategic</h3>
                            <p className="text-[17px] text-muted-foreground">
                                Data-driven insights for quality hiring decisions
                            </p>
                        </div>

                        <div className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Icon name="Shield" size={24} className="text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Reliable</h3>
                            <p className="text-[17px] text-muted-foreground">
                                Proven track record across industries
                            </p>
                        </div>

                        <div className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Icon name="Award" size={24} className="text-green-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
                            <p className="text-[17px] text-muted-foreground">
                                Committed to integrity and collaboration
                            </p>
                        </div>

                        <div className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Icon name="Globe" size={24} className="text-purple-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Global</h3>
                            <p className="text-[17px] text-muted-foreground">
                                Local expertise, international reach
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-12 text-center">
                    <div className="max-w-6xl mx-auto bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                        <Icon name="Quote" size={32} className="text-primary mx-auto mb-3" />
                        <p className="text-xl font-semibold text-foreground leading-relaxed">
                            We don't just fill positions — we build partnerships that fuel growth and transformation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
