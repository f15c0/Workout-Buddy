import { useState } from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext";


const WorkoutForm = () => {
    const {dispatch, API_BASE_URL}=useWorkoutsContext();

    const [inputs, setInputs]=useState(()=>({title:"", load:"", reps:""}));
    const [error, setError]=useState(null);
    const [emptyFields, setEmptyFields]= useState([])

    const handleInput=(e)=>{
        const {name, value}=e.target;
        setInputs({...inputs, [name]:value})
        
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
             //const {title, load, reps}=inputs;
        const workout = inputs;
           //console.log(JSON.stringify(workout))
        const response = await fetch(`${API_BASE_URL}/workouts`, {
            method:'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setError(null);
            setEmptyFields([])
            setInputs({...inputs, title:"",load:"",reps:""})
            console.log("New workout added", json);

            dispatch({type:"CREATE_WORKOUT", payload:json})
        }
    }
    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise title</label>
                <input 
                    name="title"
                    type="text"
                    onChange={(e)=>handleInput(e)}
                    value={inputs.title}
                    className={emptyFields.includes("title") ? "error": ""}
                />
                <label>Load (in kg)</label>
                <input 
                    name="load"
                    type="number"
                    onChange={(e)=>handleInput(e)}
                    value={inputs.load}
                    className={emptyFields.includes("load") ? "error": ""}
                />
                <label>Reps</label>
                <input 
                    name="reps"
                    type="number"
                    onChange={(e)=>handleInput(e)}
                    value={inputs.reps}
                    className={emptyFields.includes("reps") ? "error": ""}
                />
                <button type="submit">Submit</button>
                {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default WorkoutForm;