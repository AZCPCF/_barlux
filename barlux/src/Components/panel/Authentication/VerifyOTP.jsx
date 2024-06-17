import { Controller } from "react-hook-form";
import { useContext, useEffect } from "react";
import Authentication from "./Authentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import {
  LoginSubmit,
  Navigator,
  Error,
} from "../../../Styles/Panel/AuthenticationStyle";
import { ResponsiveContext } from "../../../Store/ResponsiveContext";
import { verifyOTPValidation } from "../../../Validation/validates";
import { MuiOtpInput } from "mui-one-time-password-input";

const VerifyOTPComponent = ({ handleRequest, onSubmit, useEffectDep }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verifyOTPValidation),
    defaultValues: {
      otp: "",
    },
  });

  const { md } = useContext(ResponsiveContext);
  useEffect(handleRequest, useEffectDep);
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
              تایید بازیابی رمز عبور
            </Typography>
          </Grid>
          <Grid item xs={"12"}>
            <Typography
              fontSize={md ? "12px" : "16px"}
              width={"90%"}
              textAlign={"center"}
              margin={"0 auto"}
              pb={md ? "10px" : "30px"}
            >
              کد تایید ۶ رقمی که به ایمیلتان ارسال شده را در این قسمت وارد
              نمایید
            </Typography>
          </Grid>
          <Grid
            xs={12}
            container
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Grid xs={6} container justifyContent={"center"}>
              <Controller
                name="otp"
                control={control}
                error={errors.otp?.message}
                rules={{ validate: (value) => value.length === 6 }}
                render={({ field }) => (
                  <MuiOtpInput
                    {...field}
                    sx={{
                      direction: "rtl",
                      "& input": {
                        border: errors.otp?.message
                          ? "1px solid red"
                          : "1px solid #ccc",
                        borderRadius: "4px",
                      },
                    }}
                    length={6}
                  />
                )}
              />
            </Grid>
            <Grid xs={12} container p={md ? "5px 0" : "20px 0"}>
              {errors.otp?.message && (
                <Error fontSize={md ? "12px" : "16px"} margin={"0 auto"}>
                  {errors.otp?.message}
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
              تایید
            </LoginSubmit>
          </Grid>
        </Grid>
        <Typography
          sx={{ position: "absolute", bottom: "20px", margin: "0 auto" }}
        >
          <Navigator to={"/authentication/login"}>بازگشت به صفحه ورود</Navigator>
        </Typography>
      </Grid>
    </Authentication>
  );
};

export default VerifyOTPComponent;
