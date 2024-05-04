import React, { useEffect, useState } from "react";
import AddCM from "../Components/AddCM";
import { addCategoryValidation } from "../Validation/Yup";
import Loading from "../Components/Loading";
import { addCategory, getMainCategory } from "../API/Requests";
import { generateMainCategoryOption } from "../Helpers/functions";
import {  toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
export default function AddCategory() {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const getFunction = async () => {
    setLoading(true);
    const res = await getMainCategory();
    console.log(res);
    setOptions(generateMainCategoryOption(res.data.data));
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  const addFunction = async (data) => {
    setLoading(true);
    const res = await addCategory(
      data.title,
      data.parent_id === "" ? null : data.parent_id
      );
    setLoading(false);
    console.log(res);
    if (res.ok) {
      navigate('/categories')
    }else{
      toast.error("دسته بندی با موفقیت اضافه نشد", {
        style: { fontFamily: "IranSans" },
      })
      
    }
  };
  return (
    <>
      <Loading isLoading={loading} />
      <AddCM
        schema={addCategoryValidation}
        title={"افزودن دسته بندی"}
        onSubmit={addFunction}
        inputs={[{ name: "title", label: "نام دسته بندی" }]}
        selects={[
          {
            name: "parent_id",
            label: "دسته بندی والد",
            options: options,
          },
        ]}
      />
    </>
  );
}
