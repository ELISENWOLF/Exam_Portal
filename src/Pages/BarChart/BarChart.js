import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend 
)

const BarChart = () => {

    const location = useLocation()
    const value = location.state?.data
    

    const score = value.score
    const numberofQuestions = value.numberofQuestions
    const numberofAnsweredQuestions = value.numberofAnsweredQuestions
    const correctAnswers = value.correctAnswers
    const wrongAnswers = value.wrongAnswers
    const skip = value.skip

    const data =  {
        labels: ['NumofQuestions', 'NumofAnswered','Score','CorrectAnswer','WrongAnswer','Skip'],
        datasets: [
            {
                labels: numberofQuestions,
                data:[numberofQuestions,numberofAnsweredQuestions,score,correctAnswers,wrongAnswers,skip],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options = {
        scales: {
            y: {
                    max: 8,
                    min: 0
                }
        },
    }

    return(
        <div>
            <Bar
                data={data}
                options={options}
            >

            </Bar>
        </div>
    )
}

export default BarChart