
import CTAButton from "./CTAButton";
import { Code, Cpu, Database, Globe, Server, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-in">
            Software Solutions For New Millennia
          </h1>
          <p className="text-lg md:text-xl text-nova-mediumgray mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-150">
            Unique, functional and innovative digital solutions tailor made for you, and you only!
          </p>
          
          <div className="flex justify-center mb-12 animate-fade-in animation-delay-300">
            <CTAButton variant="primary" size="lg" href="#contact">
              Get Started
            </CTAButton>
          </div>
          
          {/* Abstract Icons Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center p-4 bg-nova-lightgray rounded-lg animate-scale-in hover:shadow-md transition-all">
              <Globe className="text-nova-blue w-8 h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-nova-lightgray rounded-lg animate-scale-in hover:shadow-md transition-all">
              <Code className="text-nova-blue w-8 h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-nova-lightgray rounded-lg animate-scale-in hover:shadow-md transition-all">
              <Server className="text-nova-blue w-8 h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-nova-lightgray rounded-lg animate-scale-in hover:shadow-md transition-all">
              <Database className="text-nova-blue w-8 h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-nova-lightgray rounded-lg animate-scale-in hover:shadow-md transition-all">
              <Cpu className="text-nova-blue w-8 h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-nova-lightgray rounded-lg animate-scale-in hover:shadow-md transition-all">
              <Zap className="text-nova-blue w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
