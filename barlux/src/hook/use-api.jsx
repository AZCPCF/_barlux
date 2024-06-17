import { useEffect, useState } from "react";
import useLoading from "./use-loading";
import api from "../API/API";
const useApi = () => {
  const { loading, setLoading } = useLoading();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [sentData,setSentData] = useState(null)
  const request = async (method, url, data) => {
    setLoading(true);
    console.log(data);
    const response = await api[method](url, data);
    console.log(response);
    setData(response.data);
    setSentData(data)
    setStatus({ status: response.status });
    // console.log(response);
    // console.log(response.data.code?response.data.code:null);
    // console.log(data);
    // console.log(error);
    setLoading(false);
  };
  return { request, data, loading, status ,sentData};
};

export default useApi;
