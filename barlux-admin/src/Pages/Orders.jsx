import React, { useEffect, useState } from "react";
import TableCM from "../Components/TableCM";

import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { deleteOrder, getOrders } from "../API/Requests";
import { GenerateOrder } from "../Helpers/functions";
export default function Orders() {
  const tableHead = [
    "مبلغ قابل پرداخت",
    "حالت پرداخت",
    "نام کاربر",
    "وضعیت",
    "تاریخ پرداخت",
    "تغییر وضعیت",
  ];
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const Close = () => {
    setOpen(false);
  };
  const Open = () => {
    console.log("run");
    setOpen(true);
  };
  const 
  
  handeT = async (id) => {
    setLoading(true);
    await deleteOrder(id);
    getFunction();
    setLoading(false);
  };
  const navigate = useNavigate();
  const getFunction = async () => {
    setLoading(true);
    const res = await getOrders();
    console.log(res);
    setOrders(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  return (
    <>
      <Loading isLoading={loading} />
      <TableCM tableHead={tableHead}>
        <GenerateOrder
          orders={orders}
          open={open}
          Open={Open}
          Close={Close}
          onTrue={handeT}
          navigate={navigate}
        />
      </TableCM>
    </>
  );
}
