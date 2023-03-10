import useWorkoutsContext from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({workout}) => {

    const {dispatch, API_BASE_URL}= useWorkoutsContext();

    const handleDelete = async ()=>{
        const response= await fetch(`${API_BASE_URL}/workouts/${workout._id}`, {
            method:"DELETE" 
        })
        const json= await response.json();

        if (response.ok) {
            dispatch({type:"DELETE", payload:json})
        }
    }
    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps :</strong> {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
            <span onClick={handleDelete} className="material-symbols-rounded delete">delete</span>
        </div>
     );
}
 
export default WorkoutDetails;