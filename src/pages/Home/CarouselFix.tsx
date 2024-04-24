import "./CarouselFix.css"

interface Producto {
    link: string;
    imageUrl: string;
    title: string;
}

interface CarruselProductosProps {
    productos: Producto[];
}

export const CarruselProductos = ({ productos }: CarruselProductosProps) => {
    return (
        <div className="andes-carousel-snapped__wrapper">
            {productos.map((producto, index: number) => (
                <div key={index} className={`andes-carousel-snapped__slide carousel-list-element ${index === 0 ? 'andes-carousel-snapped__slide--active' : ''} ${index === 1 ? 'andes-carousel-snapped__slide--next' : ''}`} style={{ width: '146.833px', marginRight: '12px' }} data-slider={index}>
                    <div className="carousel__item">
                        <a className="splinter-link subcategory__link" href={producto.link} target="_self">
                            <div>
                                <div className={`carousel__item__${index}`}>
                                    <div className="carousel__item-img normal" style={{ padding: 0 }}>
                                        <img width="100%" decoding="async" src={producto.imageUrl} alt="" />
                                    </div>
                                    <h3 className="carousel__item-title  normal">{producto.title}</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};