const products =  (products = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL_PRODUCTS':
            return action.payload;
        case 'CREATE_PRODUCT':
            return [...products, action.payload]
        case 'UPDATE_PRODUCT':
            return products.map(product => product._id === action.payload._id ? action.payload : product)
        case 'DELETE_PRODUCT': 
            return products.filter(product => product._id !== action.payload)
        case 'FILTER_CATEGORY':
            return [...action.payload ]
        default:
            return products
    }
}

export default products;