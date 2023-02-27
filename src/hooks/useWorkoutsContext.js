import { workoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";


const useWorkoutsContext = () => {

    const context = useContext(workoutsContext);
        if (!context) {
            throw Error("useWorkoutContext must be used inside a workoutsContextProvider")
        }
    return context ;
}
 
export default useWorkoutsContext;