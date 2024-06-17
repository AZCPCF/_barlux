import apiClient from "./API";
const API = apiClient
export const getAllProduct = () => {
    API.get('product')
}
export const getProductByCateogry = (category_id) => {
    if (category_id === undefined) {
        return API.get(`product`)
    }else{
        return API.get(`product?subcategory_id=${category_id}`)
    }
}   