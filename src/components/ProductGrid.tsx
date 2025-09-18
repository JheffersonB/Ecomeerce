import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-coffee-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
            Descubre nuestra colección de productos naturales elaborados con los mejores 
            granos de café para cuidar y nutrir tu piel.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-coffee-600 mb-4">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filtrar por categoría:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-coffee-600 text-white shadow-lg'
                    : 'bg-coffee-100 text-coffee-700 hover:bg-coffee-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-coffee-600 text-lg">
              No se encontraron productos en esta categoría.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-coffee-50 to-cream-50 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-coffee-900 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-coffee-600 mb-6">
              Contáctanos por WhatsApp y te ayudaremos a encontrar el producto perfecto para ti.
            </p>
            <button
              onClick={() => {
                const message = "¡Hola! Necesito ayuda para encontrar el producto perfecto para mi piel 😊";
                const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="btn-primary"
            >
              Asesoría Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;