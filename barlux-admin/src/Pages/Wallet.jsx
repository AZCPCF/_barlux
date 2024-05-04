import React, { useEffect, useState } from "react";
import TableCM from "../Components/TableCM";

import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { getWalletById } from "../API/Requests";
import { GenerateWallet, generateWallet } from "../Helpers/functions";
import AddButton from "../Components/AddButton";
import BackButton from "../Components/BackButton";
export default function Wallet() {
  const tableHead = ["مقدار", "روند", "زمان افزودن"];
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const getFunction = async () => {
    setLoading(true);
    const res = await getWalletById(params.id);
    console.log(res);
    setWallet(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  return (
    <>
    <BackButton />
    <AddButton navigate={`wallet/add/${params.id}`} />
      <Loading isLoading={loading} />
      <TableCM tableHead={tableHead}>
        <GenerateWallet wallets={wallet}/>
      </TableCM>
    </>
  );
}
