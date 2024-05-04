import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import AddCM from "../Components/AddCM"; // Assuming AddCM.js is in the same directory
import { addProductValidition } from "../Validation/Yup";
import { addProduct, getMainCategory, getNotMainCategory } from "../API/Requests";
import Loading from "../Components/Loading";
import { generateCategoryObject } from "../Helpers/functions";
import { useNavigate } from "react-router-dom";
import ToastifyCM from '../Components/ToastifyCM'
import {  toast } from "react-toastify";
const AddProduct = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const getFunction = async () => {
    setLoading(true);
    const res = await getNotMainCategory();
    setOptions(generateCategoryObject(res.data.data));
    console.log(res.data.data)
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  console.log(options)
  const onSubmit = async (data) => {
    // console.log(data.image_1.name);
    setLoading(true);
    console.log(data)
    const res = await addProduct(
      String(data.before_discount_price),
      String(data.price),
      data.description,
      data.features,
      data.image_1,
      data.image_2,
      data.image_3,
      data.show_in_home_page,
      data.stock,
      data.subcategory_id,
      data.title
    );
    console.log(res);
    if (res.ok) {
      navigate('/products')
    } else{
      toast.error('محصول با موفقیت اضافه نشد')
    }
    setLoading(false);
  };

  return (
    <>
    <ToastifyCM/>
      <Loading isLoading={loading} />
      <AddCM
        onSubmit={onSubmit}
        schema={addProductValidition}
        title="افزودن محصول"
        inputs={[
          { name: "title", label: "نام" },
          { name: "description", label: "اطلاعات" },
          { name: "features", label: "ویژگی ها" },
          { name: "stock", label: "تعداد" },
          { name: "price", label: "قیمت" },
          { name: "before_discount_price", label: "قیمت قبل تخفیف" },
        ]}
        selects={[
          { name: "subcategory_id", label: "دسته بندی", options: options },
          {
            name: "show_in_home_page",
            label: "نمایش در صفحه اصلی",
            options: [
              { label: "بله", value: 1 },
              { label: "خیر", value: 0 },
            ],
          },
        ]}
        fileInputs={[
          { name: "image_1", label: "عکس 1" },
          { name: "image_2", label: "عکس 2" },
          { name: "image_3", label: "عکس 3" },
        ]}
      />
    </>
  );
};

export default AddProduct;
