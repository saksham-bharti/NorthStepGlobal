import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
 

const IndustryGrid = () => {
  const industries = [
    {
      id: 1,
      name: "Building Material",
      icon: "Code",
      description: "From construction innovators to large suppliers, we connect top talent with companies shaping the future of sustainable & modern building.",
      image: "https://structuralengineeringbasics.com/wp-content/uploads/2019/05/STRUCTURAL-ENGINEERING-MATERIALS-1024x530-1-1200x900.webp?auto=compress&cs=tinysrgb&w=800",
      specializations: [  "Cement & Concrete", "Steel & Structures","Construction Chemicals",  "Paints & Coatings",  "Sustainable Materials"]
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const specializationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className="pt-2 pb-8 lg:pt-4 lg:pb-6 bg-background"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-4"
          variants={headerVariants}
        >
          <h2 className="text-heading-2xl mb-6">
            Our Industry Expertise
          </h2>
          <p className="text-body-lg max-w-3xl mx-auto">
            Deep sector knowledge combined with proven recruitment methodologies
            delivers exceptional results across diverse industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries?.slice(0, 4).map((industry, index) => (
            <motion.div
              key={industry?.id}
              className="bg-card rounded-2xl overflow-hidden card-premium elevation-hover"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={industry?.image}
                    alt={industry?.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name={industry?.icon} size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{industry?.name}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {industry?.description}
                </motion.p>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-foreground mb-3">Key Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry?.specializations?.map((spec, specIndex) => (
                      <motion.span
                        key={specIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        variants={specializationVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                          delay: 0.6 + index * 0.1 + specIndex * 0.05,
                          duration: 0.3
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgb(249 250 251)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default IndustryGrid;