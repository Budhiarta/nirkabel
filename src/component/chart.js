import '../App.css';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    Legend,
    PointElement,
    Tooltip
);

function Chart() {
    const data = {
        labels: ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'],
        datasets: [
            {
                data: [25, 55, 27, 98, 29, 60, 32],
                backgroundColor:"aqua",
                borderColor: "black",  // Add this line to set the border color
                borderWidth: 1,        // Add this line to set the border width
                fill: true,
                tension: 0.5
            }
        ]
    };

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                // min: 3,
                // max: 6
            }
        }
    };

    return (
        <div style={
            {
                width: '500px',
                height: '300px'
            }
        }>
        <div  >
            <Line data={data} options={options} />
        </div>
        </div>
    );
}

export default Chart;