import { useContext, useEffect } from "react";
import Authentication from "./Authentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import {
  LoginInput,
  LoginSubmit,
  Navigator,
  Error,
} from "../../../Styles/Panel/AuthenticationStyle";
import EmailIcon from "@mui/icons-material/Email";
import { ResponsiveContext } from "../../../Store/ResponsiveContext";
import { changePasswordAuthValidation } from "../../../Validation/validates";

const ChangePasswordComponent = ({ handleRequest, onSubmit, useEffectDep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordAuthValidation),
    defaultValues: {
      new_password: "",
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
              تغییر رمز عبور
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
              رمز عبور جدید خود را وارد کنید
            </Typography>
          </Grid>
          <Grid xs={12} container>
            <Grid xs={12} container justifyContent={"center"}>
              <LoginInput
                id="outlined-basic"
                {...register("new_password")}
                label="رمز عبور جدید"
                error={errors.new_password?.message}
                variant="outlined"
                InputProps={{
                  endAdornment: <EmailIcon />,
                }}
              />
            </Grid>
            <Grid xs={12} container p={"30px 10px 0 0"}>
              {errors.new_password?.message && (
                <Error fontSize={md ? "12px" : "16px"} margin={"0 auto"}>
                  {errors.new_password?.message}
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
                fontSize: md ? "20px" : "24px",
                borderRadius: "16px",
                height: "100%",
              }}
            >
              ارسال ایمیل بازیابی
            </LoginSubmit>
          </Grid>
        </Grid>
        {/* <Typography
          sx={{ position: "absolute", bottom: "20px", margin: "0 auto" }}
        >
          <Navigator to={"/panel"}>رد کردن این مرحله</Navigator>
        </Typography> */}
      </Grid>
    </Authentication>
  );
};

export default ChangePasswordComponent;
