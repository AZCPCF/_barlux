import React, { useCallback, useContext, useEffect } from "react";
import Authentication from "./Authentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {
  LoginInput,
  LoginSubmit,
  Navigator,
  Error,
} from "../../../Styles/Panel/AuthenticationStyle";
import EmailIcon from "@mui/icons-material/Email";
import { ResponsiveContext } from "../../../Store/ResponsiveContext";
import { loginValidation } from "../../../Validation/validates";

const LoginComponent = ({ onSubmit, handleRequest, useEffectDep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(handleRequest, useEffectDep);
  const { md } = useContext(ResponsiveContext);
  return (
    <Authentication handleSubmit={handleSubmit(onSubmit)}>
      <Grid
        sx={{ position: "relative" }}
        height={md ? "70vh" : "100vh"}
        alignContent={"space-around"}
        container
        justifyContent={"center"}
      >
        <Grid
          container
          xs={"12"}
          alignContent={"space-around"}
          justifyContent={"center"}
          height={md ? "70%" : "60%"}
        >
          <Grid item xs={"12"}>
            <Typography
              textAlign={"center"}
              fontSize={md ? "24px" : "40px"}
              fontWeight={"bold"}
              width={"90%"}
              m={"0 auto"}
              mb={"20px"}
            >
              !ورود و ثبت نام
            </Typography>
          </Grid>
          <Grid item xs={"12"}>
            <Typography
              fontSize={md ? "12px" : "16px"}
              width={"90%"}
              textAlign={"center"}
              margin={"0 auto"}
              pb={"20px"}
            >
              شرکت نرم افزاری داده کاووب در سال 1396 فعالیت خود را در شهرستان
              قائمشهر در سه بخش طراحی سایت سامانه های تحت وب و اپلیکیشن های
              اندروید و آی او اس آغاز طراحی سایت سامانه های تحت وب و اپلیکیشن
              های اندروید و آی
            </Typography>
          </Grid>
          <Grid xs={12} container>
            <Grid xs={12} container justifyContent={"center"}>
              <LoginInput
                id="outlined-basic"
                {...register("email")}
                error={errors.email?.message}
                label="ایمیل"
                variant="outlined"
                InputProps={{
                  endAdornment: <EmailIcon />,
                }}
              />
            </Grid>
            <Grid xs={12} container p={md ? "5px 0" : "20px 0"}>
              {errors.email?.message && (
                <Error fontSize={md ? "12px" : "16px"} margin={"0 auto"}>
                  {errors.email?.message}
                </Error>
              )}
            </Grid>
          </Grid>
          <Grid
            xs={12}
            container
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Grid xs={12} container justifyContent={"center"} >
              <Grid xs={12} justifyContent={'center'} container >
                <LoginInput
                  id="outlined-basic"
                  {...register("password")}
                  label="رمز عبور"
                  variant="outlined"
                  error={errors.password?.message}
                  InputProps={{
                    endAdornment: <LockIcon />,
                  }}
                />
              </Grid>
              <Typography p={'10px'}>
                آیا رمز عبور خود را فراموش کردید؟
                <Navigator to={"/authentication/forgotpassword"}>بازیابی رمز عبور</Navigator>
              </Typography>
            </Grid>

            <Grid xs={12} container p={md ? "10px 0" : "20px 0"}>
              {errors.password?.message && (
                <Error fontSize={md ? "12px" : "16px"} margin={"0 auto"}>
                  {errors.password?.message}
                </Error>
              )}
            </Grid>
          </Grid>
          <Grid
            xs={"12"}
            container
            justifyContent={"center"}
            height={md ? "57px" : "73px"}
          >
            <LoginSubmit
              type="submit"
              color="primary"
              variant="contained"
              sx={{
                color: "white",
                fontSize: md ? "20px" : "32px",
                borderRadius: "16px",
                height: "100%",
              }}
            >
              ورود
            </LoginSubmit>
          </Grid>
        </Grid>
        <Typography
          sx={{ position: "absolute", bottom: "20px", margin: "0 auto" }}
        >
          آیا ثبت نام نکرده اید؟ <Navigator to={"/authentication/signup"}>ثبت نام</Navigator>
        </Typography>
      </Grid>
    </Authentication>
  );
};

export default LoginComponent;
