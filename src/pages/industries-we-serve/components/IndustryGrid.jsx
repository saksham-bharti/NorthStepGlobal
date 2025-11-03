import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
 

const IndustryGrid = () => {
  const industries = [
    {
      id: 1,
      name: "Technology & Software",
      icon: "Code",
      description: "From startups to enterprise, we connect top tech talent with innovative companies driving digital transformation.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      specializations: ["Software Engineering", "DevOps", "Data Science", "Cybersecurity", "Product Management"]
    },
    {
      id: 2,
      name: "Healthcare & Life Sciences",
      icon: "Heart",
      description: "Connecting healthcare professionals with leading medical institutions and life sciences organizations.",
      image: "https://static.investindia.gov.in/s3fs-public/2023-11/Untitled-1%20%281%29.png?auto=compress&cs=tinysrgb&w=800",
      specializations: ["Clinical Research", "Medical Devices", "Pharmaceuticals", "Healthcare IT", "Nursing"]
    },
    {
      id: 3,
      name: "Financial Services",
      icon: "TrendingUp",
      description: "Placing finance professionals in banking, investment, fintech, and insurance organizations worldwide.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=compress&cs=tinysrgb&w=800",
      specializations: ["Investment Banking", "Risk Management", "Fintech", "Compliance", "Wealth Management"]
    },
    {
      id: 4,
      name: "Manufacturing & Engineering",
      icon: "Settings",
      description: "Supporting manufacturing excellence through strategic placement of engineering and operations talent.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      specializations: ["Mechanical Engineering", "Process Improvement", "Quality Assurance", "Supply Chain", "Automation"]
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-brand-headline mb-6">
            Our Industry Expertise
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Deep sector knowledge combined with proven recruitment methodologies 
            delivers exceptional results across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries?.slice(0, 4).map((industry) => (
            <div 
              key={industry?.id}
              className="bg-card rounded-2xl overflow-hidden card-premium elevation-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={industry?.image}
                  alt={industry?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={industry?.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{industry?.name}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry?.description}
                </p>


                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry?.specializations?.map((spec, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;