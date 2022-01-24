import React, {useContext} from 'react';
import { Bar } from 'react-chartjs-2'
import './barchart.css'
import dataContext from '../Context';

const BarChart = ( {data}) => {
    const datum = useContext(dataContext)
    console.log("dataset", data.datasets[0].data)
  
     return(
         <center>
        <table className='chartData'>
                <tr>
                    <th>Ratings for "{datum.currentEvent.name}"" </th>
                    <th> 1 </th>
                    <th> 2 </th>
                    <th> 3 </th>
                    <th> 4 </th>
                    <th> 5 </th>
                </tr>  
                <tr>
                    <tr>Relevancy</tr>
                    <th> {data.datasets[0].data[0]} </th> 
                    <th> {data.datasets[0].data[1]} </th>
                    <th> {data.datasets[0].data[2]} </th>
                    <th> {data.datasets[0].data[3]} </th>
                    <th> {data.datasets[0].data[4]} </th>
                </tr>
                <tr>
                    <tr>Completeness</tr>
                    <th> {data.datasets[1].data[0]} </th> 
                    <th> {data.datasets[1].data[1]} </th>
                    <th> {data.datasets[1].data[2]} </th>
                    <th> {data.datasets[1].data[3]} </th>
                    <th> {data.datasets[1].data[4]} </th>
                </tr>
                <tr>
                    <tr>Comprehension</tr>
                    <th> {data.datasets[2].data[0]} </th> 
                    <th> {data.datasets[2].data[1]} </th>
                    <th> {data.datasets[2].data[2]} </th>
                    <th> {data.datasets[2].data[3]} </th>
                    <th> {data.datasets[2].data[4]} </th>
                </tr>
                <tr>
                    <tr>Engagement</tr>
                    <th> {data.datasets[3].data[0]} </th> 
                    <th> {data.datasets[3].data[1]} </th>
                    <th> {data.datasets[3].data[2]} </th>
                    <th> {data.datasets[3].data[3]} </th>
                    <th> {data.datasets[3].data[4]} </th>
                </tr>
                
            </table>
            </center>
     );
    


};

export default BarChart;