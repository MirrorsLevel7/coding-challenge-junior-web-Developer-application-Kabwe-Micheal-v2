import * as apiCall from '../API,s/api';

export const fetchProducts = () => async(dispatch)=>{
    try {
        const { data } = await apiCall.fetchProducts();
        dispatch({type: 'FETCH_ALL_PRODUCTS', payload: data})

    } catch (error) {
        console.log(error.message);
    }
}

export const createProduct = (newProduct) => async(dispatch)=>{
    try {
        const {data} = await apiCall.createProduct(newProduct);
        dispatch({type: 'CREATE_PRODUCT', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProduct = (id, updatedProduct)=>async(dispatch)=>{
    try {
        const { data } = await apiCall.updateProducts(id, updatedProduct);
        dispatch({type: 'UPDATE_PRODUCT', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = (id) => async(dispatch)=>{
    try {
        await apiCall.deleteProduct(id);
        dispatch({type: 'DELETE_PRODUCT', payload: id}) 
    } catch (error) {
        console.log(error.message)
    }
}

export const filterByCategory = (category) => async(dispatch)=>{
    try {
        const{ data } = await apiCall.filterByCategory(category)
        dispatch({type: 'FILTER_CATEGORY', payload: data })
    } catch (error) {
        console.log(error)
    }
}