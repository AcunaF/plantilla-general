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

    const handleSubmit = (values: any) => {

        alert('Usuario creado con éxito');
        navigate('/Login')
        console.log(values);
    }
    const handleCancel = () => {
        console.log("Cancel");
        navigate('/');
    }

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
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
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
                            <button onClick={handleSubmit}  type="submit" className="btn btn-primary">Submit</button>
                            <button
                                onClick= {handleCancel }
                                type="submit"
                                className="btn btn-secondary m-2">Cancel</button>
                            <button type="reset" className="btn btn-secondary m-2">Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};