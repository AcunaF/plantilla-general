import { SetStateAction, useEffect, useState} from "react";
import './CardsNew.css';

export const CardsNew = () => {
    const [galeriaCul, setGaleriaCul] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedCard, setExpandedCard] = useState(null);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch(`http://localhost:8080/api/galeriaCul`)
            .then((response) => response.json())
            .then((data) => setGaleriaCul(data.items))
            .catch(err => console.log(`Error`, err));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = galeriaCul.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

    const handleReadMore = (index: number | SetStateAction<null>) => {
        // @ts-ignore
        setExpandedCard(expandedCard === index ? null : index);
    }

    return (
        <div className="row-cols">
            <div className="card-deck row">
                {currentItems.map((item, index) => {
                    return (
                        <div className={`col-xs-12 col-sm-6 col-md-4 ${expandedCard === index ? 'card-expanded' : 'card'}`} key={index}>
                            <div className="card w-100">
                                <div className="view overlay">
                                    <img className="card-img-top"
                                         src={item.imagen}
                                         alt="Card image cap"
                                    style={{
                                        height: 'auto',
                                        width: 'auto%', display: 'block'}} />
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{item.id_imagen}</h4>
                                    <p className={`card-text ${expandedCard === index ? 'text-expanded' : 'text'}`}>{item.web_contenido_imagen}</p>
                                    <button
                                        type="button"
                                        className="btn btn-light-blue btn-md" onClick={() => handleReadMore(index)}>Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
                {Array(Math.ceil(galeriaCul.length / itemsPerPage)).fill(null).map((_, index) => (
                    <button
                        className={`btn ${currentPage === index + 1 ? 'btn-primary' : 'btn-light'}`}
                        key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
                ))}
        </div>
    )
}
