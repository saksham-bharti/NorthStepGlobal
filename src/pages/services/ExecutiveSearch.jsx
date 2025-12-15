import React from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Icon from "../../components/AppIcon";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";

const ExecutiveSearch = () => {
  const [heroRef, heroInView] = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className={`inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                heroInView ? 'animate-slide-up' : 'opacity-0 translate-y-8'
              }`}>
                <Icon name="Search" size={16} />
                Executive Search
              </div>
              <h1 className={`text-3xl sm:text-4xl lg:text-brand-hero font-bold mb-6 leading-tight text-foreground transition-all duration-1000 delay-300 ${
                heroInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
              }`}>
                Discover Hidden Executive Talent
              </h1>
              <p className={`text-brand-subheading transition-all duration-1000 delay-500 ${
                heroInView ? 'animate-slide-up-delay' : 'opacity-0 translate-y-8'
              }`}>
                An innovative approach to finding key individuals who are not
                visible in the marketplace and not actively looking for career
                changes. We uncover exceptional leaders who drive
                transformational growth.
              </p>

            </div>
          </div>
        </section>
        {/* Executive Search Overview (text-focused for HR) */}
        <section className="py-6">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Executive Search Practice</h2>
            <p className="text-sm uppercase tracking-wide text-primary mb-6">Confidential, data-driven leadership hiring</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Finding proven leaders who can execute your strategy is both critical and complex. At Northstep Global, we partner
              strategically with Boards, Founders, and HR leaders to identify, assess, and secure C-suite and critical functional
              leadership hires who are poised to move the needle from day one. Our bespoke process blends discreet market outreach,
              rigorous data-driven assessment, and unparalleled market intelligence to ensure an impeccable fit across competencies,
              culture, and readiness for change.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">How We Engage: A Collaborative & Focused Approach</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">Our methodology ensures precision and alignment at every stage:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-2">Calibrated Discovery</h4>
                <p className="text-[17px] text-muted-foreground leading-relaxed">Align on strategic outcomes, success profiles, and stakeholder expectations to
                set a clear, measurable mandate for the search.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-2">Employer Brand Representation</h4>
                <p className="text-[17px] text-muted-foreground leading-relaxed">Act as an extension of your brand with professionalism and confidentiality,
                engaging both active and passive top-tier leaders.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-2">Evidence-Based Shortlists</h4>
                <p className="text-[17px] text-muted-foreground leading-relaxed">Competency matrices, structured feedback, and reference validation ensure
                decision-ready, data-backed recommendations.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="text-xl font-semibold text-foreground mb-2">SLA-Driven Execution</h4>
                <p className="text-[17px] text-muted-foreground leading-relaxed">Clear SLAs for speed, quality, and transparent communication keep you informed
                at every stage.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Quality Outcomes You Can Expect</h3>
            <div className="rounded-lg border border-border p-6 bg-muted/30 mb-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Partnering with Northstep Global for Executive Search delivers superior, measurable results:</p>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Discreet Market Intelligence:</span> Access unparalleled talent, mapped across sectors, uncovering exceptional hidden leaders.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Outcome-Driven Scorecards:</span> Candidates assessed by quantifiable metrics tied to your strategic business outcomes.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Precision-Matched Shortlists:</span> Receive pre-qualified shortlists with strong leadership and seamless culture fit.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Time-Bound Delivery:</span> Enjoy an efficient process with clear timelines, transparent updates, and proactive risk communication.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[17px] text-muted-foreground leading-relaxed flex-1"><span className="font-medium text-foreground">Elevated Employer Brand:</span> Our professional representation enhances your brand, attracting top-tier executive talent.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Where We Add the Most Value</h3>
            <div className="rounded-lg border border-border p-6 bg-background">
              <p className="text-lg text-muted-foreground leading-relaxed">Northstep Global excels in searches demanding strategic insight and
              nuanced execution. We are the trusted partner for turnarounds, new market entries, first-time leadership hires,
              confidential replacements, and robust succession builds. We focus on impact over mere pedigree, leveraging comparative
              market data to empower your hiring teams to make confident, de-risked decisions, securing leaders who will drive your
              organization's most ambitious goals.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Executive Search Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic, data-driven approach that ensures engagement with
                the right talent and delivers superior results for your
                organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Strategic Mapping
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive market analysis and talent mapping to identify
                  potential candidates across industries and geographies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Passive Sourcing
                </h3>
                <p className="text-muted-foreground">
                  Advanced techniques to identify and engage with
                  high-performing executives who aren't actively job searching.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Rigorous Assessment
                </h3>
                <p className="text-muted-foreground">
                  Multi-layered evaluation process including behavioral
                  assessments, cultural fit analysis, and reference checks.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Seamless Integration
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive onboarding support to ensure successful
                  integration and long-term retention of placed executives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExecutiveSearch;
