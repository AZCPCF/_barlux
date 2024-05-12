import { create } from "apisauce";
const apiClient = create({ baseURL: "https://api-int.dadekavweb.ir/api" });
apiClient.addAsyncRequestTransform(async (req) => {
  const token = await localStorage.getItem("token");
  if (!token) return;
  req.headers["Authorization"] = `Bearer ${token}`;
});
export default apiClient;
