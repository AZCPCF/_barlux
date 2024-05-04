import React, { useEffect, useState } from "react";
import AddCM from "../Components/AddCM";
import { addCategoryValidation, addWalletValidation } from "../Validation/Yup";
import Loading from "../Components/Loading";
import { addCategory, addWallet, getMainCategory } from "../API/Requests";
import { generateMainCategoryOption } from "../Helpers/functions";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import ToastifyCM from "../Components/ToastifyCM";
export default function AddCategory() {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const addFunction = async (data) => {
    setLoading(true);
    const res = await addWallet(data.amount, params.id, data.action);
    console.log(res);
    if (res.ok) {
        navigate(-1)
    }else if (res.status === 420){
        toast.error("مقدار کاهش از مقدار کل کیف پول کاربر بیشتر است", {
            style: { fontFamily: "IranSans" },
        })
        
    } else{
        toast.error("کیف پول با موفقیت اضافه نشد", {
            style: { fontFamily: "IranSans" },
        })
    }
    setLoading(false);  
  };
  return (
    <>
    <ToastifyCM/>
      <Loading isLoading={loading} />
      <AddCM
        schema={addWalletValidation}
        title={"افزودن کیف پول"}
        onSubmit={addFunction}
        inputs={[{ name: "amount", label: "مقدار" }]}
        selects={[
          {
            name: "action",
            label: "روند",
            options: [
              { value: "increase", label: "افزایش" },
              { value: "decrease", label: "کاهش" },
            ],
          },
        ]}
      />
    </>
  );
}
