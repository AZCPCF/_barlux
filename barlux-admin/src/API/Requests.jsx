import apiClient from "./API";
import apiClientU from "./APIU";
const api = apiClient;
const apiu = apiClientU;
export const getUsers = () => {
  return api.get("/admins/users");
};
export const getCategories = () => {
  return api.get("/category");
};
export const getPCat = () => {
  return api.get("/category?parent_id=0");
};
export const getUserById = (id) => {
  return api.get(`/admins/users/${id}`);
};
export const adminlogin = (username, password) => {
  return api.post("/admin/login", { user_name: username, password: password });
};
export const updateUser = (id, name, email) => {
  if (email) {
    return api.put(`/admins/users/${id}`, { name: name, email: email });
  }
  return api.put(`/admins/users/${id}`, { name: name });
};
export const updateCat = (id, title, parent_id) => {
  return api.put(`/category/${id}`, { title: title, parent_id: parent_id });
};
export const addCategory = (title, parent_id) => {
  if (parent_id != null)
    return api.post(`/category`, { title: title, parent_id: parent_id });
  return api.post(`/category`, { title: title });
};
export const getMainCategory = () => {
  return api.get(`/category?is_main=1`);
};
export const getNotMainCategory = () => {
  return api.get(`/category?is_main=0`);
};
export const getCatById = (id) => {
  return api.get(`/category/${id}`);
};
export const getWalletById = (id) => {
  return api.get(`/wallet?user_id=${id}`);
};
export const addWallet = (amount, id, action) => {
  return api.post("/wallet", { amount: amount, user_id: id, action: action });
};
export const getDiscount = () => {
  return api.get("/discount");
};
export const getProducts = () => {
  return api.get("/product");
};
export const getAddressesById = (id) => {
  return api.get(`/admins/address?user_id=${id}`);
};
export const getCategoryById = (id) => {
  return api.get(`/category/${id}`);
};
export const addDsicount = (percent, expired, max) => {
  return api.post("/discount", {
    discount_percent: percent,
    expired_at: expired,
    max_amount: max,
  });
};
export const deleteDiscount = (id) => {
  return api.delete(`/discount/${id}`);
};
export const deleteOrder = (id) => {
  return api.delete(`admin/order/${id}`);
};
export const deleteProduct = (id) => {
  return api.delete(`/discount/${id}`);
};
export const getOrders = () => {
  return api.get(`/admin/order`);
};
export const addProduct = (
  beforeDiscountPrice,
  price,
  description,
  features,
  image_1,
  image_2,
  image_3,
  showInHomePage,
  stock,
  subCategoryId,
  title
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("image_1", image_1);
  formData.append("subcategory_id", subCategoryId);
  formData.append("before_discount_price", beforeDiscountPrice);
  formData.append("price", price);
  formData.append("description", description);
  formData.append("features", features);
  if (image_2) {
    formData.append("image_2", image_2);
  }
  if (image_3) {
    formData.append("image_3", image_3);
  }
  formData.append("stock", stock);
  console.log(showInHomePage);
  formData.append("show_in_home_page", showInHomePage ? 1 : 0);
  return api.post("/product", formData);
};
export const getOrderById = (id) => {
  return api.get(`/admin/order/${id}`);
};