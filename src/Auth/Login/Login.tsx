import { Formik, Field, Form } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/auth/context/AuthContext.tsx";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Este campo es requerido')
        .email('Por favor, introduce un email válido'),
    password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(20, 'La contraseña debe tener como máximo 20 caracteres')
        .required('La contraseña es requerida'),
});

export const LoginForm = () => {
    // @ts-ignore
    const { setDataUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [attempts, setAttempts] = useState(3);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // Comprobar si el usuario está autenticado

    // @ts-ignore
    const handleLogin = (values, { setSubmitting }) => {
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Credenciales inválidas');
                }
                return response.json();
            })
            .then(data => {
                setDataUser(data);
                localStorage.setItem("token", data.token);
                setIsLoggedIn(true); // Establecer el estado de autenticación a verdadero

                Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Inicio de sesión exitoso',
                });
                navigate('/');
            })
            .catch(error => {
                console.error('Error:', error);
                setAttempts(prevAttempts => prevAttempts - 1);
                Swal.fire({
                    icon: 'error',
                    title: 'Error de inicio de sesión',
                    text: error.message || 'Ha ocurrido un error al iniciar sesión',
                });
            })
            .finally(() => setSubmitting(false));
    };
    return (
        <div className="container">
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <Field name="email" type="email" className="form-control" />
                            {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Contraseña</label>
                            <Field name="password" type="password" className="form-control" />
                            {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="container">
                            <p>Intentos restantes: {attempts}</p>
                            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                            <button type="button" onClick={() => navigate('/')} className="btn btn-secondary">Cancelar</button>
                            <div>
                                <span>¿No tienes una cuenta?</span>
                                <a href="/AltaUser" className="ms-2">Registrarse</a>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            {/* Mostrar pestañas solo si el usuario está autenticado */}
            {isLoggedIn && (
                <div>
                    <button onClick={() => navigate('/vender')}>Vender</button>
                    <button onClick={() => navigate('/carrito')}>Mi Carrito</button>
                    <button onClick={() => navigate('/historial')}>Historial</button>
                    <button onClick={() => navigate('/compras')}>Mis Compras</button>
                    <button onClick={() => navigate('/favoritos')}>Favoritos</button>
                </div>
            )}
        </div>
    );
};
