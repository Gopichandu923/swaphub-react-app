import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5152",
});

//user
export const UserSignUp = async (data) => await API.post("/user/signup", data);
export const UserSignIn = async (data) => await API.post("/user/login", data);

// products
export const GetAllProducts = async (filter) =>
  await API.get("/product", filter);
export const GetAllProductById = async (id) => await API.get(`/product/${id}`);
export const GetAllProductByCategort = async (cat) =>
  await API.get(`/product/category/${cat}`);
export const AddProduct = async (item) => await API.post("product/add", item);

//cart
export const GetAllCartItems = async (token, data) =>
  await API.get("/cart", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const AddProductToCart = async (token, item) =>
  await API.post("/cart", item, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const DeleteProductFromCart = async (token, id) =>
  await AddProduct.delete("/cart", id, {
    headers: { Authorization: `Bearer ${token}` },
  });

//Favorites
export const GetFavouriteProducts = async (token, filter) =>
  await API.get("/favourites/", filter, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const AddFavouriteProducts = async (token, id) =>
  await API.post(`/favourites/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const DeleteFavouriteProduct = async (token, id) =>
  await API.delete(`/favourites/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

//orders
export const GetOrders = async (token, items) =>
  await API.get("/orders", items, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const AddOrders = async (token, items) =>
  await API.post(`/orders`, items, {
    headers: { Authorization: `Bearer ${token}` },
  });
