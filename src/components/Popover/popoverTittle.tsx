import { useNavigate } from 'react-router-dom';
import "./PopoverStyles.css"

export const PopoverTittle = () => {
    const categories = ["Vehiculos", "Inmuebles", "Supermercados", "Tecnologia", "Hogar y Muebles", "Electrodomesticos","Herramientas", "Deportes y fitness","accesorios para vehiculos","Juegos y juguetes", "bebes"   ]; // Tus categorías
    const navigate = useNavigate();

    return (
        <div className="popoverStyle">
            {categories.map((category, index) => (
                <button
                    key={index}
                    type="button"
                    className="btn btn-lg btn m-2"
                    onClick={() => navigate('/categorias', { state: { categoryName: category } })}
                    data-toggle="popover"
                    title="Popover title"
                    data-content="And here's some amazing content. It's very engaging. Right?"
                >
                    {category}
                </button>
            ))}
        </div>
    )
}