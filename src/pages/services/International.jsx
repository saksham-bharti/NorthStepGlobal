import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const International = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Globe" size={16} />
                International Hiring
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Global Talent Acquisition Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expand your talent pool across borders with our comprehensive international hiring 
                services. We help organizations access global talent while navigating complex 
                immigration, compliance, and cultural integration challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Global Sourcing / International Hiring Overview (text-focused) */}
        <section className="py-6">
          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Global Sourcing & International Hiring</h2>
            <p className="text-sm uppercase tracking-wide text-primary mb-6">Your Gateway to Worldwide Talent</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In an increasingly interconnected world, the ability to build truly cross-border, high-performing teams is a significant
              competitive advantage. Northstep Global empowers your organization to recruit globally with absolute confidence. We expertly
              navigate the complexities of international compliance, mobility, and nuanced local talent dynamics, all while maintaining
              your consistent, high hiring standards. Whether you are strategically setting up in a new international market, expanding a
              specialized capability hub, or assembling agile remote-first teams across continents, we meticulously align the talent plan
              to your strategic ramp-up and unique operating model.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">What We Manage: Comprehensive Global Recruitment Solutions</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">Our end-to-end international hiring solutions are designed to
              simplify complexity and ensure seamless talent acquisition:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Global Market Intelligence</h4>
                <p className="text-muted-foreground">We provide in-depth market mapping and critical salary/availability signals across
                your target countries, offering a clear picture of the international talent landscape.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Compliance & Mobility Coordination</h4>
                <p className="text-muted-foreground">We expertly manage the intricate web of international compliance, documentation
                coordination, and strategic partner alignment (including legal, tax, and immigration specialists), mitigating risks and
                ensuring smooth transitions.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Streamlined Pipeline & Logistics</h4>
                <p className="text-muted-foreground">We build robust talent pipelines, manage scheduling across diverse time zones, and
                deliver structured, transparent progress reporting tailored to international operations.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Candidate Care & Onboarding Support</h4>
                <p className="text-muted-foreground">We coordinate relocation and onboarding logistics, prioritizing exceptional candidate
                care to ensure a positive experience and successful integration into your international teams.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Key Use Cases: Expanding Your Global Footprint</h3>
            <div className="rounded-lg border border-border p-6 bg-muted/30">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground flex-1"><span className="font-medium text-foreground">Leadership Transplants:</span> Securing pivotal leadership for new
                  international entities or critical market expansions.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground flex-1"><span className="font-medium text-foreground">Specialty Roles:</span> Sourcing highly specialized skills that are
                  scarce or difficult to find within local talent pools.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground flex-1"><span className="font-medium text-foreground">Distributed Teams:</span> Building agile, follow-the-sun operations or
                  establishing remote-first pods that leverage global talent efficiencies.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground flex-1"><span className="font-medium text-foreground">Surge Hiring:</span> Rapidly scaling talent for new capability centers,
                  R&D hubs, or large-scale project implementations abroad.</p>
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

export default International;
