import React, {useState, useContext, useEffect} from 'react';
import Connection from '../../Connection'
import dataContext from '../Context';
import BarChart from './BarChart';
import NoChart from './NoChart';


const FeedbackCharts = () => {
    const datum = useContext(dataContext)
    const url = Connection
    let [data, setData] = useState({})
    let eventClicked = false
   

    function changeEvent(event){
        datum.setCurrentEvent(event)
        let filteredFeedback = filterFeedback(event._id)
        setData(buildCharts(filteredFeedback))
        console.log("data for charts:", data, eventClicked)
    }

    function buildCharts(feedback){
        let data = {            
            labels: ['1', '2', '3', '4', '5'],
            datasets: [
                {
                label: "Relevancy",
                data:[]
                },
                {
                label: "Completeness",
                data:[]
                },
                {
                label: "Comprehension",
                data:[]
                },
                {
                label: "Engagement",
                data:[]
                },

            ]
        }
        
        let relevancyC1 = 0
        let relevancyC2 = 0
        let relevancyC3 = 0
        let relevancyC4 = 0
        let relevancyC5 = 0
        let completeness=[0,0,0,0,0]
        let comprehension=[0,0,0,0,0]
        let engagement  =[0,0,0,0,0]

        feedback.map( (feedback) => {
            if (feedback.relevancy === 1)
                relevancyC1 += 1
            if (feedback.relevancy === 2)
                relevancyC2 += 1
            if (feedback.relevancy === 3)
                relevancyC3 += 1
            if (feedback.relevancy === 4)
                relevancyC4 += 1
            if (feedback.relevancy === 5)
                relevancyC5 += 1

            if (feedback.completeness === 1)
                completeness[0] += 1
            if (feedback.completeness === 2)
                completeness[1]  += 1
            if (feedback.completeness === 3)
                completeness[2]  += 1
            if (feedback.completeness === 4)
                completeness[3]  += 1
            if (feedback.completeness === 5)
                completeness[4]  += 1

            if (feedback.comprehension === 1)
                completeness[0] += 1
            if (feedback.comprehension === 2)
                completeness[1]  += 1
            if (feedback.comprehension === 3)
                completeness[2]  += 1
            if (feedback.comprehension === 4)
                completeness[3]  += 1
            if (feedback.comprehension === 5)
                completeness[4]  += 1
            
            if (feedback.engagement === 1)
                completeness[0] += 1
            if (feedback.engagement === 2)
                completeness[1]  += 1
            if (feedback.engagement === 3)
                completeness[2]  += 1
            if (feedback.engagement === 4)
                completeness[3]  += 1
            if (feedback.engagement === 5)
                completeness[4]  += 1
        })

        data.datasets[0].data.push(relevancyC1)
        data.datasets[0].data.push(relevancyC2)
        data.datasets[0].data.push(relevancyC3)
        data.datasets[0].data.push(relevancyC4)
        data.datasets[0].data.push(relevancyC5)

        for(let i = 0; i<5; i++)
            data.datasets[1].data.push(completeness[i])
        
        for(let i = 0; i<5; i++)
            data.datasets[2].data.push(comprehension[i])
        
         for(let i = 0; i<5; i++)
            data.datasets[3].data.push(engagement[i])
        
        eventClicked= true
        return data
    }
    //fetches events
    useEffect( () => {
        fetch(`${url}event`)
            .then((res) => res.json())
            .then((res) => {datum.setEvents(res) })
            .then((res) => {
                console.log("FeedbackForm Event Data check:", datum.events)
                console.log("currEvent:", datum.currentEvent)
                
            })
            .catch(console.err);

    },[])

    useEffect( () => {
        fetch(`${url}feedback`)
            .then((res) => res.json())
            .then((res) => {datum.setAllFeedback(res) })
    }, [])

    function filterFeedback(eventID){
        
        let filteredFeedback = datum.allFeedback.filter( (feedback) => feedback.eventID === eventID)
        
        console.log("all feedback", datum.allFeedback,
            "filtered feedback:", filteredFeedback,)
        return filteredFeedback
    }


    return (
        <center>

            
            <div className="content">
                <h1> ------ </h1>
                <h1> ------ </h1>
                <h2>Please choose Event to give feedback</h2>
                
                {console.log("events:", datum.events)}

                {datum.events.map((event) => {
                   return <p><button type="button" value={event._id}
                    onClick={() => changeEvent(event)}>
                    {event.name}
                    </button></p>}
                    )}
            </div>
                    
            {datum.currentEvent === null ?
                ( <NoChart />) :
                ( <BarChart data={data}/>)}

            
            
        </center>
    );
};

export default FeedbackCharts;