import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const VALID_PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/;

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .matches(VALID_PASSWORD_REGEX, 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial')
        .required('Required'),

});

export const AltaUser = () => {

    const navigate = useNavigate();

    const handleCancel = () => {
        console.log("Cancel");
        navigate('/');
    }
    const handleReset = () => {
        console.log("Reset");
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                }}
       //         validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // Guardar los datos del usuario en localStorage
                    const userData = {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password,
                    };
                    localStorage.setItem('userData', JSON.stringify(userData));
                    console.log(userData);
                    alert('Usuario creado con éxito');
                    navigate('/Login');
                    setSubmitting(false);
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" className="form-control"/>
                            {errors.firstName && touched.firstName ? (
                                <div>{errors.firstName}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" className="form-control"/>
                            {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" className="form-control"/>
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className="form-control"/>
                            {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Repeat Password</label>
                            <Field name="repeatPassword" type="password" className="form-control"/>
                            {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        </div>
                        <div className="btn m-2 p-2">
                           <button type="submit" className="btn btn-primary m-2">Submit</button>
                            <button
                                onClick= {handleCancel }
                                type="button"
                                className="btn btn-secondary m-2">Cancel</button>
                            <button type="reset"
                                    onClick={handleReset}
                                    className="btn btn-secondary m-2">Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};