import React from 'react';
import { ArrowRight, Sparkles, Heart, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppContact = () => {
    const message = "¡Hola! Me interesa conocer más sobre los productos de Capucremoso 😊";
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-coffee-600">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Cosmética Natural
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-coffee-900 leading-tight">
                Despierta tu
                <span className="text-coffee-600 block">
                  belleza natural
                </span>
              </h1>
              
              <p className="text-xl text-coffee-700 leading-relaxed">
                Descubre el poder del café en tu rutina de belleza. Productos artesanales 
                que nutren, revitalizan y despiertan la luminosidad natural de tu piel.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-coffee-100 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-coffee-600" />
                </div>
                <span className="text-coffee-800 font-medium">100% Natural</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-coffee-100 p-2 rounded-lg">
                  <Leaf className="h-5 w-5 text-coffee-600" />
                </div>
                <span className="text-coffee-800 font-medium">Cruelty Free</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Ver Productos</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleWhatsAppContact}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Asesoría Personalizada</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Productos Capucremoso"
                className="rounded-2xl shadow-2xl float-animation"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cream-300 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-coffee-300 rounded-full opacity-40 blur-xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-coffee-800">100%</div>
            <div className="text-coffee-600 text-sm">Natural</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-coffee-800">5★</div>
            <div className="text-coffee-600 text-sm">Calificación</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-coffee-800">1000+</div>
            <div className="text-coffee-600 text-sm">Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-coffee-800">6</div>
            <div className="text-coffee-600 text-sm">Productos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;