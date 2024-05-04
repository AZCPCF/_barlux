import React from "react";
import { useForm, Controller } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "../App.css";
import DatePicker from "react-multi-date-picker";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import BackButton from "./BackButton";
import { CloudUploadOutlined } from "@mui/icons-material";

const AddCM = ({
  onSubmit,
  schema,
  inputs,
  title,
  selects,
  dateInputs,
  fileInputs,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <BackButton />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Box
          sx={{ width: "75%", padding: "50px", boxShadow: 3, borderRadius: 2 }}
        >
          <Typography variant="h5" sx={{ p: 2 }}>
            {title}
          </Typography>
          <form onSubmit={handleSubmit(handleFormSubmit)} key={Math.random()}>
            <Grid container spacing={2}>
              {inputs
                ? inputs.map((input, index) => (
                    <Grid item xs={12} key={index}>
                      <Controller
                        name={input.name}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label={input.label}
                            variant="outlined"
                            type={input.type}
                            fullWidth
                            error={!!errors[input.name]}
                            helperText={errors[input.name]?.message}
                          />
                        )}
                      />
                    </Grid>
                  ))
                : ""}
              {fileInputs
                ? fileInputs.map((fileInput, index) => (
                    //   <Field label="Picture" error={errors.picture}>
                    //   <Controller
                    //     name={"picture"}
                    // control={control}
                    //     rules={{ required: "Recipe picture is required" }}
                    //     render={({ field: { value, onChange, ...field } }) => {
                    //       return (
                    //         <Input
                    //           {...field}
                    //           value={value?.fileName}
                    //           onChange={(event) => {
                    //             onChange(event.target.files[0]);
                    //           }}
                    //           type="file"
                    //           id="picture"
                    //         />
                    //       );
                    //     }}
                    //   />
                    // </Field>
                    <Grid item xs={12} key={index}>
                      <Controller
                        name={fileInput.name}
                        control={control}
                        defaultValue=""
                        rules={{ required: "Recipe picture is required" }}
                        render={({ field: { value, onChange, ...field } }) => {
                          return (
                            <>
                              <Button
                                variant="outlined"
                                component="label"
                                fullWidth
                                error={!!errors[fileInput.name]}
                                style={{ marginTop: 10 }}
                                endIcon={<CloudUploadOutlined />}
                              >
                                {fileInput.label}
                                <input
                                  {...field}
                                  type="file"
                                  {...field}
                                  value={value?.fileName}
                                  onChange={(event) => {
                                    onChange(event.target.files[0]);
                                  }}
                                  id="picture"
                                  hidden
                                />
                              </Button>
                              {errors[fileInput.name] && (
                                <p style={{ color: "red", marginTop: 5 }}>
                                  {errors[fileInput.name].message}
                                </p>
                              )}
                            </>
                          );
                        }}
                      />
                    </Grid>
                  ))
                : ""}

              {selects
                ? selects.map((select, index) => (
                    <Grid item xs={12} key={index}>
                      <Controller
                        name={select.name}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            select
                            label={select.label}
                            variant="outlined"
                            fullWidth
                            defaultValue={""}
                            error={!!errors[select.name]}
                            helperText={errors[select.name]?.message}
                          >
                            <MenuItem value={""}>...</MenuItem>
                            {select.options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        )}
                      />
                    </Grid>
                  ))
                : ""}
              {dateInputs
                ? dateInputs.map((input, index) => (
                    <Grid item xs={12} key={index}>
                      <Controller
                        control={control}
                        name={input.name}
                        defaultValue={new Date()}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <>
                            <DatePicker
                              style={{
                                width:'100%',
                                paddingTop: "15px",
                                paddingBottom: "10px",
                                fontSize: "1rem",
                                fontFamily: "IranSans",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                                // boxSizing: 'border-box',
                              }}
                              onChange={onChange}
                              onBlur={onBlur}
                              dateFormat="Y-m-d"
                              placeholderText="تاریخ انقضا"
                              calendar={persian}
                              locale={persian_fa}
                              calendarPosition="bottom-right"
                              value={value}
                            />
                            {errors[input.name] && (
                              <Typography
                                variant="subtitle2"
                                sx={{ fontSize: "12px", pl: 2 }}
                                color="error"
                              >
                                {errors[input.name].message}
                              </Typography>
                            )}
                          </>
                        )}
                      />
                    </Grid>
                  ))
                : ""}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  افزودن
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default AddCM;
