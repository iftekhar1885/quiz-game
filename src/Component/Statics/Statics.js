import { useContext } from "react";
import { QuizContext } from "../Layout/Main";
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


const Statistics = () => {
    const quizChart = useContext(QuizContext);
    
    const data = quizChart.data;
    return (
        <div className="flex justify-center w-3/4">
            <LineChart width={400} height={400} data={data}>
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;