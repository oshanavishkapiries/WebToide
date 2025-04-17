
import { Calendar, Users, CheckCircle, Award } from "lucide-react";
import CTAButton from "./CTAButton";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-nova-lightgray">
      <div className="flex flex-col items-center">
        <div className="text-nova-blue mb-2">
          {icon}
        </div>
        <h3 className="text-2xl font-heading font-bold mb-1">{value}</h3>
        <p className="text-nova-mediumgray text-sm text-center">{label}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const stats = [
    {
      icon: <Calendar className="w-10 h-10" />,
      value: "5",
      label: "Years In the Industry"
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: "10+",
      label: "Team Members"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      value: "100%",
      label: "Satisfaction Rate"
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: "15+",
      label: "Satisfied Projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Giving you the absolute best since 2018
            </h2>
            <p className="text-nova-mediumgray mb-8">
              Nova Tech is a premier software solutions provider with expertise in web development, mobile app development, and custom software solutions. Our experienced team of developers, designers, and project managers work closely with you to understand your needs and create tailored solutions that help your business thrive in this digital age.
            </p>
            <p className="text-nova-mediumgray mb-8">
              With a focus on quality, innovation, and customer satisfaction, we've helped numerous businesses transform their digital presence and streamline their operations through cutting-edge technology.
            </p>
            <CTAButton variant="primary" href="#contact">
              More About Us
            </CTAButton>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
