import { Link } from "react-router-dom";
import MovieListHeading from "./MovieListHeading";

const Navbar = () => {

    return (
        <>
            <nav className="mb-3 navbar justify-content-center">
                <MovieListHeading className='' heading="AMDb" />
                <div className="d-flex col collaps navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="flex-row navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home/Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/top100">Top Movies</Link>
                        </li>
                    </ul>
                </div>
                         
            </nav>
        </>
    );
}
 
export default Navbar;