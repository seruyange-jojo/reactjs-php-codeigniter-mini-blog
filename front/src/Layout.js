import { Link, Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
            <ul className="nav p-3 bg-light shadow-lg">
                <li className="nav-item">
                    <Link to='/' className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/new'>New</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    );
}

export default Layout;