import '../../text-styling/text-styling.scss'
import './GradesSection.scss'
import GradesData from '../../../data/grades.json'
import RadarChart from './RadarChart'
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';


function GradeSection(params) {


    const [chartData, setChartData] = useState({
        labels: ['Grade 5', 'Grade 4', 'Grade 3'],  // Labels are consistent across charts
        datasets: []  // Initialize datasets as empty
    });

    // On component mount, populate the chart data
    useEffect(() => {
        const datasets = GradesData.map((gradeObj) => ({
            label: `Grade distribution (${gradeObj.course_code})`,
            data: gradeObj.grade_distribution,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgb(255, 99, 132)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }));

        // Set the chart data with labels and datasets
        setChartData((prevData) => ({
            ...prevData,  // Keep the existing labels
            datasets: datasets  // Update datasets
        }));
    }, []);  // Empty dependency array ensures this runs once

    return (
        <motion.div 
            className='GradesSection'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3  // Delay to allow the container to animate first
            }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className='GradesHorizontalScroll'>
                <p className='section-header'>Grades</p>
                <div className='my_grades'>
                    {GradesData.map((grade, index) => (
                        <div className="grade_cell" id={index}>
                            <p id="title">{grade.course_code} - {grade.course}</p>
                            <RadarChart 
                                key={index} 
                                id={"chart-"+index} 
                                className="chart" 
                                chartData={{
                                    labels: chartData.labels,  // Pass consistent labels
                                    datasets: [chartData.datasets[index]]  // Pass the specific dataset for this grade
                                }} 
                                idx={index}>
                            </RadarChart>
                            <p id="subtitle_1">ECTS Credits {grade.credits} • Grade: {grade.grade}</p>
                        </div>
                    ))}
                </div>
            </div>

            <p className="disclaimer">
                ***
                <br></br>
                <br></br>
                Disclaimer: 
                <em> A grading table is shown for courses where the same grading has been used during at least two years </em>
                <a href="https://www.student.ladok.se/student/app/studentwebb/start" target="_blank">(Ladok)</a>.
                <br></br>
                <br></br>
                Interpreting this, the distrubution data (above) is tracked during a period of at least <span className="bold-text">two years.</span>
                <br></br>
                <br></br>
                ***
            </p>
        </motion.div>
    );
    
}

export default GradeSection;