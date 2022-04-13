import React, { useState } from 'react'
import ProductList from './ProductList';

const initialProducts = [
    {product: "Basketball", price: 12.00},
    {product: "Baseball", price: 120.00},
    {product: "Tennis Raquet", price: 120.00},
]





const WithPropsApp = () => {
    const [products, setProducts] = useState(initialProducts);
    console.log(products);
    return (
        <div>
            <h3>WithPropsApp</h3>
            <ProductList products={products} />
        </div>
    )
}

export default WithPropsApp