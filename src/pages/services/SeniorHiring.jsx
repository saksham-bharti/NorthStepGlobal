import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const SeniorHiring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-6 pb-0">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Users" size={16} />
                Senior & Mid Level Hiring
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Strategic Talent Acquisition for Leadership Roles
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We specialize in identifying and placing senior and mid-level professionals who bring 
                strategic value, leadership capabilities, and industry expertise to drive your 
                organization's growth and success.
              </p>
            </div>
          </div>
        </section>
        {/* Senior & Mid-Level Hiring Overview (text-focused) */}
        <section className="py-4">
          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Senior & Mid-Level Hiring</h2>
            <p className="text-sm uppercase tracking-wide text-primary mb-6">The engine room of your organization</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Senior and mid-level leaders are the indispensable engine room of any successful business—the professionals who drive
              execution, manage teams, and translate strategic vision into tangible outcomes. Recognizing their pivotal role, Northstep
              Global specializes in identifying and securing these critical individuals. We partner closely with your hiring teams to
              precisely clarify must-have competencies, essential leadership behaviors, and the nuanced cultural fit required for
              sustained success. Our commitment is to deliver meticulously curated shortlists that perfectly balance proven capability,
              seamless cultural integration, and significant growth potential across all your functions and locations.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Our Approach: Strategic, Efficient, and Results-Driven</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Outcome-Based Role Scorecards</h4>
                <p className="text-muted-foreground">We develop clear, outcome-based scorecards for each role, integrating market
                insights to ensure appropriate leveling and competitive positioning.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Targeted Sourcing</h4>
                <p className="text-muted-foreground">Our expansive network and intelligent sourcing strategies identify and engage
                talent from peer companies, adjacent industries, and emerging talent pools.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Behavioral & Situational Assessment</h4>
                <p className="text-muted-foreground">Rigorous assessment focused on real-world application, using behavioral and
                situational interviewing techniques with detailed comparative notes.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Structured Process with Rapid Turnarounds</h4>
                <p className="text-muted-foreground">Clear timelines, rapid turnarounds, and transparent communication backed by
                Service Level Agreements (SLAs).</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Where We Help Most: Powering Your Core Functions</h3>
            <div className="rounded-lg border border-border p-6 bg-muted/30 mb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">Northstep Global is adept at strengthening the foundational and
              growth-oriented functions of your organization. We are the trusted partner for:</p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground flex-1"><span className="font-medium text-foreground">Key Functional Hires:</span> From Sales, Product, and Engineering to
                  Finance, HR, Operations, and Customer functions, we deliver talent that drives immediate impact.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground flex-1"><span className="font-medium text-foreground">Single Hires & Cohort Builds:</span> Whether it's filling a crucial
                  individual role or building entire teams for new locations, greenfield initiatives, or significant capability uplifts,
                  we scale our approach to your needs.</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Let Northstep Global be your strategic partner in building robust, high-performing teams at the senior and mid-levels,
              ensuring your business has the leadership capacity to thrive and innovate.
            </p>
          </div>
        </section>

        {/* Role Categories */}
        <section className="py-5 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Senior & Mid-Level Positions We Fill
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From department heads to senior managers, we specialize in placing professionals 
                who drive operational excellence and strategic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Senior Management</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• General Managers</li>
                  <li>• Regional Directors</li>
                  <li>• Business Unit Heads</li>
                  <li>• Operations Directors</li>
                  <li>• Strategy Directors</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sales & Marketing</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Sales Directors</li>
                  <li>• Marketing Managers</li>
                  <li>• Business Development Heads</li>
                  <li>• Channel Partners</li>
                  <li>• Brand Managers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technology & IT</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• IT Directors</li>
                  <li>• Engineering Managers</li>
                  <li>• Product Managers</li>
                  <li>• Solutions Architects</li>
                  <li>• DevOps Leads</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="DollarSign" size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Finance & Accounting</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Finance Managers</li>
                  <li>• Accounting Directors</li>
                  <li>• Treasury Managers</li>
                  <li>• Financial Controllers</li>
                  <li>• Audit Managers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Human Resources</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• HR Directors</li>
                  <li>• Talent Acquisition Heads</li>
                  <li>• Learning & Development Managers</li>
                  <li>• Compensation Managers</li>
                  <li>• Employee Relations Managers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Operations & Supply Chain</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Operations Managers</li>
                  <li>• Supply Chain Directors</li>
                  <li>• Procurement Managers</li>
                  <li>• Quality Assurance Heads</li>
                  <li>• Logistics Managers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SeniorHiring;
