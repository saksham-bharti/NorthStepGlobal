import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

const OfficeLocations = () => {
    const [selectedOffice, setSelectedOffice] = useState('headquarters');

    const offices = [
        {
            id: 'headquarters',
            name: 'Corporate Office',
            address: 'CoWorkZen 6th Floor, Alphathum, Tower C, Sector 90',
            city: 'Noida, Uttar Pradesh 201304',
            phone: '+91 98711 59600',
            email: 'contact@north-step.com',
            hours: 'Mon-Sat: 9:00 AM - 7:00 PM IST',
            coordinates: '28.5132195,77.4079183',
            description: 'Our Office featuring executive recruitment, career counseling, and strategic consulting services.',
        },
        {
            id: 'registered',
            name: 'Registered Office',
            address: '2-A/3, S/F Front Side, Asaf Ali Road, Turkman Gate A.G.C.R.',
            city: 'New Delhi, Central Delhi, DL 110002',
            phone: '+91 98711 59600',
            email: 'contact@north-step.com',
            hours: 'Mon-Sat: 9:00 AM - 7:00 PM IST',
            coordinates: '28.6448,77.2311',
            description: 'Our registered office address for all official correspondence and legal documentation.',
        }
    ];

    const selectedOfficeData = offices.find(office => office.id === selectedOffice);

    return (
        <div className="py-6 lg:py-8 bg-background">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                        Visit Our Offices
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Meet our team in person at one of our locations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Office Selector */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Our Locations</h3>
                        {offices.map((office) => (
                            <button
                                key={office.id}
                                onClick={() => setSelectedOffice(office.id)}
                                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                    selectedOffice === office.id
                                        ? 'border-primary bg-primary/5 shadow-lg'
                                        : 'border-border bg-card hover:border-primary/50'
                                }`}
                            >
                                <div className="flex items-start space-x-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                        office.id === 'headquarters' ? 'bg-primary' : 'bg-blue-500'
                                    }`}>
                                        <Icon name="MapPin" size={20} color="white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-foreground">{office.name}</h4>
                                        <p className="text-[15px] text-muted-foreground mt-1">{office.city}</p>
                                    </div>
                                    {selectedOffice === office.id && (
                                        <Icon name="ChevronRight" size={20} color="var(--color-primary)" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Office Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {selectedOfficeData && (
                            <>
                                {/* Header */}
                                <div className="bg-card rounded-xl p-6 border border-border">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground">{selectedOfficeData.name}</h3>
                                            <p className="text-[15px] text-muted-foreground">{selectedOfficeData.type}</p>
                                        </div>
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                            selectedOfficeData.id === 'headquarters' ? 'bg-primary' : 'bg-blue-500'
                                        }`}>
                                            <Icon name="Building2" size={24} color="white" />
                                        </div>
                                    </div>

                                    <p className="text-[16px] text-muted-foreground mb-6">{selectedOfficeData.description}</p>

                                    {/* Contact Info */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <Icon name="MapPin" size={18} color="var(--color-primary)" />
                                                <div>
                                                    <p className="text-sm font-medium text-foreground">{selectedOfficeData.address}</p>
                                                    <p className="text-[15px] text-muted-foreground">{selectedOfficeData.city}</p>
                                                </div>
                                            </div>

                                            <a
                                                href={`tel:${selectedOfficeData.phone}`}
                                                className="flex items-center space-x-3 group cursor-pointer"
                                            >
                                                <Icon name="Phone" size={18} color="var(--color-primary)" />
                                                <p className="text-sm text-foreground group-hover:text-primary transition-colors duration-200 group-hover:underline">
                                                    {selectedOfficeData.phone}
                                                </p>
                                            </a>
                                        </div>

                                        <div className="space-y-3">
                                            <a
                                                href={`mailto:${selectedOfficeData.email}`}
                                                className="flex items-center space-x-3 group cursor-pointer"
                                            >
                                                <Icon name="Mail" size={18} color="var(--color-primary)" />
                                                <p className="text-[15px] text-foreground group-hover:text-primary transition-colors duration-200 group-hover:underline">
                                                    {selectedOfficeData.email}
                                                </p>
                                            </a>

                                            <div className="flex items-center space-x-3">
                                                <Icon name="Clock" size={18} color="var(--color-primary)" />
                                                <p className="text-[15px] text-foreground">{selectedOfficeData.hours}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                        <Button
                                            variant="default"
                                            iconName="Navigation"
                                            iconPosition="left"
                                            onClick={() => window.open(`https://maps.google.com?q=${selectedOfficeData.coordinates}`, '_blank')}
                                            className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            Get Directions
                                        </Button>
                                        <Button
                                            variant="default"
                                            iconName="Phone"
                                            iconPosition="left"
                                            onClick={() => window.open(`tel:${selectedOfficeData.phone}`, '_self')}
                                            className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            Call Office
                                        </Button>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="bg-card rounded-xl border border-border overflow-hidden">
                                    <div className="h-64 w-full">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            loading="lazy"
                                            title={selectedOfficeData.name}
                                            referrerPolicy="no-referrer-when-downgrade"
                                            src={`https://www.google.com/maps?q=${selectedOfficeData.coordinates}&z=14&output=embed`}
                                            className="border-0"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Bottom Content - Full Width */}
                <div className="max-w-5xl mx-auto px-4 lg:px-8 mt-8">
                    <div className="text-center space-y-3">
                        <p className="text-lg text-muted-foreground">
                            At Northstep Global, we partner with companies to solve their most critical talent challenges, from executive searches to building high-performing GCCs. Our team is eager to connect and discuss your unique needs. <br /> Reach out to us today to discover how Northstep Global can be your strategic partner in achieving unparalleled success.
                        </p>
                        <p className="text-[17px] text-muted-foreground">Let's build your future, together.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactPage = () => {
    const [heroRef, heroInView] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Contact Us - NorthStep Global</title>
                <meta name="description" content="Get in touch with NorthStep Global for strategic talent solutions or career opportunities. We're here to help you build your future." />
                <link rel="canonical" href="/contact" />
            </Helmet>
            <div className="min-h-screen bg-background">
                <Header />
                <main className="pt-16">
                    <section ref={heroRef} className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-8">
                        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                            <div className={`inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 text-primary transition-all duration-1000 ${
                                heroInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                            }`}>
                                <Icon name="Phone" size={16} />
                                <span className="text-sm font-medium">Contact Us</span>
                            </div>
                            <h1 className={`text-3xl sm:text-4xl lg:text-brand-hero font-bold mb-6 leading-tight text-foreground transition-all duration-1000 delay-300 ${
                                heroInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
                            }`}>Get in Touch with Northstep Global</h1>
                            <div className="max-w-4xl mx-auto space-y-3">
                                <p className={`text-brand-subheading transition-all duration-1000 delay-500 ${
                                    heroInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
                                }`}>
                                    Ready to elevate your talent strategy to expand your team? We are here to help.
                                </p>
                            </div>
                        </div>
                    </section>
                    <OfficeLocations />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default ContactPage;
