import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema } from './validationSchema';
import IUser from '../types/usertype';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function SignUpForm() {
    const history = useNavigate();
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        profile: "",
        password: "",
        confirmPassword: "",
    };

    const [data, setData] = useState([])
    const handleSubmit = (values: IUser, resetForm: () => void) => {
        localStorage.setItem("user", JSON.stringify([...data, values]));
        toast.success('User Registered Successfully !', {
            position: toast.POSITION.BOTTOM_CENTER
        });
        resetForm();
        history("/login");
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(false);
                    handleSubmit(values, resetForm);
                }}
            >
                {({ values,
                    errors,
                    touched,
                    resetForm,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting }) => (

                    <Form>

                        <div className="form-group">
                            <label htmlFor="firstName"> First Name </label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName"> Last Name </label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"> Email </label>
                            <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"> Password </label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword"> Confirm Password </label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>


                        <div className="form-group mt-2">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            <button
                                type="button"
                                onClick={() => resetForm()}
                                className="btn btn-warning float-right"
                            >
                                Reset
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </>
    );
}

export default SignUpForm;
