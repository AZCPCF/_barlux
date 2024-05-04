import { useEffect, useState } from "react";
import { deleteDisc, deleteDiscount, getDiscount } from "../API/Requests";
import { GenerateDiscount, generateDiscount } from "../Helpers/functions";
import Loading from "../Components/Loading";
import TableCM from "../Components/TableCM";
import AddButton from "../Components/AddButton";
import Modal from "../Components/Modal";
export default function Discounts() {
  const [discounts, setDiscounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableHead = [
    "کد تخفیف",
    "درصد تخفیف",
    "حداکثر قیمت",
    "تاریخ انقضا",
    "وضعیت",
    "حذف",
  ];
  // const openModal = (id) => {
    //   setDelId(id)
    //   setModal(true)
    // }
    const [open, setOpen] = useState(false);
  const Close = () => {
    setOpen(false);
  };
  const Open = () => {
    console.log("run");
    setOpen(true);
  };
  const handeT = async (id) => {
  setLoading(true)
  await deleteDiscount(id)
  getFunction()
  setLoading(false)
  }
  const getFunction = async () => {
    setLoading(true);
    const res = await getDiscount();
    console.log(res);
    setDiscounts(res.data.data);
    console.log(discounts);
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  return (
    <>
      {/* <Modal isOpen={modal} onTrue={''} text={' '} closeModal={closeModal} /> */}
      <Loading isLoading={loading} />
      <AddButton navigate={"discounts/add"} />
      <TableCM tableHead={tableHead}>
        <GenerateDiscount
          discounts={discounts}
          open={open}
          Open={Open}
          Close={Close}
          onTrue={handeT}
        />
      </TableCM>
    </>
  );
}