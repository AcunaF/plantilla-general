import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Chart from 'chart.js/auto';
import { SiAlienware } from "react-icons/si";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { BsFillEmojiTearFill } from "react-icons/bs";



export const HappinessHistory = () => {
    const navigate = useNavigate();
    const [happinessData, setHappinessData] = useState([]);
    const chartRef = useRef(null); // Referencia al objeto Chart

    useEffect(() => {
        const dummyData = [
            { date: '2022-01-01', happinessLevel: 'alto' },
            { date: '2022-01-02', happinessLevel: 'medio' },
            { date: '2022-01-03', happinessLevel: 'bajo' },
        ];

        // @ts-ignore
        setHappinessData(dummyData);

        // Crea el gráfico de barras cuando el componente se monta
        createBarChart(dummyData);

        return () => {
            // Destruye el gráfico cuando el componente se desmonta
            if (chartRef.current !== null) {
                // @ts-ignore
                chartRef.current.destroy();
            }
        };

    }, []);

    const handleBack = () => {
        navigate("/search");
    }

    const createBarChart = (data: any[]) => {
        const ctx = document.getElementById('happinessChart');
        const labels = data.map(entry => entry.date);
        const happinessLevels = data.map(entry => entry.happinessLevel);

        // Destruye el gráfico anterior si existe
        if (chartRef.current !== null) {
            // @ts-ignore
            chartRef.current.destroy();
        }

        // Crea el nuevo gráfico de barras
        // @ts-ignore
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Historial de Felicidad',
                    data: happinessLevels,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div>
            <h1>Historial de Felicidad</h1>
            <div className="happiness-icons">
                <div className="happiness-level">
                    <BsFillEmojiSunglassesFill/>

                    &nbsp;&nbsp;
                    <span>Alto</span>
                    <span className="happiness-counter">{happinessData.filter(entry => entry.happinessLevel === 'alto').length}</span>
                </div>
                <div className="happiness-level">
                    <SiAlienware />
                    &nbsp;&nbsp;
                    <span>Medio</span>
                    <span className="happiness-counter">{happinessData.filter(entry => entry.happinessLevel === 'medio').length}</span>
                </div>
                <div className="happiness-level">
                    <BsFillEmojiTearFill />&nbsp;&nbsp;
                    <span>Bajo</span>
                    <span className="happiness-counter">{happinessData.filter(entry => entry.happinessLevel === 'bajo').length}</span>
                </div>
            </div>
            <canvas id="happinessChart"></canvas>
            <button onClick={handleBack}>Volver</button>
        </div>
    );
};
