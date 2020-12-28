import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { createProduct, updateProduct} from '../../Actions/Actions';
import { useSelector } from 'react-redux';
import '../productsPage/productPage.css';

const ProductForm = ({currentId, setCurrentId, categories}) => {
    const [productsData, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: ''
    })

    const dispatch = useDispatch()
    const product = useSelector(state => currentId ? state.products.find((p)=> p._id === currentId) : null)


    useEffect(() => {
        if(product){
            setProduct(product)
        }
    }, [product])
    const handleChange = (e)=>{
        const {name, value} = e.target;
        return setProduct({...productsData, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updateProduct(currentId, productsData));
        }else{
            console.log(productsData);
            dispatch(createProduct(productsData))
        }
        clear();
    }

    const clear = ()=>{
        setCurrentId(null);
        setProduct({
            name: '',
            description: '',
            price: '',
            image: '',
            category: ''
        })
    }

    const {name, description, price, image, category} = productsData
    return (
        <div>
            <h1 style={{textAlign: 'Center'}}>{currentId ?'Edit' : 'Create'} product</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input 
                    className='form-input'
                    placeholder='name'
                    type="text"
                    name='name'
                    onChange={handleChange}
                    value={name}
                />
                <input 
                    className='form-input'
                    placeholder='description'
                    type="text"
                    name='description'
                    onChange={handleChange}
                    value={description}
                />
                <input 
                    className='form-input'
                    placeholder='price'
                    type="Number"
                    min ='0'
                    name='price'
                    onChange={handleChange}
                    value={price}
                />
                <input 
                    className='form-input'
                    placeholder='image url'
                    type="text"
                    name='image'
                    onChange={handleChange}
                    value={image}
                />
                <select value={category} name='category' onChange={handleChange} className='form-input'>
                    {
                        categories.map((thecategory, id) =>(
                            <option  value={thecategory} key={id}>{thecategory}</option>
                        ))
                    }      
                </select>
                <input type="submit" className='form-input' value='submit'/>
            </form>
        </div>
    )
}

export default ProductForm
