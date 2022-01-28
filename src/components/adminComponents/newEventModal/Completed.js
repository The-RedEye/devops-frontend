import React, {useState} from 'react';
import axios from 'axios'
import dataContext from '../../Context';
import { Children } from 'react/cjs/react.production.min';
import Connection from '../../../Connection'
import 'pretty-checkbox';


function Completed(props) {
    const [completed, setCompleted] = useState(false)
    const url = Connection
    
    const handleChange = () => {
        setCompleted(!completed);
        console.log(completed);
        console.log("im clicked omg");
        axios.put(`${url}${props.completed}`)
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
      };

    return (
        <>
        <div class="form-check">
  <input completed={!completed} onChange={handleChange} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Completed
  </label>
</div>
        </>
    );
}

export default Completed;