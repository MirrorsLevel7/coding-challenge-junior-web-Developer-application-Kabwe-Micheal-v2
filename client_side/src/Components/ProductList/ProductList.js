import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../Actions/Actions';
import ProductForm from '../../pages/FormsPage/ProductForm';
import ProductPage from '../../pages/productsPage/ProductPage';

import '../../pages/productsPage/productPage.css'
import SearchField from '../../SearchBox/SearchField';

const ProductList = () => {
    const dispatch = useDispatch();

    const [currentId, setId] = useState(null);

    const categories = ['furniture', 'electronics', 'clothing']

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <div>
            <SearchField/>
            <div className='components'>
                <ProductPage setCurrentId={setId} /> 
                <ProductForm currentId={currentId} setCurrentId={setId} categories={categories}/>
            </div>
        </div>
    )
}

export default ProductList
