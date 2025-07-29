// src/pages/Home.jsx
import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products, loading, categories } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  // Show loading spinner or message
  if (loading)
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <p className="text-xl text-gray-500 animate-pulse">Loading Products...</p>
      </div>
    );

  // Filter products by category
  let filtered = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  // Sort products by price
  if (sortOrder === 'lowToHigh') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="p-4">
      {/* Filters and Sorting Controls */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        {/* Filter by Category */}
        <select
          className="border p-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort by Price */}
        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
