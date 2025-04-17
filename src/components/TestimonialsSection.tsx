
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

const Testimonial = ({ quote, author, company }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-md border border-nova-lightgray">
      <div className="text-nova-blue mb-4">
        <Quote size={32} />
      </div>
      <p className="text-lg md:text-xl mb-6 text-gray-700 italic">{quote}</p>
      <div>
        <p className="font-bold text-gray-800">{author}</p>
        <p className="text-nova-mediumgray">{company}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Nova Tech delivered a truly exceptional web platform that has transformed our business. Their attention to detail and technical expertise exceeded our expectations.",
      author: "John Anderson",
      company: "Jet Deliveries"
    },
    {
      quote: "Working with Nova Tech was a game-changer for our online presence. Their team understood our vision and executed it flawlessly with cutting-edge technology.",
      author: "Sarah Johnson",
      company: "Decoware"
    },
    {
      quote: "The mobile app developed by Nova Tech has received outstanding feedback from our clients. Their process was transparent, and they delivered on time and on budget.",
      author: "Michael Thompson",
      company: "Royal Reality"
    },
    {
      quote: "Nova Tech's custom software solution has streamlined our operations and increased productivity by 35%. They're truly partners in our success.",
      author: "Emily Rodriguez",
      company: "Nexus Systems"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Some kind words from our beloved clientele
          </h2>
          <p className="text-lg text-nova-mediumgray max-w-2xl mx-auto">
            Discover what our clients have to say about their experience working with our team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="relative w-full h-[300px]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className={`absolute w-full transition-opacity duration-500 ease-in-out ${
                      currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Testimonial
                      quote={testimonial.quote}
                      author={testimonial.author}
                      company={testimonial.company}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="mt-10 flex justify-center items-center gap-6">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-nova-lightgray hover:bg-gray-200 text-nova-mediumgray transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-nova-blue" : "bg-nova-lightgray"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentIndex}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-nova-lightgray hover:bg-gray-200 text-nova-mediumgray transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-nova-mediumgray">
                <span className="font-medium">Next up:</span> {testimonials[(currentIndex + 1) % testimonials.length].company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
