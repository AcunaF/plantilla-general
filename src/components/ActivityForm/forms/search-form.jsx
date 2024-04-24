import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from "../buttons/button";

export const SearchForm = ({onReset}) => {

    const [formData, setFormData] = useState({
        categoria: '',
        area: '',
        subArea: '',
        nombre: '',
        talle: '',
        color: '',
        precio: '',
        descripcion: '',
        imagen: '',
        ingresar: '',
    });
    const [marcas, setMarcas] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [areas, setAreas] = useState([]);
    const [subAreas, setSubAreas] = useState([]);
    const [nombre, setNombre] = useState(null);
    const [talle, setTalle] = useState(null);
    const [color, setColor] = useState(null);
    const [precio, setPrecio] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [imagen, setImagen] = useState(null);
    const [ingresar, setIngresar] = useState(null);

    //reseteo del formulario
    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            marca: '',
            categoria: '',
            area: '',
            subArea: '',
            nombre: '',
            talle: '',
            color: '',
            precio: '',
            descripcion: '',
            imagen: '',
        });
        setCategoria([]);
        setAreas([]);
        setSubAreas([]);
        setNombre(null);
        setTalle(null);
        setColor(null);
        setPrecio(null);
        setDescripcion(null);
        setImagen(null);
        setIngresar(null);


    };
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        console.log('formData:', formData);
        e.preventDefault();
        try {
           alert('Se ha ingresado correctamente');
        } catch (error) {
            console.error('Error en la solicitud al servidor:', error);
        }

    };

    useEffect(() => {


    }, []);

    return (
        <div className=" col-md-12 ">
            <div className="row">
                <div className="container-fluid col-md-8 ">
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
                                <option key="Jeans" value="Jeans ">Jeans</option>
                                <option key="Remeras" value="Remeras">Remeras</option>
                                <option key="Camperas" value="Camperas">Camperas</option>
                                <option key="Zapatillas" value="Zapatillas">Zapatillas</option>

                            </select>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="subArea">
                                Subárea:
                                <select
                                    className="form-control"
                                    name="subArea"
                                    value={formData.subArea}
                                    onChange={handleChange}
                                >
                                    <option key=" " value=" ">Seleccione una subárea</option>
                                    <option key="Remeras " value=" ">Remeras</option>
                                    <option key="Jeans " value=" ">Jeans</option>
                                    <option key="Camperas " value=" ">Camperas</option>
                                    <option key="Zapatillas " value=" ">Zapatillas</option>
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
                                    className="form-control"
                                    name="Imagen"
                                    value={formData.imagen}
                                    onChange={handleChange}
                                    placeholder="solo formatos .jpg, .png, .jpeg"
                                />
                            </label>
                        </div>
                        <div>
                            <ButtonComponent
                                handleSubmit={handleSubmit}
                                handleReset={handleReset}
                            />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
