import { Card } from "@/components/ui/card";
import techCorpLogo from "@/assets/logos/techcorp-logo.png";
import greenEnergyLogo from "@/assets/logos/green-energy-logo.png";
import smartManufacturingLogo from "@/assets/logos/smart-manufacturing-logo.png";
import environmentalLogo from "@/assets/logos/environmental-logo.png";
import infrastructureLogo from "@/assets/logos/infrastructure-logo.png";
import renewableLogo from "@/assets/logos/renewable-logo.png";
import industrialVisionLogo from "@/assets/logos/industrial-vision-logo.png";
import urbanSolutionsLogo from "@/assets/logos/urban-solutions-logo.png";
import dataAnalyticsLogo from "@/assets/logos/data-analytics-logo.png";
import automationLogo from "@/assets/logos/automation-logo.png";
import globalLogisticsLogo from "@/assets/logos/global-logistics-logo.png";
import digitalTransformLogo from "@/assets/logos/digital-transform-logo.png";
import waterSolutionsLogo from "@/assets/logos/water-solutions-logo.png";
import miningTechLogo from "@/assets/logos/mining-tech-logo.png";
import aerospaceLogo from "@/assets/logos/aerospace-logo.png";
import pharmaResearchLogo from "@/assets/logos/pharma-research-logo.png";
import fintechLogo from "@/assets/logos/fintech-logo.png";
import biotechLogo from "@/assets/logos/biotech-logo.png";
import telecomLogo from "@/assets/logos/telecom-logo.png";
import agritechLogo from "@/assets/logos/agritech-logo.png";
import cybersecurityLogo from "@/assets/logos/cybersecurity-logo.png";
import constructionLogo from "@/assets/logos/construction-logo.png";
import healthcareTechLogo from "@/assets/logos/healthcare-tech-logo.png";
import edtechLogo from "@/assets/logos/edtech-logo.png";

const ClientLogos = () => {
  const clients = [
    { name: "TechCorp Industries", logo: techCorpLogo },
    { name: "Green Energy Solutions", logo: greenEnergyLogo },
    { name: "Smart Manufacturing Ltd", logo: smartManufacturingLogo },
    { name: "Environmental Dynamics", logo: environmentalLogo },
    { name: "Infrastructure Pro", logo: infrastructureLogo },
    { name: "Renewable Focus Inc", logo: renewableLogo },
    { name: "Industrial Vision", logo: industrialVisionLogo },
    { name: "Urban Solutions", logo: urbanSolutionsLogo },
    { name: "DataTek Analytics", logo: dataAnalyticsLogo },
    { name: "AutoSys Solutions", logo: automationLogo },
    { name: "Global Logistics Corp", logo: globalLogisticsLogo },
    { name: "Digital Transform Inc", logo: digitalTransformLogo },
    { name: "AquaTech Solutions", logo: waterSolutionsLogo },
    { name: "MiningTech Industries", logo: miningTechLogo },
    { name: "Aerospace Engineering", logo: aerospaceLogo },
    { name: "Pharma Research Labs", logo: pharmaResearchLogo },
    { name: "FinTech Innovations", logo: fintechLogo },
    { name: "BioTech Solutions", logo: biotechLogo },
    { name: "TeleComm Networks", logo: telecomLogo },
    { name: "AgriTech Farming", logo: agritechLogo },
    { name: "CyberSecure Systems", logo: cybersecurityLogo },
    { name: "BuildTech Construction", logo: constructionLogo },
    { name: "HealthTech Medical", logo: healthcareTechLogo },
    { name: "EduTech Learning", logo: edtechLogo }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to partner with forward-thinking organizations across various industries
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {clients.map((client, index) => (
            <Card 
              key={client.name}
              className="group p-4 bg-background/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain filter brightness-110 contrast-110"
                  />
                </div>
                <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300 leading-tight">
                  {client.name}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">150+</div>
            <div className="text-sm text-muted-foreground">Global Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">25+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">24/7</div>
            <div className="text-sm text-muted-foreground">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;