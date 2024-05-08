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

    return (
        <div className="row-cols">
            <div className="">
                {currentItems.map((item, index) => {
                    return (
                        <div className={` ${expandedCard === index ? 'card-expanded' : 'card'}`} key={index}>
                            <div className="">
                                <div className="">
                                    <img className="card-img-top"
                                         src={item.imagen}
                                         alt="Card image cap"
                                     />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">{item.categoria}</h6>
                                    <p className={`card-text ${expandedCard === index ? 'text-expanded' : 'text'}`}>{item.id_imagen}</p>
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
