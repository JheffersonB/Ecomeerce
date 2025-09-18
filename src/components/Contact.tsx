import React from 'react';
import { MessageCircle, MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsAppContact = (message: string) => {
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactOptions = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      action: "Chatear ahora",
      onClick: () => handleWhatsAppContact("¡Hola! Me gustaría conocer más sobre Capucremoso 😊")
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      description: "+57 300 123 4567",
      action: "Llamar",
      onClick: () => window.open("tel:+573001234567")
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "info@capucremoso.com",
      action: "Escribir",
      onClick: () => window.open("mailto:info@capucremoso.com")
    }
  ];

  const quickMessages = [
    {
      title: "Consulta de Productos",
      message: "¡Hola! Me gustaría conocer más detalles sobre sus productos de café para la piel 😊"
    },
    {
      title: "Asesoría Personalizada",
      message: "¡Hola! Necesito ayuda para elegir los productos ideales para mi tipo de piel 🌟"
    },
    {
      title: "Información de Envíos",
      message: "¡Hola! Me gustaría conocer información sobre envíos y tiempos de entrega 📦"
    },
    {
      title: "Distribución",
      message: "¡Hola! Estoy interesado/a en ser distribuidor de productos Capucremoso 🤝"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-coffee-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por tu medio preferido y te 
            responderemos lo más pronto posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-coffee-900 mb-6">
                Canales de Contacto
              </h3>
              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-coffee-100 p-3 rounded-lg text-coffee-600">
                          {option.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-coffee-900">{option.title}</h4>
                          <p className="text-coffee-600 text-sm">{option.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={option.onClick}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        {option.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-coffee-600" />
                <h4 className="font-semibold text-coffee-900">Horarios de Atención</h4>
              </div>
              <div className="space-y-2 text-coffee-600">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-coffee-600" />
                <h4 className="font-semibold text-coffee-900">Ubicación</h4>
              </div>
              <p className="text-coffee-600">
                Medellín, Antioquia<br />
                Colombia
              </p>
            </div>

            {/* Social Media */}
            <div className="card p-6">
              <h4 className="font-semibold text-coffee-900 mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <button className="bg-coffee-100 hover:bg-coffee-200 p-3 rounded-lg text-coffee-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="bg-coffee-100 hover:bg-coffee-200 p-3 rounded-lg text-coffee-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Messages */}
          <div>
            <h3 className="text-2xl font-display font-bold text-coffee-900 mb-6">
              Mensajes Rápidos
            </h3>
            <p className="text-coffee-600 mb-6">
              Haz clic en cualquiera de estas opciones para enviar un mensaje predefinido por WhatsApp:
            </p>
            <div className="space-y-4">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppContact(msg.message)}
                  className="w-full text-left card p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-coffee-900 mb-2 group-hover:text-coffee-700">
                        {msg.title}
                      </h4>
                      <p className="text-coffee-600 text-sm line-clamp-2">
                        {msg.message}
                      </p>
                    </div>
                    <MessageCircle className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform" />
                  </div>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 text-center">
              <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-display font-bold text-lg text-coffee-900 mb-2">
                ¿Tienes una pregunta específica?
              </h4>
              <p className="text-coffee-600 mb-4">
                Escríbenos directamente y te responderemos personalmente
              </p>
              <button
                onClick={() => handleWhatsAppContact("¡Hola! Tengo una consulta específica sobre Capucremoso 😊")}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Escribir por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;