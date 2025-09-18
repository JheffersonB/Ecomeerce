import React, { useState } from 'react';
import { ShoppingCart, Menu, X, MessageCircle, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppContact = () => {
    const message = "¡Hola! Me interesa conocer más sobre los productos de Capucremoso 😊";
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-coffee-600" />
              <span className="text-2xl font-display font-bold text-coffee-800">
                Capucremoso
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
              >
                Contacto
              </button>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* WhatsApp Contact */}
              <button
                onClick={handleWhatsAppContact}
                className="hidden sm:flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-coffee-700 hover:text-coffee-900 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-coffee-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-coffee-700 hover:text-coffee-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-coffee-100">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-coffee-700 hover:text-coffee-900 font-medium text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('productos')}
                  className="text-coffee-700 hover:text-coffee-900 font-medium text-left"
                >
                  Productos
                </button>
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-coffee-700 hover:text-coffee-900 font-medium text-left"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-coffee-700 hover:text-coffee-900 font-medium text-left"
                >
                  Contacto
                </button>
                <button
                  onClick={handleWhatsAppContact}
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors w-fit"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;