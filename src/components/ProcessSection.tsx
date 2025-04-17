
import { Clipboard, Search, Layout, TestTube, Upload, Settings } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-nova-blue flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-xl">{number}</span>
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center mb-2">
          <div className="text-nova-blue mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-heading font-bold">{title}</h3>
        </div>
        <p className="text-nova-mediumgray">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Planning the procedure",
      description: "We start by gathering requirements, defining goals, and creating a detailed project roadmap to ensure success."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "System Analysis",
      description: "Our team analyzes your current systems, identifies opportunities for improvement, and documents technical requirements."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Designing",
      description: "We create intuitive user interfaces and system architectures tailored to your specific business needs."
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Testing phase",
      description: "Rigorous testing ensures all components work flawlessly, with quality assurance at every step of development."
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Implementation",
      description: "We deploy your solution with minimal disruption, providing comprehensive training and documentation."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Maintenance",
      description: "Our ongoing support ensures your software remains secure, efficient, and updated with the latest technologies."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our steps to perfection</h2>
          <p className="text-lg text-nova-mediumgray max-w-2xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
