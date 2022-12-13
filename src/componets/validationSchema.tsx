import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required!"),
    lastName: Yup.string().required("This field is required!"),
    email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
    password: Yup.string()
        .test(
            "len",
            "The password must be between 6 and 40 characters.",
            (val: any) =>
                val &&
                val.toString().length >= 6 &&
                val.toString().length <= 40
        )
        .required("This field is required!"),
    confirmPassword: Yup.string()
        .test(
            "len",
            "The password must be between 6 and 40 characters.",
            (val: any) =>
                val &&
                val.toString().length >= 6 &&
                val.toString().length <= 40
        )
        .required("This field is required!"),
});
