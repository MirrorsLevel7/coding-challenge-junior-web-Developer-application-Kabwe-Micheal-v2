import axios from 'axios';
const API_URL = '/api/products';


export const fetchProducts = async() => await axios.get(API_URL);

export const createProduct  =  async(newProduct) => {
   return await axios.post(API_URL, newProduct);
}
export const updateProducts = async(id, updatedProduct) => await axios.put(`${API_URL}/${id}`, updatedProduct)

export const deleteProduct = async(id) => await axios.delete(`${API_URL}/${id}`)