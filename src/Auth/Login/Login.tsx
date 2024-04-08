import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../components/auth/context/AuthContext.tsx";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Este campo es requerido')
        .email('Invalid email address'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(10, 'Password must be at most 10 characters')
        .required('El password es requerido y tiene que tener un minimo de 8 caracteres y un maximo de 10'),
});
/*
const validateEmail = (value: string) => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
    const storedEmail = userLocalStorage.email;
    let error;
    if (!value) {
        error = 'Este campo es requerido';
    } else if (value !== storedEmail) {
        error = 'El correo electrónico ingresado no coincide';
    }

    return error;
};*/

export const LoginForm = () => {
    // @ts-ignore
    const { dataUser, setDataUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [attempts, setAttempts] = useState(3);
    const [isLoggedIn, setIsLogged] = useState(false);

    useEffect(() => {
        const userLocalStorage = JSON.parse(localStorage.getItem('userData') || 'null');
        if (userLocalStorage) {
            setDataUser(userLocalStorage);
        }
        setIsLogged(true);
        setDataUser(userLocalStorage);
        console.log('userLocalStorage', dataUser);
    }, [])

    const handleLogin = (values: { email: string; password: string }) => {
        // Obtener los datos del usuario almacenados en localStorage
        const userLocalStorage = JSON.parse(localStorage.getItem('userData') || '{}');
        const storedEmail = userLocalStorage.email;
        const storedPassword = userLocalStorage.password;

        // Comparar los valores ingresados en el formulario con los almacenados en localStorage
        if (values.email !== storedEmail || values.password !== storedPassword) {
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
            alert('Has iniciado sesión con éxito');
            navigate('/Page1', { replace: true });
            console.log(values);
        }

    };
/*
    const validatePassword = (value: string) => {
        const userLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
        const storedPassword = userLocalStorage.password;
        let error;

        if (!value) {
            error = 'Este campo es requerido';
        } else if (value !== storedPassword) {
            error = 'La contraseña ingresada no es válida';
        }

        return error;
    };*/

    const handleLogOut = () => {
        alert ('La sesión ah sido cerrada con éxito');
        setIsLogged(false);
        navigate('/');
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleLogin(values);
                    setSubmitting(false);
                }}
            >
                {({errors: {email, password}, touched}) => (
                    <Form>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <Field name="email" type="email"  />
                            {email && touched.email ? (
                                <div>{email}</div>
                            ) : null}
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <Field name="password" type="password" />
                            {password && touched.password ? <div>{password}</div> : null}
                        </div>
                        <div className={"container"}>
                            {/* muestra un párrafo que indica el número de intentos restantes*/}
                            {attempts > 0 ? <p>Intentos restantes: {attempts}</p> : <p>Intentos restantes: 0</p>}
                            <button
                                type="submit"
                                className="btn btn-outline-secondary m-2">{isLoggedIn ? 'Logout' : 'Login'}
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/');
                                }}
                                type="button"
                                className="btn btn-outline-secondary m-2">
                                Cancel
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
