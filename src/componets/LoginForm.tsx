import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import IUser from '../types/usertype';
import { loginValidationSchema } from './loginValidation';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const history = useNavigate();
    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values: IUser, resetForm: () => void) => {
        const { email, password } = values
        const getUser = localStorage.getItem("user");

        if (getUser && getUser.length) {
            const userData = JSON.parse(getUser);
            const loginData = userData?.filter((login: { email: string, password: string }) => {
                return login?.email === email && login?.password === password
            });

            if (loginData && loginData?.length === 0) {
                alert("Invalid User Name & Password")
            } else {
                history("/home");
            }
        }

    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
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

                    <Form >
                        <div className="form-group">
                            <label htmlFor="email"> Email </label>
                            <Field
                                name="email"
                                type="email"
                                className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"> Password </label>
                            <Field
                                name="password"
                                type="password"
                                className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group mt-2">
                            <button type="submit" className="btn btn-primary">
                                Login
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
        </>
    );
}

export default LoginForm;
