import { createContext, useEffect, useState } from 'react';

// Create the context
export const ProductContext = createContext();

// Provider component
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);          // All products
  const [categories, setCategories] = useState([]);      // Unique categories for filtering
  const [loading, setLoading] = useState(true);          // Loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);

        // Extract unique categories for filter dropdown
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
