import React from 'react';
import { Coffee, Heart, Instagram, Facebook, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsAppContact = () => {
    const message = "¡Hola! Me interesa conocer más sobre Capucremoso 😊";
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-cream-400" />
              <span className="text-2xl font-display font-bold">
                Capucremoso
              </span>
            </div>
            <p className="text-cream-200 text-sm leading-relaxed">
              Productos naturales de belleza elaborados con café colombiano premium. 
              Despierta la belleza natural de tu piel.
            </p>
            <div className="flex space-x-3">
              <button className="bg-coffee-800 hover:bg-coffee-700 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-coffee-800 hover:bg-coffee-700 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-500 p-2 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-cream-200 hover:text-white transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('productos')}
                  className="text-cream-200 hover:text-white transition-colors text-sm"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-cream-200 hover:text-white transition-colors text-sm"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-cream-200 hover:text-white transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Productos</h3>
            <ul className="space-y-2 text-sm text-cream-200">
              <li>Cremas Faciales</li>
              <li>Productos Corporales</li>
              <li>Exfoliantes</li>
              <li>Mascarillas</li>
              <li>Serums</li>
              <li>Bálsamos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-cream-200">
                <MessageCircle className="h-4 w-4" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-cream-200">
                <Mail className="h-4 w-4" />
                <span>info@capucremoso.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-cream-200">
                <MapPin className="h-4 w-4" />
                <span>Medellín, Colombia</span>
              </div>
            </div>
            
            <button
              onClick={handleWhatsAppContact}
              className="mt-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Contáctanos</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-cream-200">
              © 2024 Capucremoso. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-1 text-sm text-cream-200">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>en Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;