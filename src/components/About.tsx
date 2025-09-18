import React from 'react';
import { Coffee, Heart, Leaf, Award, Users, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Café Premium",
      description: "Utilizamos solo los mejores granos de café arábica colombiano para nuestros productos."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Amor por la Piel",
      description: "Cada producto está formulado con cariño para nutrir y cuidar tu piel naturalmente."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "100% Natural",
      description: "Ingredientes naturales y orgánicos, libres de químicos dañinos para tu piel."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Calidad Garantizada",
      description: "Productos artesanales elaborados con los más altos estándares de calidad."
    }
  ];

  const stats = [
    { number: "2019", label: "Año de fundación" },
    { number: "1000+", label: "Clientes satisfechos" },
    { number: "6", label: "Productos únicos" },
    { number: "100%", label: "Ingredientes naturales" }
  ];

  return (
    <section id="nosotros" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-coffee-600 mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Nuestra Historia
            </span>
          </div>
          <h2 className="text-4xl font-display font-bold text-coffee-900 mb-6">
            Sobre Capucremoso
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed">
            Nacimos del amor por el café y la pasión por el cuidado natural de la piel. 
            Desde 2019, hemos estado creando productos únicos que combinan la riqueza 
            del café colombiano con ingredientes naturales excepcionales.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-coffee-900">
              Una historia de pasión y naturaleza
            </h3>
            <div className="space-y-4 text-coffee-700">
              <p>
                Todo comenzó en una pequeña finca cafetera en las montañas de Colombia, 
                donde descubrimos las increíbles propiedades del café para el cuidado de la piel. 
                Las mujeres de la región habían usado durante generaciones los granos de café 
                como exfoliante natural y antioxidante.
              </p>
              <p>
                Inspirados por esta sabiduría ancestral, decidimos crear Capucremoso: 
                una línea de productos que honra la tradición cafetera colombiana mientras 
                incorpora técnicas modernas de cosmética natural.
              </p>
              <p>
                Cada producto es elaborado artesanalmente con ingredientes cuidadosamente 
                seleccionados, garantizando que tu piel reciba solo lo mejor de la naturaleza.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4465832/pexels-photo-4465832.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Proceso artesanal Capucremoso"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-coffee-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm">Clientes felices</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-coffee-900 text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-coffee-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h4 className="font-display font-semibold text-lg text-coffee-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-coffee-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-display font-bold text-coffee-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-coffee-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mt-20 text-center">
          <div className="bg-coffee-800 text-white rounded-2xl p-12">
            <h3 className="text-3xl font-display font-bold mb-6">
              Nuestra Misión
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Crear productos de belleza naturales y efectivos que celebren la riqueza 
              del café colombiano, mientras cuidamos tu piel y respetamos el medio ambiente. 
              Queremos que cada persona descubra la belleza natural que lleva dentro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;