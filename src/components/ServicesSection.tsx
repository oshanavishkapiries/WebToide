
import { Globe, Smartphone, Lightbulb } from "lucide-react";
import CTAButton from "./CTAButton";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-nova-lightgray group">
      <div className="mb-6 text-nova-blue group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-nova-mediumgray mb-6">{description}</p>
      <CTAButton variant="outline" size="sm">
        View Details
      </CTAButton>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "We deliver the best B2B and B2C web solutions with cutting-edge technology and modern design."
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Get your business to your customers' pockets with our native and cross-platform mobile applications."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Research & Development",
      description: "We help you innovate with the latest technologies and research-based software solutions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-nova-mediumgray max-w-2xl mx-auto">
            We're Not Just Another Software Solutions Company. We focus on quality and customer satisfaction above all.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
