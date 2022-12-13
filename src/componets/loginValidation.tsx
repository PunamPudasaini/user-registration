import * as Yup from 'yup';


export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
    password: Yup.string().required("This field is required!"),
});


