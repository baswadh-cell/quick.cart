import { useCart } from '../context/CartContext';
import ProductList from './ProductList';

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();

  // Filter products based on searchTerm
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {searchTerm && (
        <p className="search-results">
          Found {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
        </p>
      )}

      <ProductList
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      {filteredProducts.length === 0 && searchTerm && (
        <p className="no-results">No products found matching "{searchTerm}"</p>
      )}
    </div>
  );
}

export default HomePage;