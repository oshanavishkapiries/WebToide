
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nova-darkgray text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              Nova<span className="text-nova-blue">Tech</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              Providing innovative software solutions tailored to your business needs since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors">Mobile App Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors">Custom Software</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nova-blue transition-colors">Research & Development</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-nova-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-nova-blue transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-nova-blue transition-colors">Services</a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-nova-blue transition-colors">Process</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-nova-blue transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-nova-blue transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 text-nova-blue" />
                <span className="text-gray-400">info@novatech.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 text-nova-blue" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-nova-blue" />
                <span className="text-gray-400">
                  123 Innovation Drive, Tech Park<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nova Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
