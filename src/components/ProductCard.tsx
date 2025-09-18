import React, { useState } from 'react';
import { ShoppingCart, Heart, Info, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div className="card p-6 group">
        {/* Image */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 flex space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setShowDetails(true)}
              className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-coffee-50 hover:text-coffee-600 backdrop-blur-sm transition-colors"
            >
              <Info className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute top-3 left-3">
            <span className="bg-coffee-600 text-white text-xs px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div>
            <h3 className="font-display font-semibold text-lg text-coffee-900 mb-1">
              {product.name}
            </h3>
            <p className="text-coffee-600 text-sm line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500 ml-2">(4.8)</span>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="text-2xl font-bold text-coffee-800">
                {formatPrice(product.price)}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-coffee-600 hover:bg-coffee-700 text-white p-3 rounded-lg transition-colors group-hover:scale-105 transform duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowDetails(false)} />
            
            <div className="relative bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl">
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="bg-coffee-100 text-coffee-800 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h2 className="font-display font-bold text-2xl text-coffee-900 mt-2">
                      {product.name}
                    </h2>
                    <p className="text-coffee-600 mt-2">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-coffee-800 mb-2">Beneficios:</h3>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-coffee-600 flex items-center">
                          <span className="w-2 h-2 bg-coffee-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-coffee-800 mb-2">Ingredientes:</h3>
                    <p className="text-sm text-coffee-600">
                      {product.ingredients.join(', ')}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-coffee-800">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => {
                        handleAddToCart();
                        setShowDetails(false);
                      }}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Agregar al Carrito</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;