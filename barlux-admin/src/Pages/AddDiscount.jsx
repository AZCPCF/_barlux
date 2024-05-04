import React, { useState } from "react";
import AddCM from "../Components/AddCM";
import { addDiscountValidation } from "../Validation/Yup";
import Loading from "../Components/Loading";
import { addDsicount } from "../API/Requests";
import { persianToEnglishNumbers } from "../Helpers/functions";
import {  toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ToastifyCM from "../Components/ToastifyCM";
export default function AddCategory() {
  const [loading, setLoading] = useState(false);
  const navigaate = useNavigate()
  const addFunction = async (data) => {
    setLoading(true);
    console.log(data.expired);
    if (String(data.expired).includes("(Iran Standard Time)")) {
      data.expired = persianToEnglishNumbers(
        new Date(data.expired).toLocaleDateString("fa-ir", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      );
      console.log(data);
    } else {
      data.expired = persianToEnglishNumbers(data.expired);
      console.log(data);
    }
    const res = await addDsicount(data.percent, data.expired, data.max);
    setLoading(false);
    console.log(res);
    if (res.status === 200) {
      toast.success("کد تخفیف با موفقیت اضافه شد", {
        style: { fontFamily: "IranSans" },
      })
      navigaate(-1)
    }
  };
  return (
    <>
      <ToastifyCM />
      <Loading isLoading={loading} />
      <AddCM
        schema={addDiscountValidation}
        title={"افزودن کد تخفیف"}
        onSubmit={addFunction}
        inputs={[
          { name: "percent", label: "درصد تخیف", type: "number" },
          { name: "max", label: "حداکثر مقدار خرید", type: "number" },
        ]}
        dateInputs={[{ name: "expired", label: "تاریخ انقضا" }]}
      />
    </>
  );
}
