import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const GCCHiring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Building2" size={16} />
                GCC Hiring
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-brand-hero font-bold mb-6 leading-tight text-foreground">
                Global Capability Centers Excellence
              </h1>
              <p className="text-brand-subheading mb-2">
              Specialized recruitment for GCCs and GICs, delivering top-tier talent for technology, finance, and business operations.
              </p>
            </div>
          </div>
        </section>
        {/* GCC Hiring Overview (text-focused) */}
        <section className="py-6">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Global Capability Centers (GCC) Hiring</h2>
            <p className="text-sm uppercase tracking-wide text-primary mb-6">Powering Your Innovation Hubs</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Global Capability Centers (GCCs) are strategic innovation hubs, essential for driving efficiency, fostering specialized
              expertise, and delivering global impact for multinational corporations. At Northstep Global, we understand the unique
              talent requirements of building and scaling these vital centers. We specialize in identifying, attracting, and securing the
              highly skilled professionals who form the backbone of successful GCC operations—from specialized technologists and
              analytical experts to process innovators and functional leaders. Our expertise ensures you build a robust, high-performing
              workforce capable of maximizing your GCC's strategic value, whether you're establishing a new center or expanding an
              existing one.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Our Specialized Approach to GCC Talent Acquisition</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">Our methodology is specifically designed to meet the precise and
              often large-scale talent needs of Global Capability Centers:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-2">Strategic Talent Mapping for GCCs</h4>
                <p className="text-[17px] text-muted-foreground leading-relaxed">In-depth market intelligence on talent availability, salary benchmarks, and
                specific skill concentrations aligned to your GCC mandate across target geographies.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-2">Specialized Skill Identification</h4>
                <p className="text-[17px] text-muted-foreground leading-relaxed">Focused sourcing for critical skills in IT, R&D, engineering, analytics,
                finance, and other core functions vital for GCC success.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-2">Scalable Recruitment Solutions</h4>
                <p className="text-[17px] text-muted-foreground leading-relaxed">Flexible models supporting both new-center ramp-ups and ongoing volume hiring,
                adapting to your growth trajectory.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-2">Culture & Integration Focus</h4>
                <p className="text-[17px] text-muted-foreground leading-relaxed">Beyond skills, we prioritize culture alignment and collaboration readiness essential
                for high-performing global capability center environments.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Where We Add Value in GCC Hiring</h3>
            <div className="rounded-lg border border-border p-6 bg-muted/30">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">New GCC Establishment:</span> Sourcing core leadership teams and initial
                  talent cohorts to successfully launch greenfield capability centers.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Expansion & Scale-Up:</span> Robust talent pipelines for rapid scaling of
                  existing GCCs, addressing increased demand or new functional mandates.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Specialized Competency Hubs:</span> Recruiting niche experts to build out
                  specific Centers of Excellence (CoEs) that enhance innovation and service delivery.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Leadership for Global Operations:</span> Securing experienced leaders to
                  manage large, complex teams and drive operational excellence within a global framework.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Volume Hiring for Critical Functions:</span> Efficiently filling large volumes
                  of roles across software development, data science, back-office operations, and shared services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
      <Footer />
    </div>
  );
};

export default GCCHiring;
