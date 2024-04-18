

export const Marvel = () => {

    const fetchMarvel = async (formDataDetail, index) => {
        try {
            const detailsUrl = `http://localhost:3001/api/marvel/${formDataDetail.id}`;

            } catch (error) {
                console.error('Error fetching details:', error.message);
            }

            if (!response.ok) {
                throw new Error(`Error al obtener detalles: ${response.status}`);
            }

            const data = await response.json();

            console.log('fetchDetail (Data) desde form-result:', data);

            setMostrarDetalles(true);
        } catch (error) {

            console.error('Error fetching details:', error.message);
        }
    };

    return (
<div>
    <p>hola</p>


</div>
    )
}