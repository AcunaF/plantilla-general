import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from '../../../models/supa.connect.js';
import ButtonComponent from "../buttons/button";
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

export const SaleForm = ({ onReset }) => {
    const [formData, setFormData] = useState({
        marca: '',
        categoria: '',
        area: '',
        subarea: '',
        nombre: '',
        talle: '',
        color: '',
        precio: '',
        descripcion: '',
        imagen: null,
        oferta: false,
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChangeImage = (e: { target: { files?: any; name?: any; }; }) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setFormData({
            ...formData,
            [name]: file,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('Sale_Products')
                .insert([formData]);

            if (error) {
                console.error('Error insertando producto:', error);
                return;
            }

            alert('Se ha ingresado correctamente');
        } catch (error) {
            console.error('Error en la solicitud al servidor:', error);
        }
    };

    const handleReset = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setFormData({
            marca: '',
            categoria: '',
            area: '',
            subarea: '',
            nombre: '',
            talle: '',
            color: '',
            precio: '',
            descripcion: '',
            imagen: null,
            oferta: false,
        });
    };

    return (
        <div className=" container ">
            <div className="row">
                <div className="container-fluid col-md-12 ">
                    <form
                        className="row"
                        onSubmit={handleSubmit}>
                        <div className="row row mb-3">
                            Marca
                            <input
                                className="form-control"
                                name="marca"
                                value={formData.marca}
                                onChange={handleChange}
                                onReset={handleReset}
                            >
                            </input>
                        </div>
                        <div className="row mb-3">
                            Categoria
                            <select
                                className="form-control"
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleChange}
                                onReset={handleReset}
                            >
                                <option key=" " value=""> ingresa la categoria del producto</option>
                                <option value="Vehiculos">Electronics</option>
                                <option value="Inmuebles">Books</option>
                                <option value="SUpermercado">Clothing</option>
                                <option value="Tecnologia">Tecnologia</option>
                                <option value="HogaryMuebles">Hogar y muebles</option>
                                <option value="Electrodomesticos">Electrodomesticos</option>
                                <option value="Herramientas">Herramientas</option>
                                <option value="Construccion">Construccion</option>
                                <option value="DeportesyFitness">Deportes y Fitness</option>
                                <option value="AccespriosVehiculos">Accesorios para vehiculos</option>
                                <option value="Juguetes">Juguetes</option>
                                <option value="Belleza">Belleza</option>
                                <option value="Indumentaria">Indumentaria</option>
                                <option value="Calzado">Calzado</option>
                                <option value="Accesorios">Accesorios</option>
                            </select>
                        </div>
                        <div className="row mb-3">
                            Area
                            <select
                                className="form-control"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                onReset={handleReset}
                            >
                                <option key=" " value=" "> Elige el tipo de area</option>
                                <option key="Ropa" value="Ropa">Accesorios</option>
                                <option key="Jeans" value="Jeans ">Jeans</option>
                                <option key="Remeras" value="Remeras">Remeras</option>
                                <option key="Camperas" value="Camperas">Camperas</option>
                                <option key="Zapatillas" value="Zapatillas">Zapatillas</option>
                                <option key="Zapatos" value="Zapatos">Otros/as</option>

                            </select>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="subarea">
                                Subárea:
                                <select
                                    className="form-control"
                                    name="subarea"
                                    value={formData.subarea}
                                    onChange={handleChange}
                                >
                                    <option key=" " value=" ">Seleccione una subárea</option>
                                    <option key="Remeras " value=" ">Remeras</option>
                                    <option key="Jeans " value=" ">Jeans</option>
                                    <option key="Camperas " value=" ">Camperas</option>
                                    <option key="Zapatillas " value=" ">Zapatillas</option>
                                    <option key="Otros " value=" ">Otros</option>
                                </select>
                            </label>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Nombre de tu producto
                                <input
                                    className="form-control"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="Talles">
                                Talles
                                <select
                                    className="form-control"
                                    name="talle"
                                    value={formData.talle}
                                    onChange={handleChange}
                                >
                                    <option key=" " value=" ">Talles </option>
                                    <option key="Unico " value=" ">Unico</option>
                                    <option key="S " value=" ">S</option>
                                    <option key="M " value=" ">M</option>
                                    <option key="L " value=" ">L</option>
                                </select>
                            </label>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="color">
                                Color
                                <select
                                    className="form-control"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                >
                                    <option key=" " value=" ">Agregar los colores</option>
                                    <option key="Rojo " value=" ">Rojo</option>
                                    <option key="Azul " value=" ">Azul</option>
                                    <option key="Verde " value=" ">Verde</option>
                                    <option key="Amarillo " value=" ">Amarillo</option>
                                </select>
                            </label>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="precio">
                                Precio
                                <select
                                    className="form-control"
                                    name="precio"
                                    value={formData.precio}
                                    onChange={handleChange}
                                >
                                    <option key=" " value=" "> Seleccione un rango de precios</option>
                                    <option key="mil " value=" "> $1000 - $2000</option>
                                    <option key="dos " value=" "> $2000 - $3000</option>
                                    <option key="tres " value=" "> $3000 - $4000</option>
                                </select>
                            </label>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Descripcion
                                <input
                                    className="form-control"
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                    placeholder="Ingresa una breve descripcion del producto"
                                />
                            </label>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Subi imagen
                                <input
                                    type="file"
                                    className="form-control"
                                    name="imagen"
                                    onChange={handleChangeImage}
                                />
                            </label>
                        </div>

                        <div>
                            <ButtonComponent
                                handleSubmit={handleSubmit}
                                handleReset={handleReset}
                            />
                            <div className="col-md-4 mb-3">
                                <label>Oferta
                                    <button
                                        type='button'
                                        className="form-control"
                                        name="oferta"
                                        onClick={() => setFormData({...formData, oferta: !formData.oferta})}
                                    >
                                        {formData.oferta ? <FaCheckSquare/> : <FaSquare/>}
                                    </button>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
