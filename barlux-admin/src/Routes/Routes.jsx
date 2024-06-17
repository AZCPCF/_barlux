import React, { useContext, useEffect, useState } from "react";
import Home from "../Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
// import Test from "../Pages/Test"
import { TokenContext } from "../Hooks/ToastContext";
import Categories from "../Pages/Categories";
import Discounts from "../Pages/Discounts";
import Products from "../Pages/Products";
import AddCategory from "../Pages/AddCategory";
import AddDiscount from "../Pages/AddDiscount";
import AddProduct from "../Pages/AddProduct";
import Orders from "../Pages/Orders";
import Wallet from "../Pages/Wallet";
import AddWallet from "../Pages/AddWallet";
import BackButton from "../Components/BackButton";
import Addresses from "../Pages/Addresses";
import ChangeUser from "../Pages/ChangeUser";
import Modal from "../Components/Modal";
import OrderProducts from "../Pages/OrderProducts";
export default function AppRoutes() {
  const { token } = useContext(TokenContext);
  // const getf = async () => {
  //   const res = await getU();
  //   console.log(res);
  // };
  const [tokenn, setTokenn] = useState(token);
  useEffect(() => {
    // getf();
    setTokenn(token);
  }, [token]);
  return (
    <BrowserRouter>
      {tokenn === null ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={
              <Home title={"کاربران"}>
                <Users />
              </Home>
            }
          />
          <Route
            path="/categories"
            element={
              <Home title={"دسته بندی ها"}>
                <Categories />
              </Home>
            }
          />
          <Route
            path="/discounts"
            element={
              <Home title={"کد تخفیف ها"}>
                <Discounts />
              </Home>
            }
          />
          <Route
            path="/wallet/:id"
            element={
              <Home title={"کد تخفیف ها"}>
                <Wallet />
              </Home>
            }
          />
          <Route
            path="/addresses/:id"
            element={
              <Home title={"آدرس ها"}>
                <Addresses />
              </Home>
            }
          />
          <Route
            path="/users/change/:id"
            element={
              <Home title={"کاربران - تغییر"}>
                <ChangeUser />
              </Home>
            }
          />
          <Route
            path="/orders/products/:id"
            element={
              <Home title={"سفارشات - محصولات سبد خرید"}>
                <OrderProducts />
              </Home>
            }
          />
          <Route
            path="/orders"
            element={
              <Home title={"سفارشات"}>
                <Orders />
              </Home>
            }
          />
          <Route
            path="/products"
            element={
              <Home title={"محصولات"}>
                <Products />
              </Home>
            }
          />
          <Route
            path="/categories/add"
            element={
              <Home title={"دسته بندی ها / افزودن"}>
                <AddCategory />
              </Home>
            }
          />
          <Route
            path="/discounts/add"
            element={
              <Home title={"کد تخفیف ها / افزودن"}>
                <AddDiscount />
              </Home>
            }
          />
          <Route
            path="/products/add"
            element={
              <Home title={"کد تخفیف ها / افزودن"}>
                <AddProduct />
              </Home>
            }
          />
          <Route
            path="/wallet/add/:id"
            element={
              <Home title={"کیف پول / افزودن"}>
                <AddWallet />
              </Home>
            }
          />
          <Route
            path="/test"
            element={
              <Home title={"کیف پول / افزودن"}>
                <Modal open={true} onTrue={() => alert('salam')} />
              </Home>
            }
          />
          <Route
            path="*"
            element={
              <center style={{marginTop:'100px'}}>
                <h1>همچین صفحه ای وجود ندارد</h1>
                <BackButton />
              </center>
            }
          />
          <Route path="/logout" />
        </Routes>
      )}
    </BrowserRouter>
  );
}
