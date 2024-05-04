import React, { useContext, useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Colors from "../Assets/colors";
import { adminlogin } from "../API/Requests";
import Loading from "../Components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TokenContext } from "../Hooks/ToastContext";
const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be 4 char or more"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be 4 char or more"),
});

const Login = () => {
  const {login} = useContext(TokenContext)
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const res = await adminlogin(values.username, values.password);
      if (res.status === 200) {
        toast.success("login");
        console.log(res.data.token);
        login(res.data.token);
      } else {
        toast.error("username or password is wrong");
      }
      setIsLoading(false);
    },
  });

  return (
    <>
      <Loading isLoading={isLoading} />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            padding: "50px",
            border: `1px solid ${Colors.default}`,
            borderRadius: "4px",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            ورود ادمین
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="نام کاریری"
              variant="outlined"
              fullWidth
              margin="normal"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              label="رمز عبور"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ fontSize: "16px" }}
            >
              ورود
            </Button>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Container>
      </div>
    </>
  );
};

export default Login;
