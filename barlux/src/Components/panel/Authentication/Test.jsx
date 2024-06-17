import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useApi from "../../../hook/use-api";

const Test = () => {
  const { request, data, sentData, status } = useApi();
  const a = async () => {
    await request("post", "/user/forgot_password/verify", {
      email: 'location.state.email',
    });
  };
  useEffect(() => {
    console.log(data);
  }, [data,status]);
  return <div>salam</div>;
};

export default Test;
