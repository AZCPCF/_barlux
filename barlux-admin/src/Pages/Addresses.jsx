import React, { useEffect, useState } from "react";
import AddButton from "../Components/AddButton";
import TableCM from "../Components/TableCM";
import { getAddressesById } from "../API/Requests";
import { GenerateAddress } from "../Helpers/functions";
import Loading from "../Components/Loading";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
export default function Addresses() {
  const tableHead = ["استان", "شهر", "اطلاعات", "زمان افزودن"];
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const params = useParams();
  const getFunction = async () => {
    setLoading(true);
    const res = await getAddressesById(params.id);
    console.log(res);
    setAddresses(res.data);
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
        <GenerateAddress addresses={addresses} />
      </TableCM>
    </>
  );
}
// dar hall ersal - be etmam reside - lghv shode