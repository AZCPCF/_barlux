import * as yup from "yup";
export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("در این فیلد حتما باید ایمیل وارد شود")
    .max(100, "ایمیل نمیتواند بیشتر از ۱۰۰ حرف باشد")
    .required(`فیلد ایمیل باید پر شود`),
  password: yup
    .string()
    .min(8, "رمز عبور نمیتواند از ۸ حرف کمتر باشد ")
    .max(100, "رمز عبور نمیتواند بیشتر از ۱۰۰ حرف باشد")
    .required(`فیلد رمز عبور باید پر شود`),
});
export const signUpValidation = yup.object().shape({
  email: yup
    .string()
    .email("در این فیلد حتما باید ایمیل وارد شود")
    .max(100, "ایمیل نمیتواند بیشتر از ۱۰۰ حرف باشد")
    .required(`فیلد ایمیل باید پر شود`),
  password: yup
    .string()
    .min(8, "رمز عبور نمیتواند از ۸ حرف کمتر باشد ")
    .max(100, "رمز عبور نمیتواند بیشتر از ۱۰۰ حرف باشد")
    .required(`فیلد رمز عبور باید پر شود`),
  name: yup
    .string()
    .min(8, "نام کاربری نمیتواند کمتر از ۸ حروف باشد")
    .max(100, "نام کاربری نمیتواند بیشتر از ۱۰۰ حرف باشد")
    .required(`فیلد نام کاربری باید پر شود`),
});
export const forgotPasswordValidation = yup.object().shape({
  email: yup
    .string()
    .email("در این فیلد حتما باید ایمیل وارد شود")
    .max(100, "ایمیل نمیتواند بیشتر از ۱۰۰ حرف باشد")
    .required(`فیلد ایمیل باید پر شود`),
});
export const verifyOTPValidation = yup.object().shape({
  otp: yup
    .string()
    .required("فیلد کد تایید باید پر شود")
    .matches(/^\d{6}$/, "کد تایید وارد شده باید از اعداد ۱ تا ۶ لاتین باشند")
});
export const changePasswordAuthValidation = yup.object().shape({
  new_password: yup
    .string().min(8,'رمز عبور جدید نمیتواند کمتر از ۸ حرف باشد')
    .required("فیلد رمز عبور جدید باید پر شود")
});
