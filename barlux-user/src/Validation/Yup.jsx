import * as yup from "yup";
export const addCategoryValidation = yup.object().shape({
  title: yup.string().required("این فیلد نمیتواند خالی باشد"),
  parent_id: yup.string(),
});
export const addDiscountValidation = yup.object().shape({
  percent: yup
    .number()
    .typeError("این فیلد باید عدد باشد")
    .min(10, "این فیلد باید عدد باشد و نمیتواند کمتر از 10 باشد")
    .max(95, "این فیلد باید عدد باشد و نمیتواند بیشتر از 95 باشد")
    .required("این فیلد نمیتواند خالی باشد"),
  max: yup
    .number()
    .typeError("این فیلد باید عدد باشد")
    .min(10000, "این فیلد باید عدد باشد و نمیتواند کمتر از 10000 باشد")
    .nullable(),
  expired: yup.string().required("این فیلد نمیتواند خالی باشد"),
});
export const addProductValidition = yup.object().shape({
  title: yup.string().required("این فیلد باید پر شود").max(100),
  description: yup.string().max(2500),
  features: yup.string().max(2500),
  image_1: yup
    .mixed()
    .test(
      "fileSize",
      "سایز فایل بیش از حد مجاز (6 مگابایت) یا فایلی اپلود نشده است",
      (value) => {
        return value.size < 6000 * 1024;
      }
    )
    .test("fileType", "Unsupported file format", (value) => {
      if (!value) return true;
      return ["image/jpg", "image/svg", "image/jpeg", "image/png"].includes(
        value.type
      );
    })
    .required("این فیلد باید پر شود"),
  image_2: yup
    .mixed()
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      return value.size < 6000 * 1024;
    })
    .test("fileType", "Unsupported file format", (value) => {
      if (!value) return true;
      return ["image/jpg", "image/svg", "image/jpeg", "image/png"].includes(
        value.type
      );
    }),
  image_3: yup
    .mixed()
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      return value.size < 6000 * 1024;
    })
    .test("fileType", "Unsupported file format", (value) => {
      if (!value) return true;
      return ["image/jpg", "image/svg", "image/jpeg", "image/png"].includes(
        value.type
      );
    }),
  subcategory_id: yup
    .number()
    .typeError("این فیلد باید پر شود")
    .required("این فیلد باید پر شود"),
  show_in_home_page: yup
    .boolean()
    .typeError("این فیلد باید پر شود")
    .required("این فیلد باید پر شود"),
  stock: yup
    .number()
    .typeError("تعداد باید عدد باشد")
    .min(0, "تعداد نمیتواند منفی باشد"),
  price: yup
    .number()
    .typeError("این فیلد باید عدد باشد")
    .max(10000000)
    .required("این فیلد باید پر شود"),
  before_discount_price: yup.number()
  .typeError("این فیلد باید عدد باشد").max(10000000),
});
export const addWalletValidation = yup.object().shape({
  amount: yup.number().typeError('این فیلد باید عدد باشد').required('این فیلد باید پر شود'),
  action: yup.string().required('این فیلد باید پر شود')
})
export const changeUserValidation = yup.object().shape({
  name:yup.string().typeError('این فیلد باید دارای حروف باشد').max(100,'نام نمیتواند بیشتر از 100 حرف باشد'),
  email:yup.string().email().typeError('این فیلد باید ایمیل باشد'),
  phoneNumber:yup.string().typeError('این فیلد باید شماره تلفن باشد').max(11)

})