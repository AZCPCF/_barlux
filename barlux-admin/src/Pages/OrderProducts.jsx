import React, { useEffect, useState } from "react";
import TableCM from "../Components/TableCM";
import { getOrderById } from "../API/Requests";
import { GenerateOrderProducts } from "../Helpers/functions";
import Loading from "../Components/Loading";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
export default function OrderProducts() {
  const tableHead = ["نام محصول", "قیمت", "تعداد", "دسته بندی"];
  const [loading, setLoading] = useState(false);
  const [orderProducts, setOrderProducts] = useState([]);
  const params = useParams();
  const getFunction = async () => {
    setLoading(true);
    const res = await getOrderById(params.id);
    console.log(res);
    setOrderProducts(res.data.cart_items);
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  return (
    <>
      <Loading isLoading={loading} />
      <BackButton />
      <TableCM tableHead={tableHead}>
        <GenerateOrderProducts orderProducts={orderProducts} />
      </TableCM>
    </>
  );
}
// dar hall ersal - be etmam reside - lghv shode
