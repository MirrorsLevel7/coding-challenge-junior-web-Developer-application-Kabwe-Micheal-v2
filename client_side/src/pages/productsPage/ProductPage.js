import React from 'react'
import './productPage.css'
import {useSelector } from 'react-redux';
import { deleteProduct } from '../../Actions/Actions';
import { useDispatch } from  'react-redux';


const ProductPage = ({setCurrentId}) => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    return (
        <div className='all-products'>
           {
            products.map((product, id) => (
                <div key={id} className='product'>
                <div className='product-card'>
                    <img className='product-card-img' src={product.image} alt="" />
                <div className='product-card-body'>
                   <div className='product-card-titles'>
                    <h1 className='product-card-title'>{product.name}</h1> 
                    <span className='product-card-price'>{product.price}</span>
                   </div>
                   <p className='product-card-description'>{product.description}</p>
                   <div className='product-card-buttons'>
                        <button onClick={()=>{dispatch(deleteProduct(product._id))}
                        } className='product-card-button'>delete</button>
                        <button onClick={()=> setCurrentId(product._id)} className='product-card-button'>edit</button>
                   </div>
                    </div>
                </div> 
            </div> 
            ))
           }
        </div>
    )
}

export default ProductPage
