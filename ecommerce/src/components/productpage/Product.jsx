import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./productstyle.css"
import { getAllproduct } from '../../Apiservices/Api'


function Product() {
    const [product, setProduct] = useState([])
    useEffect(() => {
      const fechdata = async () => {
        const data = await getAllproduct();
        setProduct(data)
        console.log('allproducts', product);
      }
      fechdata()
    }, [])
    return (
        <>
            <div className='product-grid'>
            {product.map((product, key) => (
                <div className='product'key={product.id} >
                    <img src={product.images} alt='alternative' />
                    <h2 className='sample'>{product.title}</h2>
                    <p>
                        <span className='price'>{product.price}</span>
                    </p>
                   
                    <Link to={`/prodetails/${product.id}`}>
                        <button className='button1'>productdetails</button>
                    </Link>
                    <Link to="" >
                        <button className='button2'>add cart</button>
                    </Link>
                    
                </div>
                ))}
            </div>
        </>
    )
}

export default Product
