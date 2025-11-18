import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us - NorthStep Global</title>
                <meta name="description" content="Learn about NorthStep Global - a full-service recruitment and talent advisory firm specializing in connecting businesses with high-performing professionals across industries and geographies." />
                <link rel="canonical" href="/about" />
            </Helmet>
            <div className="min-h-screen bg-background">
                <Header />
                <main className="pt-16">
                    {/* Hero Section */}
                    <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-8">
                        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                            <div className="text-center max-w-4xl mx-auto">
                                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 text-primary">
                                    <Icon name="Users" size={16} />
                                    <span className="text-sm font-medium">About Us</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-brand-hero font-bold mb-6 leading-tight">
                                    About North Step Global
                                </h1>
                                <p className="text-brand-subheading">
                                    We help organizations take the right step toward building exceptional teams
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Company Overview */}
                    <section className="py-6">
                        <div className="max-w-6xl mx-auto px-4 lg:px-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Who We Are</h2>
                            <p className="text-sm uppercase tracking-wide text-primary mb-6">Building exceptional teams, fueling growth</p>

                            <div className="space-y-8">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    At North Step Global, we help organizations take the right step toward building exceptional teams. As a full-service recruitment and talent advisory firm, we specialize in connecting businesses with high-performing professionals across industries and geographies.
                                </p>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our mission is to empower organizations by delivering strategic, reliable, and quality-driven hiring solutions. With a deep understanding of both local and international markets, North Step Global partners with clients to identify, attract, and retain the right talent—ensuring cultural alignment and long-term success.
                                </p>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    From leadership hiring and mid-level recruitment to project-based talent solutions, we combine data-driven insights with a human approach. Our experienced team is committed to excellence, integrity, and collaboration, helping companies scale with the right people and purpose.
                                </p>

                                <div className="rounded-lg border border-border p-6 bg-muted/30">
                                    <p className="text-lg text-foreground font-semibold leading-relaxed">
                                        At North Step Global, we don't just fill positions — we build partnerships that fuel growth and transformation.
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-foreground mb-4 mt-8">Our Core Values</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-lg border border-border bg-background">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <Icon name="Target" size={24} className="text-primary" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">Our Mission</h4>
                                    <p className="text-[17px] text-muted-foreground leading-relaxed">
                                        Empower organizations by delivering strategic, reliable, and quality-driven hiring solutions that ensure cultural alignment and long-term success.
                                    </p>
                                </div>

                                <div className="p-6 rounded-lg border border-border bg-background">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <Icon name="Award" size={24} className="text-primary" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">Our Approach</h4>
                                    <p className="text-[17px] text-muted-foreground leading-relaxed">
                                        Combine data-driven insights with a human touch to deliver recruitment solutions that go beyond filling positions.
                                    </p>
                                </div>

                                <div className="p-6 rounded-lg border border-border bg-background">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <Icon name="TrendingUp" size={24} className="text-primary" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">Our Impact</h4>
                                    <p className="text-[17px] text-muted-foreground leading-relaxed">
                                        Help companies scale with the right people and purpose, building partnerships that fuel growth and transformation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Founder's Corner */}
                    <section className="py-6 bg-gradient-to-br from-primary/5 via-background to-primary/5">
                        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 text-primary">
                                    <Icon name="Star" size={16} />
                                    <span className="text-sm font-medium">Leadership</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                    Founder's Corner
                                </h2>
                                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                    Meet the visionary behind North Step Global
                                </p>
                            </div>

                            <div className="rounded-lg border border-border bg-background overflow-hidden">
                                <div className="grid lg:grid-cols-3 gap-0">
                                    {/* Left Side - Founder Image */}
                                    <div className="lg:col-span-1 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex flex-col items-center justify-center border-r border-border">
                                        <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                                            <Image
                                                src="/assets/images/Founder.jpg"
                                                alt="Raghvendra - Founder, North Step Global"
                                                className="w-full h-full object-cover"
                                                errorSrc="/assets/images/placeholder-founder.png"
                                                placeholder={
                                                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                                        <Icon name="User" size={48} className="text-primary/60" />
                                                    </div>
                                                }
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-foreground mb-1">
                                                Raghvendra
                                            </h3>
                                            <p className="text-lg text-primary font-semibold mb-1">
                                                Founder & CEO
                                            </p>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                North Step Global
                                            </p>

                                            {/* Social Links */}
                                            <div className="flex items-center justify-center gap-3">
                                                <a
                                                    href="#"
                                                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Icon name="Linkedin" size={18} />
                                                </a>
                                                <a
                                                    href="mailto:contact@north-step.com"
                                                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                                    aria-label="Email"
                                                >
                                                    <Icon name="Mail" size={18} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side - Founder Bio */}
                                    <div className="lg:col-span-2 p-8">
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-xl font-semibold text-foreground mb-4">
                                                    A Decade of Excellence in Talent & Strategy
                                                </h4>
                                            </div>

                                            <div className="space-y-4">
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    With over a decade of experience in human resources, talent acquisition, sales and strategic advisory, Raghvendra brings a deep understanding of how people and strategy drive organisational success. Before founding North Step Global, he spent several years with Naukri.com, India's leading talent platform, where he gained invaluable insights into workforce trends, recruitment best practices, and the evolving needs of modern businesses.
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    His experience at Naukri.com inspired him to establish North Step Global — a people-centric recruitment and advisory firm committed to helping organizations build high-performing teams and achieve sustainable growth. Under his leadership, the firm partners with clients across industries to deliver tailored solutions in recruitment, leadership development, and organizational effectiveness.
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    Raghvendra is passionate about fostering collaboration, integrity, and innovation in every engagement. Through North Step Global, he continues to empower organizations to take the right step toward attracting top talent, nurturing leadership, and creating workplaces that thrive.
                                                </p>
                                            </div>

                                            {/* Key Highlights */}
                                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                                    <div>
                                                        <p className="text-[17px] font-medium text-foreground">10+ Years Experience</p>
                                                        <p className="text-sm text-muted-foreground">In HR & Talent Acquisition</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                                    <div>
                                                        <p className="text-[17px] font-medium text-foreground">Former Naukri.com</p>
                                                        <p className="text-sm text-muted-foreground">Strategic Leadership Role</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                                    <div>
                                                        <p className="text-[17px] font-medium text-foreground">People-Centric Approach</p>
                                                        <p className="text-sm text-muted-foreground">Data + Human Touch</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                                    <div>
                                                        <p className="text-[17px] font-medium text-foreground">Innovation Leader</p>
                                                        <p className="text-sm text-muted-foreground">Driving Transformation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-6">
                        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                    Ready to Build Your Dream Team?
                                </h2>
                                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                    Partner with North Step Global to find exceptional talent that drives your organization forward.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                                    >
                                        <Icon name="Mail" size={20} />
                                        Get in Touch
                                    </a>
                                    <a
                                        href="/services/ExecutiveSearch"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-all duration-300 border border-border"
                                    >
                                        <Icon name="Briefcase" size={20} />
                                        Our Services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default AboutPage;