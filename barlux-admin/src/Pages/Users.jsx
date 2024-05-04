import React, { useEffect, useState } from "react";
import TableCM from "../Components/TableCM";
import { getUsers } from "../API/Requests";
import { GenerateUser } from "../Helpers/functions";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getFunction = async () => {
    setLoading(true);
    const res = await getUsers();
    setUsers(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  const tableHead = [
    "نام",
    "ایمیل",
    "شماره تماس",
    "تغییر",
    "کیف پول",
    "آدرس ها",
  ];
  return (
    <>
      <Loading isLoading={loading} />
      <TableCM tableHead={tableHead} loading={loading}>
        <GenerateUser users={users} navigate={navigate} />
      </TableCM>
    </>
  );
}
