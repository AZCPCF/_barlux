import { useEffect, useState } from "react";
import { getCategories } from "../API/Requests";
import { GenerateCategory } from "../Helpers/functions";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import TableCM from "../Components/TableCM";
import AddButton from "../Components/AddButton";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const tableHead = ["نام", "دسته بندی والد", "تغییر"];
  const getFunction = async () => {
    setLoading(true);
    const res = await getCategories();
    console.log(res);
    setCategories(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  return (
    <>
      <Loading isLoading={loading} />
      <AddButton navigate={"categories/add"} />
      <TableCM tableHead={tableHead}>
        <GenerateCategory categories={categories} navigate={navigate} />
      </TableCM>
    </>
  );
}
