import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>JobARouter</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='careers'>Careers</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='help'>Help</NavLink>
                </nav>
            </header>

            <Breadcrumbs/>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default RootLayout;