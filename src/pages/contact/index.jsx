import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const OfficeLocations = () => {
    const offices = [
        {
            id: 'headquarters',
            name: 'Headquarters',
            type: 'Main Office',
            address: 'CoWorkZen 6th Floor, Alphathum, Tower C, Sector 90',
            city: 'Noida, Uttar Pradesh 201304',
            phone: '+91 98711 59600',
            email: 'contact@northstep.com',
            hours: 'Mon-Sat: 9:00 AM - 7:00 PM IST',
            coordinates: '28.5132195,77.4079183',
            description: 'Our headquarters featuring executive recruitment, career counseling, and strategic consulting services.',
        }
    ];
    const office = offices[0];

    return (
        <div className="py-12 lg:py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                        Visit Our Office
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Meet our team at our headquarters in Noida.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="bg-card rounded-xl p-6 border border-border">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">{office.name}</h3>
                                    <p className="text-muted-foreground">{office.type}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${office.id === 'headquarters' ? 'bg-primary' : 'bg-primary'
                                    }`}>
                                    <Icon name="Building2" size={24} color="white" />
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-6">{office.description}</p>

                            {/* Contact Info */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Icon name="MapPin" size={18} color="var(--color-primary)" />
                                        <div>
                                            <p className="text-sm font-medium text-foreground">{office.address}</p>
                                            <p className="text-sm text-muted-foreground">{office.city}</p>
                                        </div>
                                    </div>

                                    <a
                                        href={`tel:${office.phone}`}
                                        className="flex items-center space-x-3 group cursor-pointer"
                                    >
                                        <Icon name="Phone" size={18} color="var(--color-primary)" />
                                        <p className="text-sm text-foreground group-hover:text-primary transition-colors duration-200 group-hover:underline">
                                            {office.phone}
                                        </p>
                                    </a>
                                </div>

                                <div className="space-y-3">
                                    <a
                                        href={`mailto:${office.email}`}
                                        className="flex items-center space-x-3 group cursor-pointer"
                                    >
                                        <Icon name="Mail" size={18} color="var(--color-primary)" />
                                        <p className="text-sm text-foreground group-hover:text-primary transition-colors duration-200 group-hover:underline">
                                            {office.email}
                                        </p>
                                    </a>

                                    <div className="flex items-center space-x-3">
                                        <Icon name="Clock" size={18} color="var(--color-primary)" />
                                        <p className="text-sm text-foreground">{office.hours}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                <Button
                                    variant="default"
                                    iconName="Navigation"
                                    iconPosition="left"
                                    onClick={() => window.open(`https://maps.google.com?q=${office.coordinates}`, '_blank')}
                                    className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    Get Directions
                                </Button>
                                <Button
                                    variant="default"
                                    iconName="Phone"
                                    iconPosition="left"
                                    onClick={() => window.open(`tel:${office.phone}`, '_self')}
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
                                    title={office.name}
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://www.google.com/maps?q=${office.coordinates}&z=14&output=embed`}
                                    className="border-0"
                                />
                            </div>
                        </div>
                        {/* Post-Map Content */}
                        <div className="max-w-4xl mx-auto text-center space-y-3">
                            <p className="text-muted-foreground">
                                At Northstep Global, we partner with companies to solve their most critical talent challenges, from executive searches to building high-performing GCCs. Our team is eager to connect and discuss your unique needs. Reach out to us today to discover how Northstep Global can be your strategic partner in achieving unparalleled success.
                            </p>
                            <p className="text-muted-foreground">Let's build your future, together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactPage = () => {
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
                    <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-14">
                        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 text-primary">
                                <Icon name="Phone" size={16} />
                                <span className="text-sm font-medium">Contact Us</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">Get in Touch with Northstep Global</h1>
                            <div className="max-w-4xl mx-auto space-y-3">
                                <p className="text-xl text-muted-foreground">
                                    Ready to elevate your talent strategy or explore your next career opportunity? We're here to help.
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
