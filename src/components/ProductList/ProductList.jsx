import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../Home/Product';

const ProductList = () => {
  const allProducts = useSelector(state => state.search.products);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtreleme işlemi
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className='grid grid-cols-4 gap-4'>
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;