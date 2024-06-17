import { useState } from "react";

const useTest = ({defValue = 1}) => {
  const [test, setTest] = useState(defValue);
  console.log(false);
  const getData = () => {
    return 10;
  };
  return { data: getData, setData: setTest,d:Date };
};

export default useTest;
