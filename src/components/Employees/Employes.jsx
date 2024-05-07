import React, {useEffect} from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import './Employes.css'
import * as Yup from 'yup';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import company from "../../assets/company/imagesCompany.jpeg";
import company2 from "../../assets/company/images-logo.jpeg";
import company3 from "../../assets/company/images-seguro.png";
import {createClient} from '@supabase/supabase-js';
import {supabase} from "../../models/supa.connect.tsx";

export const Employes = () => {
    const navigate = useNavigate()
    const initialValues = {
        id: " ",
        Nombre: '',
        Apellido: '',
        Correo: '',
        Telefono: '',
        Direccion: '',
        Ciudad: '',
        Provincia: '',
        CodigoPostal: '',
        Imagenb: '',
        FechaIngreso: '',
        Cargo: '',
        Salario: '',
        Description: ''
    };
    const validationSchema = Yup.object().shape({
        Nombre: Yup.string().required('Required'),
        Apellido: Yup.string().required('Required'),
        Correo: Yup.string().email('Invalid email').required('Required'),
        Telefono: Yup.string().required('Required'),
        Direccion: Yup.string().required('Required'),
        Ciudad: Yup.string().required('Required'),
        Provincia: Yup.string().required('Required'),
        CodigoPostal: Yup.string().required('Required'),
        FechaIngreso: Yup.string().required('Required'),
        Cargo: Yup.string().required('Required'),
        Salario: Yup.string().required('Required'),
        Description: Yup.string().required('Required')

    });

    useEffect(() => {

    }, []);

    const onSubmit = async (values, {setSubmitting}) => {
        const {error} = await supabase
            .from('EmployeeRegistration')
            .insert([
                {
                    Nombre: values.Nombre,
                    Apellido: values.Apellido,
                    Correo: values.Correo,
                    Telefono: values.Telefono,
                    Direccion: values.Direccion,
                    Ciudad: values.Ciudad,
                    Provincia: values.Provincia,
                    CodigoPostal: values.CodigoPostal,
                    FechaIngreso: values.FechaIngreso,
                    Cargo: values.Cargo,
                    Salario: values.Salario,
                    Imageb: values.Imageb,
                    Description: values.Description,
                },
            ]);

        if (error) {
            console.error('Error inserting data: ', error);
        } else {
            Swal.fire(
                'Good job!',
                'you were registered as a new employee!',
                'success'
            );
        }

        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
        navigate("/Page2");
    };
    const uploadImage = async (file) => {
        try {
            const { data, error } = await supabase.storage
                .from('images')
                .upload('C:\\Users\\DSI\\Desktop/', file);

            if (error) {
                console.error('Error uploading image: ', error.message);
                return null;
            } else {
                console.log('Image uploaded successfully: ', data);
                return data.Key;
            }
        } catch (error) {
            console.error('Error uploading image: ', error.message);
            return null;
        }
    };


    return (
        <>
            <h5 className="mb-3">Ingresar nuevo empleado</h5>
            <hr/>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <Form
                        className={"container"}>
                        <div className="form-check ">
                            <div className="form-group">
                                <Field type="text" name="Nombre" placeholder="First Name" className="form-control"/>
                                <ErrorMessage name="Nombre" component="div" className="text-danger"/>
                            </div>

                            <div className="form-group">
                                <Field type="text" name="Apellido" placeholder="Last Name" className="form-control"/>
                                <ErrorMessage name="Apellido" component="div" className="text-danger"/>
                            </div>

                            <div className="form-group">
                                <Field type="email" name="Correo" placeholder="Email" className="form-control"/>
                                <ErrorMessage name="Correo" component="div" className="text-danger"/>
                            </div>

                            <div className="form-group">
                                <Field type="text" name="Telefono" placeholder="Phone" className="form-control"/>
                                <ErrorMessage name="Telefono" component="div" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <Field type="text" name="Direccion" placeholder="Adress" className="form-control"/>
                                <ErrorMessage name="Direccion" component="div" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <Field type="text" name="Ciudad" placeholder="City" className="form-control"/>
                                <ErrorMessage name="Ciudad" component="div" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <Field type="text" name="Provincia" placeholder="State" className="form-control"/>
                                <ErrorMessage name="Provincia" component="div" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <Field type="text" name="CodigoPostal" placeholder="CP" className="form-control"/>
                                <ErrorMessage name="CodigoPostal" component="div" className="text-danger"/>
                            </div>

                            <div
                                onClick={uploadImage}
                                className="form-group">
                                <Field type="file" name="Imageb" placeholder="Photo" className="form-control"/>
                                <ErrorMessage name="Imageb" component="div" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <Field type="date" name="FechaIngreso" placeholder="fecha de ingreso"
                                       className="form-control"/>
                                <ErrorMessage name="FechaIngreso" component="div" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <Field type="text" name="Cargo" placeholder="Position" className="form-control"/>
                                <ErrorMessage name="Cargo" component="div" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <Field type="text" name="Salario" placeholder="Salary" className="form-control"/>
                                <ErrorMessage name="Salario" component="div" className="text-danger"/>
                            </div>
                            <br/>
                            <div className="form-group">
                                <Field type="text" name="Description" placeholder="Description del empleado"
                                       className="form-control"/>
                                <ErrorMessage name="Description" component="div" className="text-danger"/>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="btn btn-success">
                                Submit
                            </button>
                            <button type="reset" className="btn btn-outline-dark">
                                Reset
                            </button>
                            <button type="button" className="btn btn-outline-dark" onClick={() => navigate("/Page2")}>
                                Cancel
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={company} roundedCircle/>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={company2} roundedCircle/>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={company3} roundedCircle/>
                </Col>
            </Row>
        </>

    );

};