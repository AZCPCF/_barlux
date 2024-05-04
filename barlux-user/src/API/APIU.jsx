import { create } from "apisauce";
const apiClientU = create({ baseURL: "https://api-int.dadekavweb.ir/api" });
apiClientU.addAsyncRequestTransform(async (req) => {
  const token = await localStorage.getItem("tokenu");
  if (!token) return;
  req.headers["Authorization"] = `Bearer ${token}`;
});
export default apiClientU;
