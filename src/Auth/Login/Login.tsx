import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const LoginSchema = Yup.object().shape({

    email: Yup.string()
        .required('Este campo es requerido')
        .email('Invalid email address'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(10, 'Password must be at most 10 characters')
        .required('El password es requerido y tiene que tener un minimo de 8 caracteres y un maximo de 10'),
});

const validateEmail = (values: string) => {
    let error;
    if (!values) {
        error = 'Este campo es requerido';
    } else if (values === 'cotito@cotito.com.ar') {
        error = `Welcome ${values}`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
        error = 'Invalid email address';
    }
    return error;
}

export const LoginForm = () => {

    const navigate = useNavigate();
    const [attempts, setAttempts] = useState(3);
    const [isLoggedIn, setIsLogged] = useState(false);

    const handleLogin = (values: { email: string; password: string; }) => {

        if (values.email !== 'cotito@cotito.com.ar' || values.password !== 'Admin123') {
            setAttempts(attempts - 1);

            if (attempts === 1) {
                alert('Este es tu último intento. Si fallas nuevamente, serás redirigido a la página de inicio.');
            }

            if (attempts <= 0) {
                alert('Has excedido el límite de intentos. Serás redirigido a la página de inicio.');
                navigate('/');
            }
        } else {
            setIsLogged(true);
            navigate('/Page1', { replace: true });
            console.log(values);
        }
    };

    const handleLogOut = () => {
        alert ('La sesión ah sido cerrada con éxito');
        setIsLogged(false);
        navigate('/');
    };

    const validatePassword = (values: string | any[]) => {
        let error;
        if (!values) {
            error = 'Este campo es requerido';
        } else if (values === 'Admin123') {
            error = `Well done `;
            alert('Bienvenido');
            navigate('/Page1');
        }
        return error;
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <Field name="email" type="email" validate={validateEmail}/>
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <Field name="password" type="password" validate={validatePassword}/>
                            {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        </div>
                        <div className={"container"}>
                            {/* muestra un párrafo que indica el número de intentos restantes*/}
                            {attempts > 0 ? <p>Intentos restantes: {attempts}</p> : <p>Intentos restantes: 0</p>}
                            <button
                                onClick={() => isLoggedIn ? handleLogOut : () => handleLogin}
                                type="submit"
                                className="btn btn-outline-secondary m-2">{isLoggedIn ? 'Logout' : 'Login'}
                            </button>

                            <button onClick={() => {
                                navigate('/');
                            }} type="button" className="btn btn-outline-secondary m-2">Cancel
                            </button>
                            <div>
                                <span>You do not have an account?</span>
                                <a href="/AltaUser">Register</a>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
