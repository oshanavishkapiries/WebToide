
import CTAButton from "./CTAButton";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            We Like to Start Your Project With Us
          </h2>
          <p className="text-lg text-nova-mediumgray mb-10">
            Ready to transform your digital presence? Let's discuss how our expert team can help you achieve your goals with cutting-edge software solutions tailored specifically for your business needs.
          </p>
          <CTAButton variant="primary" size="lg">
            Get Started
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
