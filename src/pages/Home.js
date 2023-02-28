import { useEffect} from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutsContext from '../hooks/useWorkoutsContext';


const Home = () => {

    

   const {workouts, dispatch, API_BASE_URL}=useWorkoutsContext();

    useEffect(() => {
      const fetchWorkout = async ()=>{
            const response= await fetch(`${API_BASE_URL}/workouts`);
            const json= await response.json();

            if (response.ok) {
                dispatch({type:"SET_WORKOUTS", payload: json})
            }
       }
      fetchWorkout();
    }, [dispatch, API_BASE_URL])

    return ( 
        <div className="home">
            <div className="workouts">
                    {workouts && workouts.map((workout)=>(

                        <WorkoutDetails key={workout._id.toString()} workout={workout}/>
                        
                    ))}
                    
            </div>

            <div>
                <WorkoutForm/>
            </div>
            
        </div>
     );
}
 
export default Home;