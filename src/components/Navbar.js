import { Link } from "react-router-dom";


const Navbar = () => {

    const icon=<span className="material-symbols-outlined">fitness_center</span>
    return (  
        <>
            <header>
                <div className="container">
                    <Link to="/">
                        <h1><strong>Wor{icon}kout </strong>{"  "}  <span>Buddy</span></h1>
                        
                    </Link>
                    <Link to="/">Sign in</Link>
                    
                </div>
            </header>
        </>
    );
}
 
export default Navbar;