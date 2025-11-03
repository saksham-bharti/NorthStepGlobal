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
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-14">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Building2" size={16} />
                GCC Hiring
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Global Capability Centers Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Specialized recruitment for Global Capability Centers (GCCs) and Global In-house Centers (GICs). 
                We understand the unique requirements of setting up and scaling offshore delivery centers 
                with world-class talent across technology, finance, and business operations.
              </p>
            </div>
          </div>
        </section>
        {/* GCC Hiring Overview (text-focused) */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Global Capability Centers (GCC) Hiring</h2>
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
            <p className="text-muted-foreground leading-relaxed mb-3">Our methodology is specifically designed to meet the precise and
              often large-scale talent needs of Global Capability Centers:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Strategic Talent Mapping for GCCs</h4>
                <p className="text-muted-foreground">In-depth market intelligence on talent availability, salary benchmarks, and
                specific skill concentrations aligned to your GCC mandate across target geographies.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Specialized Skill Identification</h4>
                <p className="text-muted-foreground">Focused sourcing for critical skills in IT, R&D, engineering, analytics,
                finance, and other core functions vital for GCC success.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Scalable Recruitment Solutions</h4>
                <p className="text-muted-foreground">Flexible models supporting both new-center ramp-ups and ongoing volume hiring,
                adapting to your growth trajectory.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Culture & Integration Focus</h4>
                <p className="text-muted-foreground">Beyond skills, we prioritize culture alignment and collaboration readiness essential
                for high-performing global capability center environments.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Where We Add Value in GCC Hiring</h3>
            <div className="rounded-lg border border-border p-6 bg-muted/30">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-medium text-foreground">New GCC Establishment:</span> Sourcing core leadership teams and initial
                talent cohorts to successfully launch greenfield capability centers.</li>
                <li><span className="font-medium text-foreground">Expansion & Scale-Up:</span> Robust talent pipelines for rapid scaling of
                existing GCCs, addressing increased demand or new functional mandates.</li>
                <li><span className="font-medium text-foreground">Specialized Competency Hubs:</span> Recruiting niche experts to build out
                specific Centers of Excellence (CoEs) that enhance innovation and service delivery.</li>
                <li><span className="font-medium text-foreground">Leadership for Global Operations:</span> Securing experienced leaders to
                manage large, complex teams and drive operational excellence within a global framework.</li>
                <li><span className="font-medium text-foreground">Volume Hiring for Critical Functions:</span> Efficiently filling large volumes
                of roles across software development, data science, back-office operations, and shared services.</li>
              </ul>
            </div>
          </div>
        </section>
        </main>
      <Footer />
    </div>
  );
};

export default GCCHiring;
